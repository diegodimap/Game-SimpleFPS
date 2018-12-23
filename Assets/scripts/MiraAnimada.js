var miraUp : GameObject;
var miraDown : GameObject;
var miraLeft : GameObject;
var miraRight : GameObject;

function Update () {
	if(Input.GetButtonDown("Fire1") && AmmoCount.loadedAmmo > 0){
		//mira
		miraUp.GetComponent.<Animator>().enabled=true;
		miraDown.GetComponent.<Animator>().enabled=true;
		miraLeft.GetComponent.<Animator>().enabled=true;
		miraRight.GetComponent.<Animator>().enabled=true;

		stopAnimations();
	}
}

function stopAnimations(){
		yield WaitForSeconds(0.16);

		miraUp.GetComponent.<Animator>().enabled=false;
		miraDown.GetComponent.<Animator>().enabled=false;
		miraLeft.GetComponent.<Animator>().enabled=false;
		miraRight.GetComponent.<Animator>().enabled=false;

}
