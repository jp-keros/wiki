# Les objets de la marque Profalux

Certains objets de la marque Profalux ont besoin d'une configuration particulière pour fonctionner avec le plugin. Ils seront listés dans cette page.

**Cette page n'est pas une liste des objets compatibles.**

La liste des objets compatibles est sur le site [https://zigbee.blakadder.com/z4d.html](https://zigbee.blakadder.com/z4d.html).


## Sommaire

Les objets nécessitant une configuration particulière :

* [Fonctionnement](#Fonctionnement)
* [Appairages](#appairages)
* [Autres informations](#autres-informations)
* [Références](#r%C3%A9f%C3%A9rences)


### Fonctionnement

Lorsque le volet quitte un réseau, il cherche automatiquement un nouveau réseau ouvert.

#### Si un réseau ouvert est trouvé

 * Le volet va réaliser 2 montées/descentes. La montée/descente est pour informer que le volet s'est connecté à un réseau.
 * Tous les volets vont faire une montée/descente.
 * La led de la télécommande a une led verte clignotante toutes les secondes pour indiquer la recherche du réseau.
 * Quand la télécommande rejoint le réseau et est appairée avec le volet, le volet va réaliser 3 montées/descentes.
 * La LED va s'arrêter de clignoter (clignotement rapide vert puis éteint).


#### Si aucun réseau n'est trouvé

* Le volet va créer sont propre réseau et va réaliser 2 montées/descentes.
* Appairer la télécommande


#### Si la télécommande ne trouve pas sont volet d'origine

* La LED clignote en rouge
* Le volet va faire un reset après 3 minutes (une montée/descente)
* Appuyer 5 fois sur le bouton R de la télécommande pour la réinitialiser.
* Maintenir appuyer tant que la LED ne s'arrête pas de clignoter
* Appuyer sur le bouton STOP pour rechercher un réseau


### Appairages

Le procédé d'appairage est documenté sur le site [Zigate.fr]( https://zigate.fr/2018/02/03/association-des-volets-profalux-a-la-zigate/ )

#### Faire un reset du volet et de la télécommande

* Vérifier que la ZiGate n'est pas en mode appairage
* Appuyer 5 fois sur le bouton R (au dos de la télécommande) : la led va clignoter rouge puis vert
* Dans la minute, appuyer sur le bouton STOP : cela va fermer le réseau et arrêter le processus d'appairage
* Vérifier que la télécommande contrôle le volet. en cas de problèmes, consulter la documentation Profalux.


#### Appairer le volet

* Mettre la ZiGate en mode appairage : Tous les volets du réseau vont réaliser une montée descente.

* Appuyer 1 fois sur le bouton R (au dos de la télécommande) : la télécommande va clignoter une fois.
* Appuyer sur le bouton UP : le volet doit faire une montée/descente

Le volet et la télécommande vont alors sortir de leur réseau et rechercher un réseau ouvert pour appairage.

* Lorsque la LED arrête de clignoter, appuyer sur le bouton STOP : le réseau sera fermé et l'appairage du volet sera terminé.


## Autres informations

* Le volet Profalux peut être gérer par le cluster ONOFF (0x0006) ou le cluster LevelControl (0x0008). __Il est conseillé d'utiliser uniquement le LevelControl__, même pour une ouverture ou une fermeture complète.

* Configure Reporting can be set on Cluster LevelControl (0x0008) attribute (0x0000)

* Si vous avez une télécommande centrale ZOE, vous pouvez créer des groupes. Ils auront les numéros 0x8000 - 0x8.... Profalux indique que cela dépend de la version du firmware de la ZOE. Il faudra réaliser une mise à jour avant d'être appairer avec une télécommande non Profalux. Contactez directement Profalux pour obtenir les mises à jours.


## Références

* [Tutoriel sur zigate.fr](https://zigate.fr/documentation/association-des-volets-profalux-a-la-zigate)
* [Notices de références Profalux]( https://www.profalux-pro.com/telecommande/moteur-radio-profalux-zigbee-2/)
* [Notice de dépanage](https://www.profalux-pro.com/notice/mon-volet-roulant-ne-fonctionne-plus-ndep005-2/)
* [Profalux Notice for blind after 2016](http://www.profalux-pro.com/download/1.%20Notices,%20Plans,%20Technique/1.%20Volets%20roulants/3.%20Moteurs%20Commandes%20et%20Accessoires/1.%20Moteur/Moteur%20Profalux%20Zigbee/Notice%20SAV%20moteur%20et%20telecommande%20Profalux%20Zigbee.%20A%20partir%20de%20Juillet%202016-NSAV029.pdf)
