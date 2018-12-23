import UnityEngine.UI;


var ammoDisplay : GameObject; 
var loadedAmmoDisplay : GameObject; 


static var ammo : int;
static var loadedAmmo : int;

var internalAmmo : int = 0;
var internalLoadedAmmo : int = 0;


function Update(){
	internalAmmo = ammo;
	internalLoadedAmmo = loadedAmmo;

	ammoDisplay.GetComponent.<Text>().text = " " + internalAmmo; //pq no UI é texto
	loadedAmmoDisplay.GetComponent.<Text>().text = " " + internalLoadedAmmo; 
}