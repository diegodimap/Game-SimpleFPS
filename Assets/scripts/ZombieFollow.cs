using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.SceneManagement;

public class ZombieFollow : MonoBehaviour {
	public GameObject thePlayer;
	public float targetDistance;
	public float allowedRange = 10;
	public GameObject theEnemy;
	public float enemySpeed;
	public int attackTrigger;
	public RaycastHit	shot;
	public int enemyHealth = 10;
	public AudioSource hurt1;
	public AudioSource hurt2;
	public AudioSource hurt3;
	
	public int isAttacking;
	public int painSoundRandom;
	public GameObject screenFlashRed;
	
	void Update(){
		transform.LookAt(thePlayer.transform);
		if(Physics.Raycast(transform.position, transform.TransformDirection(Vector3.forward), out shot)){
			targetDistance = shot.distance;
			if(targetDistance < allowedRange){
				enemySpeed = 0.02f;
				if(attackTrigger == 0){
					theEnemy.GetComponent<Animation>().Play("Walking");
					transform.position = Vector3.MoveTowards(transform.position, thePlayer.transform.position, enemySpeed);
				}
			}else{
				enemySpeed = 0;
				theEnemy.GetComponent<Animation>().Play("Idle");
			}
		}
		
		if(attackTrigger == 1){
			if(isAttacking == 0){
				StartCoroutine(enemyDamage());
			}
			theEnemy.GetComponent<Animation>().Play("Attacking");
			//hurt1.Play();
			//Health.playerHealth -= 5; 
			//espera();
		}
		
		if(enemyHealth <= 0){
			theEnemy.GetComponent<Animation>().Play("Dying");
		}
	}
	
	IEnumerator espera(){
		yield return new WaitForSeconds(10);
	}
	
	void OnTriggerEnter(){
		attackTrigger=1;
		
		enemySpeed = 0;
		
		
	}
	
	void OnTriggerExit(){
		attackTrigger=0;
		enemySpeed = 0.02f;
	}
	

  void deduzirPontos(int damageAmount){
		enemyHealth -= damageAmount;
  }
	
	IEnumerator enemyDamage(){
		isAttacking = 1;
		painSoundRandom = Random.Range(1,4); //3 possibilidades
		yield return new WaitForSeconds(0.5f);
		screenFlashRed.SetActive(true);
		Health.playerHealth -= 2;
		
		if(painSoundRandom == 1){
			hurt1.Play();
		}
		if(painSoundRandom == 2){
			hurt2.Play();
		}
		if(painSoundRandom == 3){
			hurt3.Play();
		}
		
		yield return new WaitForSeconds(0.5f);
		screenFlashRed.SetActive(false);
		yield return new WaitForSeconds(1);
		isAttacking = 0;
		if(Health.playerHealth <= 0){
			SceneManager.LoadScene(1);
		}
	}
		
}
