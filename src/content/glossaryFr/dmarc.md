---
term: "DMARC"
category: "Délivrabilité"
definition: "DMARC est une politique d'authentification des e-mails qui indique aux serveurs de réception que faire lorsqu'un message échoue aux contrôles SPF et DKIM, et qui rend compte de qui envoie au nom de votre domaine."
related:
  - spf
  - dkim
  - email-deliverability
  - sender-reputation
updated: "juillet 2026"
---

## Pourquoi c'est important

DMARC relie SPF et DKIM et vous donne contrôle et visibilité. Il indique aux fournisseurs d'accepter, de mettre en quarantaine ou de rejeter le courrier qui échoue aux contrôles, ce qui protège votre domaine contre l'usurpation et protège les destinataires contre les fraudes envoyées en votre nom. Il est aussi devenu quasi obligatoire : les grands fournisseurs attendent désormais une politique DMARC de la part des expéditeurs en volume.

## Comment cela fonctionne en pratique

DMARC est un enregistrement DNS qui définit une politique (none, quarantine ou reject) et une adresse pour les rapports. Lorsqu'un message échoue à l'alignement SPF et à l'alignement DKIM, le serveur de réception applique votre politique. Les rapports montrent quels serveurs envoient au nom de votre domaine, pour que vous puissiez repérer les abus et confirmer que vos propres outils sont alignés avant de durcir la politique.

## Erreurs fréquentes

Une erreur fréquente consiste à passer directement à une politique reject avant d'avoir confirmé que tous vos expéditeurs légitimes passent les contrôles, ce qui bloque votre propre courrier. L'erreur inverse est de laisser la politique sur none indéfiniment, si bien qu'elle ne protège jamais rien. Une troisième est de ne jamais lire les rapports, alors qu'ils sont tout l'intérêt de cette visibilité.

## L'approche de hubsell

hubsell vous aide à aligner vos envois sur DMARC et à passer sans risque de la surveillance à l'application de la politique, pour que votre domaine soit protégé sans bloquer votre propre prospection.
