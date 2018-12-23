var empty : AudioSource;
var reload : AudioSource;
var flash : GameObject;
var objective3 : GameObject; 
var firing : int = 0;

function Update(){
	if(Input.GetButton("Fire1")){
		if(AmmoCount.loadedAmmo > 0){
			if(firing == 0){
				smg();
			}
		}else{
			empty.Play();
		}
	}

	if(Input.GetButtonDown("Reload")){
		if(AmmoCount.ammo >= 30 && AmmoCount.loadedAmmo == 0){
			AmmoCount.loadedAmmo += 30;
			AmmoCount.ammo -= 30;
			reload.Play();
			animarReload();
			objective3.SetActive(true);
		}
	}
}

function smg(){
	firing = 1;
									var gunsound : AudioSource = GetComponent.<AudioSource>();
									flash.SetActive(true);
									flashOff();
									GetComponent.<Animation>().Play("tiroSMG");
									gunsound.Play();
									AmmoCount.loadedAmmo--;
									yield WaitForSeconds(0.1);
									firing = 0;
}

function flashOff(){
	yield WaitForSeconds(0.15);
	flash.SetActive(false);
}

function animarReload(){
	GetComponent.<Animation>().Play("reload");
	yield WaitForSeconds(0.7);
	GetComponent.<Animation>().Play("tiroSMG");
}