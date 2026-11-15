---
term: "Taux de rejet"
category: "Outbound et e-mail"
definition: "Le taux de rejet (bounce rate) est la part des e-mails envoyés qui n'ont pas pu être distribués, et un taux élevé est un signal d'alerte précoce sur la qualité de la liste et la délivrabilité."
related:
  - email-verification
  - catch-all-domain
  - email-deliverability
  - open-rate
updated: "juillet 2026"
---

## Pourquoi c'est important

Les rejets sont plus que des envois perdus. Un taux de rejet élevé indique aux fournisseurs de messagerie que votre liste est de mauvaise qualité, ce qui dégrade votre réputation d'expéditeur et pousse même les e-mails valides vers les spams. Garder les rejets bas est l'un des moyens les plus directs de protéger la délivrabilité. C'est un symptôme à surveiller et une cause à maîtriser.

## Comment cela fonctionne en pratique

Un rejet est soit définitif (hard bounce), parce que l'adresse n'existe pas, soit temporaire (soft bounce), en raison d'un problème passager comme une boîte pleine. Ce sont les rejets définitifs qui nuisent à la réputation, et ils viennent d'adresses invalides ou périmées. La solution se trouve en amont : vérifier les adresses avant l'envoi et retirer celles qui sont rejetées, pour que le taux reste bas lors des envois suivants.

## Erreurs fréquentes

L'erreur de fond est d'envoyer à des listes non vérifiées ou achetées, cause habituelle d'un pic de rejets. Une autre est d'ignorer un taux de rejet en hausse jusqu'à ce que la délivrabilité ait déjà chuté. Une troisième est de ne pas retirer les adresses en rejet définitif, si bien que les mêmes mauvaises fiches sont rejetées à nouveau.

## L'approche de hubsell

hubsell vérifie chaque contact au moment de l'usage et signale les domaines catch-all, pour que les adresses invalides soient détectées avant l'envoi et que le taux de rejet reste bas.
