---
term: "E-mailvalidatie"
category: "Data en enrichment"
definition: "E-mailvalidatie is het controleren of een e-mailadres geldig is en mail kan ontvangen voordat u ernaar verstuurt."
related:
  - catch-all-domain
  - email-deliverability
  - bounce-rate
  - verified-at-source-data
updated: "juli 2026"
---

## Waarom het belangrijk is

Naar ongeldige adressen versturen veroorzaakt bounces, en een hoog bouncepercentage schaadt uw afzenderreputatie, wat vervolgens ook de bezorging aan goede adressen raakt. Validatie beschermt die reputatie door slechte adressen er eerst uit te filteren. Het is een van de goedkoopste manieren om een outbound-programma gezond te houden, en de kosten liggen ver onder de schade van een bouncepiek.

## Hoe het in de praktijk werkt

Validatie controleert een adres in stappen: het formaat is geldig, het domein bestaat en accepteert mail, en de specifieke mailbox reageert. Catch-all-domeinen, die mail voor elk adres accepteren, worden als risicovol gemarkeerd omdat de mailbox niet kan worden bevestigd. Validatie draait in bulk op een lijst of in realtime zodra een adres wordt toegevoegd.

## Veelgemaakte fouten

Een veelgemaakte fout is één keer valideren bij import en daarna nooit meer, want adressen worden na verloop van tijd slecht. Een andere is naar catch-all-adressen versturen alsof ze bevestigd zijn. Een derde is validatie overslaan bij kleine lijsten, waar een paar bounces de reputatie toch de verkeerde kant op duwen.

## Hoe hubsell het aanpakt

hubsell valideert elk contact op het moment van gebruik, inclusief een catch-all-controle, zodat een credit alleen wordt besteed aan een adres dat vandaag daadwerkelijk mail kan ontvangen.
