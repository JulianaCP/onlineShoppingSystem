createTableCarList();
setTotalPrice();

/*
params: index: position of the product in the list of shopping cart
Description: delete the selected product of the shopping cart list
*/
function deleteProduct(index){    
  for (var i = 0; i < listBuyers.length; i++) {           
    if(listBuyers[i].userName== sessionStorage.username){                    
      listBuyers[i].shoppingCart.splice(index, 1);

      var buyer = JSON.stringify(listBuyers);      
      localStorage.setItem("listBuyers",buyer);    

      createTableCarList();
      setTotalPrice();                            
      return;        
    }          
  }
}

/*
params:
Description: save data to localStorage list and go to cards Choise for buy page
*/
function go(){    
  var buyer = JSON.stringify(listBuyers);
  var product= JSON.stringify(productsList); 

  localStorage.setItem("listBuyers",buyer);      
  localStorage.setItem("productsList",product);  

  window.location  = "cardsChoiseForBuy.html";
}

/*
params:
Description: set total price
*/
function setTotalPrice(){  
  var amount=0;
  for (var i = 0; i < listBuyers.length; i++) {           
    if(listBuyers[i].userName== sessionStorage.username){                                    
      for (var j = 0; j < listBuyers[i].shoppingCart.length; j++) {         
        amount= amount+ (listBuyers[i].shoppingCart[j].quantity* listBuyers[i].shoppingCart[j].product.price);
      }        
    }                      
  }       
  document.getElementById("totalAmountPurchase").innerHTML=amount;   
}

/*
params:
Description: add the total amount of products that are included in the shopping cart list
*/
function getMoreQuantity(index){  
  var value=document.getElementById("selectID"+index).value;  
  for (var i = 0; i < listBuyers.length; i++) {           
    if(listBuyers[i].userName== sessionStorage.username){                           
      for (var k = 0; k < productsList.length; k++) {                    
        if(productsList[k].id == listBuyers[i].shoppingCart[index].product.id){
          if(productsList[k].amount<= listBuyers[i].shoppingCart[index].product.amount){            
            listBuyers[i].shoppingCart[index].quantity=value;            
            setTotalPrice();
          }
          else{
            alert("Error la cantidad de producto sobrepasa a la producción de este.");
          }
        }
      }                      
    }                      
  }          
}


/*
params:
Description: Create the carrito table (all the info about the card list)
*/
function createTableCarList(){      
  if (localStorage.listBuyers!= null && localStorage.productsList!= null ) {
    listBuyers= JSON.parse(localStorage.listBuyers);
    productsList=JSON.parse(localStorage.productsList);                  
  }

     
  var variable=""; 
  var imgIndex= 0;   
  for (var i = 0; i < listBuyers.length; i++) {               
    if(listBuyers[i].userName== sessionStorage.username){                               
      for (var j = 0; j < listBuyers[i].shoppingCart.length; j++) {                      
        for (var k = 0; k < productsList.length; k++) {                    
          if(productsList[k].id == listBuyers[i].shoppingCart[j].product.id){
            if (productsList[k].imgList.length > 1) {
              imgIndex= 1;
            }
            variable= variable+ 
            "<tr>"+
            "<td><img style='float: left; height: 100px; width: 150px;'' src='img/"+productsList[k].imgList[imgIndex] +"'></td>"+              
              "<td class='text-left' data-toggle='collapse' data-target='#ok"+j+"'>"+                
                "<strong>Codigo: </strong>"+productsList[k].id+"<br>"+
                "<strong>Nombre: </strong>"+productsList[k].name+"<br>"+
                "<strong>Descripcion:  </strong>"+productsList[k].description+"   <br>  "+
                "<strong>Precio:  </strong>"+productsList[k].price+"   <br>  "+                
              "</td>"+
              "<td>"+
                "Quantity:    "+
                "<select id='selectID"+j+"' onchange='getMoreQuantity("+j+")' style= 'margin-right:5%; margin-left: 8%;'>";                  
                  for (var number = 1; number < 12; number++) {
                    if (listBuyers[i].shoppingCart[j].quantity != number) {
                      variable= variable+"<option value="+number+">"+number+"</option>";
                    }
                    else{
                        variable= variable+"<option selected value="+number+">"+number+"</option>";
                      }
                    }
                variable= variable+"</select>"+  
                "<button style='margin-left: 8%;margin-right:2%; ' onclick= 'deleteProduct("+j+")'><img style='float: left; height: 30px; width: 30px;'' src='img/delete.png'></button>"+              
              "</td>"+
            "</tr>";
          }
        }        
      }          
      if(variable != ""){
        document.getElementById("divBuyId").style.visibility= "visible";     
      }
      else{
          variable= variable+ "<tr>         "+             
                   "<td>"+
                     "<h2>**No se encontraron elementos</h2>"
                   "</td>"+            
                "</tr>";
         
      }
      document.getElementById("myTable").innerHTML= variable;
      return;        
    }          
  }        
}      