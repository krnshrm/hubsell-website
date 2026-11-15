---
term: "Domaine catch-all"
category: "Données et enrichissement"
definition: "Un domaine catch-all est un domaine de messagerie configuré pour accepter le courrier adressé à n'importe quelle adresse, ce qui rend difficile de savoir si une boîte mail précise existe vraiment."
related:
  - email-deliverability
  - verified-at-source-data
  - email-verification
  - bounce-rate
updated: "juillet 2026"
---

## Pourquoi c'est important

Les domaines catch-all faussent la vérification d'e-mails classique. Une vérification standard demande au serveur de messagerie si une adresse existe, mais un serveur catch-all répond oui à tout : la vérification ne peut donc pas confirmer que la boîte mail est réelle. Si vous envoyez quand même, le message peut être rejeté plus tard ou n'arriver nulle part, ce qui fait discrètement monter votre taux de rejet et nuit à la délivrabilité.

## Comment cela fonctionne en pratique

Sur un domaine normal, le serveur de réception refuse le courrier adressé à une adresse qui n'existe pas, ce qui permet à un outil de vérification de confirmer la boîte mail. Un domaine catch-all est configuré pour accepter tout le courrier puis le trier ou le supprimer ensuite : le serveur accepte donc chaque adresse au moment de la vérification. Les outils de vérification ne peuvent que les classer comme risquées, pas comme valides, et elles demandent un traitement particulier.

## Erreurs fréquentes

L'erreur consiste à traiter les adresses catch-all comme vérifiées et à leur envoyer des e-mails en volume. Elles passent une vérification sommaire, mais une partie d'entre elles ne sont pas de vraies boîtes mail : elles sont rejetées ou disparaissent. Ignorer l'indicateur catch-all est l'un des moyens les plus rapides de faire grimper le taux de rejet d'une liste par ailleurs propre.

## L'approche de hubsell

hubsell signale les domaines catch-all lors de sa vérification au moment de l'usage, pour que ces adresses risquées soient identifiées avant qu'un crédit soit dépensé, et non après un rejet.
