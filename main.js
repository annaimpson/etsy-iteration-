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
function wood(){
  var woodObject = "";
  items.forEach(function(num){
    num.materials.map(function(value){     //value=the elements in the material array
    if(value == "wood"){
      woodObject = num.title;
      // console.log(woodObject);
      }
    });
  });
  return woodObject;
}
wood();
///////////////////////
///////////////////////
//////////////////////




//////////////////////
//////8 or more///////
//////////////////////

function eightOrMore(value){

  if (value.materials.length > 8){
    console.log(value.title);
    value.materials.forEach(function(i){
      console.log(i);
    });
  }
}
console.log(items.filter(eightOrMore));
///////////////////
///////////////////
///////////////////




////////////////////////
////////Handmade////////
////////////////////////
function handmadeItems(){
  var final = 0;
    items.forEach(function(num){
      if(num.who_made === "i_did"){
        final++;
      }
    });
    console.log(final + " " + "were made by their sellers");
    return final;
  }
  handmadeItems();











}());
