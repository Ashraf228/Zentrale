export type City = {
  slug: string;
  name: string;
  state: string;
  intro: string;
  districts: string[];
  seoProfile?: {
    marketFocus: string;
    localIntent: string;
    commonCases: string[];
    propertyTypes: string[];
    featuredParagraph: string;
  };
};

export const cities: City[] = [
  {
    slug: "frankfurt",
    name: "Frankfurt am Main",
    state: "Hessen",
    intro:
      "Frankfurt verbindet dichte Wohnlagen, Altbau, Gewerbe und stark genutzte Gebäudetechnik. Gerade bei Verstopfungen, Rückstau oder wiederkehrenden Leitungsproblemen ist deshalb eine schnelle und fachgerechte Hilfe besonders wichtig.",
    districts: ["Innenstadt", "Sachsenhausen", "Bornheim", "Bockenheim"],
    seoProfile: {
      marketFocus:
        "Frankfurt ist der wichtigste Kernmarkt für Rohrreinigung, Kanalreinigung und TV-Inspektion im gesamten Rhein-Main-Gebiet.",
      localIntent:
        "Viele Nutzer suchen in Frankfurt mit akuter Absicht nach schneller Hilfe bei Verstopfung, Rückstau, Kellerproblemen oder Notdienst.",
      commonCases: [
        "verstopfte Fallleitungen in Altbauten",
        "Rückstau in Kellern und Untergeschossen",
        "Küchen- und Badabflüsse in Mehrfamilienhäusern",
        "TV-Inspektion bei wiederkehrenden Leitungsproblemen",
      ],
      propertyTypes: [
        "Altbauwohnungen",
        "Mehrfamilienhäuser",
        "Gewerbeobjekte",
        "Verwaltungsimmobilien",
      ],
      featuredParagraph:
        "In Frankfurt geht es häufig nicht nur um Information, sondern um direkte Hilfe, eine klare Telefonnummer und einen Dienstleister, der Rohr- und Kanalprobleme fachlich sauber einordnen kann.",
    },
  },
  {
    slug: "offenbach",
    name: "Offenbach am Main",
    state: "Hessen",
    intro:
      "Offenbach ist eng mit dem Frankfurter Markt verbunden und ein wichtiger Einsatzort für Rohrreinigung, Abflussprobleme, Rückstau und schnelle Soforthilfe in Wohn- und Bestandsimmobilien.",
    districts: ["Innenstadt", "Bieber", "Bürgel", "Rumpenheim"],
    seoProfile: {
      marketFocus:
        "Offenbach ist ein starker Direktmarkt neben Frankfurt mit hoher Relevanz für Haushalte, Vermieter und schnelle Notdienst-Suchen.",
      localIntent:
        "In Offenbach suchen Nutzer besonders häufig nach Rohrreinigung, Abflussreinigung und Hilfe bei akuten WC-, Küchen- oder Kellerproblemen.",
      commonCases: [
        "Abflussprobleme in dicht bebauten Wohnlagen",
        "verstopfte Küchen- und Badleitungen",
        "Rückstau in älteren Gebäuden",
        "akute Notdienst-Suchen am Abend oder Wochenende",
      ],
      propertyTypes: [
        "Bestandswohnungen",
        "Mehrfamilienhäuser",
        "gemischt genutzte Immobilien",
        "kleinere Gewerbeobjekte",
      ],
      featuredParagraph:
        "Für Offenbach ist wichtig, dass schnelle Hilfe und lokale Nähe klar erkennbar sind. Gerade bei Abflussproblemen und Rückstau zählt hier eine direkte, einfach verständliche Ansprache mit klarer Anfrageoption.",
    },
  },
  {
    slug: "eschborn",
    name: "Eschborn",
    state: "Hessen",
    intro:
      "Eschborn ist durch Wohnlagen und starke Gewerbestrukturen ein wichtiger Standort im Frankfurter Umland. Hier geht es häufig um schnelle Hilfe für Haushalte, Bürostandorte und gewerblich genutzte Immobilien.",
    districts: ["Eschborn Mitte", "Niederhöchstadt", "Gewerbegebiet Süd", "Camp-Phönix-Park"],
  },
  {
    slug: "bad-homburg",
    name: "Bad Homburg vor der Höhe",
    state: "Hessen",
    intro:
      "Bad Homburg ist ein wichtiger Standort im erweiterten Frankfurter Einzugsgebiet. Für Haushalte, Vermieter und Hausverwaltungen zählen hier schnelle regionale Kontaktwege und eine saubere technische Einordnung.",
    districts: ["Innenstadt", "Gonzenheim", "Ober-Eschbach", "Dornholzhausen"],
  },
  {
    slug: "oberursel",
    name: "Oberursel",
    state: "Hessen",
    intro:
      "Oberursel gehört zu den gefragten Städten im direkten Rhein-Main-Umfeld von Frankfurt. Lokale Anfragen drehen sich hier oft um schnelle Hilfe bei akuten Entwässerungsproblemen in Wohngebäuden und Bestandsimmobilien.",
    districts: ["Mitte", "Bommersheim", "Stierstadt", "Weißkirchen"],
  },
  {
    slug: "friedrichsdorf",
    name: "Friedrichsdorf",
    state: "Hessen",
    intro:
      "Friedrichsdorf ist ein relevanter Standort im nördlichen Frankfurter Umland, wenn schnelle Hilfe bei Rohrverstopfung, Rückstau oder Notdienst-Anfragen gebraucht wird.",
    districts: ["Innenstadt", "Köppern", "Burgholzhausen", "Seulberg"],
  },
  {
    slug: "maintal",
    name: "Maintal",
    state: "Hessen",
    intro:
      "Maintal ist durch seine Nähe zu Frankfurt und Hanau ein relevanter lokaler Markt für Abflussreinigung, Rohrreinigung sowie akute Probleme an WC-, Bad- und Küchenabläufen.",
    districts: ["Bischofsheim", "Dörnigheim", "Hochstadt", "Wachenbuchen"],
  },
  {
    slug: "hanau",
    name: "Hanau",
    state: "Hessen",
    intro:
      "Hanau ist ein zentraler Standort im östlichen Rhein-Main-Gebiet, an dem schnelle Hilfe bei Rohr-, Kanal- und Rückstauproblemen für Haushalte und Gewerbe stark nachgefragt wird.",
    districts: ["Innenstadt", "Kesselstadt", "Steinheim", "Großauheim"],
  },
  {
    slug: "neu-isenburg",
    name: "Neu-Isenburg",
    state: "Hessen",
    intro:
      "Neu-Isenburg ist durch die direkte Nähe zu Frankfurt ein wichtiger Einsatzort für schnelle Hilfe bei Verstopfung, Rückstau und Leitungsproblemen im unmittelbaren Umland.",
    districts: ["Zentrum", "Gravenbruch", "Zeppelinheim", "West"],
  },
  {
    slug: "dreieich",
    name: "Dreieich",
    state: "Hessen",
    intro:
      "Dreieich ist im südlichen Frankfurter Umland ein relevanter Einsatzort für Rohrreinigung, Abflussnotdienst und Kanalreinigung in Wohn- und Gewerbeobjekten.",
    districts: ["Sprendlingen", "Buchschlag", "Götzenhain", "Offenthal"],
  },
  {
    slug: "langen",
    name: "Langen",
    state: "Hessen",
    intro:
      "Langen liegt in einem stark nachgefragten Korridor südlich von Frankfurt. Typisch sind hier akute Entwässerungsprobleme in Wohnanlagen, Mietobjekten und gemischt genutzten Gebäuden.",
    districts: ["Oberlinden", "Nordend", "Linden", "Steinberg"],
  },
  {
    slug: "moerfelden-walldorf",
    name: "Mörfelden-Walldorf",
    state: "Hessen",
    intro:
      "Mörfelden-Walldorf ist durch seine Lage zwischen Frankfurt und Darmstadt besonders relevant für Notdienst-, Rückstau- und Rohrreinigungsanfragen mit kurzer Reaktionszeit.",
    districts: ["Mörfelden", "Walldorf", "Gundhof", "An den Nußbäumen"],
  },
  {
    slug: "ruesselsheim",
    name: "Rüsselsheim am Main",
    state: "Hessen",
    intro:
      "Rüsselsheim ist ein wichtiger Standort im westlichen Rhein-Main-Gebiet. Häufig geht es hier um Rohr-, Kanal- und Entwässerungsprobleme in Haushalten, Mietobjekten und Gewerbeeinheiten.",
    districts: ["Innenstadt", "Königstädten", "Bauschheim", "Haßloch"],
  },
  {
    slug: "raunheim",
    name: "Raunheim",
    state: "Hessen",
    intro:
      "Raunheim ergänzt den westlichen Frankfurter Einzugsbereich ideal und ist ein wichtiger Ort für schnelle Hilfe bei Verstopfung, Rückstau und Entwässerungsproblemen.",
    districts: ["Zentrum", "Süd", "Nord", "Airport-Nähe"],
  },
  {
    slug: "kelsterbach",
    name: "Kelsterbach",
    state: "Hessen",
    intro:
      "Kelsterbach ist im direkten Umfeld von Frankfurt ein relevanter Standort für zeitkritische Anfragen bei Rohrverstopfung, Rückstau und Problemen an der Entwässerung.",
    districts: ["Nord", "Mitte", "Süd", "Mainufer"],
  },
  {
    slug: "hofheim",
    name: "Hofheim am Taunus",
    state: "Hessen",
    intro:
      "Hofheim am Taunus stärkt die Abdeckung im westlichen Rhein-Main-Gebiet und ist ein typischer Einsatzort für Rohrreinigung, Abflussreinigung und Rückstauhilfe.",
    districts: ["Kernstadt", "Marxheim", "Diedenbergen", "Lorsbach"],
  },
  {
    slug: "floersheim",
    name: "Flörsheim am Main",
    state: "Hessen",
    intro:
      "Flörsheim am Main liegt strategisch im Rhein-Main-Gebiet und ist ein sinnvoller Standort für schnelle Hilfe bei akuten Rohr-, Kanal- und Entwässerungsproblemen.",
    districts: ["Stadtmitte", "Wicker", "Weilbach", "Keramag/Falkenberg"],
  },
  {
    slug: "mainz",
    name: "Mainz",
    state: "Rheinland-Pfalz",
    intro:
      "Mainz ist als große Stadt im Rhein-Main-Gebiet ein wichtiger Einsatzort für Rohrreinigung, Kanalservice, TV-Inspektion und Rückstauhilfe in Wohn- und Gewerbeobjekten.",
    districts: ["Altstadt", "Neustadt", "Gonsenheim", "Hechtsheim"],
    seoProfile: {
      marketFocus:
        "Mainz ist ein eigenständiger Großmarkt im Rhein-Main-Gebiet mit starkem Suchvolumen für Rohrreinigung, Kanalservice und TV-Inspektion.",
      localIntent:
        "Nutzer in Mainz suchen oft nach einer Mischung aus Soforthilfe bei Verstopfung und planbaren Leistungen wie Inspektion oder Spülung.",
      commonCases: [
        "wiederkehrende Abflussprobleme in Wohngebäuden",
        "Kanal- und Rückstauthemen im Grundstücksbereich",
        "TV-Inspektion bei unklarer Ursache",
        "Rohrspülung bei länger bestehenden Ablagerungen",
      ],
      propertyTypes: [
        "Stadtwohnungen",
        "Mehrfamilienhäuser",
        "Wohn- und Geschäftshäuser",
        "verwaltete Bestandsobjekte",
      ],
      featuredParagraph:
        "In Mainz ist eine breitere Leistungsdarstellung sinnvoll. Neben schneller Hilfe sind hier auch Diagnose, Spülung und planbare Leitungsprüfung besonders wichtige Themen.",
    },
  },
  {
    slug: "wiesbaden",
    name: "Wiesbaden",
    state: "Hessen",
    intro:
      "Wiesbaden ist ein starker lokaler Markt für Rohrreinigung, Abflussprobleme und Rückstau im Wohn- und Verwaltungsbereich. Gerade hier sind schnelle Hilfe und eine seriöse Leistungsdarstellung besonders wichtig.",
    districts: ["Mitte", "Biebrich", "Sonnenberg", "Dotzheim"],
    seoProfile: {
      marketFocus:
        "Wiesbaden ist besonders relevant für Rohrreinigung, Kanalreinigung und planbare Inspektionsleistungen in Wohn- und Verwaltungsimmobilien.",
      localIntent:
        "In Wiesbaden ist die Nachfrage oft stark qualitätsorientiert: Nutzer suchen seriöse Hilfe, nachvollziehbare Abläufe und saubere Kostenhinweise.",
      commonCases: [
        "Bad- und Küchenabflüsse in Bestandsimmobilien",
        "Rückstau in Souterrain- und Kellerbereichen",
        "Kanalinspektion bei wiederkehrenden Störungen",
        "Rohr- und Kanalspülung bei älteren Leitungen",
      ],
      propertyTypes: [
        "Bestandsimmobilien",
        "Stadtvillen",
        "Mehrfamilienhäuser",
        "Verwaltungsgebäude",
      ],
      featuredParagraph:
        "Für Wiesbaden ist Vertrauen besonders wichtig. Die Inhalte sollten deshalb nicht nur auf schnelle Hilfe setzen, sondern auch Kompetenz, Diagnosefähigkeit und transparente Leistungsdarstellung klar herausstellen.",
    },
  },
  {
    slug: "darmstadt",
    name: "Darmstadt",
    state: "Hessen",
    intro:
      "Darmstadt ist ein relevanter regionaler Markt südlich von Frankfurt. Hier treffen akute Notfälle bei Verstopfung und Rückstau oft auf planbare Leistungen wie TV-Inspektion, Spülung und Leitungsprüfung.",
    districts: ["Mitte", "Bessungen", "Arheilgen", "Eberstadt"],
    seoProfile: {
      marketFocus:
        "Darmstadt ist ein wichtiger Markt für die Kombination aus akuter Rohrreinigung, TV-Inspektion und planbaren Leistungen an Wohn- und Gewerbeobjekten.",
      localIntent:
        "In Darmstadt suchen Nutzer häufig sowohl nach Notdienst bei Verstopfung als auch nach längerfristigen Lösungen bei wiederkehrenden Leitungsproblemen.",
      commonCases: [
        "wiederkehrende Verstopfungen in Wohnanlagen",
        "TV-Inspektion bei unklaren Schäden",
        "Rohrspülung und Kanalspülung bei Ablagerungen",
        "Rückstau und Abpumpen in Kellern",
      ],
      propertyTypes: [
        "Wohnanlagen",
        "Mietobjekte",
        "Gewerbeeinheiten",
        "verwaltete Liegenschaften",
      ],
      featuredParagraph:
        "Darmstadt eignet sich besonders gut für Inhalte, die Notfallintention und planbare Diagnose verbinden. Dadurch lässt sich die Seite sowohl für akute Suchen als auch für beratungsorientierte Anfragen besser positionieren.",
    },
  },
  {
    slug: "gross-gerau",
    name: "Groß-Gerau",
    state: "Hessen",
    intro:
      "Groß-Gerau ergänzt die regionale Abdeckung im südwestlichen Rhein-Main-Gebiet und ist ein sinnvoller Einsatzort für lokale Rohr-, Kanal- und Rückstauhilfen.",
    districts: ["Kernstadt", "Dornheim", "Wallerstädten", "Berkach"],
  },
  {
    slug: "rodgau",
    name: "Rodgau",
    state: "Hessen",
    intro:
      "Rodgau ist im östlichen Rhein-Main-Gebiet ein relevanter Standort, weil viele Nutzer gezielt nach schneller Hilfe bei Verstopfung, Rückstau und Problemen in Wohngebieten und Mehrfamilienhäusern suchen.",
    districts: ["Jügesheim", "Dudenhofen", "Weiskirchen", "Nieder-Roden"],
  },
];

export const cityMap = new Map(cities.map((city) => [city.slug, city]));
