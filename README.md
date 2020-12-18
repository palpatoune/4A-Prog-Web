
Simon Ledoit, Thomas Carpentier -- 4A-UFA-42
# Partie front : API pour le projet de programmation Web

Ce repository supporte le code de notre partie front de notre projet. C'est elle qui va présenter l'interface utilisateur aux personnes qui se connecteront. Les comptes et sessions qu'elle utilise sont gérés par un service sécurisé d'authentification bien distinct à notre API back, qui elle est contacté par notre front pour y insérer et extraire des données.

## Description des fonctionnalités principales :

### Les sondages
 - **Création de sondages :** il est possible de créer un sondage public ou privé, c'est-à-dire qui appartient à une salle de sondage, nous y reviendrons. L'utilisateur devient systématiquement le propriétaire du sondage.
 - **Vote sur un sondage :** un utilisateur peut voter une unique fois sur n'importe quel sondage public, ou sur un sondage privé, à condition qu'il soit membre de la salle de sondages à laquelle appartient ledit sondage privé.
 - **Suppression d'un sondage :** un utilisateur est capable de supprimer un sondage tant qu'il en est le propriétaire, qu'il soit public ou privé.
### Salle de sondages
Cette section est à propos d'améliorations éventuelles, car bien que les features soient bien présentes et fonctionnelles dans notre back SpringBoot API, elles n'ont pas été implémentées dans le front. Les salles affectées à des utilisateurs sont cependant affichées, c'est notamment le cas avec les données de test que nous insérons.
 - **Création d'une salle de sondage :** un utilisateur peut créer une salle, il est systématiquement le propriétaire.
 - **Ajout d'un utilisateur dans une salle :** un membre d'une salle de sondage est capable d'ajouter un autre membre dans cette même salle.
 - **Ajout d'un sondage dans une salle** : un utilisateur peut ajouter un sondage (privé par conséquent) dans une des salles dans lesquelles il est membre.
### Votes
 - **Visualiser les votes d'un sondage** : n'importe quel utilisateur peut visualiser les résultats des sondages publics, cependant pour les sondages privés, il doit être membre de la salle dans laquelle se situe ce sondage privé.


## Prérequis de fonctionnement
Les étapes nécessaires à l'installation de notre architecture sont les suivantes :
```shell script
# Etapes d'installation
$ npm install --save-dev @angular/cli@latest (check version image)
$ npm i -g npm-check-updates
$ ncu -u
$ npm install
$ docker run --name=keycloak_11 -p 8081:8080 -e KEYCLOAK_USER=admin -e KEYCLOAK_PASSWORD=admin jboss/keycloak:10.0.1
$ npm install keycloak-js@latest --save
#rendez vous à l'addresse localhost:8080 cliquez sur administration console et connectez avec l'identifient 'admin' et le mdp 'admin'
#en haut à gauche de votre écran passez voitre souris sur 'select real' et cliqué sur 'add realm'
#une fois cela fait importez le fichier 'realm-export.json' present dans les assets du projet
#et voila il ne vous reste plus qu'à vous rendre dans le dossier source
#lancez les commande :
$ npm install
$ ng serve -o 
# et voila ça marche
```

## Vidéo démonstrative
Nous avons conscience que l'architecture utilisée pour notre projet est bien au-dessus des besoins réels de l'application demandée, et entraîne plus de complexité et de rigidité, notamment avec par exemple l'utilisation de Keycloak. Cependant nous avons vu cela comme une montée en compétences.

Si la réplication de notre architecture est impossible, nous avons réalisé une vidéo démonstrative de l'état fonctionnel final de notre application :
https://www.youtube.com/watch?v=WsVm7PiO0To
