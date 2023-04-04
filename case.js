

class product {
    constructor(image,  name, price, info) {
        this.image = image;
        
        this.name = name;
        this.price = price;
        this.info = info;
    }
}
let products = [
    new product('https://bizweb.dktcdn.net/100/342/645/products/0c6ae505cd0029d8918b8a6bebc82fe2.jpg?v=1545572483250',
                 'Giày đá bóng sân cỏ nhân tạo', 180000, 'Thêm vào giỏ hàng'),
    new product('https://bizweb.dktcdn.net/thumb/medium/100/342/645/products/men-s-original-canvas-casual-skate-shoes.png?v=1545564063607',
                 'Giày thể thau nữ', 200000,  'Thêm vào giỏ hàng'),
    new product('https://bizweb.dktcdn.net/thumb/medium/100/342/645/products/1-743624de-c3ad-40a5-a64e-6ac148652219-b0a6d7fb-0c11-4e3e-83a8-44d4e00066b5.png?v=1545572153183',
                 'Giày Sneaker giới trẻ',  190000, 'Thêm vào giỏ hàng'),
    new product('https://bizweb.dktcdn.net/thumb/medium/100/342/645/products/men-s-increase-shoes-8cm-height-increase.jpg?v=1545563234533',
                 'Giày chạy bộ nam nữ',  180000, 'Thêm vào giỏ hàng'),
    new product('https://bizweb.dktcdn.net/thumb/medium/100/342/645/products/women-casual-shoes-new-design-rubber-slide.jpg?v=1545563755483',
                 'Giày cổ cao nam', 160000, 'Thêm vào giỏ hàng'),

]
function renderProducts() {
    for (let i = 0; i < products.length; i++) {
        document.querySelector('.forth').innerHTML +=
         `
        <div class = "product-item">
            
                <img class = "image1" src="${products[i].image}">
                <div class ="product-item-text">    
                    <p><span>${products[i].price}</span></p>        
                    <h3>${products[i].name}</h3>          
                </div>
                <button class="btn-cart">${products[i].info}</button>
                 
                
            </div>
            `
        }
               
            
    
}
renderProducts();


let btn = document.querySelectorAll('button');
btn.forEach(function(button, index){
  button.addEventListener('click', function(event){
    let btnItem = event.target;
    let product = btnItem.parentElement
    let productImg = product.querySelector('img').src
    let productName = product.querySelector('h3').innerText
    let productPrice = product.querySelector('span').innerText 
    addCart(productPrice,productImg, productName)
   
  })
  
});
function  addCart(productPrice, productImg, productName){
    let addtr = document.createElement('tr');
    let cartItem = document.querySelectorAll('tbody tr')
    for(i = 0; i < cartItem.length; i++){
        let productT = document.querySelectorAll('.title')
        if(productT[i].innerHTML == productName){
            alert('sản phẩm của bạn đã có trong giỏ hàng')
            return;
        }
     }
    let trcontent = ' <tr><td style="display: flex; align-items: center;"><img style="width: 70px;" src="'+productImg+'"><span class="title">'+productName+'</span></td><td><p><span  class="prices">'+productPrice+'</span></p></td><td><input style="width: 30px; outline: none;" type="number" value="1" min="1"></td><td style="cursor: pointer;"><span class="del">Xóa</span></td></tr>'
    addtr.innerHTML = trcontent
    let cartTable = document.querySelector('tbody')
    cartTable.append(addtr)

    carttotal()
    deleteCart()
    
  }

function carttotal(){
    let cartItem = document.querySelectorAll('tbody tr')
    let total = 0;
    for(i = 0; i < cartItem.length; i++){
        let inputValue = cartItem[i].querySelector('input').value
        let productPrice = cartItem[i].querySelector('.prices').innerHTML
        s = inputValue * productPrice 
        total += s
        
    }
    let cartS = document.querySelector('.price-total span')
    cartS.innerHTML = total;
}


function deleteCart(){
    let cartItem = document.querySelectorAll('tbody tr')
    for(i = 0; i < cartItem.length; i++){
        let productT = document.querySelectorAll('.del')
        productT[i].addEventListener('click', function(event){
            let cartDel = event.target;
            let cartItemr = cartDel.parentElement.parentElement
            cartItemr.remove();
        })
     }
}