---
term: "DMARC"
category: "Deliverability"
definition: "DMARC is een e-mailauthenticatiebeleid dat ontvangende servers vertelt wat te doen wanneer een bericht SPF en DKIM niet doorstaat, en rapporteert wie als je domein verstuurt."
related:
  - spf
  - dkim
  - email-deliverability
  - sender-reputation
updated: "juli 2026"
---

## Waarom het belangrijk is

DMARC verbindt SPF en DKIM en geeft je controle en zicht. Het vertelt providers om mail die de controles niet doorstaat toe te laten, in quarantaine te zetten of te weigeren, wat je domein beschermt tegen spoofing en ontvangers tegen fraude in je naam. Het is ook bijna verplicht geworden: grote providers verwachten nu een DMARC-beleid van bulkverzenders.

## Hoe het in de praktijk werkt

DMARC is een DNS-record dat een beleid instelt (none, quarantine of reject) en een adres voor rapporten. Wanneer een bericht zowel de SPF- als de DKIM-uitlijning niet doorstaat, past de ontvangende server je beleid toe. De rapporten tonen welke servers als je domein versturen, zodat je misbruik kunt opsporen en kunt bevestigen dat je eigen tools zijn uitgelijnd voordat je het beleid aanscherpt.

## Veelgemaakte fouten

Een veelgemaakte fout is meteen naar een reject-beleid springen voordat is bevestigd dat al je legitieme afzenders slagen, wat je eigen mail blokkeert. De omgekeerde fout is het beleid voor altijd op none laten, zodat het nooit echt iets beschermt. Een derde is de rapporten nooit lezen, die het hele punt van het zicht zijn.

## Hoe hubsell het aanpakt

hubsell helpt je je verzending met DMARC uit te lijnen en veilig van monitoren naar handhaven te bewegen, zodat je domein beschermd is zonder je eigen outreach te blokkeren.
