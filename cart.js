// let modal = document.getElementById("myModal");
// let btn = document.getElementById("cart");
// let close = document.getElementsByClassName("close")[0];


// let close_footer = document.getElementsByClassName("close-footer")[0];
// let order = document.getElementsByClassName("order")[0];
// btn.onclick = function () {
//   modal.style.display = "block";
// }
// close.onclick = function () {
//   modal.style.display = "none";
// }
// close_footer.onclick = function () {
//   modal.style.display = "none";
// }
// order.onclick = function () {
//   alert("Cảm ơn bạn đã thanh toán đơn hàng")
// }
// window.onclick = function (event) {
//   if (event.target == modal) {
//     modal.style.display = "none";
//   }
// }



let btn1 = document.querySelectorAll('.btn-cart');
btn1.forEach(function(button, index){
  button.addEventListener('click', function(event){{
    let btnItem = event.target;
    let product = btnItem.parentElement
    let productImg = product.querySelector('.image1').src
    let productName = product.querySelector('.name').innerText
    let productPrice = product.querySelector('.price').innerText 
    addCart(productPrice, productName)
    modal.style.display = "block"; 
  }})
  
});

function  addCart(productPrice, productImg, productName){
  let addtr = document.createElement('div')
  
}
