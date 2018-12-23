var objective1 : GameObject; 

var arma : GameObject; 

var armaMao : GameObject; 

var som : AudioSource;

var openDoorMessage : GameObject;

function OnTriggerEnter() {
	if(arma.active){
		arma.SetActive(false);
		armaMao.SetActive(true);
		//var som : AudioSource = GetComponent.<AudioSource>();
		som.Play();
		//AmmoCount.ammo += 30;
		objective1.SetActive(true);
	}
}


function OnMouseOver(){
	//if(PlayerCasting.distanceToTarget < 5){
		openDoorMessage.GetComponent.<Text>().text = "Approach to take 9mm gun!";
		openDoorMessage.SetActive(true);
	//}
}

function OnMouseExit(){
	openDoorMessage.GetComponent.<Text>().text = "";
}