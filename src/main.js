import Phaser from "./lib/phaser.js"

import Game from "./scenes/Game.js"

import GameOver from './scenes/GameOver.js'

console.dir(Phaser)

export default new Phaser.Game(             // méthode export de Phaser pour un jeu
{
    type: Phaser.AUTO,
    width: 480,                             // largeur
    height: 640,                            // hauteur
    scene: Game,                            // scene chosisie
    physics:                                // définition de la physique
    {
        default: 'arcade',                  // paramètres : arcade
        arcade:                             
        {
            gravity:                        // gravité
            {
                y: 200                      // sur quel axe : combien 
            },
            debug: true                     // pour voir les boites de collisions
        }
    }
});


