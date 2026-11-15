---
term: "SPF"
category: "Délivrabilité"
definition: "SPF, ou Sender Policy Framework, est un enregistrement d'authentification des e-mails qui liste les serveurs autorisés à envoyer des e-mails pour votre domaine."
related:
  - dkim
  - dmarc
  - email-deliverability
  - sender-reputation
updated: "juillet 2026"
---

## Pourquoi c'est important

SPF fait partie des contrôles qu'effectuent les fournisseurs de messagerie pour vérifier qu'un message vient réellement de votre domaine. Sans lui, vos e-mails risquent davantage d'être jugés suspects ou usurpés, ce qui nuit à la délivrabilité. C'est une exigence de base pour toute équipe qui fait de l'outbound à volume, et son absence limite l'efficacité de tout le reste de votre configuration.

## Comment cela fonctionne en pratique

SPF est un enregistrement DNS qui nomme les serveurs et services autorisés à envoyer au nom de votre domaine. Quand un serveur de réception reçoit un message, il vérifie si le serveur d'envoi figure dans cette liste. Un résultat positif favorise la remise, un échec signale que l'e-mail est peut-être falsifié. SPF fonctionne avec DKIM et DMARC, pas seul.

## Erreurs fréquentes

Une erreur fréquente consiste à lister trop d'expéditeurs ou à laisser d'anciens services dans l'enregistrement, ce qui affaiblit le contrôle ou dépasse la limite de requêtes DNS. Une autre est de croire que SPF suffit, alors que les fournisseurs attendent de plus en plus DKIM et DMARC aussi. Une troisième est d'oublier de mettre à jour SPF quand vous ajoutez un nouvel outil d'envoi.

## L'approche de hubsell

hubsell envoie via une infrastructure authentifiée et vous guide pour configurer correctement SPF, DKIM et DMARC, pour que votre prospection passe les contrôles qui protègent la boîte de réception.
