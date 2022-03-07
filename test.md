# Intégration du plugin dans DomoticZ

L'interface d'administration du plugin (WebUI) est accessible à l'adresse http://IP_DomoticZ:9400 (avec le port 9440 par défaut), mais il est également possible d'intégrer le WebUI directement dans DomoticZ et d'y accéder via un lien dans le Menu Personnalisé.

![Intégration du WebUI](Images/FR_DomoticZ-WebUI.png)
*Cette image est susceptible d'avoir évolué depuis l'écriture de cette documentation.*


## Ajouter un menu pour le WebUI

1. Aller dans le dossier __domoticz/www/templates__

2. Créer un fichier __ZigBeeForDomoticZ.html__ Le nom du fichier sera utiliser comme nom du menu.

3. Mettre la ligne suivante dans le fichier html :
```
<IFRAME SRC="http://IP_DomoticZ:9440/" height="800" width="100%"></IFRAME>
```
