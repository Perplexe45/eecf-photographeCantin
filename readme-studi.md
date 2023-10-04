Avant de passer à l'installation, Il faut impérativement la version 18.17.1 de node.js pour les 2 programmes, mais pas la dernière (20.5.1), car Strapi ne fonctionnera pas.

Créer 2 dossiers avec 2 noms différents: 
  - 1 pour le programme next.js
  - 1 pour le backend avec Strapi

Dans le dossier du programme next.js
a- ouvrir un terminal et se trouver à la racine de ce dossier 
b- ouvrir VScode
c- 'git init' dans le terminal
d- appui sur ces 3 touches 'Ctrl+Shift+P' et taper "Git: Clone" 
e- Mettre le nom du repisotory à copier : https://github.com/Perplexe45/eecf-photographeCantin.git
f- Ensuite : 'npm install' dans le terminal pour installer le  dossier node_module et les dépendances selon le fichier 'package.json'

Dans le dossier du programme du backend avec strapi (procédure identique)
a- Ouvrir un terminal et se trouver à la racine de ce dossier
b- ouvrir VScode
c- 'git init' dans le terminal
d- appui sur ces 3 touches 'Ctrl+Shift+P' et taper "Git: Clone" 
e- Mettre le nom du repisotory à copier : https://github.com/Perplexe45/strapi-deployment.git
f- Ensuite : 'npm install' dans le terminal pour installer le dossier node_module et les dépendances selon le fichier 'package.json'

Pour tester l'application en local, avant de faire quoique ce soit, il faut remplacer dans le projet du dossier next.js  le 'https://cantin.onrender.com' par 'http://localhost:1337'. Pour cela, de manière très rapide, il faut cliquer sur le symbole de la loupe du dashboard de VSCode et faire les changements sur le projet complet. En effet, le projet actuel a été configuré pour un deploiement de production

Ensuite, on peut commencer à lancer projet avec le backend de Strapi.A la racine de ce dossier, dans un terminal,on tape 'npm run develop'. Pour la première utilisation , webpack se lance et paramètre tout le programme.

Après, on fait de même pour le programme fait avec next.js excepté que la syntaxe dans le terminal est : 'npm run dev'. Si tout est fonctionnel, alors le site fonctionnera de manière optimal.

NB : Si des fois, Strapi n'arriverait pas à s'installer, on refait une installation propres et les étapes décrites auparavant, mais avant de faire le 'npm install' qui génère les modules selon le fichier 'package.json'(f), il faut installer en premier 'Strapi' dont voici la syntaxe : 'npx create-strapi-app@latest' et on répond aux questions lors de l'installation. Ensuite on reprend le 'npm install', mais obligatoirement en version '18.17.1' de node.js.
-S'il faut stopper le port qu'utilise strapi et relancerle serveur pour différentes raisons,la syntaxe est la suivante : 'sudo fuser -k 1337/tcp' et ensuite, on relance le serveur : 'npm run develop'.

