var enemyHealth : int = 10;
var zumbi :GameObject;

function deduzirPontos(damageAmount : int){
	enemyHealth -= damageAmount;
}

function Update(){
	if(enemyHealth <= 0){
		//Destroy(gameObject);
    GetComponent.<Animation>().Play("Dying");
	//	Score.currentScore +=100;
		endZombie();
	}
}

function endZombie(){
	yield WaitForSeconds(3);
	Destroy(gameObject);
}