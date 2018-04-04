/*var Product = function(id,name,description,price,amount,imgList,categorie){
	this.id = id;
	this.name = name;
	this.description = description;
	this.price = price;
	this.amount = amount;
	this.imgList = imgList;
	this.categorie = categorie;


	getId : function(){
		return this.id;
	}
	getName : function(){
		return this.name;
	}
	getDescription : function(){
		return this.description;
	}
	getPrice : function(){
		return this.price;
	}
	getAmount : function(){
		return this.amount;
	}
	getImgList : function(){
		return this.imgList;
	}
	getCategorie : function(){
		return this.categorie;
	}
	setId : function(id){
		return this.id = id;
	}
	setName : function(name){
		return this.name = name; 
	}
	setDescription : function(description){
		return this.description = description;
	}
	setPrice : function(price){
		return this.price = price;
	}
	setAmount : function(amount){
		return this.amount = amount;
	}
	setImgList : function(imgList){
		return this.imgList = imgList;
	}
	setCategorie : function(categorie){
		return this.categorie = categorie;
	}
}
 */
'use strict';
class Product{ 
	
		constructor(id,name,description,price,amount,imgList,categorie){
		
			this.id = id;
			this.name = name;
			this.description = description;
			this.price = price;
			this.amount = amount;
			this.imgList = imgList;
			this.categorie = categorie;
		}

		getId(){
			return this.id;
		}
		getName(){
			return this.name;
		}
		getDescription(){
			return this.description;
		}
		getPrice(){
			return this.price;
		}
		getAmount(){
			return this.amount;
		}
		getImgList(){
			return this.imgList;
		}
		getCategorie(){
			return this.categorie;
		}
		setId(id){
			return this.id = id;
		}
		setName(name){
			return this.name = name; 
		}
		setDescription(description){
			return this.description = description;
		}
		setPrice(price){
			return this.price = price;
		}
		setAmount(amount){
			return this.amount = amount;
		}
		setImgList(imgList){
			return this.imgList = imgList;
		}
		setCategorie (categorie){
			return this.categorie = categorie;
		}
	}
