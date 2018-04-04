
var idProductCont = 0;
var listImgSelected = []
var contDivCarousel = 1;

//modal create product
function openModalCreate(){
    //creates a table or div where the product data is stored (modal create product)

    $('#myFile').wrap('<form>').closest('form').get(0).reset();
    cleanCarousel();
    var modal = document.getElementById('modalBoxCreateProduct');
    modal.style.display = "block";
}
function closeModalCreate(){
    //close a table or div where the product data is stored (modal create product)
    var modal = document.getElementById('modalBoxCreateProduct');
    modal.style.display = "none";
    cleanCarousel();

    $("#nameInput").val("");
    $("#descriptionInput").val("");
    $("#priceInput").val("");
    $("#amountInput").val(1);
    $("#categorieInput").val("woman")

}

//modal edit product

function openModalEdit(id){
    //creates a table or div where the product data is stored (modal edit product)
    $('#myFileEditar').wrap('<form>').closest('form').get(0).reset();
    cleanCarousel();
    var modal = document.getElementById('modalBoxEditProduct');
    modal.style.display = "block";
    cargarDatos(id);
}
function closeModalEdit(){
     //close a table or div where the product data is stored (modal edit product)
    var modal = document.getElementById('modalBoxEditProduct');
    modal.style.display = "none";
    cleanCarousel();
}

function cargarDatos(id){
    //load the data of the product to be edited
    var name;
    var description;
    var price;
    var amount;
    var categorie;
    var listImg;
    for(var i = 0; i<productsList.length;i++){
        if(productsList[i].id==id){
            name = productsList[i].name;
            description = productsList[i].description;
            price = productsList[i].price;
            amount = productsList[i].amount;
            categorie = productsList[i].categorie;
            listImg = productsList[i].imgList;
        }
    }

    $("#nameInputEditar").val(name);
    $("#descriptionInputEditar").val(description);
    $("#priceInputEditar").val(price);
    $("#amountInputEditar").val(amount);
    $("#categorieInputEditar").val(categorie);
    $("#idInputEditar").val(id);

    console.log("lessn: " + listImg.length);
    console.log("id del producto: " + id);
    cargarImgList(listImg);
}

function cargarImgList(lista){
    //load the img of the product to be edited
    for(var i = 0; i<lista.length;i++){
        if(i!=0){
            addImageEditar(lista[i]);
        }
        
    }
}
function deleteImageCarouselEdit(id){
    //delete a img of the product to be edited
    var valorID = id.split('-')[1];
    if(id!='divItemClassEditar-0'){
        document.getElementById('liItemClassEditar-0').className = "active";
        document.getElementById('divItemClassEditar-0').className = "item active";

        //elimina div
        var divBoxParent = document.getElementById('divBoxEditar');
        var divChild =  document.getElementById(id);
        divBoxParent.removeChild(divChild);

        //elimina li
        var olBoxParent = document.getElementById('olBoxEditar');
        var liChild = document.getElementById('liItemClassEditar-'+valorID);
        olBoxParent.removeChild(liChild);
    }                         
}


function saveChanges(){
    //save the changes of the product to be edited
    var id = $("#idInputEditar").val();
    var name = $("#nameInputEditar").val();
    var description = $("#descriptionInputEditar").val();
    var price  = $("#priceInputEditar").val();
    var amount  = $("#amountInputEditar").val();
    var categorie  = $("#categorieInputEditar").val();
    obtainImgListModalEdit();
    for(var i =0 ; i<productsList.length;i++){
        if(productsList[i].id==id){
            productsList[i].name = name;
            productsList[i].description=description;
            productsList[i].price=price;
            productsList[i].amount = amount;
            productsList[i].categorie = categorie;
            productsList[i].imgList=listImgSelected;
        }
    }
    loadProductData();
    closeModalEdit();

    var lista = JSON.stringify(productsList);
    localStorage.setItem("productsList", lista);

    
}





function createProduct(){
    //create a new product in the list of productos, created by the user
    var name = $("#nameInput").val();
    var description = $("#descriptionInput").val();
    var price  = $("#priceInput").val();
    var amount  = $("#amountInput").val();
    var categorie  = $("#categorieInput").val();

    obtainImgList();

    cleanCarousel();
    
    
    console.log($("#olBox").children().length)


    for(var i = 0; i<productsList.length;i++){
        idProductCont =  parseInt(productsList[i].id);
    }
    idProductCont = idProductCont+1;


    var newProduct = new Product(idProductCont,name,description,price,amount,listImgSelected,categorie);
    productsList.push(newProduct);

    var lista = JSON.stringify(productsList);
    localStorage.setItem("productsList", lista);


    listImgSelected = ['calidad.jpg'];

    closeModalCreate();
    loadProductData();
    
}
function cleanCarousel(){
    //clean the carousel, all the images that the carousel has
    document.getElementById('liItemClass-0').className = "active";
    document.getElementById('divItemClass-0').className = "item active";
    $("#divBox div").slice(1).remove(); 
    $("#olBox li").slice(1).remove();

    document.getElementById('liItemClassEditar-0').className = "active";
    document.getElementById('divItemClassEditar-0').className = "item active";
    $("#divBoxEditar div").slice(1).remove(); 
    $("#olBoxEditar li").slice(1).remove();
}

//table

function addRow(id,name,description,price,amount,categorie,imgList){
    //add a row to the table of products
    if(categorie == "woman"){
        categorie = "mujer";
    }
    else if(categorie == "man"){
        categorie = "Hombre"
    }
    else if(categorie == "boy"){
        categorie = "Niño"
    }
    else if(categorie == "girl"){
        categorie = "Niña"
    }




    $('.tableBody').append($("<tr>",{}));
    
    $('.tableBody tr:last-child').append(
        $("<td>",{
            text: id
        })
    );
    $('.tableBody tr:last-child').append(
        $("<td>",{
            text: name
            })
        );
        $('.tableBody tr:last-child').append(
        $("<td>",{
            text: description
            })
        );
        $('.tableBody tr:last-child').append(
        $("<td>",{
            text: price
            })
        );

        $('.tableBody tr:last-child').append(
        $("<td>",{
            text: amount
            })
        );
        
        $('.tableBody tr:last-child').append(
        $("<td>",{
            text: categorie
            })
        );
        var img;
        if(imgList.length>1){
            img = imgList[1];
        }
        if(imgList.length<=1){
            img = imgList[0];
        }
        $('.tableBody tr:last-child').append(
        $("<td>",{
            
            })
        );
        $(".tableBody tr:last-child td:last-child").append(
        $("<img>",{
            src: 'img/'+img
            })
        );
        $('.tableBody tr:last-child').append(
        $("<td>",{
            
            })
        );
        var trChild = $(".tableBody tr:last-child");
        $(".tableBody tr:last-child td:last-child").append($("<button>",{
            text:"Eliminar",
            value: id,
            click: function(){deleteRow(this.value,trChild)}
        }));
        $(".tableBody tr:last-child td:last-child").append($("<button>",{
            text:"Editar",
            value: id,
            click: function(){openModalEdit(this.value)}
        }));


}
function loadProductData(){
    //load product data
    var id;
    var description;
    var price;
    var amount;
    var categorie;
    var imgList;

    
    var filter = $('#filterSelect').val();

    var tableBody = $('.tableBody');
    tableBody.children().remove();
    for(var i = 0; i < productsList.length; i++){
        id = productsList[i].id;
        name = productsList[i].name;
        description = productsList[i].description;
        price = productsList[i].price;
        amount = productsList[i].amount;
        categorie = productsList[i].categorie;
        imgList = productsList[i].imgList;
        if(filter=="all"){
            addRow(id,name,description,price,amount,categorie,imgList);
        }
        else{
            console.log("filter: " + filter+ "   categorie: " + categorie);
            if(filter == categorie){
                addRow(id,name,description,price,amount,categorie,imgList);
            }
        }
    }
}

function deleteRow(idProduct,valor){
    //delete a row of the table or products
    for(var i = 0; i<productsList.length; i++){
        if(productsList[i].id == idProduct){
            productsList.splice(i,1);
        }
    }
    valor.remove();

    var lista = JSON.stringify(productsList);
    localStorage.setItem("productsList", lista);
}


//carousel


function obtainImgList(){
    //get all the pictures of the carousel (create)
    var child;
    var urlImg;
    var name;
    listImgSelected = []
    var childrens = $("#divBox").children();
    for(var i=0;i<childrens.length;i++){
        if(i==0){
            child = childrens[i].firstChild; 
            urlImg = child.nextSibling.src;
            name = urlImg.split('/');
        }
        else{
            child = childrens[i].firstChild; 
            urlImg = child.src;
            name = urlImg.split('/');
        }
        listImgSelected.push(name[name.length-1]);
    }
}
function obtainImgListModalEdit(){
        //get all the pictures of the carousel (edit)
    var child;
    var urlImg;
    var name;
    listImgSelected = []
    var childrens = $("#divBoxEditar").children();
    for(var i=0;i<childrens.length;i++){
        if(i==0){
            child = childrens[i].firstChild; 
            urlImg = child.nextSibling.src;
            name = urlImg.split('/');
        }
        else{
            child = childrens[i].firstChild; 
            urlImg = child.src;
            name = urlImg.split('/');
        }
        listImgSelected.push(name[name.length-1]);
    }
}

function deleteImageCarousel(id){
    //delete a img of the carousel
    var valorID = id.split('-')[1];
    if(id!='divItemClass-0'){
        document.getElementById('liItemClass-0').className = "active";
        document.getElementById('divItemClass-0').className = "item active";

        //elimina div
        var divBoxParent = document.getElementById('divBox');
        var divChild =  document.getElementById(id);
        divBoxParent.removeChild(divChild);

        //elimina li
        var olBoxParent = document.getElementById('olBox');
        var liChild = document.getElementById('liItemClass-'+valorID);
        olBoxParent.removeChild(liChild);
    }                         
}

function addImageEditar(dirImage){
    //add a new image to the carousel (edit)
    var divBox = document.getElementById('divBoxEditar');
    var olBox = document.getElementById('olBoxEditar');


    //li
    var newElementLi = document.createElement('li');
    newElementLi.id = "liItemClassEditar-"+contDivCarousel;
    newElementLi.setAttribute('data-target','#myCarousel');
    if(contDivCarousel != 0){ newElementLi.className = "active";}
    newElementLi.setAttribute('data-slide-to',contDivCarousel);
    olBox.appendChild(newElementLi);


    //div
    var newElementDiv =  document.createElement('div');
    if(contDivCarousel == 0){ newElementDiv.className = "active";}
    else{newElementDiv.className = "item";}
    newElementDiv.id="divItemClassEditar-"+contDivCarousel;
    newElementDiv.addEventListener("click", function(){deleteImageCarouselEdit(newElementDiv.id)}, false);

    divBox.appendChild(newElementDiv);
    

    //img dentro del div
    var newElementImg =  document.createElement('img');
    newElementImg.src = "img/"+ dirImage;
    newElementImg.id= contDivCarousel;
    newElementImg.style = "width:100%;border:1px solid black;"
    var childDiv = document.getElementById("divItemClassEditar-"+contDivCarousel);
    childDiv.appendChild(newElementImg);

    contDivCarousel = contDivCarousel+1;
}
function addImagesCarouselEditar(){
    var chartIMG = document.getElementById("myFileEditar");
    var dirImage = chartIMG.files[0].name;
    if(dirImage!= undefined){
        addImageEditar(dirImage);
    }
}


function addImagesCarousel(){
    //add a new image to the carousel (create)
    var chartIMG = document.getElementById("myFile");
    var dirImage = chartIMG.files[0].name;
    if(dirImage!= undefined){
        var divBox = document.getElementById('divBox');
        var olBox = document.getElementById('olBox');


        //li
        var newElementLi = document.createElement('li');
        newElementLi.id = "liItemClass-"+contDivCarousel;
        newElementLi.setAttribute('data-target','#myCarousel');
        if(contDivCarousel != 0){ newElementLi.className = "active";}
        newElementLi.setAttribute('data-slide-to',contDivCarousel);
        olBox.appendChild(newElementLi);


        //div
        var newElementDiv =  document.createElement('div');
        if(contDivCarousel == 0){ newElementDiv.className = "active";}
        else{newElementDiv.className = "item";}
        newElementDiv.id="divItemClass-"+contDivCarousel;
        newElementDiv.addEventListener("click", function(){deleteImageCarousel(newElementDiv.id)}, false);

        divBox.appendChild(newElementDiv);
        

        //img dentro del div
        var newElementImg =  document.createElement('img');
        newElementImg.src = "img/"+ dirImage;
        newElementImg.id= contDivCarousel;
        newElementImg.style = "width:100%;border:1px solid black;"
        var childDiv = document.getElementById("divItemClass-"+contDivCarousel);
        childDiv.appendChild(newElementImg);

        contDivCarousel = contDivCarousel+1;
    }

}


function ponerNombre(){
    //put the user's name on the nav
    var nombre = sessionStorage.getItem("username");
    if(nombre=="" || nombre == undefined){
        nombre = "usuario";
    }
    $("#nombrePagina").text(nombre);
}