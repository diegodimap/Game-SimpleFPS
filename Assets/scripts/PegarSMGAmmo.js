var municao : GameObject; 
var objective2 : GameObject; 
var openDoorMessage : GameObject; 

function OnTriggerEnter() {
	if(municao.active){
		municao.SetActive(false);
		var getammo : AudioSource = GetComponent.<AudioSource>();
		getammo.Play();
		AmmoCount.ammo += 300;
		objective2.SetActive(true);
	}
}

function OnMouseOver(){
	//if(PlayerCasting.distanceToTarget < 5){
		openDoorMessage.GetComponent.<Text>().text = "Approach to take the SMG ammo box!";
		openDoorMessage.SetActive(true);
	//}
}

function OnMouseExit(){
	openDoorMessage.GetComponent.<Text>().text = "";
}
 