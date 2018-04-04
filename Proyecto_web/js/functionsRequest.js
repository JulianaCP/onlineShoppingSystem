BuyerMoreProductsPurchased();
	BuyerLessProductsPurchased();
	BuyerMostMoney();
	BuyerLessMoney();
		
	

	/*
	params:
	Description: Buyer with more products purchased.
	*/
	function BuyerMoreProductsPurchased(){
		var suma= 0;
		var most=0;
		var winnerName="";		
		for (var i = 0; i < listBuyers.length; i++) {			
			for (var j = 0; j < listBuyers[i].purchaseHistory.length; j++) {				
				for (var k = 0; k < listBuyers[i].purchaseHistory[j].productList.length; k++) {
					suma= suma+ listBuyers[i].purchaseHistory[j].productList[k].quantity;
				}				
			}
			if(most <= suma){
				most= suma;
				winnerName= listBuyers[i].userName;				
			}
			suma= 0;
		}
		document.getElementById("moreProducts").innerHTML= winnerName;
		
	}

	/*
	params:
	Description: Buyer with less products purchased.
	*/
	function BuyerLessProductsPurchased(){
		var suma= 0;
		var less=10000000000;
		var winnerName="";		
		for (var i = 0; i < listBuyers.length; i++) {			
			for (var j = 0; j < listBuyers[i].purchaseHistory.length; j++) {				
				for (var k = 0; k < listBuyers[i].purchaseHistory[j].productList.length; k++) {
					suma= suma+ listBuyers[i].purchaseHistory[j].productList[k].quantity;		
				}				
			}
			if(suma <= less){
				less= suma;
				winnerName= listBuyers[i].userName;				
			}
			suma= 0;
		}
		document.getElementById("lessProducts").innerHTML= winnerName;
	}

	
	/*
	params:
	Description: Buyer with more money invested in the application.
	*/
	function BuyerMostMoney(){
		var suma= 0;
		var most=0;
		var winnerName="";		
		for (var i = 0; i < listBuyers.length; i++) {			
			for (var j = 0; j < listBuyers[i].purchaseHistory.length; j++) {				
				suma= suma+listBuyers[i].purchaseHistory[j].totalPrice;				
			}
			if(most <= suma){				
				most= suma;
				winnerName= listBuyers[i].userName;				
			}
			suma= 0;
		}
		document.getElementById("moreMoney").innerHTML= winnerName;
	}

	/*
	params:
	Description: Buyer with less money invested in the application.
	*/
	function BuyerLessMoney(){
		var suma= 0;
		var less=10000000000;
		var winnerName="";		
		for (var i = 0; i < listBuyers.length; i++) {			
			for (var j = 0; j < listBuyers[i].purchaseHistory.length; j++) {				
				suma= suma+listBuyers[i].purchaseHistory[j].totalPrice;
			}
			if(suma <= less){
				less= suma;
				winnerName= listBuyers[i].userName;				
			}
			suma= 0;
		}
		document.getElementById("lessMoney").innerHTML= winnerName;
	}