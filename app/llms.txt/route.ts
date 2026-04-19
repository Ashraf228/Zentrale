import { services } from "@/data/services";
import { siteConfig } from "@/data/site";

export function GET() {
  const topServices = services
    .slice(0, 9)
    .map((service) => `- ${service.name}: ${siteConfig.siteUrl}/leistungen/${service.slug}`)
    .join("\n");

  const content = `# ${siteConfig.brandName}

> Rohrreinigung, Kanalreinigung, TV-Inspektion, Spülungen und Abpumpen in Frankfurt und Rhein-Main.

## Website
${siteConfig.siteUrl}

## Kurzbeschreibung
${siteConfig.brandName} ist auf Rohrreinigung, Kanalreinigung, Abflussreinigung, TV-Inspektion, Rohrspülung, Kanalspülung, Abpumpen und Kanalinspektion im Raum Frankfurt am Main und Rhein-Main ausgerichtet.

## Zielgruppen
- Privathaushalte
- Vermieter
- Hausverwaltungen
- Gewerbekunden

## Regionen
- Frankfurt am Main
- Offenbach am Main
- Wiesbaden
- Mainz
- Darmstadt
- Hanau
- Bad Homburg
- Oberursel
- Neu-Isenburg
- Hofheim am Taunus

## Wichtige Leistungen
${topServices}

## Wichtige URLs
- Startseite: ${siteConfig.siteUrl}/
- Leistungen: ${siteConfig.siteUrl}/leistungen
- Standorte: ${siteConfig.siteUrl}/standorte
- Kontakt: ${siteConfig.siteUrl}/kontakt
- FAQ: ${siteConfig.siteUrl}/faq
- KI-Übersicht: ${siteConfig.siteUrl}/ki-uebersicht

## Häufige Anfragen
- Rohrreinigung Frankfurt
- Kanalreinigung Frankfurt
- TV-Inspektion Frankfurt
- Abflussreinigung Offenbach
- Kanalreinigung Wiesbaden
- Rohrreinigung Notdienst Rhein-Main
- Rückstau Hilfe Frankfurt
- Abpumpen Keller Frankfurt

## Kontakt
- Telefon: ${siteConfig.phoneDisplay}
- E-Mail: ${siteConfig.email}
`;

  return new Response(content, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
    },
  });
}
