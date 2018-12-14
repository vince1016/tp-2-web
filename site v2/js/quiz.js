/**
 * @module quiz.js
 * @author Vincent Boies
 * @author Olivier Norton
 * @copyright 2018
 */



/**
 * @name validerQuestion
 * @description Valide si la réponse choisie est la bonne.
 * @param {*} noQuestion numéro de la question
 * @param {*} choixUtilisateur choix fait par l'utilisateur
 * @returns true si la réponse choisie est bonne, sinon false
 */
function validerQuestion(noQuestion, choixUtilisateur)
{
	var question = questionsQuiz[noQuestion];
	var isCorrect = false;
	if(question[1] == choixUtilisateur){
		isCorrect = true;
	}
	console.log(isCorrect);
	return isCorrect;
}

/**
 * @name ajouterPoint
 * @description Ajoute un point au total des points.
 */
function ajouterPoint()
{
	totalPointage++;
}

/**
 * @name obtenirPointage
 * @description Obtiens le pointage total accumulé.
 * @returns Le pointage total
 */
function obtenirPointage()
{
	return totalPointage;
}

/**
 * @name estFinPartie
 * @description Vérifie si l'on a atteint la fin de la partie.
 * @param {*} questionCourante Index de la question courante
 * @returns true si l'index de la question courrante est égal au nombre maximum de questions, sinon faux
 */
function estFinPartie(questionCourante)
{
	var isGameEnd = false;
	if(questionCourante == MAX_QUESTIONS - 1){
		isGameEnd = true;
	}
	return isGameEnd;
}

/**
 * @name chargerQuestionSuivante
 * @description Incrémente l'index indiquant la question courante.
 */
function chargerQuestionSuivante()
{
	questionCourante++;
	document.getElementById("boiteChoix").parentNode.lastChild.removeAttribute('href');
	document.getElementById("boiteChoix").parentNode.lastChild.innerHTML = "";
}

/**
 * @name obtenirBonneReponse
 * @description Incrémente l'index indiquant la question courante.
 * @param {*} noQuestion L'index de la question
 * @returns retourne la bonne réponse
 */
function obtenirBonneReponse(noQuestion)
{
	var indexBonneReponse = questionsQuiz[noQuestion][1];
	var bonneReponse = obtenirChoix(noQuestion);
	return bonneReponse[indexBonneReponse];
}

/**
 * @name obtenirChoix
 * @description Obtiens les choix de réponse pour une question donnée.
 * @param {*} noQuestion Index de la question pour laquelle il faut obtenir les choix de réponse.
 * @returns retourne un tableau contenant les choix de la question
 */
function obtenirChoix(noQuestion)
{
	var question = questionsQuiz[noQuestion];
	
	var choixReponses = new Array(0);
	for(var i=3;i<question.length;i++){
		choixReponses.push(question[i]);
	}
	return choixReponses;
}

/**
 * @name afficherBonneReponse
 * @description Modifie la fenêtre modale pour afficher la bonne réponse pour une question donnée.
 * @param {*} noQuestion Index de la question pour laquelle il faut afficher la bonne réponse.
 */
function afficherBonneReponse(noQuestion)
{
	var question = questionsQuiz[noQuestion];
	var indexBonneReponse = question[1];
	document.getElementById("boiteChoix").children[indexBonneReponse].style.backgroundColor='green';
	document.getElementById("boiteChoix").parentNode.lastChild.innerHTML = questionsQuiz[noQuestion][2];
	document.getElementById("boiteChoix").parentNode.lastChild.setAttribute('href',questionsQuiz[noQuestion][2]);
}

/**
 * @name majPointage
 * @description Mets à jour le total des points accumulés dans l'interface.
 */
function majPointage()
{
	document.getElementById("totalPoints").innerHTML=totalPointage;
}

/**
 * @name majTotalQuestion
 * @description Mets à jour le nombre total de questions dans l'interface.
 */
function majTotalQuestion()
{
	document.getElementById("totalQuestions").innerHTML=MAX_QUESTIONS;
}

/**
 * @name majTexteChoix
 * @description Modifie l'interface en affichant les réponses dans des boutons pour une question donnée.
 * @param {*} noQuestion Index de la question pour laquelle il faut afficher les réponses.
 */
function majTexteChoix(noQuestion)
{
	var boiteChoix = document.getElementById("boiteChoix");
	var choix = obtenirChoix(noQuestion);
	for(var i=0;i<4;i++){
		boiteChoix.children[i].children[0].innerHTML = choix[i];
//		boiteChoix.children.length
	}
}

/**
 * @name majTexteQuestion
 * @description Modifie l'interface en affichant une question.
 * @param {*} noQuestion Index de la question qu'il faut afficher.
 */
function majTexteQuestion(noQuestion)
{
	var question = questionsQuiz[noQuestion];
	
	console.log(question[0]);
	 document.getElementById("texteQuestion").innerHTML=question[0];
	
	

	$('#texteQuestion').removeClass('animated bounceInLeft delay-1s');
	$('#texteQuestion').removeClass('animated wobble delay-2s');
	$('#texteQuestion').addClass('animated bounceInLeft delay-1s');
}

/**
 * @name majNoQuestionCourant
 * @description Modifie l'interface en affichant une le numéro de la question courante.
 */
function majNoQuestionCourant()
{	
	document.getElementById("noQuestionCourante").innerHTML=questionCourante+1;
}

/**
 * @name remiseAZeroBoutons
 * @description Modifie l'interface en remettant à l'état initial les boutons de réponse.
 */
function remiseAZeroBoutons()
{
	for (var i = 0;i < NB_CHOIX_MAX; i++) {
		document.getElementById("boiteChoix").children[i].style.backgroundColor = 'white';
	}
}

/**
 * @name majProgression
 * @description Modifie l'interface en ajustant la barre de progression.
 */
function majProgression()
{
	
}

/**
 * @name majInterface
 * @description Modifie l'interface en changeant la question, les choix de réponses, en mettant à jour le pointage, la barre de progression et le numéro de la question courante et en remettant à zéro les boutons.
 */
function majInterface()
{
	remiseAZeroBoutons();
	majNoQuestionCourant();
	majTexteChoix(questionCourante);
	majTexteQuestion(questionCourante);
	majProgression();
	majTotalQuestion();
	majPointage();
	
}

/**
 * @name selectionnerChoix
 * @description Modifie l'interface pour changer l'apparence du bouton cliqué et valider
 * @param {*} noChoix Numéro du choix de réponse sélectionné.
 */
function selectionnerChoix(noChoix)
{
	var boiteChoix = document.getElementById("boiteChoix");
	var corectAnswer = validerQuestion(questionCourante,noChoix);
	if(corectAnswer == true){
		boiteChoix.children[noChoix].style.backgroundColor = 'green';
		ajouterPoint();
	}
	else{
		boiteChoix.children[noChoix].style.backgroundColor = 'red';
		afficherBonneReponse(questionCourante);
	}
	if(estFinPartie(questionCourante) == true){
		setTimeout(function () {
			majPointage();
			afficherBoiteFinDeJeu();
		},4000);
	}
	else{
		setTimeout(function () {
			chargerQuestionSuivante();
			majInterface();
		},4000);
	}
	

}

/**
 * @name afficherBoiteFinDeJeu
 * @description Modifie l'interface pour afficher la boîte de résumé et cacher la boîte de question.
 */
function afficherBoiteFinDeJeu()
{
	totalPointage=0;
	questionCourante=0;
	document.getElementById("boiteQuestion").innerHTML="<button onclick='reset()'>Recommencer</button>";
}

/**
 * @name reset
 * @description reset l'interface
 */
function reset(){
	document.getElementById("boiteQuestion").innerHTML= boiteBuff;
	init();
	majInterface();
	document.getElementById("btnChoix1").addEventListener("click", function(){
		selectionnerChoix(0);
	});
	document.getElementById("btnChoix2").addEventListener("click", function(){
		selectionnerChoix(1);
	});
	document.getElementById("btnChoix3").addEventListener("click", function(){
		selectionnerChoix(2);
	});
	document.getElementById("btnChoix4").addEventListener("click", function(){
		selectionnerChoix(3);
	});
}
