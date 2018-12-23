var empty : AudioSource;
var reload : AudioSource;
var flash : GameObject;
var objective3 : GameObject; 

function Update(){
	if(Input.GetButtonDown("Fire1")){
		if(AmmoCount.loadedAmmo > 0){
			var gunsound : AudioSource = GetComponent.<AudioSource>();
			flash.SetActive(true);
			flashOff();
			GetComponent.<Animation>().Play("tiro");
			gunsound.Play();
			AmmoCount.loadedAmmo--;

			//decals

		}else{
			empty.Play();
		}
	}

	if(Input.GetButtonDown("Reload")){
		if(AmmoCount.ammo >= 15 && AmmoCount.loadedAmmo == 0){
			AmmoCount.loadedAmmo += 15;
			AmmoCount.ammo -= 15;
			reload.Play();
			animarReload();
			objective3.SetActive(true);
		}
	}
}

function flashOff(){
	yield WaitForSeconds(0.15);
	flash.SetActive(false);
}

function animarReload(){
	GetComponent.<Animation>().Play("reload");
	yield WaitForSeconds(0.7);
	GetComponent.<Animation>().Play("tiro");
}