
/////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////


var buyer2 = new Buyer("2","Andreina","Rosales",34,"email","address",
		"80396058",[{idCard:"11-10229-903",money:234232},{idCard:"11-20390-22",money:992920},
		{idCard:"11-88370-33",money:8873737},{idCard:"11-12121-22",money:567453}],"12/08/1980","userName@gmail.com","password", "Desactive",
		["0","1"],[],
		[{date: "18/07/2017", dateArrive: "28/07/2017",idC:"311",
		productList:[{idProduct: 1,quantity:25,pricePU:20},
						{idProduct: 1,quantity:25,pricePU:20},
						{idProduct: 2,quantity:25,pricePU:20},
						{idProduct: 3,quantity:25,pricePU:20},
						{idProduct: 4,quantity:25,pricePU:20}],
		totalPrice:2500}]
		);

var buyer1 = new Buyer("2","Andreina","Rosales",34,"email","address",
		"80396058",[{idCard:"11-10229-903",money:234232}],"19/10/1998","user@gmail.com","pass", "Active",
		["0","1"],[],
		[{date: "18/07/2017", dateArrive: "28/07/2017",idC:"311",
		productList:[{idProduct: 1,quantity:25,pricePU:20},
						{idProduct: 1,quantity:25,pricePU:20},
						{idProduct: 2,quantity:25,pricePU:20},
						{idProduct: 3,quantity:25,pricePU:20},
						{idProduct: 4,quantity:25,pricePU:20}],
		totalPrice:2500},
		{date: "18/07/2017", dateArrive: "28/07/2017",idC:"311",
		productList:[{idProduct: 1,quantity:25,pricePU:20},
						{idProduct: 1,quantity:25,pricePU:20},
						{idProduct: 2,quantity:25,pricePU:20},
						{idProduct: 3,quantity:25,pricePU:20},
						{idProduct: 4,quantity:25,pricePU:20}],
		totalPrice:20000}]
		);

var listBuyers = [buyer2,buyer1];

/////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////



var admin = new Administrator("admin@g.com","12");
var admin2 = new Administrator("admi2@g.com","123");

var listaAdministrator = [admin,admin2];


/////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////

var myProduct0= new Product("0","Camisa hombre","Tela de algodon, botones y larga",
	2400,23,["calidad.jpg","camisaCod1.jpg"],
	"man");

var myProduct1= new Product("1","Vestido","Tela de algodon, botones y larga",
	5400,23,["calidad.jpg","vestidoCod5.jpg"],
	"woman");



	var myProduct2= new Product("2","Camisa","Tela de algodon, y larga",
	5400,23,["calidad.jpg","camisetaCod5.jpg"],
	"man");

	var myProduct3= new Product("3","Camisa","Tela de algodon, manga larga",
	5400,23,["calidad.jpg","camisaCod4.jpg"],
	"man");

	var myProduct4= new Product("4","Camisa","Tela de algodon, botones y larga",
	5400,23,["calidad.jpg","camisaCod3.jpg"],
	"man");

	var myProduct5= new Product("5","Blusa","Blusa cuadrada de botones larga",
	5400,23,["calidad.jpg","woman2.jpg"],
	"woman");

	var myProduct6= new Product("6","Vestido","Blusa azul marino marga tamaño medio",
	5400,23,["calidad.jpg","woman1.jpg"],
	"woman");

	var myProduct7= new Product("7","Vestido","Tela de algodon, floral y larga",
	5400,23,["calidad.jpg","woman_3.jpg"],
	"woman");

	var myProduct8= new Product("8","Short","Tela de mezclilla, gris",
	5400,23,["calidad.jpg","woman_4.jpg"],
	"woman");


	var myProduct9= new Product("9","Pantalon","Pantalon de vestir liso",
	5400,23,["calidad.jpg","hombre_1.jpg"],
	"man");

	var myProduct10= new Product("10","Pantalon","Pantalon de vestir liso",
	5400,23,["calidad.jpg","hombre_2.jpg"],
	"man");

	var myProduct11= new Product("11","Vestido","Vestido celeste de niña",
	5400,23,["calidad.jpg","girl1.jpg"],
	"girl");


	var myProduct12= new Product("12","Conjunto","Conjunto rosado de niña",
	5400,23,["calidad.jpg","girl2.jpg"],
	"girl");

	var myProduct13= new Product("13","Vestido","Vestido gris de niña",
	5400,23,["calidad.jpg","girl3.jpg"],
	"girl");

	var myProduct14= new Product("14","Vestido","Vestido con chaleco de niña",
	5400,23,["calidad.jpg","girl4.jpg"],
	"girl");

	var myProduct15= new Product("15","Vestido","Vestido con naranja de niña",
	5400,23,["calidad.jpg","girl5.jpg"],
	"girl");



	var myProduct16= new Product("16","Pijama","Pijama para niño",
	5400,23,["calidad.jpg","boy1.jpg"],
	"boy");

	var myProduct17= new Product("17","Conjunto niño","Conjunto para niño pequeño",
	5400,23,["calidad.jpg","boy2.jpg"],
	"boy");

	var myProduct18= new Product("18","Camisa y short","Camisa y short para niño",
	5400,23,["calidad.jpg","boy3.jpg"],
	"boy");

	var myProduct19= new Product("19","Conjunto niño","Conjunto para niño pequeño",
	5400,23,["calidad.jpg","boy4.jpg"],
	"boy");

	var myProduct20= new Product("20","Pijama","Pijama para niño",
	5400,23,["calidad.jpg","boy5.jpg"],
	"boy");	

var productsList = [myProduct0,myProduct1,myProduct2,myProduct3,myProduct4,myProduct5,myProduct6,myProduct7,myProduct8,myProduct9,myProduct10,
					myProduct11,myProduct12,myProduct13,myProduct14,myProduct15,
					myProduct16,myProduct17,myProduct18,myProduct19,myProduct20];



function closeSession(){
	sessioStorage.clear();
}