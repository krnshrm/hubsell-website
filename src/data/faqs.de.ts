// German for the FAQs that are NOT on the homepage (onHomepage: false in faqs.ts).
// The homepage FAQ German lives in home.de.ts (faqsDe); faqs-i18n.ts merges both
// into the full localized set for the /faqs page. Keyed by slug. Brand terms
// (Zero-Day-Sourcing, Engagement Orchestration, Messenger-Paradox, ICP, ACV) are
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
      '<p>Das „Uncanny Valley“ im Vertrieb entsteht, wenn Teams mit KI Empathie vortäuschen. Setzen Sie statt komplexer KI-Prompts für generische Listen auf „Observable Intent“, also beobachtbare Signale. Eine einfache, feste Nachricht an eine hochrelevante Liste, etwa an die Teilnehmenden eines bestimmten Webinars, schlägt vorgetäuschte KI-Empathie an eine generische Persona immer.</p>',
  },
  'stop-sales-email-bounces': {
    question: 'Wie verhindern wir, dass unsere Vertriebs-E-Mails wegen schlechter CRM-Daten zurückkommen?',
    answer:
      '<p>Die durchschnittliche Verweildauer eines B2B-Entscheiders liegt bei etwa 2,5 Jahren. Statische CRMs und gekaufte Listen verlieren dadurch jährlich 25 bis 30 Prozent ihrer Gültigkeit. hubsell löst das mit Zero-Day-Sourcing. Wir recherchieren und verifizieren Kontaktdaten in Echtzeit, genau im Moment Ihrer Anfrage. Das sorgt für höchste Genauigkeit und schützt Ihre Absenderreputation.</p>',
  },
  'hubsell-high-volume-sales': {
    question: 'Eignet sich hubsell für transaktionalen Vertrieb mit hohem Volumen und niedrigem ACV?',
    answer:
      '<p>Ja. hubsell lässt sich zwar für Outreach mit hohem Volumen einsetzen, wir empfehlen es jedoch für stark zielgerichtete Ansprache.</p>',
  },
  'mass-email-brand-reputation': {
    question: 'Schadet massenhaftes Cold E-Mailing aktiv unserer Markenreputation und Zustellbarkeit?',
    answer:
      '<p>Durch die neuesten Regeln von Google und Yahoo ruinieren „Spray and Pray“-Taktiken mit hohem Volumen die Absenderreputation Ihrer Domain schnell. Engagement Orchestration löst das durch hochpräzises Targeting, nativen API-Versand und Multi-Threading, also das sichere Verteilen des Outreach auf 5 bis 10 interne Profile. So bleiben die Zustellbarkeit hoch und der Schaden für die Domain bei null.</p>',
  },
  'third-party-intent-data-accuracy': {
    question: 'Sind B2B-Intent-Daten von Drittanbietern tatsächlich genau?',
    answer:
      '<p>Die meisten Intent-Daten beruhen auf probabilistischen Algorithmen, die anhand von anonymem Web-Traffic raten, wer kauft. Da 95 Prozent der B2B-Käufer zu einem beliebigen Zeitpunkt nicht im Markt sind, jagt Ihr Vertriebsteam Geistern hinterher, wenn ein generischer Algorithmus auf einen nicht kaufenden Markt angewendet wird.</p>',
  },
  'sdr-vs-executive-linkedin-outreach': {
    question: 'Sollten unsere SDRs oder unsere Führungskräfte den LinkedIn-Outreach übernehmen?',
    answer:
      '<p>Das nennt sich Messenger-Paradox. Wenn ein SDR eine Kontaktanfrage sendet, liegen die Annahmequoten meist unter 20 Prozent, weil Käufer einen Pitch erwarten. Sendet eine Gründerin, eine Führungskraft oder ein Fachexperte genau dieselbe Anfrage, steigen die Annahmequoten auf über 50 Prozent.</p>',
  },
  'cold-email-reply-rates-dropping': {
    question: 'Warum sinken unsere Antwortraten bei Cold E-Mails plötzlich so stark?',
    answer:
      '<p>Klassischer „Spray and Pray“-Outreach scheitert aus zwei strukturellen Gründen. Erstens bedeuten strenge neue Spam-Schwellen (0,3 Prozent Beschwerderate) von Google und Yahoo, dass Massenversand Ihre Domain-Reputation aktiv schädigt. Zweitens erkennen Käufer automatisierte KI-Personalisierung sofort. Sie wirkt persönlich, fühlt sich aber hohl an und löst eine innere Abwehrhaltung aus.</p>',
  },
};
