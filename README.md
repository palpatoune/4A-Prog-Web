# AppProgWebFront

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.0.3.

## Etape d'instalation
```shell script
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




















## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
