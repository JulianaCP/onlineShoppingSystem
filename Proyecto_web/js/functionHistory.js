createTableHistory();
/*
params: 
Description: Create table history of the user
*/
function createTableHistory(){    
  if (localStorage.listBuyers!= null && localStorage.productsList!= null ) {
    listBuyers= JSON.parse(localStorage.listBuyers);
    productsList=JSON.parse(localStorage.productsList);              
  }           
  var variable="";
  for (var i = 0; i < listBuyers.length; i++) {           
    if(listBuyers[i].userName== sessionStorage.username){
      if (listBuyers[i].purchaseHistory.length == 0) {
        variable= variable+ "<tr>         "+             
                 "<td>"+
                   "<h2>**Usted no posee transacciones</h2>"
                 "</td>"+            
              "</tr>";
      }          
      for (var j = 0; j < listBuyers[i].purchaseHistory.length; j++) {                              
        variable= variable+ 
        "<tr>"+
          "<td class='text-left' data-toggle='collapse' data-target='#ok"+j+"'>"+
            "<p>Codigo: "+listBuyers[i].purchaseHistory[j].idC+"<br>"+
            "Fecha:  "+listBuyers[i].purchaseHistory[j].date+"   <br>  "+"Fecha de entrega:  "+listBuyers[i].purchaseHistory[j].dateArrive+
            "<br>"+
            "<div id='ok"+j+"' class='collapse'><div style='height: 200px; overflow-y: scroll;'>";
              for (var k = 0; k < listBuyers[i].purchaseHistory[j].productList.length; k++) {       variable= variable+                                        
                  "<br>Product ID: "+listBuyers[i].purchaseHistory[j].productList[k].idProduct+
                  "<br>Quantity: "+listBuyers[i].purchaseHistory[j].productList[k].quantity+
                  "<br>Price P/U: "+listBuyers[i].purchaseHistory[j].productList[k].pricePU+
                  "<br>";                      
              }   
              variable= variable+"<br><br>TOTAL Price: "+listBuyers[i].purchaseHistory[j].totalPrice+
            "</div></div>"+
          "</td>"+
        "</tr>";
      }          
      document.getElementById("tableHistory").innerHTML= variable;   
      return;        
    }          
  }        
}      