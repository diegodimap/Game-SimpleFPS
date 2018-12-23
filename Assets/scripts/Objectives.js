var objetivos : GameObject;

function Update(){
	if(Input.GetButtonDown("Objectives")){
		if(objetivos.active){
			objetivos.SetActive(false);
		}else{
			objetivos.SetActive(true);
		}
	}
}