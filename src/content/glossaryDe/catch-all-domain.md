---
term: "Catch-all-Domain"
category: "Daten und Enrichment"
definition: "Eine Catch-all-Domain ist eine E-Mail-Domain, die so eingerichtet ist, dass sie Mail an jede beliebige Adresse annimmt, wodurch sich schwer feststellen lässt, ob ein bestimmtes Postfach wirklich existiert."
related:
  - email-deliverability
  - verified-at-source-data
  - email-verification
  - bounce-rate
updated: "Juli 2026"
---

## Warum es wichtig ist

Catch-all-Domains hebeln die normale E-Mail-Verifizierung aus. Eine Standardprüfung fragt den Mailserver, ob eine Adresse existiert, aber ein Catch-all-Server sagt zu allem Ja, sodass die Prüfung nicht bestätigen kann, dass das Postfach echt ist. Sendet man trotzdem, kann die Nachricht später bouncen oder nirgends ankommen, was still Ihre Bounce-Rate erhöht und der Deliverability schadet.

## Wie es in der Praxis funktioniert

Auf einer normalen Domain weist der empfangende Server Mail an eine nicht existierende Adresse ab, wodurch ein Verifizierer das Postfach bestätigen kann. Eine Catch-all-Domain ist so konfiguriert, dass sie alle Mail annimmt und im Nachhinein sortiert oder verwirft, sodass der Server zum Prüfzeitpunkt jede Adresse akzeptiert. Verifizierer können diese nur als riskant markieren, nicht als gültig, und brauchen daher eine zusätzliche Behandlung.

## Häufige Fehler

Der Fehler ist, Catch-all-Adressen als verifiziert zu behandeln und in Menge an sie zu senden. Sie bestehen eine naive Prüfung, aber ein Teil von ihnen sind keine echten Postfächer, sodass sie bouncen oder verschwinden. Das Catch-all-Flag zu ignorieren ist einer der schnellsten Wege, auf einer ansonsten sauberen Liste eine Bounce-Rate aufzubauen.

## Wie hubsell es angeht

hubsell markiert Catch-all-Domains während seiner Verifizierung am Punkt der Nutzung, sodass diese riskanten Adressen erkannt werden, bevor ein Credit ausgegeben wird, statt nach einem Bounce.
