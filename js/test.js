function getLocalData(name)
{
	return localStorage.getItem(name)
}
function setLocalData(name,value)
{
	if (value!=null)
		localStorage.setItem(name,value);
	else
		localStorage.removeItem(name);
}

function addItemInCart(code,abfor,rifaf,dsart,qtord,prntve,vatval)
{
    // qtord is quantity to order
    // code is the sku or other code
   //abfor is the brand
   // rifaf is the brand code
   // prntve is the unitary price
   //vatval is the percentage fee 

  // if qtord is not numeric method fail
	if (!($.isNumeric(qtord)))
	{
		 return false; 
	}
    	qtord = parseFloat(qtord);
	if (!(qtord > 0)) {
	    alert('insert positive value');
	    return -1;
	}
	
	// make new row
	var newRow = new Object();
	newRow["CDART"] = code;
	newRow["ABFOR"] = abfor;
	newRow["RIFAF"] = rifaf;
	newRow["DSART"] = dsart;

	newRow["QTORD"] = qtord;
	newRow["QTMNV"] = qtmnv;
	newRow["PRNTVE"] = prntve;
	newRow["ALIVA"] = VatVAL;

   // add new item to cart
	cartObj[cartCI++] = newRow;
   
   //save cart in localStorage
setlocalData("NETSELL5_USERCART",JSON.stringify(cartObj));
	setLocalData("NETSELL5_USERCART_CI",cartCI);
	

}

function cart_getItemsNum_v2() {
	
	var itemInCart = 0;
	for (var xr in cartObj)
	{
	     // i need index of element in this routine so i didn't used OF in iteration
   	    r = cartObj[xr];
	    if (r==null) continue; // Removed ROW - ignore it
	    itemInCart++;
	}
	return itemInCart;
}

function cart_getValue_v2() {

	var useVAT = true; 
	

	var kvalueVLMERE=0.0; // without vat
	var kvalueVLMERE_I = 0.0; // with vat
	var kvalueALIVA_VAL = 0.0; // vat chargea

	for (var r of cartObj) // iterate all the item
	{
	    if (r==null) continue; // Removed ROW - ignore it


	    var prntve = parseFloat(r["PRNTVE"]);
	    var aliva = parseFloat(r["ALIVA"]);
	    var qtord = parseFloat(r["QTORD"]);


	    var totRowWithVAT = (prntve + ((prntve*aliva)/100))*qtord;
	    var totRowNOVAT = prntve*qtord;
	    var totRowALIVA = ((prntve*aliva)/100)*qtord; 

	    kvalueVLMERE = kvalueVLMERE + totRowNOVAT;
	    kvalueVLMERE_I = kvalueVLMERE_I + totRowWithVAT; 
	    kvalueALIVA_VAL = kvalueALIVA_VAL + totRowALIVA;

	}

	var cartValueObj = new Object();
	cartValueObj["VLMERE"] = kvalueVLMERE;
	cartValueObj["VLMERE_I"] = kvalueVLMERE_I;
	cartValueObj["ALIVA_VAL"] = kvalueALIVA_VAL;


	return cartValueObj;


}

function cart_removeCartRow_v2(rowid)
{
	cartObj[rowid]=null; // sign row as invalid
}

function cart_updateQtordInRow_v2(rowIndex,newQtord)
{
   // like add item this function fail if qtord is not valid
	if (!($.isNumeric(newQtord)))
	{
		
		 return false; 
	}
    	newQtord = parseFloat(newQtord);
	if (!(newQtord > 0)) {
             alert('insert positive value' );
  
	    return -1;
	}
	
   	        
  // update cart
	    cartObj[rowIndex]["QTORD"] = newQtord;
     
	 // update memory
	setLocalData("NETSELL5_USERCART",JSON.stringify(cartObj));
	 
}