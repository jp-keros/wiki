<a href="Home.md"><img align="left" width="80" height="80" src="../Images/logo_Z4D.png" alt="Logo"></a>

# Info - Généralités sur le wiki

</br>

Le but de ce wiki est de fournir le plus d'informations possible sur l'utilisation du Plugin.

**Ce wiki en français a été traduit à partir du [wiki anglais](../en-eng/home.md) :** nous avons essayé de faire de notre mieux, mais si des choses ne sont pas claires ou approximatives, ne pas hésiter à nous faire un retour. Merci d'avance.


## Introduction

L'objectif de ce Plugin est de réaliser une passerelle entre un coordinateur ZigBee, un récepteur ZigBee et le logiciel de domotique [DomoticZ](https://www.domoticz.com). Ce Plugin permettra de gérer les objets ZigBee utilisés par DomoticZ.

Le Plugin dispose d'une interface utilisateur dédiée accessible depuis votre navigateur web. Cette interface permettra de configurer le Plugin et régler le fonctionnement des coordinateurs.

Voici une liste non exhaustive des objets compatibles : [https://zigbee.blakadder.com](https://zigbee.blakadder.com/z4d.html). Ceux présents dans la liste ont été "certifiés" : nous savons qu'ils fonctionnent avec le Plugin lorsque l’étiquette __Zigbee for Domoticz__ est présente.


## Lexique

Explication des termes utilisés sur ce Wiki :

| Terme          | Signification |
| -------------- | ------------- |
| Coordinateur   | Objet qui initie le réseau ZigBee : ZiGates, Texas Instruments avec firmware znp, etc ... |
| Objet          | L'objet physique : sonde, bouton, ampoule, prise, volet, sirène, etc... |
| Routeur        | Un objet branché généralement sur le secteur qui peut recevoir des commandes : une ampoule, une prise, un volet, etc... Il joue un rôle de routeur/répéteur dans le maillage du réseau ZigBee |
| Objet terminal | Un objet généralement sur batterie qui envoi des informations : une sonde, un bouton |
| Dispositif     | Fonction d'un objet qui se trouve dans Menu Configuration / Dispositifs de DomoticZ |
| Widget         | Tuile dans le tableau de bord de DomoticZ correspondante à un dispositif |
