---
term: "Vérification d'e-mails"
category: "Données et enrichissement"
definition: "La vérification d'e-mails consiste à contrôler qu'une adresse e-mail est valide et peut recevoir du courrier avant de lui envoyer un message."
related:
  - catch-all-domain
  - email-deliverability
  - bounce-rate
  - verified-at-source-data
updated: "juillet 2026"
---

## Pourquoi c'est important

Envoyer à des adresses invalides provoque des rejets, et un taux de rejet élevé dégrade votre réputation d'expéditeur, ce qui nuit ensuite aussi à la distribution vers les bonnes adresses. La vérification protège cette réputation en écartant d'abord les mauvaises adresses. C'est l'un des moyens les moins coûteux de garder un programme outbound en bonne santé, et son coût est bien inférieur aux dégâts d'un pic de rejets.

## Comment cela fonctionne en pratique

La vérification contrôle une adresse par étapes : le format est valide, le domaine existe et accepte le courrier, et la boîte mail précise répond. Les domaines catch-all, qui acceptent le courrier pour n'importe quelle adresse, sont signalés comme risqués parce que la boîte mail ne peut pas être confirmée. La vérification s'exécute en masse sur une liste ou en temps réel à chaque ajout d'adresse.

## Erreurs fréquentes

Une erreur courante consiste à vérifier une seule fois à l'import et plus jamais ensuite, alors que les adresses se dégradent avec le temps. Une autre est d'envoyer aux adresses catch-all comme si elles étaient confirmées. Une troisième est de sauter la vérification sur les petites listes, où quelques rejets suffisent à faire pencher la réputation dans le mauvais sens.

## L'approche de hubsell

hubsell vérifie chaque contact au moment de l'usage, contrôle catch-all compris, pour qu'un crédit ne soit dépensé que pour une adresse capable de recevoir du courrier aujourd'hui.
