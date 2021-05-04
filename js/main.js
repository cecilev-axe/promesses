
//le code qui est asynchrone va être placé dans une fonction qui retourne une promesse

function getUsers(){
	//créé une variable qui contiendra une promesse
	let promise = new Promise((resolve, reject) => {
		
		//ici c'ets le code qui prend du temps
		setTimeout(() => {
			let users = [];
			
			if(users.length == 0){
				reject('Aucun utilisateur récupéré');
			}
			
			else{
					//renvoyer le résultat
				resolve(users);
			}
			
		
		},1000);
		
	})
	
	
	
	
	return promise;
}


document.addEventListener('DOMContentLoaded',function(){
	
	getUsers()
		.then(response => console.log(response))
		.catch(error => console.error(error))
		
	console.log('fin du code');
	
})