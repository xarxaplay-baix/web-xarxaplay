// Textos legals (avís legal, privacitat i galetes) en català i castellà.
// IMPORTANT: plantilla preparada a partir de les dades del club; ha de revisar-la qui porti la protecció de dades de l'entitat.
import { site } from "../site.config";
import type { Lang } from "./routes";

const o = site.owner;
const addr = `${site.address.street}, ${site.address.postalCode} ${site.address.city} (${site.address.region})`;
const UPDATED = { ca: "17 de novembre de 2026", es: "17 de noviembre de 2026" };

export interface LegalDoc { title: string; description: string; crumb: string; html: string }

export const legal: Record<"avis" | "privacitat" | "galetes", Record<Lang, LegalDoc>> = {
  avis: {
    ca: {
      title: "Avís legal | XarxaPlay",
      description: "Avís legal del lloc web de XarxaPlay: dades del titular, condicions d'ús, propietat intel·lectual i legislació aplicable.",
      crumb: "Avís legal",
      html: `
<h2>1. Dades del titular</h2>
<p>En compliment de l'article 10 de la Llei 34/2002, de serveis de la societat de la informació i de comerç electrònic (LSSI-CE), s'informa que aquest lloc web (xarxaplay.es) és titularitat de:</p>
<ul>
<li><strong>Titular:</strong> ${o.name}, entitat sense ànim de lucre que gestiona el Complex Esportiu Baldiri Aleu i XarxaPlay.</li>
<li><strong>CIF:</strong> ${o.cif}</li>
<li><strong>Domicili:</strong> ${addr}</li>
<li><strong>Inscripció:</strong> ${o.registry}.</li>
<li><strong>Contacte:</strong> ${site.email} · ${o.privacyEmail} · +34 936 30 28 38 · +34 611 75 52 75</li>
</ul>
<h2>2. Objecte i condicions d'ús</h2>
<p>Aquest web informa sobre les instal·lacions i els serveis de XarxaPlay (pistes de pàdel, pickleball i tennis, escola, americanes i tornejos). L'accés és gratuït i implica l'acceptació d'aquest avís legal. L'usuari es compromet a fer-ne un ús lícit i a no fer servir el web per a activitats contràries a la llei, la moral o l'ordre públic.</p>
<h2>3. Reserves i serveis de tercers</h2>
<p>Les reserves de pistes es fan a la plataforma Playtomic, que té les seves pròpies condicions i política de privacitat. El web també enllaça amb xarxes socials i Google Maps. El titular no es fa responsable del contingut ni de les condicions d'aquests llocs externs.</p>
<h2>4. Propietat intel·lectual i industrial</h2>
<p>Els textos, fotografies, logotips, dissenys i codi d'aquest web són propietat del titular o s'utilitzen amb autorització. No se'n permet la reproducció, distribució o transformació sense autorització expressa, excepte per a ús personal i privat.</p>
<h2>5. Responsabilitat</h2>
<p>El titular procura que la informació sigui correcta i actualitzada (horaris, serveis, activitats), però pot contenir errors o canviar sense avís previ. La informació vinculant sobre preus i disponibilitat és la que figura a Playtomic o a la recepció del Complex. El titular no respon dels danys derivats de l'ús del web ni d'interrupcions tècniques alienes.</p>
<h2>6. Protecció de dades i galetes</h2>
<p>El tractament de dades personals es regeix per la <a href="/privacitat/">política de privacitat</a> i l'ús de galetes per la <a href="/galetes/">política de galetes</a>.</p>
<h2>7. Legislació aplicable</h2>
<p>Aquest avís legal es regeix per la legislació espanyola. Per a qualsevol controvèrsia, les parts se sotmeten als jutjats i tribunals que corresponguin segons la normativa aplicable.</p>
<p class="upd">Darrera actualització: ${UPDATED.ca}.</p>`,
    },
    es: {
      title: "Aviso legal | XarxaPlay",
      description: "Aviso legal de la web de XarxaPlay: datos del titular, condiciones de uso, propiedad intelectual y legislación aplicable.",
      crumb: "Aviso legal",
      html: `
<h2>1. Datos del titular</h2>
<p>En cumplimiento del artículo 10 de la Ley 34/2002, de servicios de la sociedad de la información y de comercio electrónico (LSSI-CE), se informa de que este sitio web (xarxaplay.es) es titularidad de:</p>
<ul>
<li><strong>Titular:</strong> ${o.name}, entidad sin ánimo de lucro que gestiona el Complex Esportiu Baldiri Aleu y XarxaPlay.</li>
<li><strong>CIF:</strong> ${o.cif}</li>
<li><strong>Domicilio:</strong> ${addr}</li>
<li><strong>Inscripción:</strong> Registro de entidades jurídicas de la Generalitat de Catalunya, n.º 78877.</li>
<li><strong>Contacto:</strong> ${site.email} · ${o.privacyEmail} · +34 936 30 28 38 · +34 611 75 52 75</li>
</ul>
<h2>2. Objeto y condiciones de uso</h2>
<p>Esta web informa sobre las instalaciones y servicios de XarxaPlay (pistas de pádel, pickleball y tenis, escuela, americanas y torneos). El acceso es gratuito e implica la aceptación de este aviso legal. El usuario se compromete a hacer un uso lícito de la web y a no utilizarla para actividades contrarias a la ley, la moral o el orden público.</p>
<h2>3. Reservas y servicios de terceros</h2>
<p>Las reservas de pistas se hacen en la plataforma Playtomic, que tiene sus propias condiciones y política de privacidad. La web también enlaza con redes sociales y Google Maps. El titular no se hace responsable del contenido ni de las condiciones de estos sitios externos.</p>
<h2>4. Propiedad intelectual e industrial</h2>
<p>Los textos, fotografías, logotipos, diseños y código de esta web son propiedad del titular o se utilizan con autorización. No se permite su reproducción, distribución o transformación sin autorización expresa, salvo para uso personal y privado.</p>
<h2>5. Responsabilidad</h2>
<p>El titular procura que la información sea correcta y esté actualizada (horarios, servicios, actividades), pero puede contener errores o cambiar sin previo aviso. La información vinculante sobre precios y disponibilidad es la que figura en Playtomic o en la recepción del Complex. El titular no responde de los daños derivados del uso de la web ni de interrupciones técnicas ajenas.</p>
<h2>6. Protección de datos y cookies</h2>
<p>El tratamiento de datos personales se rige por la <a href="/es/privacidad/">política de privacidad</a> y el uso de cookies por la <a href="/es/cookies/">política de cookies</a>.</p>
<h2>7. Legislación aplicable</h2>
<p>Este aviso legal se rige por la legislación española. Para cualquier controversia, las partes se someten a los juzgados y tribunales que correspondan según la normativa aplicable.</p>
<p class="upd">Última actualización: ${UPDATED.es}.</p>`,
    },
  },
  privacitat: {
    ca: {
      title: "Política de privacitat | XarxaPlay",
      description: "Com tracta XarxaPlay les dades personals: responsable, finalitats, base legal, conservació, destinataris i drets de les persones usuàries.",
      crumb: "Privacitat",
      html: `
<p>Aquesta política explica com es tracten les dades personals que ens facilites a través d'aquest web, d'acord amb el Reglament (UE) 2016/679 (RGPD) i la Llei orgànica 3/2018 (LOPDGDD).</p>
<h2>1. Responsable del tractament</h2>
<ul>
<li>${o.name} · CIF ${o.cif}</li>
<li>${addr}</li>
<li>Correu per a qüestions de protecció de dades: <a href="mailto:${o.privacyEmail}">${o.privacyEmail}</a></li>
</ul>
<h2>2. Quines dades tractem i per a què</h2>
<ul>
<li><strong>Sol·licitud de classe de prova o informació</strong> (formulari de l'escola, telèfon, WhatsApp o correu): nom, telèfon, per a qui és la classe, nivell i horari preferit. Les fem servir per contactar-te, organitzar la classe de prova i respondre la teva consulta.</li>
<li><strong>Analítica del web</strong>: si acceptes les galetes d'analítica, Google Analytics recull dades d'ús de manera agregada (pàgines visitades, dispositiu, procedència aproximada) per millorar el web. Vegeu la <a href="/galetes/">política de galetes</a>.</li>
</ul>
<p>Les reserves de pistes es fan a Playtomic, que actua com a responsable independent de les dades que hi introdueixis.</p>
<h2>3. Base legal</h2>
<ul>
<li>Sol·licituds i consultes: el teu consentiment i l'aplicació de mesures precontractuals a petició teva (art. 6.1.a i 6.1.b RGPD).</li>
<li>Analítica: el teu consentiment, que pots retirar en qualsevol moment des de «Configuració de galetes» al peu del web (art. 6.1.a RGPD).</li>
</ul>
<h2>4. Conservació</h2>
<p>Les dades de les sol·licituds es conserven el temps necessari per atendre-les i, com a màxim, un any si no esdevens usuari dels serveis; si t'hi inscrius, es conservaran mentre duri la relació i els terminis legals que corresponguin. Les dades d'analítica es conserven el període configurat a Google Analytics (14 mesos).</p>
<h2>5. Destinataris</h2>
<p>No cedim les teves dades a tercers, excepte obligació legal. Hi poden accedir proveïdors que ens presten serveis tecnològics com a encarregats del tractament (allotjament web a Microsoft Azure, servei d'enviament de formularis i Google Analytics, de Google Ireland Ltd.). Alguns d'aquests proveïdors poden fer transferències internacionals de dades emparades en les garanties del RGPD (Marc de privacitat de dades UE-EUA o clàusules contractuals tipus).</p>
<h2>6. Els teus drets</h2>
<p>Pots exercir els drets d'accés, rectificació, supressió, oposició, limitació del tractament i portabilitat, i retirar el consentiment, escrivint a <a href="mailto:${o.privacyEmail}">${o.privacyEmail}</a> o per correu postal al domicili indicat, adjuntant una còpia d'un document que t'identifiqui. Si consideres que no s'han atès correctament els teus drets, pots presentar una reclamació a l'Autoritat Catalana de Protecció de Dades (apdcat.gencat.cat) o a l'Agència Espanyola de Protecció de Dades (aepd.es).</p>
<h2>7. Menors</h2>
<p>Les sol·licituds per a menors de 14 anys les ha de fer el pare, la mare o el tutor legal.</p>
<h2>8. Seguretat</h2>
<p>Apliquem mesures tècniques i organitzatives adequades per protegir les dades personals contra la pèrdua, l'ús indegut o l'accés no autoritzat.</p>
<p class="upd">Darrera actualització: ${UPDATED.ca}.</p>`,
    },
    es: {
      title: "Política de privacidad | XarxaPlay",
      description: "Cómo trata XarxaPlay los datos personales: responsable, finalidades, base legal, conservación, destinatarios y derechos de las personas usuarias.",
      crumb: "Privacidad",
      html: `
<p>Esta política explica cómo se tratan los datos personales que nos facilitas a través de esta web, de acuerdo con el Reglamento (UE) 2016/679 (RGPD) y la Ley Orgánica 3/2018 (LOPDGDD).</p>
<h2>1. Responsable del tratamiento</h2>
<ul>
<li>${o.name} · CIF ${o.cif}</li>
<li>${addr}</li>
<li>Correo para cuestiones de protección de datos: <a href="mailto:${o.privacyEmail}">${o.privacyEmail}</a></li>
</ul>
<h2>2. Qué datos tratamos y para qué</h2>
<ul>
<li><strong>Solicitud de clase de prueba o información</strong> (formulario de la escuela, teléfono, WhatsApp o correo): nombre, teléfono, para quién es la clase, nivel y horario preferido. Los usamos para contactarte, organizar la clase de prueba y responder a tu consulta.</li>
<li><strong>Analítica de la web</strong>: si aceptas las cookies de analítica, Google Analytics recoge datos de uso de forma agregada (páginas visitadas, dispositivo, procedencia aproximada) para mejorar la web. Consulta la <a href="/es/cookies/">política de cookies</a>.</li>
</ul>
<p>Las reservas de pistas se hacen en Playtomic, que actúa como responsable independiente de los datos que introduzcas allí.</p>
<h2>3. Base legal</h2>
<ul>
<li>Solicitudes y consultas: tu consentimiento y la aplicación de medidas precontractuales a petición tuya (art. 6.1.a y 6.1.b RGPD).</li>
<li>Analítica: tu consentimiento, que puedes retirar en cualquier momento desde «Configuración de cookies» en el pie de la web (art. 6.1.a RGPD).</li>
</ul>
<h2>4. Conservación</h2>
<p>Los datos de las solicitudes se conservan el tiempo necesario para atenderlas y, como máximo, un año si no te haces usuario de los servicios; si te inscribes, se conservarán mientras dure la relación y los plazos legales que correspondan. Los datos de analítica se conservan el periodo configurado en Google Analytics (14 meses).</p>
<h2>5. Destinatarios</h2>
<p>No cedemos tus datos a terceros, salvo obligación legal. Pueden acceder a ellos proveedores que nos prestan servicios tecnológicos como encargados del tratamiento (alojamiento web en Microsoft Azure, servicio de envío de formularios y Google Analytics, de Google Ireland Ltd.). Algunos de estos proveedores pueden realizar transferencias internacionales de datos amparadas en las garantías del RGPD (Marco de privacidad de datos UE-EE. UU. o cláusulas contractuales tipo).</p>
<h2>6. Tus derechos</h2>
<p>Puedes ejercer los derechos de acceso, rectificación, supresión, oposición, limitación del tratamiento y portabilidad, y retirar el consentimiento, escribiendo a <a href="mailto:${o.privacyEmail}">${o.privacyEmail}</a> o por correo postal al domicilio indicado, adjuntando copia de un documento que te identifique. Si consideras que no se han atendido correctamente tus derechos, puedes presentar una reclamación ante la Autoritat Catalana de Protecció de Dades (apdcat.gencat.cat) o la Agencia Española de Protección de Datos (aepd.es).</p>
<h2>7. Menores</h2>
<p>Las solicitudes para menores de 14 años debe hacerlas el padre, la madre o el tutor legal.</p>
<h2>8. Seguridad</h2>
<p>Aplicamos medidas técnicas y organizativas adecuadas para proteger los datos personales frente a la pérdida, el uso indebido o el acceso no autorizado.</p>
<p class="upd">Última actualización: ${UPDATED.es}.</p>`,
    },
  },
  galetes: {
    ca: {
      title: "Política de galetes | XarxaPlay",
      description: "Quines galetes fa servir el web de XarxaPlay, per a què serveixen i com acceptar-les, rebutjar-les o canviar la configuració.",
      crumb: "Galetes",
      html: `
<p>Les galetes (cookies) són petits fitxers que el web guarda al teu navegador. D'acord amb l'article 22.2 de la LSSI-CE, només fem servir galetes que no són estrictament necessàries si ens dones el teu consentiment.</p>
<h2>1. Galetes i emmagatzematge que fem servir</h2>
<div class="tbl"><table>
<thead><tr><th>Nom</th><th>Titular</th><th>Finalitat</th><th>Durada</th><th>Tipus</th></tr></thead>
<tbody>
<tr><td>xp_consent</td><td>XarxaPlay</td><td>Recordar si has acceptat o rebutjat les galetes (emmagatzematge local del navegador)</td><td>Fins que l'esborris</td><td>Tècnica, necessària</td></tr>
<tr><td>_ga</td><td>Google</td><td>Distingir usuaris de manera anònima per a estadístiques</td><td>2 anys</td><td>Analítica, només amb consentiment</td></tr>
<tr><td>_ga_54PRQKW3FH</td><td>Google</td><td>Mantenir l'estat de la sessió per a estadístiques</td><td>2 anys</td><td>Analítica, només amb consentiment</td></tr>
</tbody></table></div>
<p>El mapa de Google Maps només es carrega si prems «Mostra el mapa»; en aquell moment Google pot instal·lar les seves pròpies galetes (vegeu la política de privacitat de Google). Els enllaços a Playtomic, Instagram o YouTube porten a webs externes amb les seves pròpies polítiques.</p>
<h2>2. Com acceptar, rebutjar o canviar la configuració</h2>
<p>En entrar al web veuràs un bàner per acceptar o rebutjar les galetes d'analítica. Pots canviar la teva decisió en qualsevol moment amb l'enllaç «Configuració de galetes» del peu de pàgina. També pots esborrar les galetes des de la configuració del teu navegador.</p>
<h2>3. Més informació</h2>
<p>Per a qualsevol dubte, escriu a <a href="mailto:${o.privacyEmail}">${o.privacyEmail}</a>. Consulta també la <a href="/privacitat/">política de privacitat</a>.</p>
<p class="upd">Darrera actualització: ${UPDATED.ca}.</p>`,
    },
    es: {
      title: "Política de cookies | XarxaPlay",
      description: "Qué cookies utiliza la web de XarxaPlay, para qué sirven y cómo aceptarlas, rechazarlas o cambiar la configuración.",
      crumb: "Cookies",
      html: `
<p>Las cookies son pequeños archivos que la web guarda en tu navegador. De acuerdo con el artículo 22.2 de la LSSI-CE, solo usamos cookies que no son estrictamente necesarias si nos das tu consentimiento.</p>
<h2>1. Cookies y almacenamiento que utilizamos</h2>
<div class="tbl"><table>
<thead><tr><th>Nombre</th><th>Titular</th><th>Finalidad</th><th>Duración</th><th>Tipo</th></tr></thead>
<tbody>
<tr><td>xp_consent</td><td>XarxaPlay</td><td>Recordar si has aceptado o rechazado las cookies (almacenamiento local del navegador)</td><td>Hasta que lo borres</td><td>Técnica, necesaria</td></tr>
<tr><td>_ga</td><td>Google</td><td>Distinguir usuarios de forma anónima para estadísticas</td><td>2 años</td><td>Analítica, solo con consentimiento</td></tr>
<tr><td>_ga_54PRQKW3FH</td><td>Google</td><td>Mantener el estado de la sesión para estadísticas</td><td>2 años</td><td>Analítica, solo con consentimiento</td></tr>
</tbody></table></div>
<p>El mapa de Google Maps solo se carga si pulsas «Mostrar el mapa»; en ese momento Google puede instalar sus propias cookies (consulta la política de privacidad de Google). Los enlaces a Playtomic, Instagram o YouTube llevan a webs externas con sus propias políticas.</p>
<h2>2. Cómo aceptar, rechazar o cambiar la configuración</h2>
<p>Al entrar en la web verás un banner para aceptar o rechazar las cookies de analítica. Puedes cambiar tu decisión en cualquier momento con el enlace «Configuración de cookies» del pie de página. También puedes borrar las cookies desde la configuración de tu navegador.</p>
<h2>3. Más información</h2>
<p>Para cualquier duda, escribe a <a href="mailto:${o.privacyEmail}">${o.privacyEmail}</a>. Consulta también la <a href="/es/privacidad/">política de privacidad</a>.</p>
<p class="upd">Última actualización: ${UPDATED.es}.</p>`,
    },
  },
};
