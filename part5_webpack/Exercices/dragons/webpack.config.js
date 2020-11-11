const path = require('path'); // pour créer un chemin absolu pour webpack

module.exports = {
    mode : "development",
    entry: './src/app.js', // Point d'entrée
    // Sortie
    output: {
        // chemin absolu pour webpack
        path: path.resolve(__dirname, 'dist'),
        filename: "bundle.js"
    },
    // configuration du serveur
    // pour qu'il nous serve ce qui se trouve dans le dossier dist
    // et non pas par défaut ce qu'il y a à la racine du serveur
    devServer: {
        // base du contenu obligatoire pour lancer le serveur dans ce dossier
        contentBase: path.join(__dirname, 'dist'),
        port : 9000,
        open: true
    }
}