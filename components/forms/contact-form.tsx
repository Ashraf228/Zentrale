"use client";

import { useEffect, useState } from "react";

import { captureAttribution, getAttribution, trackClarity, trackEvent, type AttributionData } from "@/lib/tracking";

const serviceOptions = [
  "Rohrreinigung",
  "Kanalreinigung",
  "Rohrspülung",
  "Kanalspülung",
  "Abflussreinigung",
  "WC verstopft",
  "Rohrreinigung Notdienst",
  "TV-Inspektion",
  "Kanalinspektion",
  "Abpumpen",
];

export function ContactForm() {
  const [hasStarted, setHasStarted] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [attribution, setAttribution] = useState<AttributionData | null>(null);

  useEffect(() => {
    setAttribution(captureAttribution());
  }, []);

  const handleStart = () => {
    if (hasStarted) {
      return;
    }

    setHasStarted(true);
    trackEvent("form_start", {
      event_category: "lead",
      form_name: "kontaktformular",
      form_location: "kontaktseite",
      ...getAttribution(`${window.location.pathname}${window.location.search}`),
    });
    trackClarity("form_start");
  };

  return (
    <form
      className="content-card grid gap-5 p-8"
      aria-label="Kontaktformular"
      onSubmit={(event) => {
        event.preventDefault();

        const formData = new FormData(event.currentTarget);
        const selectedService = String(formData.get("service") || "");
        const city = String(formData.get("city") || "");
        const currentPage = `${window.location.pathname}${window.location.search}`;
        const attributionData = getAttribution(currentPage);

        trackEvent("generate_lead", {
          event_category: "lead",
          form_name: "kontaktformular",
          lead_type: selectedService || "allgemein",
          city: city || "unbekannt",
          ...attributionData,
        });
        trackEvent("contact_form_submit", {
          event_category: "lead",
          form_name: "kontaktformular",
          lead_type: selectedService || "allgemein",
          city: city || "unbekannt",
          ...attributionData,
        });
        trackClarity("contact_form_submit");

        setIsSubmitted(true);
        event.currentTarget.reset();
      }}
    >
      <input type="hidden" name="landing_page" value={attribution?.landing_page ?? ""} />
      <input
        type="hidden"
        name="current_page"
        value={attribution?.current_page ?? ""}
      />
      <input type="hidden" name="referrer" value={attribution?.referrer ?? ""} />
      <input type="hidden" name="utm_source" value={attribution?.utm_source ?? ""} />
      <input type="hidden" name="utm_medium" value={attribution?.utm_medium ?? ""} />
      <input
        type="hidden"
        name="utm_campaign"
        value={attribution?.utm_campaign ?? ""}
      />
      <input type="hidden" name="utm_term" value={attribution?.utm_term ?? ""} />
      <input
        type="hidden"
        name="utm_content"
        value={attribution?.utm_content ?? ""}
      />
      <input type="hidden" name="gclid" value={attribution?.gclid ?? ""} />
      <input type="hidden" name="fbclid" value={attribution?.fbclid ?? ""} />

      <div>
        <label className="mb-2 block text-sm font-semibold text-navy-950" htmlFor="name">
          Name
        </label>
        <input
          id="name"
          name="name"
          className="w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none transition focus:border-accent-500"
          placeholder="Name oder Firma"
          onFocus={handleStart}
        />
      </div>
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label className="mb-2 block text-sm font-semibold text-navy-950" htmlFor="phone">
            Telefonnummer
          </label>
          <input
            id="phone"
            name="phone"
            className="w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none transition focus:border-accent-500"
            placeholder="Rufnummer für Rückfragen"
            onFocus={handleStart}
          />
        </div>
        <div>
          <label className="mb-2 block text-sm font-semibold text-navy-950" htmlFor="city">
            Ort
          </label>
          <input
            id="city"
            name="city"
            className="w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none transition focus:border-accent-500"
            placeholder="Stadt, Ortsteil oder Einsatzadresse"
            onFocus={handleStart}
          />
        </div>
      </div>
      <div>
        <label className="mb-2 block text-sm font-semibold text-navy-950" htmlFor="service">
          Leistung oder Problem
        </label>
        <select
          id="service"
          name="service"
          className="w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none transition focus:border-accent-500"
          defaultValue=""
          onFocus={handleStart}
        >
          <option value="" disabled>
            Bitte wählen
          </option>
          {serviceOptions.map((option) => (
            <option key={option}>{option}</option>
          ))}
        </select>
      </div>
      <div>
        <label className="mb-2 block text-sm font-semibold text-navy-950" htmlFor="message">
          Problembeschreibung
        </label>
        <textarea
          id="message"
          name="message"
          rows={6}
          className="w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none transition focus:border-accent-500"
          placeholder="Welche Bereiche sind betroffen, läuft Wasser noch ab, gibt es Rückstau, Geruch, stehendes Wasser oder bereits Folgeschäden?"
          onFocus={handleStart}
        />
      </div>
      <button
        type="submit"
        className="rounded-full bg-navy-950 px-6 py-4 text-base font-semibold text-white"
      >
        Anfrage absenden
      </button>
      <p className="text-sm leading-7 text-slate-500">
        Je genauer die Angaben zu Einsatzort, betroffenen Leitungen und
        Dringlichkeit sind, desto besser kann die Anfrage eingeordnet und
        vorbereitet werden.
      </p>
      {isSubmitted ? (
        <div className="rounded-2xl border border-emerald-200 bg-emerald-50 px-4 py-4 text-sm leading-7 text-emerald-900">
          Vielen Dank. Ihre Anfrage wurde erfasst. Für akute Fälle wie
          Rückstau, WC-Ausfall oder stehendes Wasser ist der Anruf weiterhin
          der schnellste Weg.
        </div>
      ) : null}
    </form>
  );
}
