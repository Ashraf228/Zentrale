export const homeTrustVisuals = [
  {
    src: "/images/rohrreinigung-technik.webp",
    alt: "Rohrreinigung- und Spültechnik in einem sauberen Technikraum im Einsatz",
    eyebrow: "Rohrreinigung",
    title: "Saubere Technik statt beliebiger Stockbilder",
    description:
      "Bilder von Werkzeug, Leitungen, Revisionsöffnungen und sauber vorbereiteten Einsatzsituationen vermitteln Fachlichkeit und technische Kompetenz.",
  },
  {
    src: "/images/tv-inspektion-monitor.webp",
    alt: "TV-Inspektion einer Leitung mit Monitor und Kameraauswertung",
    eyebrow: "TV-Inspektion",
    title: "Diagnose schafft Vertrauen",
    description:
      "Kontrollierte Aufnahmen von Kameratechnik, Monitoren und Leitungsdiagnostik unterstreichen Präzision und professionelles Vorgehen.",
  },
  {
    src: "/images/abpumpen-keller.webp",
    alt: "Abpumpen und Entwässerungstechnik bei einem Einsatz im Kellerbereich",
    eyebrow: "Abpumpen",
    title: "Echte Einsatznähe für akute Fälle",
    description:
      "Visuals mit Rückstau, Pumptechnik und strukturierten Arbeitsabläufen wirken glaubwürdiger als werbliche Symbolfotos ohne technischen Bezug.",
  },
] as const;

export const heroVisual = {
  src: "/images/hero-rohrservice.webp",
  alt: "Fachkraft von rohrreinigung-ffm24 bei einem professionell vorbereiteten Einsatz in Frankfurt",
  eyebrow: "Frankfurt Rhein-Main",
  title: "Rohr- und Kanalservice mit professionellem Auftritt",
  description:
    "Ein starkes Hero-Bild sollte Fachkraft, Fahrzeug oder Technik in einem realistischen Umfeld zeigen und sofort Seriosität, Schnelligkeit und technische Kompetenz ausstrahlen.",
} as const;

export const aboutVisual = {
  src: "/images/einsatz-team.webp",
  alt: "Einsatzvorbereitung mit Technik und Arbeitsausrüstung von rohrreinigung-ffm24",
  eyebrow: "Arbeitsweise",
  title: "Vertrauen entsteht durch glaubwürdige Einsatzdarstellung",
  description:
    "Auf der Über-uns-Seite stärken Motive aus Einsatzvorbereitung, Technik und sauberer Arbeitsumgebung die Wahrnehmung als etablierter Fachbetrieb.",
} as const;

export const serviceVisuals: Record<
  string,
  { src: string; alt: string; eyebrow: string; title: string; description: string }
> = {
  rohrreinigung: {
    src: "/images/rohrreinigung-technik.webp",
    alt: "Rohrreinigung mit professioneller Werkzeug- und Spültechnik",
    eyebrow: "Leistungsbild",
    title: "Professionelle Rohrtechnik im Fokus",
    description:
      "Technische Motive mit Leitungen, Werkzeug und Reinigungsgerät unterstützen die Glaubwürdigkeit bei akuten und planbaren Fällen.",
  },
  kanalreinigung: {
    src: "/images/kanalreinigung-schacht.webp",
    alt: "Kanalreinigung mit Schacht, Schlauchsystem und professioneller Technik",
    eyebrow: "Leistungsbild",
    title: "Kanalservice mit klarem Technikbezug",
    description:
      "Schächte, Schläuche und kontrollierte Arbeitssituationen sind für Kanalthemen deutlich vertrauensstärker als allgemeine Handwerkerfotos.",
  },
  abflussreinigung: {
    src: "/images/rohrreinigung-technik.webp",
    alt: "Abflussreinigung mit professioneller Reinigungstechnik",
    eyebrow: "Leistungsbild",
    title: "Saubere Visuals für schnelle Hilfe",
    description:
      "Klare Technikmotive aus Bad, Küche und Leitungsbereich stärken die Wahrnehmung als lösungsorientierter Fachbetrieb.",
  },
  rohrspuelung: {
    src: "/images/rohrreinigung-technik.webp",
    alt: "Rohrspülung mit Schlauchsystem und Reinigungsgerät",
    eyebrow: "Leistungsbild",
    title: "Spültechnik sichtbar machen",
    description:
      "Bei Spülleistungen sollten Druckschlauch, Technik und sauberer Leitungsbezug im Bild sofort erkennbar sein.",
  },
  kanalspuelung: {
    src: "/images/kanalreinigung-schacht.webp",
    alt: "Kanalspülung mit Schachtzugang und Hochdrucktechnik",
    eyebrow: "Leistungsbild",
    title: "Hochdruck- und Spültechnik glaubwürdig zeigen",
    description:
      "Kanalspülungsseiten gewinnen deutlich an Vertrauen, wenn der visuelle Fokus auf echter Technik und Einsatzumfeld liegt.",
  },
  "wc-verstopft": {
    src: "/images/rohrreinigung-technik.webp",
    alt: "Schnelle Hilfe bei verstopftem WC mit professioneller Ausrüstung",
    eyebrow: "Leistungsbild",
    title: "Akute Fälle professionell darstellen",
    description:
      "Auch bei Notfallthemen sollte das Bild ruhig, technisch und seriös wirken statt dramatisch oder überinszeniert.",
  },
  "kueche-abfluss-verstopft": {
    src: "/images/rohrreinigung-technik.webp",
    alt: "Reinigung eines verstopften Küchenabflusses mit fachlicher Ausrüstung",
    eyebrow: "Leistungsbild",
    title: "Küchenmotive mit echtem Problembezug",
    description:
      "Detailaufnahmen von Spüle, Leitung und Reinigungsgerät wirken glaubwürdiger als allgemeine Sanitärbilder.",
  },
  "bad-abfluss-verstopft": {
    src: "/images/rohrreinigung-technik.webp",
    alt: "Badabfluss-Reinigung mit Werkzeug und sauberem Arbeitsbereich",
    eyebrow: "Leistungsbild",
    title: "Bad und Ablauf klar im Bild",
    description:
      "Seriöse Motive aus Dusche, Waschbecken oder Ablaufbereich stärken den Eindruck schneller und fachgerechter Hilfe bei akuten Problemen.",
  },
  "rohrreinigung-notdienst": {
    src: "/images/einsatz-team.webp",
    alt: "Schneller Notdiensteinsatz mit professioneller Ausrüstung und Fahrzeugnähe",
    eyebrow: "Leistungsbild",
    title: "Notdienst ohne Alarm-Optik",
    description:
      "Ein professioneller Einsatzlook mit klarer Technik wirkt seriöser als rote Warnsymbolik oder plakative Notfallgrafiken.",
  },
  "tv-inspektion": {
    src: "/images/tv-inspektion-monitor.webp",
    alt: "TV-Inspektion mit Kameratechnik und Monitor zur Leitungsdiagnose",
    eyebrow: "Leistungsbild",
    title: "Diagnostik sichtbar machen",
    description:
      "Bei TV-Inspektion überzeugen Bilder von Monitor, Kamera und Leitungsprüfung besonders stark.",
  },
  abpumpen: {
    src: "/images/abpumpen-keller.webp",
    alt: "Abpumptechnik bei Rückstau und Wasseransammlung im Gebäude",
    eyebrow: "Leistungsbild",
    title: "Pumptechnik mit klarer Situation",
    description:
      "Für Abpumpen und Rückstau helfen Bilder von Pumpen, Schläuchen und kontrollierter Wasserentnahme beim Vertrauensaufbau.",
  },
  kanalinspektion: {
    src: "/images/kanalinspektion-kamera.webp",
    alt: "Kanalinspektion mit technischer Auswertung und Kamerabild",
    eyebrow: "Leistungsbild",
    title: "Inspektion nachvollziehbar visualisieren",
    description:
      "Inspektionsleistungen wirken vertrauenswürdiger, wenn Technik, Auswertung und der fachliche Kontext erkennbar sind.",
  },
};
