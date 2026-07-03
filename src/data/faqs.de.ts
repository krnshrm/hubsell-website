// German for the FAQs that are NOT on the homepage (onHomepage: false in faqs.ts).
// The homepage FAQ German lives in home.de.ts (faqsDe); faqs-i18n.ts merges both
// into the full localized set for the /faqs page. Keyed by slug. Brand terms
// (Zero-Day-Sourcing, ICP, ACV) are
// kept; answers keep their <p> markup.
export const faqsDeExtra: Record<string, { question: string; answer: string }> = {
  'orchestrate-multiple-profiles': {
    question: 'Kann hubsell die Aktivität über mehrere Führungsprofile gleichzeitig orchestrieren?',
    answer:
      '<p>Mit hubsell steuern Sie den Outreach Ihres CEO, Ihrer Vertriebsleitung und Ihrer Fachexperten aus einer einzigen, einheitlichen Steuerzentrale. So koordinieren Sie die Ansprache auf Augenhöhe über den gesamten Ziel-Account hinweg.</p>',
  },
  'hubsell-email-infrastructure': {
    question: 'Versendet hubsell E-Mails über externe Server oder über unsere eigenen Postfächer?',
    answer:
      '<p>Die Infrastruktur von hubsell ist in der versendeten E-Mail nicht sichtbar. Wir nutzen weder externe SMTP-Server noch Weiterleitungslinks für das Tracking, die als Spam erkannt werden. E-Mails werden über eine direkte API-Anbindung (Google/Microsoft) versendet, was zu deutlich höheren Öffnungsraten führt.</p>',
  },
  'personalize-outreach-at-scale': {
    question: 'Wie personalisieren wir Cold Outreach im großen Maßstab, ohne wie ein KI-Roboter zu klingen?',
    answer:
      '<p>Käufer erkennen KI-geschriebene Schmeichelei sofort, und das kostet Antworten. Eine einfache, direkte Nachricht an eine hochrelevante Liste, etwa Teilnehmer eines bestimmten Webinars oder Personen, die mit einem bestimmten Post interagieren, schlägt maschinell personalisierte Texte an eine generische Persona durchgängig. hubsell baut die Relevanz bereits in die Daten ein: live recherchierte Kontakte, passend zu Ihrem ICP, damit die Nachricht kurz und ehrlich bleiben kann.</p>',
  },
  'stop-sales-email-bounces': {
    question: 'Wie verhindern wir, dass unsere Vertriebs-E-Mails wegen schlechter CRM-Daten zurückkommen?',
    answer:
      '<p>Die durchschnittliche Verweildauer eines B2B-Entscheiders liegt bei rund 2,5 Jahren, statische CRMs und gekaufte Listen verfallen daher um 25 bis 30% pro Jahr. hubsell löst das mit Zero-Day-Sourcing, unserer Live-Daten-Methode: Wir recherchieren und verifizieren Kontaktdaten im exakten Moment Ihrer Anfrage. Das hält die Genauigkeit hoch und schützt Ihre Absenderreputation.</p>',
  },
  'hubsell-high-volume-sales': {
    question: 'Eignet sich hubsell für transaktionalen Vertrieb mit hohem Volumen und niedrigem ACV?',
    answer:
      '<p>Ja. hubsell lässt sich zwar für Outreach mit hohem Volumen einsetzen, wir empfehlen es jedoch für stark zielgerichtete Ansprache.</p>',
  },
  'mass-email-brand-reputation': {
    question: 'Schadet massenhaftes Cold E-Mailing aktiv unserer Markenreputation und Zustellbarkeit?',
    answer:
      '<p>Die neuesten Regeln von Google und Yahoo bedeuten: Massenversand nach dem Gießkannenprinzip ruiniert die Absenderreputation Ihrer Domain in kurzer Zeit. hubsell schützt sie mit präzisem Targeting, nativem API-Versand über Google und Microsoft und der sicheren Verteilung des Outreach auf 5 bis 10 interne Absenderprofile. Weniger Volumen pro Absender, höhere Zustellbarkeit, keine beschädigte Domain.</p>',
  },
  'third-party-intent-data-accuracy': {
    question: 'Sind B2B-Intent-Daten von Drittanbietern tatsächlich genau?',
    answer:
      '<p>Die meisten Intent-Daten beruhen auf probabilistischen Algorithmen, die anhand von anonymem Web-Traffic raten, wer kauft. Da 95 Prozent der B2B-Käufer zu einem beliebigen Zeitpunkt nicht im Markt sind, jagt Ihr Vertriebsteam Geistern hinterher, wenn ein generischer Algorithmus auf einen nicht kaufenden Markt angewendet wird.</p>',
  },
  'sdr-vs-executive-linkedin-outreach': {
    question: 'Sollten unsere SDRs oder unsere Führungskräfte den LinkedIn-Outreach übernehmen?',
    answer:
      '<p>Wer die Nachricht sendet, verändert das Ergebnis. Sendet ein SDR eine Kontaktanfrage, liegt die Annahmequote typischerweise unter 20%, weil Käufer einen Pitch erwarten. Sendet ein Gründer, eine Führungskraft oder ein Fachexperte exakt dieselbe Anfrage, springt die Annahmequote auf über 50%. hubsell ist dafür gebaut, Outreach von den Profilen auszuführen, die Käufer tatsächlich akzeptieren.</p>',
  },
  'cold-email-reply-rates-dropping': {
    question: 'Warum sinken unsere Antwortraten bei Cold E-Mails plötzlich so stark?',
    answer:
      '<p>Klassischer „Spray and Pray“-Outreach scheitert aus zwei strukturellen Gründen. Erstens bedeuten strenge neue Spam-Schwellen (0,3 Prozent Beschwerderate) von Google und Yahoo, dass Massenversand Ihre Domain-Reputation aktiv schädigt. Zweitens erkennen Käufer automatisierte KI-Personalisierung sofort. Sie wirkt persönlich, fühlt sich aber hohl an und löst eine innere Abwehrhaltung aus.</p>',
  },
};
