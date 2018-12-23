var theEnemy : GameObject;
var thePlayer : GameObject;
var enemySpeed : float;
var distance : float; 

function Update(){
	enemySpeed = 0.05;
	transform.position = Vector3.MoveTowards(transform.position, thePlayer.transform.position, enemySpeed);
}

function OnTriggerEnter(){
	
		 Application.Quit();
	
}