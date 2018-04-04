

/*
var Buyer = function(id,name,surnames,age,email,address,
	telephone,cardList,birthDate,userName,password, membership,
	money,wishList,shoppingCart,purchaseHistory){
	this.id = id;
	this.name = name;
	this.surnames = surnames;
	this.age = age;
	this.email = email;
	this.address = address;
	this.telephone = telephone;
	this.cardList = cardList; //codigo, numero tarjeta , fecha vencecimiento
	this.birthDate = birthDate;
	this.userName = userName;
	this.password = password;
	this.membership = membership;
	this.money = money;
	this.wishList = wishList;
	this.shoppingCart = shoppingCart;
	this.purchaseHistory = purchaseHistory;


	getId: function(){
		return this.id;
	}
	setId: function(id){
		this.id= id;
	}
	getName: function(){
		return this.name;
	}
	setName: function(name){
		this.name= name;
	}
	getSurnames: function(){
		return this.surnames;
	}
	setSurnames: function(surnames){
		this.surnames= surnames;
	}
	getAge: function(){
		return this.age;
	}
	setAge: function(age){
		this.age= age;
	}
	getEmail: function(){
		return this.email;
	}
	setEmail: function(email){
		this.email= email;
	}
	getAddress: function(){
		return this.address;
	}
	setAddress: function(address){
		this.address= address;
	}
	getTelephone: function(){
		return this.telephone;
	}
	setTelephone: function(telephone){
		this.telephone= telephone;
	}
	getCardList: function(){
		return this.cardList;
	}
	setCardList: function(cardList){
		this.cardList= cardList;
	}
	getBirthDate : function(){
		return this.birthDate;
	}
	getUserName : function(){
		return this.userName;
	}
	getPassword : function(){
		return this.password;
	}
	getMembership : function(){
		return this.membership;
	}
	getMoney : function(){
		return this.money;
	}
	getWishList : function(){
		return this.wishList;
	}
	getShoppingCart : function(){
		return this.shoppingCart;
	}
	getPurchaseHistory : function(){
		return this.purchaseHistory;
	}
	setBirthDate : function(birthDate){
		return this.birthDate =  birthDate;
	}
	setUserName : function(userName){
		return this.userName = userName;
	}
	setPassword : function(password){
		return this.password = password; 
	}
	setMembership : function(membership){
		return this.membership = membership;
	}
	setMoney : function(money){
		return this.money = money;
	}
	setWishList : function(wishList){
		return this.wishList = wishList;
	}
	setShoppingCart : function(shoppingCart){
		return this.shoppingCart = shoppingCart;
	}
	setPurchaseHistory : function(purchaseHistory){
		return this.purchaseHistory = purchaseHistory;
	}

	//funciones


	reduceMoney : function(money){
		this.money = this.money - money;
	}

	addElementWishList : function(element){
		this.wishList.push(element);
	}
	addElementShoppingCart : function(element){
		this.shoppingCart.push(element);
	}
	addElementPurchaseHistory : function(element){
		this.purchaseHistory.push(element);
	}



	priceShoppingCart : function(){
		var value = 0;
		for (var i = 0 ; i<this.shoppingCart.length; i++) {
			value = value + this.shoppingCart[i].getAmount();
		}
		return value;
	}
}
*/

class Buyer{

	constructor(id,name,surnames,age,email,address,
		telephone,cardList,birthDate,userName,password, membership,
		wishList,shoppingCart,purchaseHistory){
		this.id = id;
		this.name = name;
		this.surnames = surnames;
		this.age = age;
		this.email = email;
		this.address = address;
		this.telephone = telephone;
		this.cardList = cardList; //codigo, numero tarjeta , fecha vencecimiento
		this.birthDate = birthDate;
		this.userName = userName;
		this.password = password;
		this.membership = membership;		
		this.wishList = wishList;
		this.shoppingCart = shoppingCart;
		this.purchaseHistory = purchaseHistory;

	}
	getId(){
		return this.id;
	}
	setId(id){
		this.id= id;
	}
	getName(){
		return this.name;
	}
	setName(name){
		this.name= name;
	}
	getSurnames(){
		return this.surnames;
	}
	setSurnames(surnames){
		this.surnames= surnames;
	}
	getAge(){
		return this.age;
	}
	setAge(age){
		this.age= age;
	}
	getEmail(){
		return this.email;
	}
	setEmail(email){
		this.email= email;
	}
	getAddress(){
		return this.address;
	}
	setAddress(address){
		this.address= address;
	}
	getTelephone(){
		return this.telephone;
	}
	setTelephone(telephone){
		this.telephone= telephone;
	}
	getCardList(){
		return this.cardList;
	}
	setCardList(cardList){
		this.cardList= cardList;
	}
	getBirthDate(){
		return this.birthDate;
	}
	getUserName(){
		return this.userName;
	}
	getPassword(){
		return this.password;
	}
	getMembership(){
		return this.membership;
	}
	
	getWishList(){
		return this.wishList;
	}
	getShoppingCart(){
		return this.shoppingCart;
	}
	getPurchaseHistory(){
		return this.purchaseHistory;
	}
	setBirthDate(birthDate){
		return this.birthDate =  birthDate;
	}
	setUserName(userName){
		return this.userName = userName;
	}
	setPassword(password){
		return this.password = password; 
	}
	setMembership(membership){
		return this.membership = membership;
	}
	
	setWishList(wishList){
		return this.wishList = wishList;
	}
	setShoppingCart(shoppingCart){
		return this.shoppingCart = shoppingCart;
	}
	setPurchaseHistory(purchaseHistory){
		return this.purchaseHistory = purchaseHistory;
	}

	setQuantityCarList(value,index){
		this.shoppingCart[index].quantity= value;
	}

	//funciones



	addElementWishList(element){
		this.wishList.push(element);
	}
	addElementShoppingCart(element){
		this.shoppingCart.push(element);
	}
	addElementPurchaseHistory(element){
		this.purchaseHistory.push(element);
	}	


	priceShoppingCart(){
		var value = 0;
		for (var i = 0 ; i<this.shoppingCart.length; i++) {
			value = value + this.shoppingCart[i].getPrice();
		}
		return value;
	}
}


var myProduct1= new Product("1","Camisa hombre","Tela de algodon, botones y larga",
	2400,23,["imgBD/camisaCod1.jpg"],
	"Camisas");

var myProduct2= new Product("5","Vestido","Tela de algodon, botones y larga",
	5400,23,["imgBD/vestidoCod5.jpg"],
	"Vestidos");

var buyer = new Buyer("1","Rubenito","Miape",22,"email","address",
		"87860596",[{idCard:"11-10229-903",money:234232},{idCard:"11-20390-22",money:9},
		{idCard:"11-88370-33",money:8873737},{idCard:"11-12121-22",money:567453}],
		"birthDate","userName@gmail.com","1", "Active",
		["1","5"],
		[{product: myProduct1,quantity: 1},{product: myProduct2,quantity: 1}],
		[{date: "18/07/2017", dateArrive: "28/07/2017", idC:"123",
		productList:[{idProduct: 1,quantity:25,pricePU:20},
						{idProduct: 1,quantity:25,pricePU:20},
						{idProduct: 2,quantity:25,pricePU:20},
						{idProduct: 3,quantity:25,pricePU:20},
						{idProduct: 4,quantity:25,pricePU:20}],
		totalPrice:2500},
		{date: "18/07/2017", dateArrive: "28/07/2017", idC:"122",
		productList:[{idProduct: 1,quantity:25,pricePU:20},
						{idProduct: 1,quantity:25,pricePU:20},
						{idProduct: 2,quantity:25,pricePU:20},
						{idProduct: 3,quantity:25,pricePU:20},
						{idProduct: 4,quantity:25,pricePU:20}],
		totalPrice:2500},
		{date: "18/07/2017", dateArrive: "28/07/2017", idC:"121",
		productList:[{idProduct: 1,quantity:25,pricePU:20},
						{idProduct: 1,quantity:25,pricePU:20},
						{idProduct: 2,quantity:25,pricePU:20},
						{idProduct: 3,quantity:2,pricePU:20}],
		totalPrice:1500},
		{date: "18/07/2017", dateArrive: "28/07/2017", idC:"111",
		productList:[{idProduct: 1,quantity:25,pricePU:20},
						{idProduct: 1,quantity:25,pricePU:20},
						{idProduct: 2,quantity:25,pricePU:20},
						{idProduct: 3,quantity:25,pricePU:20},
						{idProduct: 4,quantity:25,pricePU:20}],
		totalPrice:2500},
		{date: "18/07/2017", dateArrive: "28/07/2017", idC:"333",
		productList:[{idProduct: 1,quantity:25,pricePU:20},
						{idProduct: 1,quantity:25,pricePU:20},
						{idProduct: 2,quantity:25,pricePU:20},
						{idProduct: 3,quantity:25,pricePU:20},
						{idProduct: 4,quantity:25,pricePU:20}],
		totalPrice:2500},
		{date: "18/07/2017", dateArrive: "28/07/2017",idC:"322",
		productList:[{idProduct: 1,quantity:25,pricePU:20},
						{idProduct: 1,quantity:25,pricePU:20},
						{idProduct: 2,quantity:25,pricePU:20},
						{idProduct: 3,quantity:2,pricePU:20}],
		totalPrice:1500}]

		);

