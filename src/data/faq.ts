// Preguntes freqüents. Es mostren a la pàgina i es publiquen com a FAQPage (schema.org).
// Respostes directes i amb dades concretes: és el que reutilitzen Google i els cercadors amb IA.
import type { Lang } from "./routes";

export type Faq = { q: string; a: string };

const home: Record<Lang, Faq[]> = {
  ca: [
    { q: "On puc jugar a pàdel a Sant Boi de Llobregat?", a: "A XarxaPlay, dins el Complex Esportiu Baldiri Aleu (C/ Baldiri Aleu 1-7, 08830 Sant Boi de Llobregat). Tenim 11 pistes de pàdel obertes cada dia, festius inclosos." },
    { q: "Com reservo una pista?", a: "Online a Playtomic, al club «Complex Esportiu Baldiri Aleu». Hi pots reservar pàdel, pickleball i tennis. També pots trucar al +34 611 75 52 75." },
    { q: "Quins horaris teniu?", a: "De dilluns a divendres de 7:30 a 22:30, dissabtes de 8:00 a 20:00 i diumenges i festius de 8:00 a 14:00 (a l'estiu, fins a les 18:00). Les vigílies de festiu (24 i 31 de desembre, 5 de gener i 23 de juny) tanquem a les 18:00. Tancat: 1 i 6 de gener, Divendres Sant, Dilluns de Pasqua, 20 de maig i 25 i 26 de desembre. A Playtomic veus en temps real les hores lliures de cada pista." },
    { q: "Hi ha pistes de pickleball al Baix Llobregat?", a: "Sí. A XarxaPlay tenim 4 pistes de pickleball a Sant Boi de Llobregat, per a tots els nivells i edats." },
    { q: "Feu classes de pàdel per a nens i adults?", a: "Sí. L'escola de pàdel té grups per a nens i adults, des d'iniciació fins a competició, i la primera classe de prova és gratuïta." },
    { q: "Feu tornejos i americanes?", a: "Sí. Organitzem americanes de pàdel cada setmana i tornejos de pàdel, pickleball i tennis durant l'any. Les dates es publiquen a Instagram (@xarxaplay)." },
    { q: "Puc gravar el meu partit?", a: "Sí, gratis a les 11 pistes de pàdel: escaneges el codi QR de la pista i reps el partit complet per email (amb Tape Sports)." },
    { q: "És fàcil aparcar?", a: "Sí. Hi ha centenars de places gratuïtes a menys de 2 minuts caminant i un pàrquing privat a l'entrada." },
    { q: "Quins altres serveis hi ha?", a: "Vestidors amb armariets, el bar restaurant Can Baldiri amb terrassa al costat de les pistes, botiga de material i, al Complex Esportiu Baldiri Aleu, fitness, piscines climatitzades i spa." },
    { q: "Des d'on es pot venir fàcilment?", a: "Som a Sant Boi de Llobregat, a uns 15 minuts de Barcelona i a prop de Cornellà, Sant Joan Despí, Viladecans, Gavà, el Prat, Sant Vicenç dels Horts i Santa Coloma de Cervelló." },
  ],
  es: [
    { q: "¿Dónde puedo jugar a pádel en Sant Boi de Llobregat?", a: "En XarxaPlay, dentro del Complex Esportiu Baldiri Aleu (C/ Baldiri Aleu 1-7, 08830 Sant Boi de Llobregat). Tenemos 11 pistas de pádel abiertas todos los días, festivos incluidos." },
    { q: "¿Cómo reservo una pista?", a: "Online en Playtomic, en el club «Complex Esportiu Baldiri Aleu». Puedes reservar pádel, pickleball y tenis. También puedes llamar al +34 611 75 52 75." },
    { q: "¿Qué horarios tenéis?", a: "De lunes a viernes de 7:30 a 22:30, sábados de 8:00 a 20:00 y domingos y festivos de 8:00 a 14:00 (en verano, hasta las 18:00). Las vísperas de festivo (24 y 31 de diciembre, 5 de enero y 23 de junio) cerramos a las 18:00. Cerrado: 1 y 6 de enero, Viernes Santo, Lunes de Pascua, 20 de mayo y 25 y 26 de diciembre. En Playtomic ves en tiempo real las horas libres de cada pista." },
    { q: "¿Hay pistas de pickleball en el Baix Llobregat?", a: "Sí. En XarxaPlay tenemos 4 pistas de pickleball en Sant Boi de Llobregat, para todos los niveles y edades." },
    { q: "¿Hacéis clases de pádel para niños y adultos?", a: "Sí. La escuela de pádel tiene grupos para niños y adultos, desde iniciación hasta competición, y la primera clase de prueba es gratuita." },
    { q: "¿Hacéis torneos y americanas?", a: "Sí. Organizamos americanas de pádel cada semana y torneos de pádel, pickleball y tenis durante el año. Las fechas se publican en Instagram (@xarxaplay)." },
    { q: "¿Puedo grabar mi partido?", a: "Sí, gratis en las 11 pistas de pádel: escaneas el código QR de la pista y recibes el partido completo por email (con Tape Sports)." },
    { q: "¿Es fácil aparcar?", a: "Sí. Hay cientos de plazas gratuitas a menos de 2 minutos andando y un parking privado en la entrada." },
    { q: "¿Qué otros servicios hay?", a: "Vestuarios con taquillas, el bar restaurante Can Baldiri con terraza junto a las pistas, tienda de material y, en el Complex Esportiu Baldiri Aleu, fitness, piscinas climatizadas y spa." },
    { q: "¿Desde dónde se puede venir fácilmente?", a: "Estamos en Sant Boi de Llobregat, a unos 15 minutos de Barcelona y cerca de Cornellà, Sant Joan Despí, Viladecans, Gavà, El Prat, Sant Vicenç dels Horts y Santa Coloma de Cervelló." },
  ],
};

export const homeFaq = (lang: Lang) => home[lang];
