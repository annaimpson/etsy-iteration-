(function(){
  'use strict';
  console.log(items.length);

////////////////////////////
//calculating the average//
//////////////////////////

function itemPriceAverage(){
  var sellPrices = 0;
    items.forEach(function(num){
      sellPrices += num.price;
  });
  console.log("The average is: " + sellPrices/(items.length));

}
itemPriceAverage();
///////////////////////////
//////////////////////////



//////////////////////////
//////Array of items/////
////between $14 & $18////
/////////////////////////
function itemsBetween(value){

  return (value.price > 14 && value.price < 18);
}
console.log("Items that cost between $14.00 USD and $18.00 USD: " + items.filter(itemsBetween));
/////////////////////////
////////////////////////
////////////////////////


/////////////////////////
////GBP Curreny Code////
////////////////////////
function currencyCode(){
  var gbpCurrencyCode = "";
    items.forEach(function(num){
      if(num.currency_code == "GBP"){
        gbpCurrencyCode = num.title + " " + num.price;
      }
    });
    console.log(gbpCurrencyCode);
    return gbpCurrencyCode;
}
currencyCode();
//////////////////////////
/////////////////////////
/////////////////////////


////////////////////////
////////Wood////////////
///////////////////////












}());
