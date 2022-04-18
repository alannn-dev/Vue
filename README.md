# Vue (Cheat sheet)

Source : https://dev.to/ericlecodeur/apprendre-vue-js-3-jour-1-concepts-de-base-2jfn

# Qu’est-ce que Vue.js ?
Vue.js est un framework progressif pour JavaScript utilisé pour créer des interfaces Web et des applications d'une page (SPA). Vue.js peut également être utilisé pour le développement d'applications de bureau et mobiles avec les frameworks Ionic et Electron.

# Pourquoi Vue.js
Avant d’utiliser un framework il est important de comprendre dans quel contexte il s’avère le bon outil.

Voici donc la liste des différentes raisons qui pourraient justifier l’utilisation d’un framework comme Vue.js

Organisation de votre code
Efficacité/rapidité de développement
Ré utilisabilité du code
Maintenance et future développement

# Comment Utiliser/installer Vue.js
Vue est un framework dit progressif. Vous pouvez l’utiliser juste dans une petite partie de votre page web ou si vous préférez vous pouvez construire une application entière avec Vue.js.

Voici ce qu'il faut faire pour utiliser Vue seulement dans une partie de votre page web :

Ajouter un tag 'script' qui contient un lien vers la librairie Vue.js
Ajouter un autre tag 'script' qui contient un lien vers votre fichier application Vue (app.js)
Créer une div avec id="app" qui servira de conteneur au rendu de votre application Vue.


# Les directives Vue.js

Les directives Vue.js sont des attributs HTML qui peuvent être insérés dans votre page afin de modifier le rendu de votre application Vue.

Voici la liste des directives disponible:

# v-bind 

Permet d'assigner une expression à un attribut. Vue va remplacer l'expression par sa valeur

# v-once

Avec la directive v-once Vue va interpolé l'expression seulement une fois. L'expression sera donc ignorée pour tous les autres rafraîchissements

# v-html

Permet d'afficher une expression avec des tags HTML.

# v-model

Permet de lier la valeur d'un champ de saisie avec une variable. Si vous modifiez l'un ou l'autre Vue mettra à jour automatiquement l'autre. Du coup, la variable et le champ de saisie auront toujours la même valeur.


