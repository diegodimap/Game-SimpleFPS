var damageAmount : int = 5;
var targetDistance : float;
var allowedRange : float = 15;

var hole : GameObject; //decals
var luzFaisca : GameObject;
var shot : RaycastHit;

function Update(){
	if(Input.GetButtonDown("Fire1") && AmmoCount.loadedAmmo > 0){
		
		if(Physics.Raycast (transform.position, transform.TransformDirection(Vector3.forward), shot)){
			TargetDistance = shot.distance;
			if(targetDistance < allowedRange){
				shot.transform.SendMessage("deduzirPontos", damageAmount);

				//decals
				var shotRotation = Quaternion.FromToRotation(Vector3.up, shot.normal);
				Instantiate(hole, shot.point, shotRotation); 
				decals();
			}
		}
	}
}	
	function decals(){
		var shotRotation = Quaternion.FromToRotation(Vector3.up, shot.normal);
		Instantiate(hole, shot.point, shotRotation); 
		//Instantiate(luzFaisca, shot.point, shotRotation);
		//yield WaitForSeconds(0.2); 
		//Destroy(luzFaisca);
	}
 