createTableMyList();


/*
  params: index: position of selected item
  Description: delete the selected item of the wish list
  */
function deleteProduct(index){    
  for (var i = 0; i < listBuyers.length; i++) {           
    if(listBuyers[i].userName== sessionStorage.username){                
      for (var j = 0; j < listBuyers[i].wishList.length; j++) {                
        listBuyers[i].wishList.splice(index, 1);        
        IntroduceData();                  
        createTableMyList();
      }                
      return;        
    }          
  }
}


/*
  params:
  Description: insert data into local storage
  */
function IntroduceData(){

  var buyer = JSON.stringify(listBuyers);
  var product= JSON.stringify(productsList); 

  localStorage.setItem("listBuyers",buyer);      
  localStorage.setItem("productsList",product); 
  
}

/*
  params: index: position of the selected item
  Description: insert data into the card list and remove the item of the wish list
  */
function addToCar(index){  
  for (var i = 0; i < listBuyers.length; i++) {           
    if(listBuyers[i].userName== sessionStorage.username){                      
      for (var k = 0; k < productsList.length; k++) {                   
          if (productsList[k].id== listBuyers[i].wishList[index]) {             
            var product={product: productsList[k],quantity: 1};
            listBuyers[i].shoppingCart.push(product);
            listBuyers[i].wishList.splice(index, 1);
            IntroduceData();                  
            createTableMyList();
            return;        
          }
      }    
    }          
  }
}

/*
  params:
  Description: create the table of the wiih list
  */
function createTableMyList(){  
  if (localStorage.listBuyers!= null && localStorage.productsList!= null ) {
    listBuyers= JSON.parse(localStorage.listBuyers);
    productsList=JSON.parse(localStorage.productsList);       
  }
  var variable="";
  var imgIndex= 0;
  for (var i = 0; i < listBuyers.length; i++) {           
    if(listBuyers[i].userName== sessionStorage.username){       
      if (listBuyers[i].wishList.length == 0) {
        variable= variable+ "<tr>         "+             
                 "<td>"+
                   "<h2>**No se encontraron elementos</h2>"
                 "</td>"+            
              "</tr>";
      }                             
      for (var j = 0; j < listBuyers[i].wishList.length; j++) {                      
        for (var k = 0; k < productsList.length; k++) {                                        
          if(productsList[k].id == listBuyers[i].wishList[j]){            
            if (productsList[k].imgList.length > 1) {
              imgIndex= 1;
            }
            variable= variable+ 
            "<tr>"+
            "<td><img style='float: left; height: 100px; width: 150px;'' src='img/"+productsList[k].imgList[imgIndex] +"'></td>"+              
              "<td class='text-left' data-toggle='collapse' data-target='#ok"+j+"'>"+                
                "<strong>Codigo: </strong>"+productsList[k].id+"<br>"+
                "<strong>Descripcion:  </strong>"+productsList[k].description+"   <br>  "+
                "<strong>Precio:  </strong>"+productsList[k].price+"   <br>  "+                
              "</td>"+
              "<td>"+
                "<button onclick= 'deleteProduct("+j+")'><img style='float: left; height: 30px; width: 30px;'' src='img/delete.png'></button>"+
                "<button onclick= 'addToCar("+j+")'><img style='float: right; height: 30px; width: 30px;'' src='img/carIcon.png'></button>"+
              "</td>"+
            "</tr>";
          }
        }        
      }          
      document.getElementById("myTable").innerHTML= variable;   
      return;        
    }          
  }        
}      