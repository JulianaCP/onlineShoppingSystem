
//temporal list of products
var listCategorieWoman = [];
var listCategorieWomanID=[];

var listCategorieMan = [];
var listCategorieManID=[];

var listCategorieBoy= [];
var listCategorieBoyID=[];

var listCategorieGirl = [];
var listCategorieGirlID=[];

//temportal cont
var contWoman = 0;
var contMan = 0;
var contBoy = 0;
var contGirl = 0;

var categorieSelected;
var tempList = [];

function loadImagesPrincipalPage(){
    //load the images of the main user page client
    tempList = [];
    for(var i =0 ; i<productsList.length;i++){
        if(productsList[i].categorie=='woman'){
            if(contWoman<5){
                tempList= productsList[i].imgList;
                if(tempList.length>1){
                    listCategorieWoman.push(tempList[1]);
                    listCategorieWomanID.push(productsList[i].id);
                    contWoman++;
                }
                else{
                    listCategorieWoman.push(tempList[0]);
                    listCategorieWomanID.push(productsList[i].id);
                    contWoman++;
                }
            }
        }
        else if(productsList[i].categorie=='man'){
            if(contMan<5){
                tempList= productsList[i].imgList;
                if(tempList.length>1){
                    listCategorieMan.push(tempList[1]);
                    listCategorieManID.push(productsList[i].id);
                    contMan++;
                }
                else{
                    listCategorieMan.push(tempList[0]);
                    listCategorieManID.push(productsList[i].id);
                    contMan++;
                }
            }
        }
        else if(productsList[i].categorie=='boy'){
            if(contBoy<5){
                tempList= productsList[i].imgList;
                if(tempList.length>1){
                    listCategorieBoy.push(tempList[1]);
                    listCategorieBoyID.push(productsList[i].id);
                    contBoy++;
                }
                else{
                    listCategorieBoy.push(tempList[0]);
                    listCategorieBoyID.push(productsList[i].id);
                    contBoy++;
                }
            }
        }
        else if(productsList[i].categorie=='girl'){
            if(contGirl<5){
                tempList= productsList[i].imgList;
                if(tempList.length>1){
                    listCategorieGirl.push(tempList[1]);
                    listCategorieGirlID.push(productsList[i].id);
                    contGirl++;
                }
                else{
                    listCategorieGirl.push(tempList[0]);
                    listCategorieGirlID.push(productsList[i].id);
                    contGirl++;
                }
            }
        }
    }


    createImgInsideDiv();
}
//idProductSelected

function createImgInsideDiv(){
    //create the html structures of the main page
    var code;
    var element;
    var idProductVar;
    for(var womanCont=0;womanCont<listCategorieWoman.length;womanCont++){
        idProductVar = listCategorieWomanID[womanCont];
        code = "<a href='client_especificProduct.html'><img src=img/"+listCategorieWoman[womanCont]+" id='"+idProductVar+"'></a>"
        $("#categorie_1").append(code);
        element = document.getElementById(idProductVar);
        element.addEventListener("click", function(){setElementSelected(this.id)}, false);   
    }
    for(var manCont=0;manCont<listCategorieMan.length;manCont++){
        idProductVar = listCategorieManID[manCont];
        code = "<a href='client_especificProduct.html'><img src=img/"+listCategorieMan[manCont]+" id='"+idProductVar+"' ></a>"
        $("#categorie_2").append(code);
        element = document.getElementById(idProductVar);
        element.addEventListener("click", function(){setElementSelected(this.id)}, false);  
    }
    for(var boyCont=0;boyCont<listCategorieBoy.length;boyCont++){
        idProductVar = listCategorieBoyID[boyCont];
        code = "<a href='client_especificProduct.html'><img src=img/"+listCategorieBoy[boyCont]+" id='"+idProductVar+"'></a>"
        $("#categorie_3").append(code);
        element = document.getElementById(idProductVar);
        element.addEventListener("click", function(){setElementSelected(this.id)}, false);  
       
    }

    for(var girlCont=0;girlCont<listCategorieGirl.length;girlCont++){
        idProductVar = listCategorieGirlID[girlCont]
        code = "<a href='client_especificProduct.html'><img src=img/"+listCategorieGirl[girlCont]+" id='"+idProductVar+"'></a>"
        $("#categorie_4").append(code);
        element = document.getElementById(idProductVar);
        element.addEventListener("click", function(){setElementSelected(this.id)}, false);      
    }
}




function cargarDatosAplication(){
//loads data from localStorage lists
    var listaGuardada = localStorage.getItem("productsList");
    listaGuardada = JSON.parse(listaGuardada);
    productsList = listaGuardada;

    var listaGuardada = localStorage.getItem("listBuyers");
    listaGuardada = JSON.parse(listaGuardada);
    listBuyers = listaGuardada;

}



function loadAllProducts(){
    //load the products of a specific category
    tempList = []
    categorieSelected = localStorage.getItem("categorieSelected");
    if(categorieSelected == null){
        categorieSelected="woman"
    }
    console.log("categorie: " + categorieSelected);
    for(var i=0;i<productsList.length;i++){
        if(productsList[i].categorie==categorieSelected){
            tempList.push(productsList[i]);
        }
    }
    loadAllProductsAddImgDiv();
}

function loadAllProductsAddImgDiv(){
    //create the html structures of the all_products
    var code;
    var element;
    var img;
    for(var i=0;i<tempList.length;i++){
        if(tempList[i].imgList.length>1){
            img=tempList[i].imgList[1];
        }
        else{
            img=tempList[i].imgList[0];
        }
        console.log("ids: " +tempList[i].id );
        code = "<div class='insideBox'><div class='boxImage' id='"+tempList[i].id+"'><a href='client_especificProduct.html'><img src=img/"+img+"></a> "+"<p>Nombre: "+tempList[i].name+"</p><p>Precio: "+tempList[i].price+"</p></div></div>";
        $("#marcoAllProducts").append(code);
        element = document.getElementById(tempList[i].id);
        element.addEventListener("click", function(){setElementSelected(this.id)}, false);
        
    }
}
function setElementSelected(id){
    //set the category selected by the user
    localStorage.setItem("idProductSelected",id);
}

function loadEspecificDataProduct(){
    //obtains the specific information of a product
    var id = localStorage.getItem("idProductSelected");
    console.log("id producto especifico: " + id );
    var product;
    for(var i =0;i<productsList.length;i++){
        if(productsList[i].id==id){
            product = productsList[i];
        }
    }
    console.log("name: " + product.name);
    $("#nameProduct").text(product.name);
    $("#precio").text("Precio: " + product.price);
    $("#descripcionProduct").text("Descripcion: " + product.description);
    var bt = document.getElementById("buttonPurchase")
    bt.addEventListener("click", function(){verificatePruchase(product)}, false);



    var btWish = document.getElementById("buttonWish");
    btWish.addEventListener("click", function(){addWishList(product)}, false);
    

    for(var i = 0; i<product.imgList.length;i++){
        console.log("ff" + product.imgList[i])
        if(i!=0){
            addImageCarouselEspec(product.imgList[i]);
        }
        
    }
}
var conCarousel = 1;

function addImageCarouselEspec(dirImage){
    //create the html structures for the carousel in the page of especific product
    var divBox = document.getElementById('divBoxEspec');
    var olBox = document.getElementById('olBoxEspec');


    //li
    var newElementLi = document.createElement('li');
    newElementLi.setAttribute('data-target','#myCarouselEspec');
    if(conCarousel != 0){ newElementLi.className = "active";}
    newElementLi.setAttribute('data-slide-to',conCarousel);
    olBox.appendChild(newElementLi);


    //div
    var newElementDiv =  document.createElement('div');
    newElementDiv.className = "item";
    newElementDiv.id="divItemClassEspec-"+conCarousel;
    divBox.appendChild(newElementDiv);
    

    //img dentro del div
    var newElementImg =  document.createElement('img');
    newElementImg.src = "img/"+ dirImage;
    newElementImg.id= conCarousel;
    newElementImg.style = "width:100%;border:1px solid black;"
    var childDiv = document.getElementById("divItemClassEspec-"+conCarousel);
    childDiv.appendChild(newElementImg);

    conCarousel = conCarousel+1;
}

function clean(){
    //clean the carousel
    document.getElementById('liItemClassEspec-0').className = "active";
    document.getElementById('divItemClassEspec-0').className = "item active";
    $("#divBoxEspec div").slice(1).remove(); 
    $("#olBoxEspec li").slice(1).remove();
}

function verificatePruchase(product){
    //add a product to the shopping cart
    var value = $("#amountProduct").val();
    var esta = false;
    if(value!=undefined && value!=0){

        if(product.amount>= value){
            for(var i=0;i<listBuyers.length;i++){
                
                if(listBuyers[i].userName==sessionStorage.getItem("username")){
                    
                    for(var x=0;x<listBuyers[i].shoppingCart.length;x++){
                        if(listBuyers[i].shoppingCart[x].product.id == product.id){
                            esta = true; 
                        }
                    }
                    if(esta == true){
                        $.alert({
                            title: 'Atención',
                            content: 'El producto ya se encuentra en el carrito de compra',
                            autoClose: 'ok|2000'
                          });
                    }
                    else{
                        var json = {"product":product,"quantity":value}
                        listBuyers[i].shoppingCart.push(json);

                        $.alert({
                            title: 'Atención',
                            content: 'Producto agregado con exito',
                            autoClose: 'ok|2000'
                          });
                    }
                }

            }
            console.log("buyer: " + listBuyers[0].shoppingCart)
        
            var lista = JSON.stringify(listBuyers);
            localStorage.setItem("listBuyers", lista); 




         //   window.location = "client_all_products.html";
        }
        else{
            $.alert({
                title: 'Atención',
                content: 'No hay suficiente inventario',
                autoClose: 'ok|2000'
              });
        }
       
    }

}



function setCategorieWoman(){
    //Set the category of localStorage
    localStorage.setItem("categorieSelected","woman");
    window.location = "client_all_products.html";
}


function setCategorieMan(){
    //Set the category of localStorage
    localStorage.setItem("categorieSelected","man");
    window.location = "client_all_products.html";
}

function setCategorieBoy(){
    //Set the category of localStorage
    localStorage.setItem("categorieSelected","boy");
    window.location = "client_all_products.html";
}

function setCategorieGirl(){
    //Set the category of localStorage
    localStorage.setItem("categorieSelected","girl");
    window.location = "client_all_products.html";
}





function addWishList(product){
//add a product to the wish list

    var esta = false;
    for(var i=0;i<listBuyers.length;i++){
        if(listBuyers[i].userName==sessionStorage.getItem("username")){

            //console.log("1")
            for(var x=0;x<listBuyers[i].wishList.length;x++){
                if(listBuyers[i].wishList[x] == product.id){
                    esta = true; 
                }
            }
            if(esta == true){
                $.alert({
                    title: 'Atención',
                    content: 'El producto ya se encuentra en la lista de deseos',
                    autoClose: 'ok|2000'
                  });
            }
            else{
             //   console.log("lista: " + listBuyers[i].wishList)
               // var json = {"product":product}
                listBuyers[i].wishList.push(product.id);

                $.alert({
                    title: 'Atención',
                    content: 'Producto agregado con exito',
                    autoClose: 'ok|2000'
                  });
            }
        }

    }
  //  console.log("wish: " + listBuyers[0].wishList);
    var lista = JSON.stringify(listBuyers);
    localStorage.setItem("listBuyers", lista); 
}


function ponerNombre(){
    ////put the user's name on the nav
    var nombre = sessionStorage.getItem("username");
    if(nombre=="" || nombre == undefined){
        nombre = "usuario";
    }
    $("#nombrePagina").text(nombre);
}