---
term: "DMARC"
category: "Deliverability"
definition: "DMARC ist eine E-Mail-Authentifizierungs-Policy, die empfangenden Servern sagt, was zu tun ist, wenn eine Nachricht SPF und DKIM nicht besteht, und berichtet, wer als Ihre Domain sendet."
related:
  - spf
  - dkim
  - email-deliverability
  - sender-reputation
updated: "Juli 2026"
---

## Warum es wichtig ist

DMARC verbindet SPF und DKIM und gibt Ihnen Kontrolle und Sichtbarkeit. Es sagt Anbietern, Mail, die die Prüfungen nicht besteht, zuzulassen, in Quarantäne zu stellen oder abzuweisen, was Ihre Domain vor Spoofing und Empfänger vor Betrug in Ihrem Namen schützt. Es ist zudem fast verpflichtend geworden: Große Anbieter erwarten heute eine DMARC-Policy von Massenversendern.

## Wie es in der Praxis funktioniert

DMARC ist ein DNS-Record, der eine Policy (none, quarantine oder reject) und eine Adresse für Berichte festlegt. Besteht eine Nachricht weder die SPF- noch die DKIM-Ausrichtung, wendet der empfangende Server Ihre Policy an. Die Berichte zeigen, welche Server als Ihre Domain senden, sodass Sie Missbrauch erkennen und bestätigen können, dass Ihre eigenen Tools ausgerichtet sind, bevor Sie die Policy verschärfen.

## Häufige Fehler

Ein häufiger Fehler ist, direkt zu einer reject-Policy zu springen, bevor bestätigt ist, dass alle Ihre legitimen Absender bestehen, was Ihre eigene Mail blockiert. Der umgekehrte Fehler ist, die Policy für immer auf none zu lassen, sodass sie nie wirklich etwas schützt. Ein dritter ist, die Berichte nie zu lesen, die der ganze Zweck der Sichtbarkeit sind.

## Wie hubsell es angeht

hubsell hilft Ihnen, Ihr Senden mit DMARC auszurichten und sicher von der Überwachung zur Durchsetzung zu wechseln, sodass Ihre Domain geschützt ist, ohne Ihren eigenen Outreach zu blockieren.
