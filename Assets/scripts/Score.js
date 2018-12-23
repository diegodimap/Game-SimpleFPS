static var currentScore : int;

var internalScore : int;

var scoreText : GameObject;

var objective4 : GameObject; 
var objectives : GameObject; 
var GANHOU : GameObject; 
var teste : int = 0;

function Update(){
	internalScore = currentScore;
	scoreText.GetComponent.<Text>().text = "SCORE: " + internalScore;
	
	if(internalScore >= 100){
		if(teste == 0){
			ganhou();
		}
		teste = 1;
	}
}

function ganhou(){
	  objective4.SetActive(true);
		objectives.SetActive(true);
		GANHOU.SetActive(true);
		yield WaitForSeconds(5);
		objective4.SetActive(false);
		objectives.SetActive(false);
		GANHOU.SetActive(false);
}