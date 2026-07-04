---
term: "Catch-all-domein"
category: "Data en enrichment"
definition: "Een catch-all-domein is een e-maildomein dat zo is ingesteld dat het mail voor elk adres accepteert, waardoor moeilijk is vast te stellen of een specifieke mailbox echt bestaat."
related:
  - email-deliverability
  - verified-at-source-data
  - email-verification
  - bounce-rate
updated: "juli 2026"
---

## Waarom het belangrijk is

Catch-all-domeinen breken de normale e-mailvalidatie. Een standaardcontrole vraagt de mailserver of een adres bestaat, maar een catch-all-server zegt overal ja op, dus de controle kan niet bevestigen dat de mailbox echt is. Verstuurt u toch, dan kan het bericht later bouncen of nergens aankomen, wat stil uw bouncepercentage verhoogt en de deliverability schaadt.

## Hoe het in de praktijk werkt

Op een normaal domein weigert de ontvangende server mail naar een niet-bestaand adres, waardoor een validator de mailbox kan bevestigen. Een catch-all-domein is zo geconfigureerd dat het alle mail accepteert en achteraf sorteert of weggooit, dus de server accepteert op controlemoment elk adres. Validators kunnen deze alleen als risicovol markeren, niet als geldig, en hebben dus extra behandeling nodig.

## Veelgemaakte fouten

De fout is catch-all-adressen als gevalideerd behandelen en er in volume naar versturen. Ze slagen voor een naïeve controle, maar een deel ervan zijn geen echte mailboxen, dus ze bouncen of verdwijnen. De catch-all-markering negeren is een van de snelste manieren om op een verder schone lijst een bouncepercentage op te bouwen.

## Hoe hubsell het aanpakt

hubsell markeert catch-all-domeinen tijdens de validatie op het moment van gebruik, zodat deze risicovolle adressen worden herkend voordat een credit wordt besteed, in plaats van na een bounce.
