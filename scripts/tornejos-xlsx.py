#!/usr/bin/env python3
"""Converteix l'Excel del calendari de tornejos a src/data/tornejos.json.
Ús: python3 scripts/tornejos-xlsx.py ruta/calendari-tornejos-xarxaplay.xlsx
"""
import sys, json, datetime as dt, pathlib, re
from openpyxl import load_workbook

OUT = pathlib.Path(__file__).resolve().parent.parent / "src/data/tornejos.json"
HEAD = ["Publicar","Data inici","Data fi","Hora inici","Hora fi","Esport","Tipus","Títol (CA)","Títol (ES)",
        "Descripció (CA)","Descripció (ES)","Nivell","Categoria","Preu (€)","Places","Estat","Enllaç inscripció","Notes internes"]
SPORT = {"pàdel":"padel","padel":"padel","pickleball":"pickleball","tennis":"tennis","tenis":"tennis"}
TYPE = {"torneig":"torneig","americana":"americana","lliga":"lliga","clínic":"clinic","clinic":"clinic","exhibició":"exhibicio","altres":"altres"}
LEVEL = {"tots els nivells":"tots","iniciació":"iniciacio","intermedi":"intermedi","avançat":"avancat"}
CAT = {"oberta":"oberta","masculina":"masculina","femenina":"femenina","mixta":"mixta","infantil":"infantil"}
STATE = {"inscripcions obertes":"obertes","últimes places":"ultimes","complet":"complet","ajornat":"ajornat","cancel·lat":"cancellat","cancel.lat":"cancellat","cancelat":"cancellat"}

def s(v): return "" if v is None else str(v).strip()
def date(v, row, col):
    if v in (None, ""): return None
    if isinstance(v, dt.datetime): return v.date().isoformat()
    if isinstance(v, dt.date): return v.isoformat()
    m = re.match(r"^(\d{1,2})[/.-](\d{1,2})[/.-](\d{4})$", s(v))
    if m: return dt.date(int(m[3]), int(m[2]), int(m[1])).isoformat()
    raise ValueError(f"Fila {row}: «{col}» no és una data vàlida ({v!r})")
def time(v, row, col):
    if v in (None, ""): return None
    if isinstance(v, dt.datetime): v = v.time()
    if isinstance(v, dt.time): return f"{v.hour:02d}:{v.minute:02d}"
    if isinstance(v, (int, float)) and 0 <= v < 1:
        m = round(v * 1440); return f"{m//60:02d}:{m%60:02d}"
    m = re.match(r"^(\d{1,2})[:.h](\d{2})$", s(v))
    if m: return f"{int(m[1]):02d}:{m[2]}"
    raise ValueError(f"Fila {row}: «{col}» no és una hora vàlida ({v!r})")
def pick(map_, v, row, col, default=None):
    k = s(v).lower()
    if not k: return default
    if k not in map_: raise ValueError(f"Fila {row}: valor «{v}» no reconegut a «{col}»")
    return map_[k]
def num(v, row, col):
    if v in (None, ""): return None
    try: return float(str(v).replace("€","").replace(",",".").strip())
    except ValueError: raise ValueError(f"Fila {row}: «{col}» ha de ser un número ({v!r})")

def main(path):
    ws = load_workbook(path, data_only=True)["Calendari"]
    head = [s(c.value) for c in ws[1]][:len(HEAD)]
    if head != HEAD: raise SystemExit(f"Les columnes de l'Excel han canviat:\n{head}\nesperat:\n{HEAD}")
    events, errors, skipped = [], [], 0
    for r, row in enumerate(ws.iter_rows(min_row=2, max_col=len(HEAD), values_only=True), 2):
        d = dict(zip(HEAD, row))
        if all(v in (None, "") for k, v in d.items() if k != "Notes internes"): continue
        if s(d["Publicar"]).lower() not in ("sí", "si", "s", "yes"):
            skipped += 1; continue
        try:
            title_ca = s(d["Títol (CA)"])
            if not title_ca: raise ValueError(f"Fila {r}: falta el Títol (CA)")
            start = date(d["Data inici"], r, "Data inici")
            if not start: raise ValueError(f"Fila {r}: falta la Data inici")
            end = date(d["Data fi"], r, "Data fi")
            if end and end < start: raise ValueError(f"Fila {r}: la Data fi és anterior a la Data inici")
            sport = pick(SPORT, d["Esport"], r, "Esport")
            if not sport: raise ValueError(f"Fila {r}: falta l'Esport")
            url = s(d["Enllaç inscripció"])
            if url and not url.startswith(("https://", "http://")): raise ValueError(f"Fila {r}: l'enllaç ha de començar per https://")
            price = num(d["Preu (€)"], r, "Preu (€)"); places = num(d["Places"], r, "Places")
            events.append({
                "id": f"{start}-{re.sub(r'[^a-z0-9]+','-',title_ca.lower()).strip('-')[:40]}",
                "start": start, "end": end or start,
                "timeStart": time(d["Hora inici"], r, "Hora inici"), "timeEnd": time(d["Hora fi"], r, "Hora fi"),
                "sport": sport, "type": pick(TYPE, d["Tipus"], r, "Tipus", "altres"),
                "title": {"ca": title_ca, "es": s(d["Títol (ES)"]) or title_ca},
                "desc": {"ca": s(d["Descripció (CA)"]), "es": s(d["Descripció (ES)"]) or s(d["Descripció (CA)"])},
                "level": pick(LEVEL, d["Nivell"], r, "Nivell"), "category": pick(CAT, d["Categoria"], r, "Categoria"),
                "price": price, "places": int(places) if places is not None else None,
                "state": pick(STATE, d["Estat"], r, "Estat", "obertes"), "url": url or None,
            })
        except ValueError as e: errors.append(str(e))
    if errors: raise SystemExit("No s'ha actualitzat res. Corregeix l'Excel:\n- " + "\n- ".join(errors))
    events.sort(key=lambda e: (e["start"], e["timeStart"] or ""))
    OUT.write_text(json.dumps(events, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
    print(f"{len(events)} esdeveniments publicats, {skipped} esborranys ignorats -> {OUT}")

if __name__ == "__main__": main(sys.argv[1])
