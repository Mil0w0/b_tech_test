Le test consiste a mettre en place une API graphQL pour créer, lister et mettre à jour des équipements.

Pour réaliser ce test vous devez avoir docker d’installer (pour l’environnement de dev).

# L’environnement

Le projet tourne avec **Docker.** C’est un outil qui permet de faire tourner des projets sur des micros VM appelés container. Le framework NestJS est utilisé avec le plug-in apollo-server pour gérer le graphQL.

## Structure

Le projet suit une structure simple dont voici les éléments importants

### environnement

Ce dossier contient un fichier api.dev.env qui contient les variables d’environment utilisé par le projet en mode développement.

### graphql

Ce dossier contient les schémas graphQL utilisés par le projet. Une des tâches du projet consiste à construire les schémas.

### prisma

Ce dossier est utilisé pour la configuration de l’ORM prisma utilisé pour dialoguer avec la base de données. Il contient les migrations qui permettent de générer la structure de la base et le schéma de cette dernière.

### src

Ce dossier continent les sources du projet.

### test

Ce dossier contient les tests 2e2. Ils ne sont pas nécessaires à la réalisation du projet.

## Docker

Docker permet d’avoir un environnement de développement propre en utilisant des micros VM appelés containers. Dans le répertoire racine de ce repository, vous trouverez un fichier Dockerfile qui permet de build / run l’API. Vous trouverez aussi un fichier `docker-compose.yml` qui permet de mettre en relation le container de la bdd et celui de l’api

## Setup

Pour mettre en place l’environnement de développement, il suffit d’executer la commande `docker-compose up`.

Une fois les containers lancé. Il faut créer la structure du projet. Pour ce faire, il faut ce connecter au container de l’api via la commande docker `exec -it testbe-api-1 sh`. Puis il faut exécuter la commande de migration prisma `npx prisma migrate dev`.

Ça y est, vous êtes prêt à développer

# Travail à faire

L’exercice consiste à créer une petite API d’équipement.

## mutation

### Create

Créer une mutation pour créer un équipement. Un équipement a un id, un nom, un manufacturer, sa consommation kwh et son cout.
En base de données, il existe une relation one to many entre les manufacturer est les équipements. Un manufacturer peut donc avoir plusieurs équipements mais un équipement ne peut avoir qu’un manufacturer.

`   mutation CreateManufacturer{createManufacturer(input: {name: "Hilderal & Cie"}){id, name}}
`

`    mutation CreateEquipment{createEquipment(input:{name: "Ampoule LED", kwh: 20, cout:12, manufacturerId:3}){id,name,kwh,cout}}
`

### Update

Créer une mutation pour mettre à jour un équipement. La mise à jour permet de modifier le kwh, le cout et le nom de l’équipement, mais pas le manufacturer ni l’id de d’équipement.
`mutation UpdateEquipment {updateEquipment(id: 1, input: {name: "Chaudière 2000"}){name}}
`

## Query

### ListEquipments

Cette query permet de récupérer l’ensemble des équipements présent dans la base de données.

`query GetEquipments{ListEquipment{id, name}}`
### Equipment($id)

Cette query permet de récupérer un équipement en fonction de son ID
Query pour tester dans le playground: 

`query GetEquipmentByID{Equipment(id:1){id,name,kwh,cout}}`

# Pour finir

Pour toutes questions vis-à-vis de ce test. Vous pouvez contacter le CTO de beeldi (guillaume@beeldi.com).


# Remarques Loriane

L'image du docker pour l'application semble être obsolète. J'ai du modifier le dockerfile et préciser une version d'alpine pour que ça fonctionne sinon j'avais des soucis de compatibilité entre prisma et openSSL ?
Je me suis permis de changer le port hôte pour lancer l'API avec une variable modifiable dans le .env, je vous l'ai laissée à 3000 donc normalement vous ne devriez pas avoir de soucis :)



