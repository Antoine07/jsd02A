# Configuration vscode

les 5 plugins indispensables pour vscode

## ESLINT

Configuration eslint

Bonne pratique dans le code.

### Linter

Qualité de code ? 

Eslint (linter) garant de la qualité du code (coding style) il vérifie également le code si celui-ci n'a pas d'erreur.

- Esapce, tabulation, point virgule ... 

On peut l'installer de manière local ou global

```bash
npm install estlint --save-dev
```

On a un exécutable dans le dossier node_modules/.bin

```bash
/node_modules/.bin/eslint.js --init
```

Il faut alors définir le contexte et ce que l'on veut vérifier 

Pour le coding style nous utiliserons airbnb

En répondant aux différentes question un eslintrc.json sera créer.

Pour utiliser eslint et véirifier un code conforme au Eslint :

```bash
/node_modules/.bin/eslint.js app.js

```

## Dans vscode

On va utiliser le styling code de arbnb