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

  return (value.price >= 14 && value.price <= 18);
}
console.log(items.filter(itemsBetween));
/////////////////////////
////////////////////////
////////////////////////

}());
