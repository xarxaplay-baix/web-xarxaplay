// Contingut de les pàgines d'esport (pàdel, pickleball, tennis) i de l'escola, en català i castellà.
// Els enllaços interns s'escriuen amb {padel}, {pickleball}, {tennis}, {escola}, {blog:clau} i es resolen per idioma.
import type { Lang } from "./routes";
import type { Faq } from "./faq";

export interface Section { h2: string; html: string }
export interface PageText {
  title: string;
  description: string;
  h1: string;
  crumb: string;
  sections: Section[];
  faq: Faq[];
}
export interface SportPage {
  prefix: string; // prefix de claus i18n del bloc de detall (d_padel, d_pick, d_ten)
  main: string;
  gallery: string[];
  og: string;
  related: string[];
  ca: PageText;
  es: PageText;
}

const book = (lang: Lang) => (lang === "es"
  ? `<ol class="howto"><li>Entra en <a href="https://playtomic.com/clubs/new-complex-esportiu-baldiri-aleu">Playtomic</a> y busca el club «Complex Esportiu Baldiri Aleu».</li><li>Elige deporte, día, hora y pista.</li><li>Paga online y ven a jugar. Aparca gratis a menos de 2 minutos andando.</li></ol>`
  : `<ol class="howto"><li>Entra a <a href="https://playtomic.com/clubs/new-complex-esportiu-baldiri-aleu">Playtomic</a> i busca el club «Complex Esportiu Baldiri Aleu».</li><li>Tria esport, dia, hora i pista.</li><li>Paga online i vine a jugar. Aparca gratis a menys de 2 minuts caminant.</li></ol>`);

export const sports: Record<"padel" | "pickleball" | "tennis", SportPage> = {
  padel: {
    prefix: "d_padel",
    main: "padel-joc-parella",
    gallery: ["padel-remat", "padel-servei", "padel-jugador"],
    og: "/img/og-padel.jpg",
    related: ["beneficis", "americana", "tornejos"],
    ca: {
      title: "Pistes de pàdel a Sant Boi de Llobregat | 11 pistes · XarxaPlay",
      description: "11 pistes de pàdel a Sant Boi de Llobregat obertes cada dia. Reserva per Playtomic, gravació de partits gratis, americanes, tornejos i escola.",
      h1: "Pistes de pàdel a Sant Boi de Llobregat",
      crumb: "Pàdel",
      sections: [
        { h2: "Jugar a pàdel al Baix Llobregat", html: "<p>XarxaPlay és el centre de pàdel del Complex Esportiu Baldiri Aleu, a Sant Boi de Llobregat. Amb <strong>11 pistes de pàdel</strong> és fàcil trobar hora per jugar amb els amics, entrenar o competir, de dilluns a diumenge i també els festius.</p><p>Som a uns 15 minuts de Barcelona i a prop de Cornellà, Sant Joan Despí, Viladecans, Gavà i el Prat, amb centenars de places d'aparcament gratuïtes a menys de 2 minuts caminant.</p>" },
        { h2: "Com reservar una pista de pàdel", html: book("ca") },
        { h2: "Escola, americanes i tornejos", html: "<p>Si comences, a l'<a href=\"{escola}\">escola de pàdel</a> la primera classe és gratis i et posem en un grup del teu nivell. Si ja jugues, apunta't a les <a href=\"{blog:americana}\">americanes de pàdel</a> setmanals o als <a href=\"{blog:tornejos}\">tornejos per categories</a> que organitzem durant l'any.</p>" },
        { h2: "Serveis per als jugadors de pàdel", html: "<ul><li><strong>Gravació de partits gratis</strong> a les 11 pistes: escaneja el QR i rep el partit sencer per email (Tape Sports).</li><li><strong>Vestidors exclusius</strong> per a homes i dones, amb armariets amb cadenat.</li><li><strong>Bar restaurant Can Baldiri</strong> amb terrassa al costat de les pistes.</li><li><strong>Botiga</strong> de pales, pilotes i grips a la recepció.</li></ul>" },
      ],
      faq: [
        { q: "Quantes pistes de pàdel té XarxaPlay?", a: "11 pistes de pàdel al Complex Esportiu Baldiri Aleu de Sant Boi de Llobregat, obertes de dilluns a diumenge, festius inclosos." },
        { q: "Com es reserva una pista de pàdel a Sant Boi?", a: "Per Playtomic, al club «Complex Esportiu Baldiri Aleu». Tries dia, hora i pista i pagues online." },
        { q: "Es pot gravar el partit de pàdel?", a: "Sí, gratis: escaneges el codi QR de la pista i reps el partit complet per email." },
        { q: "Hi ha classes de pàdel per a principiants?", a: "Sí. L'escola de pàdel té grups d'iniciació per a nens i adults, i la primera classe de prova és gratuïta." },
        { q: "Feu americanes de pàdel?", a: "Sí, cada setmana, per a diversos nivells. També organitzem tornejos de pàdel durant l'any." },
      ],
    },
    es: {
      title: "Pistas de pádel en Sant Boi de Llobregat | 11 pistas · XarxaPlay",
      description: "11 pistas de pádel en Sant Boi de Llobregat abiertas todos los días. Reserva en Playtomic, grabación de partidos gratis, americanas, torneos y escuela.",
      h1: "Pistas de pádel en Sant Boi de Llobregat",
      crumb: "Pádel",
      sections: [
        { h2: "Jugar a pádel en el Baix Llobregat", html: "<p>XarxaPlay es el centro de pádel del Complex Esportiu Baldiri Aleu, en Sant Boi de Llobregat. Con <strong>11 pistas de pádel</strong> es fácil encontrar hora para jugar con los amigos, entrenar o competir, de lunes a domingo y también los festivos.</p><p>Estamos a unos 15 minutos de Barcelona y cerca de Cornellà, Sant Joan Despí, Viladecans, Gavà y El Prat, con cientos de plazas de aparcamiento gratuitas a menos de 2 minutos andando.</p>" },
        { h2: "Cómo reservar una pista de pádel", html: book("es") },
        { h2: "Escuela, americanas y torneos", html: "<p>Si empiezas, en la <a href=\"{escola}\">escuela de pádel</a> la primera clase es gratis y te ponemos en un grupo de tu nivel. Si ya juegas, apúntate a las <a href=\"{blog:americana}\">americanas de pádel</a> semanales o a los <a href=\"{blog:tornejos}\">torneos por categorías</a> que organizamos durante el año.</p>" },
        { h2: "Servicios para los jugadores de pádel", html: "<ul><li><strong>Grabación de partidos gratis</strong> en las 11 pistas: escanea el QR y recibe el partido entero por email (Tape Sports).</li><li><strong>Vestuarios exclusivos</strong> para hombres y mujeres, con taquillas con candado.</li><li><strong>Bar restaurante Can Baldiri</strong> con terraza junto a las pistas.</li><li><strong>Tienda</strong> de palas, pelotas y grips en la recepción.</li></ul>" },
      ],
      faq: [
        { q: "¿Cuántas pistas de pádel tiene XarxaPlay?", a: "11 pistas de pádel en el Complex Esportiu Baldiri Aleu de Sant Boi de Llobregat, abiertas de lunes a domingo, festivos incluidos." },
        { q: "¿Cómo se reserva una pista de pádel en Sant Boi?", a: "En Playtomic, en el club «Complex Esportiu Baldiri Aleu». Eliges día, hora y pista y pagas online." },
        { q: "¿Se puede grabar el partido de pádel?", a: "Sí, gratis: escaneas el código QR de la pista y recibes el partido completo por email." },
        { q: "¿Hay clases de pádel para principiantes?", a: "Sí. La escuela de pádel tiene grupos de iniciación para niños y adultos, y la primera clase de prueba es gratuita." },
        { q: "¿Hacéis americanas de pádel?", a: "Sí, cada semana, para distintos niveles. También organizamos torneos de pádel durante el año." },
      ],
    },
  },
  pickleball: {
    prefix: "d_pick",
    main: "pickleball-joc",
    gallery: ["pickleball-volea", "pickleball-torneig", "pickleball-pistes"],
    og: "/img/og-pickleball.jpg",
    related: ["pickleball", "tornejos", "americana"],
    ca: {
      title: "Pistes de pickleball a Sant Boi de Llobregat | XarxaPlay",
      description: "4 pistes de pickleball a Sant Boi de Llobregat per a totes les edats i nivells. Reserva per Playtomic, campionats, americanes i botiga de material.",
      h1: "Pistes de pickleball a Sant Boi de Llobregat",
      crumb: "Pickleball",
      sections: [
        { h2: "Juga a pickleball al Baix Llobregat", html: "<p>El pickleball és l'esport de raqueta que més creix: barreja de tennis, pàdel i tennis taula, es juga amb pala llisa i pilota foradada en una pista petita. A XarxaPlay tenim <strong>4 pistes de pickleball</strong> al Complex Esportiu Baldiri Aleu de Sant Boi, obertes cada dia, festius inclosos.</p><p>Si encara no el coneixes, llegeix <a href=\"{blog:pickleball}\">què és el pickleball i com es juga</a>.</p>" },
        { h2: "Per a qui és el pickleball", html: "<p>Per a tothom. Es domina en mitja hora, l'impacte a les articulacions és baix i hi poden jugar junts nens, adults i gent gran. Agrada molt als jugadors de tennis i de pàdel que volen provar una cosa nova.</p>" },
        { h2: "Com reservar una pista de pickleball", html: book("ca") },
        { h2: "Campionats i americanes de pickleball", html: "<p>Organitzem campionats i americanes de pickleball durant l'any. Consulta com funcionen els <a href=\"{blog:tornejos}\">tornejos al Baix Llobregat</a> i les dates a Instagram.</p>" },
      ],
      faq: [
        { q: "On es pot jugar a pickleball al Baix Llobregat?", a: "A XarxaPlay, a Sant Boi de Llobregat: 4 pistes de pickleball dins el Complex Esportiu Baldiri Aleu, obertes cada dia." },
        { q: "Cal experiència per jugar a pickleball?", a: "No. És molt fàcil d'aprendre: en mitja hora ja es juguen punts. És apte per a totes les edats i nivells." },
        { q: "Com es reserva una pista de pickleball?", a: "Per Playtomic, al club «Complex Esportiu Baldiri Aleu», igual que una pista de pàdel." },
        { q: "On puc comprar pala i pilotes de pickleball?", a: "A la botiga de la recepció del Complex Esportiu Baldiri Aleu, on hi ha pales i pilotes de pickleball." },
      ],
    },
    es: {
      title: "Pistas de pickleball en Sant Boi de Llobregat | XarxaPlay",
      description: "4 pistas de pickleball en Sant Boi de Llobregat para todas las edades y niveles. Reserva en Playtomic, campeonatos, americanas y tienda de material.",
      h1: "Pistas de pickleball en Sant Boi de Llobregat",
      crumb: "Pickleball",
      sections: [
        { h2: "Juega a pickleball en el Baix Llobregat", html: "<p>El pickleball es el deporte de raqueta que más crece: mezcla de tenis, pádel y tenis de mesa, se juega con pala lisa y pelota perforada en una pista pequeña. En XarxaPlay tenemos <strong>4 pistas de pickleball</strong> en el Complex Esportiu Baldiri Aleu de Sant Boi, abiertas todos los días, festivos incluidos.</p><p>Si todavía no lo conoces, lee <a href=\"{blog:pickleball}\">qué es el pickleball y cómo se juega</a>.</p>" },
        { h2: "Para quién es el pickleball", html: "<p>Para todo el mundo. Se domina en media hora, el impacto en las articulaciones es bajo y pueden jugar juntos niños, adultos y personas mayores. Gusta mucho a los jugadores de tenis y de pádel que quieren probar algo nuevo.</p>" },
        { h2: "Cómo reservar una pista de pickleball", html: book("es") },
        { h2: "Campeonatos y americanas de pickleball", html: "<p>Organizamos campeonatos y americanas de pickleball durante el año. Consulta cómo funcionan los <a href=\"{blog:tornejos}\">torneos en el Baix Llobregat</a> y las fechas en Instagram.</p>" },
      ],
      faq: [
        { q: "¿Dónde se puede jugar a pickleball en el Baix Llobregat?", a: "En XarxaPlay, en Sant Boi de Llobregat: 4 pistas de pickleball dentro del Complex Esportiu Baldiri Aleu, abiertas todos los días." },
        { q: "¿Hace falta experiencia para jugar a pickleball?", a: "No. Es muy fácil de aprender: en media hora ya se juegan puntos. Es apto para todas las edades y niveles." },
        { q: "¿Cómo se reserva una pista de pickleball?", a: "En Playtomic, en el club «Complex Esportiu Baldiri Aleu», igual que una pista de pádel." },
        { q: "¿Dónde puedo comprar pala y pelotas de pickleball?", a: "En la tienda de la recepción del Complex Esportiu Baldiri Aleu, donde hay palas y pelotas de pickleball." },
      ],
    },
  },
  tennis: {
    prefix: "d_ten",
    main: "tennis-pista",
    gallery: ["tennis-pista-aeria", "tennis-pista-complex", "tennis-pista-lateral"],
    og: "/img/og-tennis.jpg",
    related: ["tennis", "tornejos", "pickleball"],
    ca: {
      title: "Pista de tennis a Sant Boi de Llobregat | XarxaPlay",
      description: "Pista de tennis exterior renovada a Sant Boi de Llobregat per a tots els nivells. Reserva per Playtomic, vestidors, aparcament gratuït i tornejos.",
      h1: "Pista de tennis a Sant Boi de Llobregat",
      crumb: "Tennis",
      sections: [
        { h2: "Jugar a tennis al Baix Llobregat", html: "<p>A XarxaPlay tens una <strong>pista de tennis exterior renovada</strong> dins el Complex Esportiu Baldiri Aleu de Sant Boi de Llobregat, per a jugadors de tots els nivells. És un bon lloc per tornar a agafar la raqueta: llegeix <a href=\"{blog:tennis}\">per què tornar a jugar a tennis</a>.</p>" },
        { h2: "Serveis", html: "<ul><li><strong>Vestidors</strong> de les pistes exteriors.</li><li><strong>Aparcament gratuït</strong> a menys de 2 minuts caminant.</li><li><strong>Bar restaurant Can Baldiri</strong> amb terrassa.</li><li><strong>Botiga</strong> amb raquetes, pilotes i grips de tennis.</li></ul>" },
        { h2: "Com reservar la pista de tennis", html: book("ca") },
        { h2: "Tornejos i americanes de tennis", html: "<p>Durant l'any organitzem tornejos i americanes de tennis. Mira els formats a <a href=\"{blog:tornejos}\">tornejos al Baix Llobregat</a>. I si vols provar alguna cosa nova, el <a href=\"{pickleball}\">pickleball</a> agrada molt als tennistes.</p>" },
      ],
      faq: [
        { q: "Hi ha pista de tennis a Sant Boi de Llobregat?", a: "Sí. XarxaPlay té una pista de tennis exterior renovada dins el Complex Esportiu Baldiri Aleu (C/ Baldiri Aleu 1-7)." },
        { q: "Com es reserva la pista de tennis?", a: "Per Playtomic, al club «Complex Esportiu Baldiri Aleu»." },
        { q: "La pista de tennis té vestidors?", a: "Sí, els vestidors de les pistes exteriors del complex, i aparcament gratuït a menys de 2 minuts." },
        { q: "Feu tornejos de tennis?", a: "Sí, organitzem tornejos i americanes de tennis durant l'any. Les dates es publiquen a Instagram (@xarxaplay)." },
      ],
    },
    es: {
      title: "Pista de tenis en Sant Boi de Llobregat | XarxaPlay",
      description: "Pista de tenis exterior renovada en Sant Boi de Llobregat para todos los niveles. Reserva en Playtomic, vestuarios, aparcamiento gratis y torneos.",
      h1: "Pista de tenis en Sant Boi de Llobregat",
      crumb: "Tenis",
      sections: [
        { h2: "Jugar a tenis en el Baix Llobregat", html: "<p>En XarxaPlay tienes una <strong>pista de tenis exterior renovada</strong> dentro del Complex Esportiu Baldiri Aleu de Sant Boi de Llobregat, para jugadores de todos los niveles. Es un buen sitio para volver a coger la raqueta: lee <a href=\"{blog:tennis}\">por qué volver a jugar a tenis</a>.</p>" },
        { h2: "Servicios", html: "<ul><li><strong>Vestuarios</strong> de las pistas exteriores.</li><li><strong>Aparcamiento gratuito</strong> a menos de 2 minutos andando.</li><li><strong>Bar restaurante Can Baldiri</strong> con terraza.</li><li><strong>Tienda</strong> con raquetas, pelotas y grips de tenis.</li></ul>" },
        { h2: "Cómo reservar la pista de tenis", html: book("es") },
        { h2: "Torneos y americanas de tenis", html: "<p>Durante el año organizamos torneos y americanas de tenis. Mira los formatos en <a href=\"{blog:tornejos}\">torneos en el Baix Llobregat</a>. Y si quieres probar algo nuevo, el <a href=\"{pickleball}\">pickleball</a> gusta mucho a los tenistas.</p>" },
      ],
      faq: [
        { q: "¿Hay pista de tenis en Sant Boi de Llobregat?", a: "Sí. XarxaPlay tiene una pista de tenis exterior renovada dentro del Complex Esportiu Baldiri Aleu (C/ Baldiri Aleu 1-7)." },
        { q: "¿Cómo se reserva la pista de tenis?", a: "En Playtomic, en el club «Complex Esportiu Baldiri Aleu»." },
        { q: "¿La pista de tenis tiene vestuarios?", a: "Sí, los vestuarios de las pistas exteriores del complejo, y aparcamiento gratuito a menos de 2 minutos." },
        { q: "¿Hacéis torneos de tenis?", a: "Sí, organizamos torneos y americanas de tenis durante el año. Las fechas se publican en Instagram (@xarxaplay)." },
      ],
    },
  },
};

export const escola: Record<Lang, PageText & { lead: string }> = {
  ca: {
    title: "Escola de pàdel a Sant Boi: primera classe gratis | XarxaPlay",
    description: "Classes de pàdel per a nens i adults a Sant Boi de Llobregat, d'iniciació a competició. Demana la teva classe de prova gratuïta a XarxaPlay.",
    h1: "Escola de pàdel a Sant Boi: la primera classe és gratis",
    crumb: "Escola de pàdel",
    lead: "Classes per a nens i adults, de zero a competició, a les 11 pistes de XarxaPlay. Vine a provar-ho sense compromís: et posem en un grup del teu nivell.",
    sections: [
      { h2: "Classes per al teu nivell", html: "<ul><li><strong>Iniciació:</strong> no hi has jugat mai o només de manera esporàdica. Aprens l'empunyadura, els cops bàsics i com moure't per la pista.</li><li><strong>Intermedi:</strong> mantens peloteigs i jugues partits, però vols controlar les parets, la volea i el globus.</li><li><strong>Avançat:</strong> competeixes o jugues americanes i vols treballar la tàctica, el remat i el joc en parella.</li></ul><p>Si dubtes, llegeix <a href=\"{blog:escola}\">com triar el teu nivell</a>.</p>" },
      { h2: "Pàdel per a nens", html: "<p>El pàdel és ideal per als més petits: la pista és tancada, la pilota va més lenta que en el tennis i aviat juguen punts. Millora la coordinació, l'esperit d'equip i els hàbits saludables. Els nens de l'escola poden fer servir els vestidors del centre.</p>" },
      { h2: "Què has de portar", html: "<p>Roba esportiva i calçat amb sola d'espiga o de pàdel. Si no tens pala, consulta-ho quan et truquem. Al final de la classe, l'entrenador et dirà quin grup t'encaixa millor.</p>" },
    ],
    faq: [
      { q: "La primera classe de pàdel és gratis?", a: "Sí. Omple el formulari, et truquem i triem un horari amb un grup del teu nivell per fer la classe de prova gratuïta." },
      { q: "Hi ha classes de pàdel per a nens a Sant Boi?", a: "Sí. L'escola de pàdel de XarxaPlay té grups per a nens i per a adults." },
      { q: "Quin nivell cal per apuntar-se a l'escola de pàdel?", a: "Cap. Hi ha grups d'iniciació, intermedi i avançat, des de zero fins a competició." },
      { q: "Què he de portar a la classe de prova?", a: "Roba esportiva i calçat amb sola d'espiga o de pàdel." },
      { q: "On es fan les classes?", a: "A les pistes de pàdel de XarxaPlay, al Complex Esportiu Baldiri Aleu (C/ Baldiri Aleu 1-7, Sant Boi de Llobregat)." },
    ],
  },
  es: {
    title: "Escuela de pádel en Sant Boi: primera clase gratis | XarxaPlay",
    description: "Clases de pádel para niños y adultos en Sant Boi de Llobregat, de iniciación a competición. Pide tu clase de prueba gratuita en XarxaPlay.",
    h1: "Escuela de pádel en Sant Boi: la primera clase es gratis",
    crumb: "Escuela de pádel",
    lead: "Clases para niños y adultos, de cero a competición, en las 11 pistas de XarxaPlay. Ven a probarlo sin compromiso: te ponemos en un grupo de tu nivel.",
    sections: [
      { h2: "Clases para tu nivel", html: "<ul><li><strong>Iniciación:</strong> nunca has jugado o solo de forma esporádica. Aprendes la empuñadura, los golpes básicos y cómo moverte por la pista.</li><li><strong>Intermedio:</strong> mantienes peloteos y juegas partidos, pero quieres controlar las paredes, la volea y el globo.</li><li><strong>Avanzado:</strong> compites o juegas americanas y quieres trabajar la táctica, el remate y el juego en pareja.</li></ul><p>Si dudas, lee <a href=\"{blog:escola}\">cómo elegir tu nivel</a>.</p>" },
      { h2: "Pádel para niños", html: "<p>El pádel es ideal para los más pequeños: la pista es cerrada, la pelota va más lenta que en el tenis y enseguida juegan puntos. Mejora la coordinación, el espíritu de equipo y los hábitos saludables. Los niños de la escuela pueden usar los vestuarios del centro.</p>" },
      { h2: "Qué tienes que traer", html: "<p>Ropa deportiva y calzado con suela de espiga o de pádel. Si no tienes pala, coméntalo cuando te llamemos. Al final de la clase, el entrenador te dirá qué grupo te encaja mejor.</p>" },
    ],
    faq: [
      { q: "¿La primera clase de pádel es gratis?", a: "Sí. Rellena el formulario, te llamamos y elegimos un horario con un grupo de tu nivel para hacer la clase de prueba gratuita." },
      { q: "¿Hay clases de pádel para niños en Sant Boi?", a: "Sí. La escuela de pádel de XarxaPlay tiene grupos para niños y para adultos." },
      { q: "¿Qué nivel hace falta para apuntarse a la escuela de pádel?", a: "Ninguno. Hay grupos de iniciación, intermedio y avanzado, desde cero hasta competición." },
      { q: "¿Qué tengo que traer a la clase de prueba?", a: "Ropa deportiva y calzado con suela de espiga o de pádel." },
      { q: "¿Dónde se hacen las clases?", a: "En las pistas de pádel de XarxaPlay, en el Complex Esportiu Baldiri Aleu (C/ Baldiri Aleu 1-7, Sant Boi de Llobregat)." },
    ],
  },
};
