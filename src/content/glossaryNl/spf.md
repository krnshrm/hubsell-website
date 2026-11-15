---
term: "SPF"
category: "Deliverability"
definition: "SPF, of Sender Policy Framework, is een e-mailauthenticatierecord dat opsomt welke servers mail mogen versturen voor je domein."
related:
  - dkim
  - dmarc
  - email-deliverability
  - sender-reputation
updated: "juli 2026"
---

## Waarom het belangrijk is

SPF is een van de controles die mailboxproviders draaien om te beslissen of een bericht echt van je domein komt. Zonder SPF wordt je mail eerder als verdacht of vervalst behandeld, wat de deliverability schaadt. Het is een basisvereiste voor elk team dat outbound in volume verstuurt, en het ontbreken ervan begrenst hoe ver de rest van je opzet je kan brengen.

## Hoe het in de praktijk werkt

SPF is een DNS-record dat de servers en diensten noemt die namens je domein mogen versturen. Wanneer een ontvangende server een bericht krijgt, controleert die of de verzendende server in die lijst staat. Een pass ondersteunt bezorging; een fail is een signaal dat de mail vervalst kan zijn. SPF werkt samen met DKIM en DMARC, niet op zichzelf.

## Veelgemaakte fouten

Een veelgemaakte fout is te veel afzenders opsommen of oude diensten in het record laten, wat de controle verzwakt of lookup-limieten overschrijdt. Een andere is aannemen dat SPF alleen genoeg is, terwijl providers steeds vaker ook DKIM en DMARC verwachten. Een derde is vergeten SPF bij te werken wanneer je een nieuw verzendtool toevoegt.

## Hoe hubsell het aanpakt

hubsell verstuurt via geauthenticeerde infrastructuur en begeleidt je om SPF, DKIM en DMARC correct in te stellen, zodat je outreach de controles doorstaat die de inbox beschermen.
