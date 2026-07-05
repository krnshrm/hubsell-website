---
term: "DMARC"
category: "Deliverability"
definition: "DMARC is een e-mailauthenticatiebeleid dat ontvangende servers vertelt wat te doen wanneer een bericht SPF en DKIM niet doorstaat, en rapporteert wie als uw domein verstuurt."
related:
  - spf
  - dkim
  - email-deliverability
  - sender-reputation
updated: "juli 2026"
---

## Waarom het belangrijk is

DMARC verbindt SPF en DKIM en geeft u controle en zicht. Het vertelt providers om mail die de controles niet doorstaat toe te laten, in quarantaine te zetten of te weigeren, wat uw domein beschermt tegen spoofing en ontvangers tegen fraude in uw naam. Het is ook bijna verplicht geworden: grote providers verwachten nu een DMARC-beleid van bulkverzenders.

## Hoe het in de praktijk werkt

DMARC is een DNS-record dat een beleid instelt (none, quarantine of reject) en een adres voor rapporten. Wanneer een bericht zowel de SPF- als de DKIM-uitlijning niet doorstaat, past de ontvangende server uw beleid toe. De rapporten tonen welke servers als uw domein versturen, zodat u misbruik kunt opsporen en kunt bevestigen dat uw eigen tools zijn uitgelijnd voordat u het beleid aanscherpt.

## Veelgemaakte fouten

Een veelgemaakte fout is meteen naar een reject-beleid springen voordat is bevestigd dat al uw legitieme afzenders slagen, wat uw eigen mail blokkeert. De omgekeerde fout is het beleid voor altijd op none laten, zodat het nooit echt iets beschermt. Een derde is de rapporten nooit lezen, die het hele punt van het zicht zijn.

## Hoe hubsell het aanpakt

hubsell helpt u uw verzending met DMARC uit te lijnen en veilig van monitoren naar handhaven te bewegen, zodat uw domein beschermd is zonder uw eigen outreach te blokkeren.
