using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;
using UnityEngine.SceneManagement;

public class Health : MonoBehaviour {
	public static int playerHealth = 10;
	public int internalHealth;
	public GameObject healthDisplay;
	
	void Update(){
		internalHealth = playerHealth;
		healthDisplay.GetComponent<Text>().text = "HEALTH: " + internalHealth;
		
		if(playerHealth <= 0){
			//SceneManager.LoadScene(1);
		}
	}
	
}
