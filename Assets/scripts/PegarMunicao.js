var municao : GameObject; 
var objective2 : GameObject; 
var openDoorMessage : GameObject; 

function OnTriggerEnter() {
	if(municao.active){
		municao.SetActive(false);
		var getammo : AudioSource = GetComponent.<AudioSource>();
		getammo.Play();
		AmmoCount.ammo += 30;
		objective2.SetActive(true);
	}
}

function OnMouseOver(){
	//if(PlayerCasting.distanceToTarget < 5){
		openDoorMessage.GetComponent.<Text>().text = "Approach to take 9mm magazines!";
		openDoorMessage.SetActive(true);
	//}
}

function OnMouseExit(){
	openDoorMessage.GetComponent.<Text>().text = "";
}
 