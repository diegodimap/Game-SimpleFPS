import UnityEngine.UI;

var door : GameObject;
var openDoorMessage : GameObject;
var objective4 : GameObject;

function Update () {
	if(Input.GetButtonDown("Action") && PlayerCasting.distanceToTarget < 5 && objective4.active){
		
		closeDoor();
	}
}

function closeDoor(){
	door.GetComponent.<Animation>().Play("openDoor");	
	yield WaitForSeconds(3);
	door.GetComponent.<Animation>().Play("closeDoor");	
	//yield WaitForSeconds(3);
	//closeDoorAnim.Play();
}

function OnMouseOver(){
	//if(PlayerCasting.distanceToTarget < 5){
		openDoorMessage.GetComponent.<Text>().text = "Press E to open the door! \n (Complete Objectives First!)";
		openDoorMessage.SetActive(true);
	//}
}

function OnMouseExit(){
	openDoorMessage.GetComponent.<Text>().text = "";
}