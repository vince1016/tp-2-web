/**
 * @module init.js
 * @author Coéquipier1
 * @author Coéquipier2
 * @copyright 2018
 */

 /**
  * @const MAX_QUESTIONS
  * @type {number}
  * @description Nombre de questions à afficher dans le quiz.
  */
const MAX_QUESTIONS = 5;

/**
  * @const NB_CHOIX_MAX
  * @type {number}
  * @description Nombre de choix par question.
  */
const NB_CHOIX_MAX = 4;

/**
  * @const POS_REPONSE
  * @type {number}
  * @description Position de l’index de la bonne réponse.
  */
const POS_REPONSE = 0;

/**
  * @global
  * @name questionCourante
  * @type {number}
  * @description Index de la question présentement affichée.
  */
var questionCourante = 0;

/**
  * @global
  * @name totalPointage
  * @type {number}
  * @description Total du pointage accumulé.
  */
var totalPointage = 0;

/**
  * @global
  * @name reponseUtilisateur
  * @type {number}
  * @description Choix de l’utilisateur.
  */
var reponseUtilisateur = 0;

/**
  * @global
  * @name tableauQuestions
  * @type {object}
  * @description Liste des questions disponibles pour le quiz.
  * @example [["Quel est le meilleur aliment pour votre santé?", 1, "https://www.google.ca" ,"Brocoli","Croustilles sans OGM","Crème glacée","Poutine déjeuner"]]
  */
var tableauQuestions = [
["une carrote est quel couleur?", 3, "http://lmgtfy.com/?t=i&q=carotte", "une carrote est quel couleur-pogo","une carrote est quel couleur-scooter","une carrote est quel couleur-barbotte","une carrote est quel couleur-orange"],
["quel son fait le brocolie?", 1, "http://lmgtfy.com/?t=v&q=brocolie+sound","quel son fait le brocolie-ratatata","quel son fait le brocolie-brzbrz", "quel son fait le brocolie-...","quel son fait le brocolie-Un peu comme un camion"],
["quel espece est la plus menacer de disparaitre?", 1 ,"http://lmgtfy.com/?t=i&q=banane","quel espece est la plus menacer de disparaitre-la patate d'afrique","quel espece est la plus menacer de disparaitre-la banane","quel espece est la plus menacer de disparaitre-la ciboulette cosmique","quel espece est la plus menacer de disparaitre-les baie enrober de chocolat"],
["jusqu'à quelle vitesse un radis peu courrir?", 2, "http://lmgtfy.com/?t=i&q=radis+qui+cour","jusqu'à quelle vitesse un radis peu courrir-flash macqueen","jusqu'à quelle vitesse un radis peu courrir-buzz l'éclaire","jusqu'à quelle vitesse un radis peu courrir-pas vite","jusqu'à quelle vitesse un radis peu courrir-hello world??"],
["pourquoi les chat detruit les plante?", 0, "http://lmgtfy.com/?t=i&q=chat+qui+mange+une+plante", "pourquoi les chat detruit les plante-il veulent tuer les humains pour dominer la terre","pourquoi les chat detruit les plante-car ils sont con","pourquoi les chat detruit les plante-car comme batman,leur parent on souvent ete agresser par les plante","pourquoi les chat detruit les plante-le blnace est une jolie couleur"],
["comment les salades se font manger?", 2, "http://lmgtfy.com/?t=i&q=homme+mangant+de+la+salade","comment les salades se font manger-par les pied","comment les salades se font manger-pae les cheveux","comment les salades se font manger-par la bouche","aucune des reponse"],
["les boisson sante sont-elles santé?", 0, "http://lmgtfy.com/?t=i&q=ok+meme","les boisson sante sont-elles santé?-probablement si cela s'appel boisson snaté","les boisson sante sont-elles santé?-choisi la bonne question","les boisson sante sont-elles santé?-pas sur???","les boisson sante sont-elles santé?-tu es froid..."],
["les question son divertissante", 1, "http://lmgtfy.com/?t=i&q=oui","les question son divertissante-non","les question son divertissante-stp vincent enleve pas de point pour ca","les question son divertissante-peut-etre","les question son divertissante-ne sais pas"],
["je n'est pus d'ider" , 0, "http://lmgtfy.com/?t=i&q=je+ne+sais+pas","je n'est pus d'ider-pokemon","je n'est pus d'ider-chevre","je n'est pus d'ider-bouteil","je n'est pus d'ider-les bails cegep ste-foy"],
["smash bros est cool", 0, "http://lmgtfy.com/?t=i&q=pu+d%27idee", "smash bros est cool-oui", "smash bros est cool-non","smash bros est cool-pichu gere","smash bros est cool-..."]];


/**
  * @global
  * @name questionsQuiz
  * @type {object}
  * @description Liste des questions posées dans le quiz.
  * @example [["Quel est le meilleur aliment pour votre santé?", 1, "https://www.google.ca" ,"Brocoli","Croustilles sans OGM","Crème glacée","Poutine déjeuner"]]
  */
var questionsQuiz = [[]];

/**
 * @name choisirQuestions
 * @description Prend MAX_QUESTIONS de questions de tableauQuestions pour les mettre dans questionsQuiz.
 */
function choisirQuestions()
{
  var indexOf5Questions = new Array(0);
  var interationEnPlus = 0;
  questionsQuiz = new Array(0);
  for(var i = 0; i<MAX_QUESTIONS + interationEnPlus;i++){
  var getFiveRandomNumber = Math.random(0,10)*10;
  getFiveRandomNumber = Math.floor(getFiveRandomNumber);
  if(indexOf5Questions.indexOf(getFiveRandomNumber) <= -1){
  indexOf5Questions.push(getFiveRandomNumber);
  interationEnPlus++;
  }
  }
  for(var i = 0;i<MAX_QUESTIONS;i++){
    var buff = indexOf5Questions[i];
    questionsQuiz.push(tableauQuestions[buff]);
    console.log(questionsQuiz[i]);
    console.log(indexOf5Questions[i]);
    
  }
  
  
}

/**
 * @name init
 * @description Fonction d'initialisation du quiz.
 */
function init() 
{
	choisirQuestions();
}

window.onload = init();
