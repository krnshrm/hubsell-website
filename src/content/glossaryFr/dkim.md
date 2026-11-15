---
term: "DKIM"
category: "Délivrabilité"
definition: "DKIM, ou DomainKeys Identified Mail, est une méthode d'authentification des e-mails qui ajoute une signature cryptographique prouvant qu'un message n'a pas été modifié en cours de route."
related:
  - spf
  - dmarc
  - email-deliverability
  - sender-reputation
updated: "juillet 2026"
---

## Pourquoi c'est important

DKIM permet à un serveur de réception de confirmer qu'un message vient bien de votre domaine et qu'il n'a pas été altéré en chemin. Cette preuve renforce la confiance et favorise l'arrivée en boîte de réception. Avec SPF et DMARC, DKIM fait partie du socle que les fournisseurs de messagerie attendent aujourd'hui de tout expéditeur légitime, et s'en passer fait baisser la délivrabilité.

## Comment cela fonctionne en pratique

DKIM ajoute à chaque message une signature créée avec une clé privée détenue par l'expéditeur. La clé publique correspondante se trouve dans votre DNS. Le serveur de réception utilise cette clé publique pour vérifier la signature, ce qui confirme que le message est authentique et n'a pas été modifié. Une signature valide favorise la distribution ; une signature absente ou cassée est un signal négatif.

## Erreurs fréquentes

Une erreur fréquente consiste à configurer DKIM une fois sans jamais renouveler les clés ni les corriger après un changement de prestataire, si bien que les signatures cessent de fonctionner sans bruit. Une autre est de l'activer sur un outil d'envoi mais pas sur un autre. Une troisième est de considérer DKIM comme facultatif, alors que les fournisseurs l'exigent de plus en plus pour un bon placement.

## L'approche de hubsell

hubsell signe les envois sortants avec DKIM grâce à une infrastructure authentifiée et vous aide à publier les bons enregistrements DNS, pour que vos messages portent la preuve que les fournisseurs recherchent.
