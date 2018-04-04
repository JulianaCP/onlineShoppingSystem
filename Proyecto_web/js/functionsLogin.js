/*
params:
Description: set the membership to active
*/
function NotMembreship(){	
	var username= document.getElementById('inputEmail').value;			
	for (var i = 0; i < listBuyers.length; i++) {
		if (listBuyers[i].userName == username){
			listBuyers[i].membership= "Active";
			var userType= "Buyer";
			logIn(username,userType);
			window.location.href = "client_mainPage.html";					
			return;
		}
	}			
}		

/*
params:
Description:  Looks for the user in the list of buyers and logs it into the system
*/
function findExistUser(){	
	
	if (localStorage.listBuyers!= null && localStorage.productsList!= null ) {
	    listBuyers= JSON.parse(localStorage.listBuyers);
	    productsList=JSON.parse(localStorage.productsList);	    
	}           

	var menssage= document.getElementById('error');
	menssage.style.visibility= "hidden";			

	var username= document.getElementById('inputEmail').value;
	var password= document.getElementById('inputPassword').value;						
	for (var i = 0; i < listBuyers.length; i++) {
		if (listBuyers[i].userName == username && listBuyers[i].password== password){
			if (listBuyers[i].membership== "Active") {
				var userType= "Buyer";
				logIn(username,userType);
				window.location.href = "client_mainPage.html";					
			}
			else{
				var membership= document.getElementById('membershipDiv');
				membership.style.visibility= "visible";
			}					
			return;
		}				
	}			
	for (var i = 0; i < listaAdministrator.length; i++) {
		if (listaAdministrator[i].userName == username && listaAdministrator[i].password== password){
			var userType= "Administrator";
			logIn(username,userType);
			window.location.href = "admin_mainPage.html";			
			return;
		}				
	}			
	var menssage= document.getElementById('error');
	menssage.style.visibility= "visible";
}

/*
params: username : the name of the user, usertype: the user type
Description:  insert all the data in the lists of localStorage
*/
function logIn(username, userType){	
	var buyer = JSON.stringify(listBuyers);
  	var product= JSON.stringify(productsList); 

  	localStorage.setItem("listBuyers",buyer);      
  	localStorage.setItem("productsList",product);  

	sessionStorage.setItem("userType",userType);
	sessionStorage.setItem("username",username);
}