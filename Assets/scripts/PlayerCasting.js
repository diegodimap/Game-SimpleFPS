static var distanceToTarget : float;

var toTarget : float;

function Update () {
	var hit : RaycastHit;

	if(Physics.Raycast (transform.position,transform.TransformDirection(Vector3.forward), hit)){
		toTarget = hit.distance;
		distanceToTarget = toTarget;
	}
}
