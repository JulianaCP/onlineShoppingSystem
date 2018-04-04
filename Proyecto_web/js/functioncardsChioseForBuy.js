createTableCardList();

/*
params: index: position of the selected card
Description: Make the whole process of buying a product. Decreases the product and inserts in history
*/
function buy(index){	
	var productListP=[];	
	var total= 0;
	for (var i = 0; i < listBuyers.length; i++) {           
	    if(listBuyers[i].userName== sessionStorage.username){                           	                         
	      for (var j= 0; j < listBuyers[i].shoppingCart.length; j++) {
	      	var insert= {idProduct: listBuyers[i].shoppingCart[j].product.id,
	      	quantity: listBuyers[i].shoppingCart[j].quantity,pricePU:listBuyers[i].shoppingCart[j].product.price};
	      	productListP.push(insert);	
	      	total= total+ listBuyers[i].shoppingCart[j].quantity*listBuyers[i].shoppingCart[j].product.price;
	      	if (listBuyers[i].cardList[index].money< total) {
				alert("Error la tarjeta no posee dinero suficiente para realizar la compra");
				listBuyers= JSON.parse(localStorage.listBuyers);
	    		productsList=JSON.parse(localStorage.productsList);              
				return;
			}
	      	for (var k = 0; k < productsList.length; k++) { 	      		
	      		if(productsList[k].id == listBuyers[i].shoppingCart[j].product.id){
	      			productsList[k].amount= productsList[k].amount- listBuyers[i].shoppingCart[j].quantity;	      			
	      			break;
	      		}
	      	}	      	
	      }
	      var newDate = new Date();
	      var date= newDate.getDate() + "/" + (newDate.getMonth() +1) + "/" + newDate.getFullYear();
	      var arriveDate= newDate.getDate() + "/" + (newDate.getMonth() +2) + "/" + newDate.getFullYear();
	      if(newDate.getMonth() +1 >= 12){
	      	arriveDate= 1;
	      }	      

	      var newStory={date: date, dateArrive: arriveDate, idC:listBuyers[i].purchaseHistory.length,
			productList:productListP,
			totalPrice:total};	      
	      
	      listBuyers[i].purchaseHistory.push(newStory);
	      listBuyers[i].shoppingCart.length= 0;
	      listBuyers[i].cardList[index].money= listBuyers[i].cardList[index].money- total;
	    }   
	}

	var buyer = JSON.stringify(listBuyers);
  	var product= JSON.stringify(productsList); 

  	localStorage.setItem("listBuyers",buyer);      
  	localStorage.setItem("productsList",product); 	
	document.getElementById("tableP").style.display="none";
	document.getElementById("divMenssage").style.display="block";
}


/*
params: 
Description: Go to client home
*/
function goHome(){
	window.location.href = "client_mainPage.html";					
}

/*
params: 
Description: Go to client home
*/
function createTableCardList(){			
	if (localStorage.listBuyers!= null && localStorage.productsList!= null ) {
	    listBuyers= JSON.parse(localStorage.listBuyers);
	    productsList=JSON.parse(localStorage.productsList);              
	}   	
	var variable="<tr style= 'background: black;color: #fff;'><th>ID CARD</th><th>MONEY</th>"+
	"<th></th><th></th></tr>";
	for (var i = 0; i < listBuyers.length; i++) {           
	    if(listBuyers[i].userName== sessionStorage.username){                              	    	
	    	for (var j = 0; j < listBuyers[i].cardList.length; j++) {	    		
				variable= variable+ "<tr>		      "+
				     "<td id='inputId"+j+"'>"+listBuyers[i].cardList[j].idCard+"</td>"+
				     "<td id='inputMoney"+j+"'><p>"+listBuyers[i].cardList[j].money+"</p></td>"+
				     "<td>"+
				       "<i onclick='buy("+j+")' class='material-icons button edit'>Seleccionar</i>"+				       
				     "</td>"+				     
				  "</tr>";
			}
    	}                      
  	}
  	document.getElementById("tableCard").innerHTML= variable;		     			
}
