---
term: "SPF"
category: "Deliverability"
definition: "SPF, oder Sender Policy Framework, ist ein E-Mail-Authentifizierungs-Record, der auflistet, welche Server Mail für Ihre Domain senden dürfen."
related:
  - dkim
  - dmarc
  - email-deliverability
  - sender-reputation
updated: "Juli 2026"
---

## Warum es wichtig ist

SPF ist eine der Prüfungen, die Mailbox-Anbieter durchführen, um zu entscheiden, ob eine Nachricht wirklich von Ihrer Domain stammt. Ohne ihn wird Ihre Mail eher als verdächtig oder gefälscht behandelt, was der Deliverability schadet. Er ist eine Grundanforderung für jedes Team, das Outbound in Menge sendet, und sein Fehlen begrenzt, wie weit der Rest Ihres Setups tragen kann.

## Wie es in der Praxis funktioniert

SPF ist ein DNS-Record, der die Server und Dienste nennt, die im Namen Ihrer Domain senden dürfen. Erhält ein empfangender Server eine Nachricht, prüft er, ob der sendende Server in dieser Liste steht. Ein Pass unterstützt die Zustellung; ein Fail ist ein Signal, dass die Mail gefälscht sein könnte. SPF arbeitet zusammen mit DKIM und DMARC, nicht allein.

## Häufige Fehler

Ein häufiger Fehler ist, zu viele Absender aufzulisten oder alte Dienste im Record zu lassen, was die Prüfung schwächt oder Lookup-Limits überschreitet. Ein weiterer ist anzunehmen, SPF allein reiche, obwohl Anbieter zunehmend auch DKIM und DMARC erwarten. Ein dritter ist, SPF beim Hinzufügen eines neuen Sende-Tools nicht zu aktualisieren.

## Wie hubsell es angeht

hubsell sendet über authentifizierte Infrastruktur und leitet Sie an, SPF, DKIM und DMARC korrekt zu setzen, sodass Ihr Outreach die Prüfungen besteht, die den Posteingang schützen.
