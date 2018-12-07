

var totalQty=document.getElementsByName('totalQty')[0];
var btnList=document.querySelectorAll('.btn-group .btn');

var add=document.getElementsByName('increase')
// console.log(add);
var red=document.getElementsByName('decrease')
var tocart=document.getElementsByName('addToCart')

// for (var i = 0; i < add.length; i++){
//     add[i].addEventListener('click',increaseValue);

// }
// for(var i=0;i<red.length;i++){
//     red[i].addEventListener('click',decreaseValue);
// }
// for(var i=0;i<tocart.length;i++){
//     tocart[i].addEventListener('click',addToCart);
// }
// var aacc;
// addred();
// function addred(){
   
//         for (var i = 0; i < add.length; i++){
//             add[i].addEventListener('click',increaseValue);
        
//         }
//         for(var i=0;i<red.length;i++){
//             red[i].addEventListener('click',decreaseValue);
//         }
//         for(var i=0;i<tocart.length;i++){
//             tocart[i].addEventListener('click',addToCart);
//         }
    

// }
for(var i=0;i<add.length;i++){
    add[i].addEventListener('click',increaseValue);
    red[i].addEventListener('click',decreaseValue);
    // tocart[i].addEventListener('click',addToCart);

}

// for (const key in btnList) {
//     if (btnList.hasOwnProperty(key)) {
//         const element = btnList[key];
//         switch(element.name){
//             case 'increase':element.addEventListener('click',increaseValue);break;
//             case 'decrease':element.addEventListener('click',decreaseValue);break;
//             case 'addToCart':element.addEventListener('click',addToCart);break;
//         }        
//     }
// }
function increaseValue(e){
      var qtyObj=  e.target.nextElementSibling;
      var qty=parseInt(qtyObj.innerText);
      qty++;
      qtyObj.innerText=qty;
      console.log(qty);        
}
function decreaseValue(e){
    var qtyObj=  e.target.previousElementSibling;
    var qty=parseInt(qtyObj.innerText);
   if(qty>1) qty--;
   else qty=0;
    qtyObj.innerText=qty;
    console.log(qty);        
}

function addToCart(e){
    var qtyObj=  e.target.previousElementSibling.previousElementSibling;
    var qty=parseInt(qtyObj.innerText);
    var total=parseInt(totalQty.innerText);
    total+=qty;
    totalQty.innerText=total;  
}