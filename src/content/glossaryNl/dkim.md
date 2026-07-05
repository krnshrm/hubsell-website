---
term: "DKIM"
category: "Deliverability"
definition: "DKIM, of DomainKeys Identified Mail, is een e-mailauthenticatiemethode die een cryptografische handtekening toevoegt die bewijst dat een bericht onderweg niet is gewijzigd."
related:
  - spf
  - dmarc
  - email-deliverability
  - sender-reputation
updated: "juli 2026"
---

## Waarom het belangrijk is

DKIM laat een ontvangende server bevestigen dat een bericht echt van uw domein kwam en onderweg niet is gemanipuleerd. Dat bewijs verhoogt vertrouwen en ondersteunt inboxplaatsing. Samen met SPF en DMARC is het onderdeel van de basis die mailboxproviders nu van elke legitieme afzender verwachten, en het weglaten drukt de deliverability.

## Hoe het in de praktijk werkt

DKIM hangt aan elk bericht een handtekening, aangemaakt met een privésleutel die de afzender houdt. De bijbehorende publieke sleutel staat in uw DNS. De ontvangende server gebruikt die publieke sleutel om de handtekening te verifiëren en bevestigt zo dat het bericht authentiek en ongewijzigd is. Een geldige handtekening ondersteunt bezorging; een ontbrekende of kapotte is een negatief signaal.

## Veelgemaakte fouten

Een veelgemaakte fout is DKIM één keer instellen en de sleutels nooit roteren of herstellen na een providerwissel, zodat handtekeningen stil breken. Een andere is het inschakelen op één verzendtool maar niet op een ander. Een derde is DKIM als optioneel behandelen, terwijl providers het voor goede plaatsing steeds vaker vereisen.

## Hoe hubsell het aanpakt

hubsell ondertekent outbound met DKIM via geauthenticeerde infrastructuur en helpt u de juiste DNS-records te publiceren, zodat uw berichten het bewijs dragen waar providers naar zoeken.
