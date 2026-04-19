# Tracking-Setup für rohrreinigung-ffm24

## Bereits im Projekt vorbereitet

- `GTM` via `NEXT_PUBLIC_GTM_ID`
- `GA4` via `NEXT_PUBLIC_GA_ID`
- `Microsoft Clarity` via `NEXT_PUBLIC_CLARITY_ID`
- Pageviews im App Router
- Klick-Tracking für Telefon-CTAs und Formular-CTAs
- Formular-Tracking für `form_start`, `generate_lead`, `contact_form_submit`
- Lead-Attribution mit:
  - `landing_page`
  - `current_page`
  - `referrer`
  - `utm_source`
  - `utm_medium`
  - `utm_campaign`
  - `utm_term`
  - `utm_content`
  - `gclid`
  - `fbclid`

## Empfohlene GA4-Conversions

- `phone_click`
- `generate_lead`
- `contact_form_submit`

## Empfohlene GA4 Custom Dimensions

- `cta_location`
- `landing_page`
- `current_page`
- `utm_source`
- `utm_medium`
- `utm_campaign`
- `lead_type`
- `city`

## Typische Auswertungen

- Welche Landingpage erzeugt die meisten Anrufe?
- Welche Stadtseiten bringen die meisten Formular-Leads?
- Welche Service-Seiten konvertieren besser: `Rohrreinigung`, `TV-Inspektion` oder `Abpumpen`?
- Welche Kampagnen oder Quellen (`utm_source` / `utm_campaign`) führen zu echten Leads?

## Nächster technischer Schritt

Das Formular ist aktuell trackingfähig, aber noch nicht an CRM, Mailversand oder Lead-Weiterleitung angebunden. Sobald diese Anbindung erfolgt, sollten die Hidden Fields mit an das Zielsystem übergeben werden.

## Sofort loslegen

1. In `.env.local` die echten IDs für `GTM`, `GA4` und optional `Clarity` eintragen.
2. Die Website neu starten, damit Next.js die neuen Umgebungsvariablen lädt.
3. In `GA4` unter Verwaltung die Events `phone_click`, `generate_lead` und `contact_form_submit` als Conversions markieren.

## Kurz in GTM

- Einen `GA4 Configuration Tag` mit Ihrer `Measurement ID` anlegen.
- Einen `GA4 Event Tag` für Custom Events nur dann ergänzen, wenn Sie Events lieber in GTM statt direkt in GA4 weiterverarbeiten möchten.
- Im Vorschau-Modus prüfen, ob bei Klick auf Telefon-CTA oder Formular-Submit Events im `dataLayer` ankommen.

## Kurz in GA4

- Unter `Verwaltung > Datendarstellung > Benutzerdefinierte Definitionen` Custom Dimensions für `landing_page`, `utm_source`, `utm_medium`, `utm_campaign`, `cta_location`, `lead_type` und `city` anlegen.
- Unter `Berichte` oder `Erkunden` nach Landingpage, Stadtseite und Quelle auswerten, welche Seiten echte Leads bringen.
