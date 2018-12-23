var lanterna1 : GameObject;
var lanterna2 : GameObject;
var som : AudioSource;

function Update () {
	if(Input.GetButtonDown("Flashlight")){
		if(lanterna1.activeSelf == true){
			lanterna1.SetActive(false);
			lanterna2.SetActive(false);
			som.Play();
		}else{
			lanterna1.SetActive(true);
			lanterna2.SetActive(true);
			som.Play();
		}
	}
}
