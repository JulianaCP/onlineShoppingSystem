
findUser();
/*
params:
Description: create a new card for the user
*/
function createNewCard(){			
	var passMoney= document.getElementById("newCreditCardMoney").value;			
	var pass= document.getElementById("newCreditCard").value;			
	var jsonValue= {idCard: pass,money: passMoney};
	if (pass != "") {
		for (var i = 0; i < listBuyers.length; i++) {
			if (listBuyers[i].userName == sessionStorage.username){						
				listBuyers[i].cardList.push(jsonValue);
			}
		}
		IntroduceData();									
		findUser();
	}			
}

/*
params: index: the position of the card in list
Description: Edit data of the cselected card
*/
function insertDataCredit(index){
	document.getElementById("ok"+index).style.visibility= "hidden";
	var passCar= document.getElementById("creditCard").value;			
	var passMoney= document.getElementById("creditMoney").value;			
	for (var i = 0; i < listBuyers.length; i++) {
		if (listBuyers[i].userName == sessionStorage.username){						
			listBuyers[i].cardList[index].idCard= passCar;					
			listBuyers[i].cardList[index].money= passMoney;					
		}
	}				
	IntroduceData();				
	findUser();
}		

/*
params: index: the position of the card in list
Description: Delete the item of the card list
*/
function deleteCreditCard(index){
	for (var i = 0; i < listBuyers.length; i++) {
		if (listBuyers[i].userName == sessionStorage.username){						
			listBuyers[i].cardList.splice(index, 1);
			IntroduceData();
			findUser();
			return;
		}
	}											
}

/*
params: cardList: the user cardList
Description: Create the table of card list of the user
*/
function createTableCardList(cardList){				
	var variable="<tr style= 'background: black;color: #fff;'><th>ID CARD</th><th>MONEY</th>"+
	"<th></th><th></th></tr>";
	if (cardList.length == 0) {
		variable= variable+ "<tr>		      "+				     
				     "<td>"+
				       "<h2>**Usted no posee Tarjetas</h2>"
				     "</td>"+				     
				  "</tr>";
	}
	for (var i = 0; i < cardList.length; i++) {
		variable= variable+ "<tr>		      "+
				     "<td id='inputId"+i+"'>"+cardList[i].idCard+"</td>"+
				     "<td id='inputMoney"+i+"'><p>"+cardList[i].money+"</p></td>"+
				     "<td>"+
				       "<i onclick='editCreditCard("+i+")' class='material-icons button edit'>edit</i>"+
				       "<i onclick='deleteCreditCard("+i+")' class='material-icons button delete'>delete</i>"+
				     "</td>"+
				     "<td><i style='visibility: hidden' id='ok"+i+"' onclick='insertDataCredit("+i+")' class='material-icons button edit'>OK</i></td>"+
				  "</tr>";
	}
	document.getElementById("tableCard").innerHTML= variable;		
}

/*
params: index: selected card position item
Description: makes components visible for editing
*/
function editCreditCard(index){			
	document.getElementById("ok"+index).style.visibility= "visible";			
	document.getElementById("inputId"+index).innerHTML= "<input type='text' id= 'creditCard' name='creditCard'>";
	document.getElementById("inputMoney"+index).innerHTML= "<input type='text' id= 'creditMoney' name='creditMoney'>";	          
}		

/*
params: 
Description: Create the table of card list of the user
*/
function findUser(){
	//localStorage.clear();
	//localStorage.setItem("userType","Buyer");
	//localStorage.setItem("username","userName@gmail.com");

	if (localStorage.listBuyers!= null && localStorage.productsList!= null ) {
	    listBuyers= JSON.parse(localStorage.listBuyers);
	    productsList=JSON.parse(localStorage.productsList); 	    
	}           
	var username= sessionStorage.username;
	var type= sessionStorage.userType;			

	if (type!= "Buyer") {
		for (var i = 0; i < listaAdministrator.length; i++) {
			if (listaAdministrator[i].userName == username){					
				createTableAdmin(listaAdministrator[i]);
			}				
		}
	}	
	else{
		for (var i = 0; i < listBuyers.length; i++) {
			if (listBuyers[i].userName == username){						
				createTableBuyer(listBuyers[i]);
			}
		}								
	}			
}

/*
params: 
Description: enter the data into local storage
*/
function IntroduceData(){

  var buyer = JSON.stringify(listBuyers);
  var product= JSON.stringify(productsList); 

  localStorage.setItem("listBuyers",buyer);      
  localStorage.setItem("productsList",product); 
  
}

/*
params: info: the data we want you to have, atribute: the atribute we want to change
Description: Edit data
*/
function changeData(info,atribute){
	if (sessionStorage.userType!= "Buyer") {
		for (var i = 0; i < listaAdministrator.length; i++) {
			if (listaAdministrator[i].userName == sessionStorage.username){					
				if (atribute== "password") {
					listaAdministrator[i].setPassword(info);
					return;
				}	
			}
		}
	}	
	else{
		for (var i = 0; i < listBuyers.length; i++) {
			if (listBuyers[i].userName == sessionStorage.username){				
				if (atribute== "name") {
					listBuyers[i].name=info;
					return;
				}	
				if (atribute== "surnames") {
					listBuyers[i].surnames =info;
					return;
				}	
				if (atribute== "age") {
					listBuyers[i].age=info;
					return;
				}	
				if (atribute== "email") {
					listBuyers[i].email=info;
					return;
				}	
				if (atribute== "address") {
					listBuyers[i].address=info;
					return;
				}	
				if (atribute== "telephone") {
					listBuyers[i].telephone= info;
					return;
				}	
				if (atribute== "birthDate") {
					listBuyers[i].birthDate=info;
					return;
				}	
				if (atribute== "password") {							
					listBuyers[i].password=info;							
					return;
				}	
				if (atribute== "membership") {
					listBuyers[i].membership=info;
					return;
				}											
			}
		}								
	}				
}

/*
params: buyer: the user data object
Description: create table buyer
*/
function createTableBuyer(Buyer){
	document.getElementById("1").style.display= "table-row";
	document.getElementById("2").style.display= "table-row";
	document.getElementById("3").style.display= "table-row";
	document.getElementById("4").style.display= "table-row";
	document.getElementById("5").style.display= "table-row";
	document.getElementById("6").style.display= "table-row";
	document.getElementById("7").style.display= "table-row";
	document.getElementById("8").style.display= "table-row";	
	

	document.getElementById("titule").innerHTML= Buyer.userName;
	document.getElementById("passwordInfo").innerHTML= Buyer.password;
	document.getElementById("nameInfo").innerHTML= Buyer.name;
	document.getElementById("surmanesInfo").innerHTML= Buyer.surnames;
	document.getElementById("ageInfo").innerHTML= Buyer.age;
	document.getElementById("emailInfo").innerHTML=Buyer.email;
	document.getElementById("addressInfo").innerHTML= Buyer.address;
	document.getElementById("TelephoneInfo").innerHTML= Buyer.telephone;			
	document.getElementById("birthayInfo").innerHTML= Buyer.birthDate;
	document.getElementById("membershipInput").innerHTML= Buyer.membership;
	document.getElementById("membershipInput").value= Buyer.membership;	

	createTableCardList(Buyer.cardList);
}


function createTableAdmin(Administrator){
	document.getElementById("titule").innerHTML= Administrator.userName;
	document.getElementById("passwordInfo").innerHTML= Administrator.password;			
}

//password
function changeViewPassword(){
	document.getElementById("passwordOk").style.visibility= "visible";			
	document.getElementById("passwordInfo").innerHTML= "<input type='text' id= 'passInput' name='passInput'>";
}

function changeInfoPassData(){
	document.getElementById("passwordOk").style.visibility= "hidden";
	var pass= document.getElementById("passInput").value;						
	changeData(pass,"password");	
	IntroduceData();						
	findUser();
}

// name
function changeViewName(){
	document.getElementById("nameOk").style.visibility= "visible";			
	document.getElementById("nameInfo").innerHTML= "<input type='text' id= 'nameInput' name='nameInput'>";
}

function changeInfoNameData(){
	document.getElementById("nameOk").style.visibility= "hidden";
	var pass= document.getElementById("nameInput").value;						
	changeData(pass,"name");							
	IntroduceData();
	findUser();
}

//surnames
function changeViewSurnames(){
	document.getElementById("surnamesOk").style.visibility= "visible";			
	document.getElementById("surmanesInfo").innerHTML= "<input type='text' id= 'surnamesInput' name='surnamesInput'>";
}

function changeInfoSurnamesData(){
	document.getElementById("surnamesOk").style.visibility= "hidden";
	var pass= document.getElementById("surnamesInput").value;						
	changeData(pass,"surnames");							
	IntroduceData();
	findUser();
}

//age
function changeViewAge(){
	document.getElementById("ageOk").style.visibility= "visible";			
	document.getElementById("ageInfo").innerHTML= "<input type='text' id= 'ageInput' name='ageInput'>";
}

function changeInfoAgeData(){
	document.getElementById("ageOk").style.visibility= "hidden";
	var pass= document.getElementById("ageInput").value;						
	changeData(pass,"age");							
	IntroduceData();
	findUser();
}

//email 
function changeViewEmail(){
	document.getElementById("emailOk").style.visibility= "visible";			
	document.getElementById("emailInfo").innerHTML= "<input type='text' id= 'emailInput' name='emailInput'>";
}

function changeInfoEmailData(){
	document.getElementById("emailOk").style.visibility= "hidden";
	var pass= document.getElementById("emailInput").value;						
	changeData(pass,"email");							
	IntroduceData();
	findUser();
}

//address
function changeViewAddress(){
	document.getElementById("addressOk").style.visibility= "visible";			
	document.getElementById("addressInfo").innerHTML= "<input type='text' id= 'addressInput' name='addressInput'>";
}

function changeInfoAddressData(){
	document.getElementById("addressOk").style.visibility= "hidden";
	var pass= document.getElementById("addressInput").value;						
	changeData(pass,"address");							
	IntroduceData();
	findUser();
}

//telephone 
function changeViewTelephone(){
	document.getElementById("telephoneOk").style.visibility= "visible";			
	document.getElementById("TelephoneInfo").innerHTML= "<input type='text' id= 'telephoneInput' name='telephoneInput'>";
}

function changeInfoTelephoneData(){
	document.getElementById("telephoneOk").style.visibility= "hidden";
	var pass= document.getElementById("telephoneInput").value;						
	changeData(pass,"telephone");							
	IntroduceData();
	findUser();
}

//birthDate
function changeViewBirthDate(){
	document.getElementById("birthayOk").style.visibility= "visible";			
	document.getElementById("birthayInfo").innerHTML= "<input type='text' id= 'birthDateInput' name='birthDateInput'>";
}

function changeInfoBirthDateData(){
	document.getElementById("birthayOk").style.visibility= "hidden";
	var pass= document.getElementById("birthDateInput").value;						
	changeData(pass,"birthDate");							
	IntroduceData();
	findUser();
}

//birthDate
function changeViewBirthDate(){
	document.getElementById("birthayOk").style.visibility= "visible";			
	document.getElementById("birthayInfo").innerHTML= "<input type='text' id= 'birthDateInput' name='birthDateInput'>";
}

function changeInfoBirthDateData(){
	document.getElementById("birthayOk").style.visibility= "hidden";
	var pass= document.getElementById("birthDateInput").value;						
	changeData(pass,"birthDate");							
	IntroduceData();
	findUser();
}
	
//membership
function changeInfoMembership(){			
	var pass= document.getElementById("membershipInput").value;
	if (pass== "Desactive") {								
		changeData("Active","membership");									
	}
	else{				
		changeData("Desactive","membership");									
	}			
	IntroduceData();
	findUser();
}
