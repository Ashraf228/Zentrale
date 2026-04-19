export type Service = {
  slug: string;
  name: string;
  shortName: string;
  emergency?: boolean;
  heroTitle: string;
  heroDescription: string;
  intro: string;
  causes: string[];
  process: string[];
  immediateAction: string[];
  costHint: string;
  featuredSnippet: string;
  metaTitle: string;
  metaDescription: string;
  faq: Array<{ question: string; answer: string }>;
};

export const services: Service[] = [
  {
    slug: "rohrreinigung",
    name: "Rohrreinigung",
    shortName: "Rohrreinigung",
    heroTitle: "Rohrreinigung mit rohrreinigung-ffm24",
    heroDescription:
      "Wenn Leitungen in Küche, Bad, WC oder Fallstrang verstopfen, sorgt rohrreinigung-ffm24 in Frankfurt und Rhein-Main für schnelle fachliche Hilfe.",
    intro:
      "Eine professionelle Rohrreinigung ist gefragt, wenn Wasser schlecht abläuft, Gluckergeräusche auftreten oder sich Rückstau im Gebäude bemerkbar macht. Gerade in dicht bebauten Wohn- und Gewerbelagen im Raum Frankfurt Rhein-Main kommt es darauf an, die Ursache sauber einzugrenzen und die Leitung zielgerichtet zu reinigen. rohrreinigung-ffm24 übernimmt solche Einsätze mit klarem Fokus auf Technik, Erreichbarkeit und verlässliche Ausführung.",
    causes: [
      "Ablagerungen aus Fett, Seife, Haaren oder Speiseresten",
      "Verengungen in Fallleitungen oder Anschlussleitungen",
      "Wurzeleinwuchs, Versätze oder ältere Rohrsysteme",
      "Wiederkehrende Teilverstopfungen mit Rückstaurisiko",
    ],
    process: [
      "Telefonische oder schriftliche Erstaufnahme mit erster Problemerkennung",
      "Einordnung des Problems und Planung des passenden Einsatzes",
      "Schnelle Terminierung für Rohrreinigung oder weiterführende Maßnahmen",
      "Durchführung vor Ort und transparente Abstimmung der nächsten Schritte",
    ],
    immediateAction: [
      "Bei Rückstau möglichst kein weiteres Wasser nachlaufen lassen",
      "Mehrere betroffene Abläufe als Hinweis auf tieferliegende Verstopfungen ernst nehmen",
      "Bei wiederkehrenden Problemen frühzeitig eine fachliche Prüfung veranlassen",
    ],
    costHint:
      "Die Kosten hängen vom Schadensbild, der Erreichbarkeit und dem tatsächlichen Aufwand vor Ort ab. Gerade im Raum Frankfurt Rhein-Main setzt rohrreinigung-ffm24 auf transparente Einschätzung und klare Kommunikation.",
    featuredSnippet:
      "Eine Rohrreinigung ist sinnvoll, wenn Wasser langsam abläuft, mehrere Abläufe betroffen sind oder sich Rückstau bildet. In Frankfurt und Rhein-Main hilft rohrreinigung-ffm24 schnell und fachgerecht weiter.",
    metaTitle:
      "Rohrreinigung Frankfurt & Rhein-Main | rohrreinigung-ffm24",
    metaDescription:
      "Rohrreinigung für Haus, Wohnung und Gewerbe in Frankfurt und Rhein-Main durch rohrreinigung-ffm24. Jetzt Hilfe anfragen oder direkt anrufen.",
    faq: [
      {
        question: "Wann sollte eine Rohrreinigung sofort veranlasst werden?",
        answer:
          "Sofortiger Handlungsbedarf besteht vor allem bei Rückstau, wenn mehrere Abläufe betroffen sind oder wenn Wasser gar nicht mehr abläuft. Dann sollte die Situation nicht durch Hausmittel verschärft werden.",
      },
      {
        question: "Was unterscheidet Rohrreinigung und Abflussreinigung?",
        answer:
          "Die Abflussreinigung betrifft oft einzelne Entwässerungspunkte wie Spüle, Dusche oder Waschbecken. Eine Rohrreinigung bezieht auch tieferliegende Leitungsabschnitte und komplexere Verstopfungen ein.",
      },
    ],
  },
  {
    slug: "kanalreinigung",
    name: "Kanalreinigung",
    shortName: "Kanalreinigung",
    heroTitle: "Kanalreinigung für private und gewerbliche Entwässerung",
    heroDescription:
      "Bei Rückstau, tieferliegenden Verstopfungen oder Problemen an der Grundstücksentwässerung übernimmt rohrreinigung-ffm24 die passende Kanalreinigung im Raum Frankfurt Rhein-Main.",
    intro:
      "Eine Kanalreinigung wird erforderlich, wenn die Ursache nicht mehr im einzelnen Ablauf liegt, sondern tiefer im Entwässerungssystem oder im Grundstücksbereich. Typisch sind Rückstau, wiederkehrende Störungen, verschlammte Leitungen oder Auffälligkeiten im Anschluss- und Grundleitungsbereich. rohrreinigung-ffm24 unterstützt hier mit klarer Einordnung und passender Technik für Frankfurt und Rhein-Main.",
    causes: [
      "Ablagerungen im Grundleitungs- oder Kanalbereich",
      "Wurzeleinwuchs oder beschädigte Leitungsabschnitte",
      "Sand, Schlamm oder Fremdkörper nach Bau- oder Wetterereignissen",
      "Wiederkehrender Rückstau trotz Reinigung einzelner Abläufe",
    ],
    process: [
      "Erstaufnahme des Problems und Einordnung nach Dringlichkeit",
      "Prüfung, ob Reinigung, Spülung oder Inspektion erforderlich ist",
      "Einplanung der passenden Leistung wie Reinigung oder Inspektion",
      "Empfehlung weiterführender Maßnahmen bei Bedarf",
    ],
    immediateAction: [
      "Rückstau ernst nehmen und die Nutzung betroffener Entwässerungspunkte reduzieren",
      "Bei Keller- oder Hofentwässerung auch angrenzende Bereiche prüfen",
      "Wiederkehrende Störungen nicht nur symptomatisch behandeln",
    ],
    costHint:
      "Bei Kanalreinigungen beeinflussen Leitungszugang, Technikbedarf und Schadenstiefe den Aufwand. Eine genaue Ersteinschätzung spart Zeit und verbessert die Vorbereitung im Raum Frankfurt Rhein-Main.",
    featuredSnippet:
      "Eine Kanalreinigung ist besonders wichtig, wenn Rückstau auftritt oder die Ursache tiefer im Entwässerungssystem liegt. rohrreinigung-ffm24 übernimmt solche Fälle in Frankfurt und Rhein-Main fachgerecht.",
    metaTitle:
      "Kanalreinigung Frankfurt & Rhein-Main | Schnelle Hilfe bei Rückstau",
    metaDescription:
      "Kanalreinigung für Haus, Grundstück und Gewerbe in Frankfurt und Rhein-Main durch rohrreinigung-ffm24 bei Rückstau, Ablagerungen und Entwässerungsproblemen.",
    faq: [
      {
        question: "Wann reicht eine Abflussreinigung nicht mehr aus?",
        answer:
          "Wenn mehrere Entwässerungspunkte betroffen sind, Rückstau auftritt oder Probleme regelmäßig wiederkehren, liegt die Ursache oft tiefer im Leitungssystem oder Kanalbereich.",
      },
      {
        question: "Ist eine TV-Inspektion nach der Kanalreinigung sinnvoll?",
        answer:
          "Ja, vor allem bei wiederkehrenden Störungen oder Verdacht auf strukturelle Schäden. So lassen sich Ursache und weiterer Handlungsbedarf besser einschätzen.",
      },
    ],
  },
  {
    slug: "abflussreinigung",
    name: "Abflussreinigung",
    shortName: "Abflussreinigung",
    heroTitle: "Abflussreinigung bei Verstopfung oder langsamem Ablauf",
    heroDescription:
      "Ob Spüle, Dusche, Waschbecken oder Bodenablauf: rohrreinigung-ffm24 hilft schnell bei Abflussproblemen in Frankfurt und im Rhein-Main-Gebiet.",
    intro:
      "Eine Abflussreinigung ist meist dann nötig, wenn Wasser nur noch langsam abläuft, unangenehme Gerüche auftreten oder sich bereits eine vollständige Verstopfung ankündigt. Gerade bei Bad-, Küchen- oder Hauswirtschaftsabläufen lohnt sich eine schnelle Bearbeitung, bevor sich die Störung in tiefere Leitungsbereiche verlagert. rohrreinigung-ffm24 unterstützt Sie im Raum Frankfurt Rhein-Main mit kurzfristiger und fachgerechter Hilfe.",
    causes: [
      "Fett- und Seifenablagerungen im Siphon oder Rohrverlauf",
      "Haare, Hygieneartikel oder feste Rückstände im Ablauf",
      "Fehlgefälle oder wiederkehrende Verschmutzungen",
      "Teilweise verschlossene Leitungen mit Geruchsbildung",
    ],
    process: [
      "Schilderung des Problems und Auswahl des passenden Leistungsbereichs",
      "Prüfung von Ursache und Dringlichkeit",
      "Schnelle Einplanung des passenden Einsatzes",
      "Vor-Ort-Bearbeitung mit Fokus auf zügige Wiederherstellung der Nutzbarkeit",
    ],
    immediateAction: [
      "Kein kochendes Wasser oder aggressive Chemie einsetzen, wenn Ursache unklar ist",
      "Stehendes Wasser nach Möglichkeit reduzieren",
      "Bei Mietobjekten und Gewerbe frühzeitig dokumentieren, welche Abläufe betroffen sind",
    ],
    costHint:
      "Die Preisstruktur richtet sich unter anderem nach Tageszeit, Zugänglichkeit und Verstopfungsgrad. Schon beim ersten Kontakt für Frankfurt und Rhein-Main werden wichtige Eckdaten strukturiert erfasst.",
    featuredSnippet:
      "Eine Abflussreinigung hilft bei langsam ablaufendem Wasser, Gerüchen oder vollständiger Verstopfung. rohrreinigung-ffm24 kümmert sich in Frankfurt und Rhein-Main schnell um die passende Lösung.",
    metaTitle:
      "Abflussreinigung Frankfurt & Rhein-Main | Hilfe bei verstopftem Abfluss",
    metaDescription:
      "Abflussreinigung für Bad, Küche und Haushalt in Frankfurt und Rhein-Main durch rohrreinigung-ffm24.",
    faq: [
      {
        question: "Welche Anzeichen sprechen für eine professionelle Abflussreinigung?",
        answer:
          "Langsam ablaufendes Wasser, gluckernde Geräusche, schlechte Gerüche und wiederkehrende Verstopfungen sind typische Hinweise auf einen Reinigungsbedarf.",
      },
      {
        question: "Kann ich eine Abflussverstopfung selbst lösen?",
        answer:
          "Leichte Verschmutzungen lassen sich manchmal oberflächlich beheben. Wenn der Ablauf wiederholt Probleme macht oder gar nichts mehr abläuft, ist eine fachliche Lösung meist nachhaltiger.",
      },
    ],
  },
  {
    slug: "rohrspuelung",
    name: "Rohrspülung",
    shortName: "Rohrspülung",
    heroTitle: "Rohrspülung für Leitungen mit hartnäckigen Ablagerungen",
    heroDescription:
      "Bei hartnäckigen Ablagerungen, wiederkehrenden Engstellen oder zur Vorbereitung weiterer Arbeiten übernimmt rohrreinigung-ffm24 in Frankfurt und Rhein-Main die passende Rohrspülung.",
    intro:
      "Eine Rohrspülung ist sinnvoll, wenn Leitungen nicht nur punktuell verstopft sind, sondern über längere Abschnitte von Ablagerungen betroffen sind. Sie kommt häufig zum Einsatz, wenn Rohrreinigung, TV-Inspektion oder weitere technische Maßnahmen sauber vorbereitet werden sollen. Im Raum Frankfurt Rhein-Main ist sie besonders bei wiederkehrenden Leitungsproblemen eine wichtige Ergänzung.",
    causes: [
      "Schlammige oder fettige Ablagerungen über längere Leitungsabschnitte",
      "Wiederkehrende Engstellen nach bereits gelösten Verstopfungen",
      "Vorbereitung für TV-Inspektion oder weiterführende Arbeiten",
      "Verschmutzungen in stärker beanspruchten Leitungen",
    ],
    process: [
      "Einordnung des Leitungsproblems und Prüfung des Reinigungsbedarfs",
      "Prüfung der betroffenen Leitungsabschnitte und des sinnvollen Spülumfangs",
      "Einplanung der passenden Rohrspülung",
      "Bei Bedarf Abstimmung weiterer Maßnahmen wie TV-Inspektion oder Reinigung",
    ],
    immediateAction: [
      "Wiederkehrende Probleme nicht nur kurzfristig symptomatisch behandeln",
      "Mehrere betroffene Abläufe als Hinweis auf größere Ablagerungen ernst nehmen",
      "Vorherige Reinigungsmaßnahmen bei der Anfrage benennen",
    ],
    costHint:
      "Der Aufwand hängt von Leitungslänge, Zugänglichkeit und Verschmutzungsgrad ab. Eine gute Vorab-Beschreibung hilft im Raum Frankfurt Rhein-Main bei der passenden Vorbereitung.",
    featuredSnippet:
      "Eine Rohrspülung eignet sich, wenn Leitungen über längere Strecken von Ablagerungen betroffen sind. Sie wird oft vor TV-Inspektion oder weiteren Arbeiten eingesetzt.",
    metaTitle:
      "Rohrspülung Frankfurt & Rhein-Main | Leitungen gründlich spülen lassen",
    metaDescription:
      "Rohrspülung in Frankfurt und Rhein-Main für Ablagerungen, wiederkehrende Engstellen und vorbereitende Leitungsreinigung durch rohrreinigung-ffm24.",
    faq: [
      {
        question: "Wann ist eine Rohrspülung sinnvoll?",
        answer:
          "Vor allem bei flächigen Ablagerungen, wiederkehrenden Problemen oder wenn eine gründliche Reinigung vor TV-Inspektion oder weiteren Arbeiten nötig ist.",
      },
      {
        question: "Ist eine Rohrspülung dasselbe wie eine Rohrreinigung?",
        answer:
          "Nicht immer. Die Rohrspülung ist eine spezielle Reinigungsmaßnahme, die vor allem auf das Lösen und Austragen von Ablagerungen über längere Leitungsabschnitte abzielt.",
      },
    ],
  },
  {
    slug: "kanalspuelung",
    name: "Kanalspülung",
    shortName: "Kanalspülung",
    heroTitle: "Kanalspülung und Hochdruckspülung im Rhein-Main-Gebiet",
    heroDescription:
      "Für Grundleitungen, Grundstücksentwässerung und stärker belastete Entwässerungssysteme übernimmt rohrreinigung-ffm24 in Frankfurt und Rhein-Main die passende Kanalspülung.",
    intro:
      "Eine Kanalspülung oder Hochdruckspülung kommt vor allem dann in Betracht, wenn größere Leitungsbereiche, Grundleitungen oder kanalnahe Systeme gereinigt werden müssen. Besonders bei Rückstau, Schlamm, Sand oder stärkeren Ablagerungen braucht es eine Maßnahme, die nicht nur den einzelnen Ablauf, sondern den gesamten betroffenen Entwässerungsabschnitt im Blick hat.",
    causes: [
      "Ablagerungen in Grundleitungen oder weiterführenden Entwässerungssystemen",
      "Schlamm, Sand oder Fremdstoffe nach Bau- oder Wetterereignissen",
      "Wiederkehrende Rückstauprobleme",
      "Vorbereitende Reinigung vor Inspektion oder Sanierungsmaßnahmen",
    ],
    process: [
      "Aufnahme der Störung und Einordnung des Spülbedarfs",
      "Prüfung der passenden Spül- oder Hochdrucktechnik",
      "Einplanung einer passenden Kanalspülung",
      "Bei Bedarf Kombination mit TV-Inspektion oder Kanalreinigung",
    ],
    immediateAction: [
      "Rückstau und Verschmutzungen im Außenbereich frühzeitig dokumentieren",
      "Keller- und Hofentwässerung mit in die Problembeschreibung aufnehmen",
      "Wiederkehrende Störungen nicht nur oberflächlich behandeln lassen",
    ],
    costHint:
      "Kanalspülungen hängen von Leitungslänge, Zugänglichkeit, Technikbedarf und Verschmutzungsgrad ab. Für Frankfurt und Rhein-Main verbessert eine genaue Erstbeschreibung die Vorbereitung.",
    featuredSnippet:
      "Eine Kanalspülung ist sinnvoll, wenn Grundleitungen oder größere Entwässerungsabschnitte von Ablagerungen, Schlamm oder Rückstau betroffen sind.",
    metaTitle:
      "Kanalspülung Frankfurt & Rhein-Main | Hochdruckspülung schnell anfragen",
    metaDescription:
      "Kanalspülung und Hochdruckspülung in Frankfurt und Rhein-Main für Grundleitungen, Rückstau und starke Ablagerungen durch rohrreinigung-ffm24.",
    faq: [
      {
        question: "Was ist der Unterschied zwischen Kanalreinigung und Kanalspülung?",
        answer:
          "Die Kanalspülung beschreibt gezielt den Einsatz von Spültechnik, häufig als Hochdruckspülung. Kanalreinigung ist der umfassendere Leistungsbegriff für Reinigung und weitere Maßnahmen.",
      },
      {
        question: "Wann ist eine Hochdruckspülung sinnvoll?",
        answer:
          "Vor allem bei stärkeren Ablagerungen, größeren Leitungsabschnitten oder wenn Rückstau und Schlamm tiefer im Entwässerungssystem liegen.",
      },
    ],
  },
  {
    slug: "wc-verstopft",
    name: "WC verstopft",
    shortName: "WC verstopft",
    emergency: true,
    heroTitle: "WC verstopft: schnelle Hilfe bei akuter Störung",
    heroDescription:
      "Wenn das WC nicht mehr abläuft, Wasser ansteigt oder Rückstau entsteht, hilft rohrreinigung-ffm24 in Frankfurt und Rhein-Main kurzfristig weiter.",
    intro:
      "Ein verstopftes WC ist für Haushalte, Mieter, Gastronomie oder gewerbliche Sanitärbereiche oft ein akuter Notfall. Sobald Wasser stehen bleibt, ansteigt oder zurückdrückt, ist eine schnelle und saubere Bearbeitung wichtig. rohrreinigung-ffm24 priorisiert solche Fälle in Frankfurt und Rhein-Main und hilft bei der zügigen Einordnung und Bearbeitung.",
    causes: [
      "Papier- und Feststoffansammlungen",
      "Fremdkörper oder Hygieneartikel in der Leitung",
      "Tieferliegende Verstopfungen im Fallrohr oder Sammelstrang",
      "Rückstau aus weiterführenden Leitungsbereichen",
    ],
    process: [
      "Dringliche Aufnahme des Problems mit kurzer Lageeinschätzung",
      "Prüfung, ob weitere Sanitärbereiche betroffen sind",
      "Schnelle Einplanung für kurzfristige Unterstützung",
      "Bearbeitung vor Ort und Einschätzung möglicher Folgeursachen",
    ],
    immediateAction: [
      "Spülung nicht mehrfach betätigen, wenn Wasser bereits steigt",
      "Weitere Nutzung des WCs vorübergehend stoppen",
      "Bei Mehrfamilienhäusern prüfen, ob weitere Einheiten betroffen sind",
    ],
    costHint:
      "Bei WC-Verstopfungen beeinflussen Dringlichkeit, Uhrzeit und die Lage der Ursache den Aufwand. Eine klare Problembeschreibung hilft rohrreinigung-ffm24 bei der schnellen Vorbereitung.",
    featuredSnippet:
      "Ist das WC verstopft, sollte nicht weiter gespült werden. rohrreinigung-ffm24 hilft in Frankfurt und Rhein-Main schnell und fachgerecht weiter.",
    metaTitle:
      "WC verstopft Frankfurt & Rhein-Main | Notdienst schnell anfragen",
    metaDescription:
      "WC verstopft und akuter Handlungsbedarf in Frankfurt oder Rhein-Main? rohrreinigung-ffm24 hilft schnell für Haushalt, Vermieter, Hausverwaltung und Gewerbe.",
    faq: [
      {
        question: "Was tun, wenn das WC überläuft?",
        answer:
          "Die Spülung nicht erneut betätigen, Wasserzulauf wenn möglich reduzieren und schnell fachliche Hilfe anfragen. Überlaufendes Wasser kann zusätzliche Schäden verursachen.",
      },
      {
        question: "Ist ein verstopftes WC immer ein Notfall?",
        answer:
          "Nicht jeder Fall ist kritisch, aber bei fehlender Ausweichmöglichkeit, Rückstau oder gewerblicher Nutzung ist eine schnelle Bearbeitung meist sinnvoll.",
      },
    ],
  },
  {
    slug: "kueche-abfluss-verstopft",
    name: "Küche Abfluss verstopft",
    shortName: "Küche",
    heroTitle: "Küche Abfluss verstopft: Hilfe bei Spüle und Küchenleitung",
    heroDescription:
      "Fett, Speisereste und Ablagerungen führen in Küchenleitungen oft zu hartnäckigen Verstopfungen. rohrreinigung-ffm24 hilft in Frankfurt und Rhein-Main schnell weiter.",
    intro:
      "Wenn der Küchenabfluss verstopft ist, staut sich Wasser in der Spüle, läuft nur noch langsam ab oder es kommt zu deutlicher Geruchsbildung. Gerade bei wiederkehrenden Problemen reicht eine kurzfristige Selbsthilfe oft nicht aus, weil Fett- und Speisereste tiefer im Leitungsverlauf sitzen. rohrreinigung-ffm24 prüft solche Fälle in Frankfurt und Rhein-Main fachlich und sorgt für eine zuverlässige Wiederherstellung der Entwässerung.",
    causes: [
      "Fett, Öl und Speisereste im Leitungsverlauf",
      "Kaffeesatz, Stärke und andere klebrige Rückstände",
      "Ablagerungen im Siphon oder hinter Wandanschlüssen",
      "Länger bestehende Teilverstopfungen mit Geruchsbildung",
    ],
    process: [
      "Erfassung des konkreten Küchenproblems und der bisherigen Symptome",
      "Einordnung, ob Siphonbereich oder tieferliegende Küchenleitung betroffen sind",
      "Einplanung der passenden Maßnahme",
      "Bedarfsgerechte Bearbeitung mit Fokus auf nachhaltige Entwässerung",
    ],
    immediateAction: [
      "Keine fetthaltigen Rückstände mehr nachspülen",
      "Aggressive Chemie möglichst vermeiden",
      "Bei Spülmaschinenanbindung auch angrenzende Abläufe beobachten",
    ],
    costHint:
      "Je nach Leitungszugang und Stärke der Ablagerungen kann der Aufwand variieren. Eine genaue Beschreibung des Problems unterstützt eine gezielte Vorbereitung im Raum Frankfurt Rhein-Main.",
    featuredSnippet:
      "Ist der Küchenabfluss verstopft, liegen häufig Fett- und Speisereste in der Leitung vor. rohrreinigung-ffm24 hilft in Frankfurt und Rhein-Main schnell bei der passenden Reinigung.",
    metaTitle:
      "Küche Abfluss verstopft Frankfurt & Rhein-Main | Schnelle Hilfe",
    metaDescription:
      "Verstopfter Küchenabfluss in Frankfurt und Rhein-Main? rohrreinigung-ffm24 hilft schnell bei stehender Spüle, Geruch oder wiederkehrender Verstopfung.",
    faq: [
      {
        question: "Warum verstopft der Küchenabfluss so häufig?",
        answer:
          "In Küchen sammeln sich Fett, Speisereste und feinpartikuläre Rückstände besonders schnell. Dadurch entstehen oft schleichende Verengungen in der Leitung.",
      },
      {
        question: "Hilft heißes Wasser bei einer Küchenverstopfung?",
        answer:
          "Bei leichten Ablagerungen kann das kurzfristig helfen, bei tieferliegenden oder stärkeren Verstopfungen reicht es jedoch meist nicht aus und verschiebt das Problem nur.",
      },
    ],
  },
  {
    slug: "bad-abfluss-verstopft",
    name: "Bad Abfluss verstopft",
    shortName: "Bad",
    heroTitle: "Bad Abfluss verstopft: Hilfe für Dusche, Waschbecken und Wanne",
    heroDescription:
      "Langsam ablaufendes Wasser in Dusche, Waschbecken oder Wanne ist oft ein klares Warnsignal. rohrreinigung-ffm24 hilft in Frankfurt und Rhein-Main schnell weiter.",
    intro:
      "Ein verstopfter Badabfluss betrifft häufig Dusche, Waschbecken oder Badewanne und kündigt sich oft früh durch langsamen Ablauf, Gerüche oder stehendes Wasser an. Typische Ursachen sind Haare, Seifenreste und Kalkablagerungen, die sich im Ablauf oder tiefer im Rohrsystem festsetzen. rohrreinigung-ffm24 hilft in Frankfurt und im Rhein-Main-Gebiet schnell und fachgerecht weiter.",
    causes: [
      "Haare und Seifenreste im Ablaufbereich",
      "Kalk in Verbindung mit organischen Ablagerungen",
      "Teilweise verschlossene Siphons",
      "Wiederkehrende Verstopfungen im Rohrverlauf",
    ],
    process: [
      "Aufnahme, welcher Sanitärbereich betroffen ist",
      "Prüfung, ob mehrere Abläufe im Bad eingeschränkt sind",
      "Einplanung der passenden Reinigung",
      "Schnelle Bearbeitung vor Ort und Hinweis auf Präventionsmaßnahmen",
    ],
    immediateAction: [
      "Stehendes Wasser möglichst nicht weiter belasten",
      "Auf mehrere betroffene Abläufe im Bad achten",
      "Bei häufiger Wiederholung nicht nur den Siphon reinigen",
    ],
    costHint:
      "Der Aufwand variiert je nach Zugänglichkeit, Stärke der Ablagerung und möglicher Ausbreitung im Leitungsverlauf. Für Frankfurt und Rhein-Main hilft eine präzise Vorab-Beschreibung bei der Vorbereitung.",
    featuredSnippet:
      "Ein verstopfter Badabfluss entsteht oft durch Haare, Seife und Kalk. rohrreinigung-ffm24 kümmert sich in Frankfurt und Rhein-Main kurzfristig um die passende Hilfe.",
    metaTitle:
      "Bad Abfluss verstopft Frankfurt & Rhein-Main | Hilfe für Dusche und Wanne",
    metaDescription:
      "Badabfluss verstopft in Frankfurt und Rhein-Main? rohrreinigung-ffm24 hilft schnell bei Problemen in Dusche, Badewanne und Waschbecken.",
    faq: [
      {
        question: "Was ist typisch für einen verstopften Badabfluss?",
        answer:
          "Langsamer Wasserabfluss, Gerüche, gluckernde Geräusche und stehendes Wasser in Dusche oder Waschbecken gehören zu den häufigsten Anzeichen.",
      },
      {
        question: "Wann sollte eine tieferliegende Ursache geprüft werden?",
        answer:
          "Wenn mehrere Abläufe betroffen sind oder das Problem trotz Reinigung des Siphons wiederkehrt, ist eine fachliche Prüfung des Rohrverlaufs sinnvoll.",
      },
    ],
  },
  {
    slug: "rohrreinigung-notdienst",
    name: "Rohrreinigung Notdienst",
    shortName: "Notdienst",
    emergency: true,
    heroTitle: "Rohrreinigung Notdienst für akute Verstopfungen",
    heroDescription:
      "Bei Rückstau, Totalausfall oder akutem Entwässerungsproblem hilft rohrreinigung-ffm24 in Frankfurt und Rhein-Main schnell weiter.",
    intro:
      "Der Rohrreinigung Notdienst ist besonders dann gefragt, wenn Wasser nicht mehr abläuft, Sanitärbereiche ausfallen oder Gebäudeschäden drohen. In solchen Situationen zählt keine lange Erklärung, sondern eine schnelle Lageeinschätzung, klare Erreichbarkeit und ein zeitnah vorbereiteter Einsatz. rohrreinigung-ffm24 priorisiert solche Fälle im Raum Frankfurt Rhein-Main.",
    causes: [
      "Komplette Verstopfungen mit Rückstaugefahr",
      "Betroffene WC-, Bad- oder Küchenleitungen gleichzeitig",
      "Akute Probleme außerhalb regulärer Zeiten",
      "Gefahr für Nutzungsausfall oder Wasserschäden",
    ],
    process: [
      "Priorisierte Aufnahme nach Störung, Ort und Dringlichkeit",
      "Schnelle Notdiensteinplanung",
      "Bearbeitung durch den passenden Einsatz",
      "Weitergabe relevanter Infos für einen möglichst zügigen Einsatz",
    ],
    immediateAction: [
      "Wasserzufuhr und Nutzung betroffener Bereiche reduzieren",
      "Gefährdete Räume dokumentieren und sichern",
      "Rückstau im Keller oder Sanitärbereich nicht aufschieben",
    ],
    costHint:
      "Notdiensteinsätze sind häufig zeitkritisch. Aufwand und Konditionen hängen von Störung, Zeitpunkt und technischem Zugang ab. Gerade in Frankfurt und Rhein-Main sorgt eine gute Vorqualifizierung für schnellere Hilfe.",
    featuredSnippet:
      "Ein Rohrreinigung Notdienst ist sinnvoll, wenn akute Verstopfungen, Rückstau oder ein kompletter Ausfall der Entwässerung vorliegen. rohrreinigung-ffm24 hilft in Frankfurt und Rhein-Main schnell weiter.",
    metaTitle:
      "Rohrreinigung Notdienst Frankfurt & Rhein-Main | Schnelle Hilfe",
    metaDescription:
      "Rohrreinigung Notdienst für Haushalt, Vermieter und Gewerbe in Frankfurt und Rhein-Main durch rohrreinigung-ffm24.",
    faq: [
      {
        question: "Wann ist ein Rohrreinigung Notdienst sinnvoll?",
        answer:
          "Wenn die Entwässerung komplett ausfällt, Wasser zurückdrückt oder mehrere Bereiche betroffen sind, ist ein zeitnaher Einsatz häufig sinnvoll.",
      },
      {
        question: "Was sollte ich für die Anfrage bereithalten?",
        answer:
          "Hilfreich sind Angaben zu den betroffenen Bereichen, zur Dringlichkeit, zum Gebäudetyp und dazu, ob bereits Rückstau oder Wasseraustritt vorliegt.",
      },
    ],
  },
  {
    slug: "tv-inspektion",
    name: "TV-Inspektion",
    shortName: "TV-Inspektion",
    heroTitle: "TV-Inspektion zur präzisen Ursachenermittlung",
    heroDescription:
      "Bei unklaren oder wiederkehrenden Problemen übernimmt rohrreinigung-ffm24 in Frankfurt und Rhein-Main die gezielte TV-Inspektion von Leitungen und Kanälen.",
    intro:
      "Eine TV-Inspektion schafft Klarheit, wenn Verstopfungen wiederholt auftreten oder der genaue Zustand der Leitung beurteilt werden soll. Sie ist besonders sinnvoll, wenn eine reine Reinigung das Problem nicht dauerhaft löst, Schäden vermutet werden oder eine belastbare Grundlage für weitere Entscheidungen gebraucht wird. rohrreinigung-ffm24 arbeitet dabei mit passender Kameratechnik für Frankfurt und Rhein-Main.",
    causes: [
      "Unklare Verstopfungsursachen trotz vorheriger Reinigung",
      "Verdacht auf Versatz, Risse oder Wurzeleinwuchs",
      "Wiederkehrender Rückstau oder Geruchsprobleme",
      "Dokumentationsbedarf bei Verwaltung oder Vermietung",
    ],
    process: [
      "Einordnung, ob eine Untersuchung statt einer reinen Reinigung sinnvoll ist",
      "Prüfung der passenden Kameratechnik",
      "Einplanung der passenden Inspektionsleistung",
      "Weitergabe der Ergebnisse als Grundlage für die nächsten Schritte",
    ],
    immediateAction: [
      "Wiederkehrende Symptome dokumentieren",
      "Vorherige Maßnahmen und bekannte Problemstellen bereithalten",
      "Bei Immobilienverwaltung die betroffenen Einheiten benennen",
    ],
    costHint:
      "Die Kosten richten sich nach Zugänglichkeit, Leitungsweg und Dokumentationsbedarf. Eine Untersuchung kann gerade im Raum Frankfurt Rhein-Main Folgekosten durch wiederholte Notfalleinsätze reduzieren.",
    featuredSnippet:
      "Eine TV-Inspektion hilft, wenn die Ursache einer Verstopfung unklar bleibt oder Leitungen auf Schäden geprüft werden sollen. rohrreinigung-ffm24 arbeitet in Frankfurt und Rhein-Main mit passender Technik.",
    metaTitle:
      "TV-Inspektion Frankfurt & Rhein-Main | Ursache präzise prüfen lassen",
    metaDescription:
      "TV-Inspektion für wiederkehrende Verstopfungen, Rückstau und Schadensverdacht in Frankfurt und Rhein-Main durch rohrreinigung-ffm24.",
    faq: [
      {
        question: "Wann ist eine TV-Inspektion besonders sinnvoll?",
        answer:
          "Wenn Verstopfungen wiederkehren, Rückstau entsteht oder der Verdacht auf bauliche Schäden im Leitungsverlauf besteht, liefert die Untersuchung wertvolle Klarheit.",
      },
      {
        question: "Ersetzt die TV-Inspektion eine Reinigung?",
        answer:
          "Nicht immer. Sie dient in erster Linie der Diagnose und kann ergänzend oder nach einer Reinigung sinnvoll sein, wenn die Ursache genauer bewertet werden soll.",
      },
    ],
  },
  {
    slug: "abpumpen",
    name: "Abpumpen",
    shortName: "Abpumpen",
    heroTitle: "Abpumpen bei Rückstau, Schächten und verschmutztem Wasser",
    heroDescription:
      "Wenn Wasser, Schlamm oder verschmutzte Flüssigkeiten entfernt werden müssen, hilft rohrreinigung-ffm24 in Frankfurt und Rhein-Main schnell beim Abpumpen und bei begleitenden Maßnahmen.",
    intro:
      "Abpumpen wird häufig bei Rückstau, überfluteten Bereichen, Schächten, Gruben oder stark verschmutzten Entwässerungssituationen benötigt. Gerade bei Kellern, Schachtanlagen oder Pumpensümpfen ist wichtig, nicht nur Flüssigkeiten zu entfernen, sondern auch die Ursache und den weiteren technischen Bedarf im Blick zu behalten. Im Zusammenspiel mit Rohr- und Kanalreinigung ist eine schnelle und präzise Bearbeitung besonders wichtig.",
    causes: [
      "Rückstau in Kellern, Schächten oder Entwässerungsbereichen",
      "Stehendes oder verschmutztes Wasser nach Verstopfungen",
      "Flüssigkeitsansammlungen in Pumpensümpfen oder Sammelstellen",
      "Begleitende Maßnahmen vor Reinigung, Inspektion oder Sanierung",
    ],
    process: [
      "Aufnahme von Ort, Art der Flüssigkeit und Dringlichkeit",
      "Prüfung der passenden Pumptechnik",
      "Einplanung des passenden Einsatzes zum Abpumpen",
      "Bei Bedarf Kombination mit Reinigung, Spülung oder Inspektion",
    ],
    immediateAction: [
      "Betroffene Bereiche möglichst sichern und weitere Nutzung reduzieren",
      "Art und Ausmaß der Flüssigkeit bei der Anfrage so genau wie möglich beschreiben",
      "Bei Rückstau nicht nur das Wasser, sondern auch die Ursache mit betrachten",
    ],
    costHint:
      "Die Kosten richten sich nach Menge, Zugänglichkeit, Verschmutzungsgrad und technischem Aufwand. Eine genaue Erstaufnahme hilft bei der schnellen Vorbereitung im Raum Frankfurt Rhein-Main.",
    featuredSnippet:
      "Abpumpen ist sinnvoll, wenn Rückstau, stehendes Wasser oder verschmutzte Flüssigkeiten schnell entfernt werden müssen. Oft ist es der erste Schritt vor weiteren Reinigungsmaßnahmen.",
    metaTitle:
      "Abpumpen Frankfurt & Rhein-Main | Hilfe bei Rückstau und stehendem Wasser",
    metaDescription:
      "Abpumpen in Frankfurt und Rhein-Main bei Rückstau, Schächten, Kellern und verschmutztem Wasser durch rohrreinigung-ffm24.",
    faq: [
      {
        question: "Wann ist Abpumpen sinnvoll?",
        answer:
          "Vor allem bei Rückstau, stehendem Wasser, Schächten, Pumpensümpfen oder wenn verschmutzte Flüssigkeiten vor weiteren Maßnahmen entfernt werden müssen.",
      },
      {
        question: "Kann Abpumpen mit Reinigung oder Inspektion kombiniert werden?",
        answer:
          "Ja. Häufig ist Abpumpen nur ein erster Schritt, bevor Rohrreinigung, Kanalspülung oder TV-Inspektion sinnvoll durchgeführt werden können.",
      },
    ],
  },
  {
    slug: "kanalinspektion",
    name: "Kanalinspektion",
    shortName: "Kanalinspektion",
    heroTitle: "Kanalinspektion bei Rückstau, Schäden oder Verdachtsfällen",
    heroDescription:
      "Für Grundstücksentwässerung und tieferliegende Leitungsprobleme übernimmt rohrreinigung-ffm24 in Frankfurt und Rhein-Main die gezielte Kanalinspektion.",
    intro:
      "Eine Kanalinspektion hilft bei wiederkehrenden Störungen, Rückstau oder dem Verdacht auf Schäden im Kanal- und Grundleitungsbereich. Sie ist besonders wichtig, wenn nicht nur eine kurzfristige Entstörung, sondern eine belastbare technische Beurteilung des tieferliegenden Entwässerungssystems gebraucht wird. rohrreinigung-ffm24 schafft damit im Raum Frankfurt Rhein-Main eine fundierte Entscheidungsbasis für weitere Maßnahmen.",
    causes: [
      "Wiederkehrender Rückstau im Gebäude oder Hofbereich",
      "Verdacht auf Schäden im Grundleitungssystem",
      "Unklare Ursache trotz vorheriger Reinigungen",
      "Prüfbedarf bei älteren Gebäuden oder vor Sanierungen",
    ],
    process: [
      "Vorqualifizierung der Störung und Einordnung des Prüfbedarfs",
      "Abstimmung der passenden Inspektionstechnik",
      "Einplanung eines geeigneten Einsatzes",
      "Dokumentationsbasis für weitere Entscheidungen",
    ],
    immediateAction: [
      "Wiederkehrende Rückstauereignisse dokumentieren",
      "Keller- und Außenbereiche mit einbeziehen",
      "Vorherige Reparaturen oder bekannte Problemstellen benennen",
    ],
    costHint:
      "Inspektionsaufwand und Dokumentation richten sich nach Leitungslänge, Zugänglichkeit und technischem Umfang. Für Frankfurt und Rhein-Main erleichtert eine gute Vorab-Beschreibung die passende Vorbereitung.",
    featuredSnippet:
      "Eine Kanalinspektion ist besonders sinnvoll, wenn Rückstau wiederkehrt oder ein strukturelles Problem im Kanalbereich vermutet wird. rohrreinigung-ffm24 hilft in Frankfurt und Rhein-Main fachgerecht weiter.",
    metaTitle:
      "Kanalinspektion Frankfurt & Rhein-Main | Ursachen bei Rückstau prüfen",
    metaDescription:
      "Kanalinspektion für Grundstück, Hausanschluss und Grundleitung in Frankfurt und Rhein-Main durch rohrreinigung-ffm24.",
    faq: [
      {
        question: "Worin liegt der Unterschied zwischen Kanalinspektion und TV-Inspektion?",
        answer:
          "Die TV-Inspektion kann sich auf einzelne Leitungsbereiche beziehen, während die Kanalinspektion häufig tieferliegende oder umfangreichere Entwässerungsabschnitte betrachtet.",
      },
      {
        question: "Wann ist eine Inspektion wichtiger als eine erneute Reinigung?",
        answer:
          "Wenn Probleme trotz wiederholter Reinigung zurückkehren oder ein struktureller Schaden vermutet wird, ist eine Inspektion oft der nächste sinnvolle Schritt.",
      },
    ],
  },
];

export const serviceMap = new Map(services.map((service) => [service.slug, service]));
