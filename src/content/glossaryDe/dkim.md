---
term: "DKIM"
category: "Deliverability"
definition: "DKIM, oder DomainKeys Identified Mail, ist eine E-Mail-Authentifizierungsmethode, die eine kryptografische Signatur hinzufügt und belegt, dass eine Nachricht unterwegs nicht verändert wurde."
related:
  - spf
  - dmarc
  - email-deliverability
  - sender-reputation
updated: "Juli 2026"
---

## Warum es wichtig ist

DKIM lässt einen empfangenden Server bestätigen, dass eine Nachricht wirklich von Ihrer Domain kam und unterwegs nicht manipuliert wurde. Dieser Nachweis erhöht das Vertrauen und unterstützt die Posteingangsplatzierung. Zusammen mit SPF und DMARC gehört er zur Grundlage, die Mailbox-Anbieter heute von jedem legitimen Absender erwarten, und ihn wegzulassen drückt die Deliverability.

## Wie es in der Praxis funktioniert

DKIM hängt jeder Nachricht eine Signatur an, erstellt mit einem privaten Schlüssel des Absenders. Der passende öffentliche Schlüssel liegt in Ihrem DNS. Der empfangende Server nutzt diesen öffentlichen Schlüssel, um die Signatur zu prüfen, und bestätigt so, dass die Nachricht echt und unverändert ist. Eine gültige Signatur unterstützt die Zustellung; eine fehlende oder defekte ist ein negatives Signal.

## Häufige Fehler

Ein häufiger Fehler ist, DKIM einmal einzurichten und die Schlüssel nie zu rotieren oder nach einem Anbieterwechsel zu korrigieren, sodass Signaturen still brechen. Ein weiterer ist, es bei einem Sende-Tool zu aktivieren, bei einem anderen aber nicht. Ein dritter ist, DKIM als optional zu behandeln, obwohl Anbieter es für gute Platzierung zunehmend verlangen.

## Wie hubsell es angeht

hubsell signiert Outbound mit DKIM über authentifizierte Infrastruktur und hilft Ihnen, die richtigen DNS-Records zu veröffentlichen, sodass Ihre Nachrichten den Nachweis tragen, nach dem Anbieter suchen.
