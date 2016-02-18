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
  console.log(sellPrices/(items.length));

}
itemPriceAverage();
///////////////////////////
//////////////////////////



//////////////////////////
//////Array of items/////
////between $14 & $18////
/////////////////////////


}());
