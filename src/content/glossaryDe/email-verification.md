---
term: "E-Mail-Verifizierung"
category: "Daten und Enrichment"
definition: "E-Mail-Verifizierung ist das Prüfen, ob eine E-Mail-Adresse gültig ist und Mail empfangen kann, bevor Sie an sie senden."
related:
  - catch-all-domain
  - email-deliverability
  - bounce-rate
  - verified-at-source-data
updated: "Juli 2026"
---

## Warum es wichtig ist

An ungültige Adressen zu senden, verursacht Bounces, und eine hohe Bounce-Rate beschädigt Ihre Reputation, was dann auch die Zustellung an gute Adressen beeinträchtigt. Verifizierung schützt diese Reputation, indem schlechte Adressen zuerst herausgefiltert werden. Sie ist eine der günstigsten Möglichkeiten, ein Outbound-Programm gesund zu halten, und kostet weit weniger als der Schaden eines Bounce-Anstiegs.

## Wie es in der Praxis funktioniert

Verifizierung prüft eine Adresse in Stufen: Das Format ist gültig, die Domain existiert und nimmt Mail an, und das konkrete Postfach antwortet. Catch-all-Domains, die Mail für jede Adresse annehmen, werden als riskant markiert, weil das Postfach nicht bestätigt werden kann. Verifizierung läuft in Masse auf einer Liste oder in Echtzeit, sobald eine Adresse hinzukommt.

## Häufige Fehler

Ein häufiger Fehler ist, einmal beim Import zu verifizieren und nie wieder, da Adressen mit der Zeit schlecht werden. Ein weiterer ist, an Catch-all-Adressen zu senden, als wären sie bestätigt. Ein dritter ist, Verifizierung bei kleinen Listen zu überspringen, wo ein paar Bounces die Reputation trotzdem in die falsche Richtung schieben.

## Wie hubsell es angeht

hubsell verifiziert jeden Kontakt am Punkt der Nutzung, inklusive Catch-all-Prüfung, sodass ein Credit nur für eine Adresse ausgegeben wird, die heute tatsächlich Mail empfangen kann.
