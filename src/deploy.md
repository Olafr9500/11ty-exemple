---
layout: "doc.webc"
---

# Déploiement

## Prérequis

Avant de partir sur le déploiement du projet, assurez d'avoir bien respecté les étapes de la [documentation](/documentation) pour le développement.

## Configuration du serveur

Cette étape n'est plus nécessaire, car le serveur est déjà configuré, mais s'il faut refaire la configuration sur un autre serveur, voici les étapes à suivre.

**Note :** Pour réaliser ces étapes, il faut avoir un domaine entier réservé au serveur. Il n'est pas possible de faire cohabiter l'application avec un autre site web sur le même domaine.

### Ajout du dépôt Git

Pour ajouter le dépôt Git, rendez-vous sur le serveur Plesk. Ensuite, allez sur le domaine et cliquez sur `Git`.

Ensuite, cliquez sur `Add Repository` pour ajouter le dépôt Git.

Ensuite, entrez les informations suivantes :

- **Repository name** : `stuart`
- **Repository URL** : `git@github.com:ServiceInformation/next-stuart.git`
- **Repository branch** : `main`
- **Server path** : `/path/to/root/document/server`

> **Attention :** Si vous êtes sur un serveur ou il y a déjà 1 ou plusieurs dépôts Git, il faut changer le nom du dépôt pour éviter les conflits.

### Configuration du Node.js

Pour configurer Node.js, il faut d'abord avoir ajouter le dépôt Git et fait un premier `Pull now` pour récupérer les fichiers du projet.

Ensuite, allez sur le domaine et cliquez sur `Node.js`.

> Si vous ne voyez pas `Node.js`, il faut d'abord installer le module `Node.js` sur le serveur en cliquant sur `Install Application` et en sélectionnant `Node.js`.

Ensuite, cliquez sur `Enable Node.js` pour activer Node.js sur le domaine. Sélectionnez la version `18` la plus récente possible et cliquez sur `Apply`.

Configurez ensuite Node.js pour que le `Dashboard` affiche les informations suivantes :

- Node.js version : `18.X.X`
- Package Manager : `npm`
- Document root : `/<path/to/root/document/server>/.next/static`
- Application mode : `production`
- Application URL : `https://<domaine>.fr`
- Application root : `/<path/to/root/document/server>`
- Application startup file : `node_modules/.bin/next`

Enfin, cliquez sur `+ NPM install` pour installer les dépendances du projet, puis allez dans `Run Node.js commands` et exécutez la commande `npm run deploy` pour construire le site et redémarrer le serveur.

Si tout s'est bien passé, vous devriez voir le site _https://domaine.fr_ être accessible.

> **Note :** Si des erreurs apparaissent, il faut vérifier que les étapes précédentes ont bien été réalisées.

## Déploiement sur le serveur de production

Pour déployer le projet, rendez-vous sur le serveur Plesk. Ensuite, allez sur le domaine `stuart.crescendo-restauration.fr` et cliquez sur `Git`.

Ensuite, cliquez sur `Pull now` pour récupérer les dernières modifications du projet et déployer le projet.

Ensuite, allez sur le domaine `stuart.crescendo-restauration.fr` et cliquez sur `Node.js`.

Une fois sur la page, cliquez sur `NPM install` pour installer les dépendances du projet, puis allez dans `Run Node.js commands` et exécutez la commande `npm run deploy` pour construire le site et redémarrer le serveur.

Enfin, visite le site [https://stuart.crescendo-restauration.fr](https://stuart.crescendo-restauration.fr) pour voir le résultat.
