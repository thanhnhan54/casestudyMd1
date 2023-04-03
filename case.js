

class product {
    constructor(image, discount, name, price, info) {
        this.image = image;
        this.discount = discount;
        this.name = name;
        this.price = price;
        this.info = info;
    }
}
let products = [
    new product('https://bizweb.dktcdn.net/100/342/645/products/0c6ae505cd0029d8918b8a6bebc82fe2.jpg?v=1545572483250',
                'Sale', 'Giày đá bóng sân cỏ nhân tạo', [180000, 150000], 'Thêm vào giỏ hàng'),
    new product('https://bizweb.dktcdn.net/thumb/medium/100/342/645/products/men-s-original-canvas-casual-skate-shoes.png?v=1545564063607',
                'Sale', 'Giày đá bóng sân cỏ nhân tạo', [200000, 170000], 'Thêm vào giỏ hàng'),
    new product('https://bizweb.dktcdn.net/thumb/medium/100/342/645/products/1-743624de-c3ad-40a5-a64e-6ac148652219-b0a6d7fb-0c11-4e3e-83a8-44d4e00066b5.png?v=1545572153183',
                'Sale', 'Giày đá bóng sân cỏ nhân tạo', [1800000, 1500000], 'Thêm vào giỏ hàng'),
    new product('https://bizweb.dktcdn.net/thumb/medium/100/342/645/products/men-s-increase-shoes-8cm-height-increase.jpg?v=1545563234533',
                'Sale', 'Giày đá bóng sân cỏ nhân tạo', [1800000, 1500000], 'Thêm vào giỏ hàng'),
    new product('https://bizweb.dktcdn.net/thumb/medium/100/342/645/products/women-casual-shoes-new-design-rubber-slide.jpg?v=1545563755483',
                'Sale', 'Giày đá bóng sân cỏ nhân tạo', [1800000, 1500000], 'Thêm vào giỏ hàng'),

]
function renderProducts() {
    for (let i = 0; i < products.length; i++) {
        document.querySelector('.forth').innerHTML +=
         `
        <div class = "pro">
            <div class ="pro1">
                <img class = "image1" src="${products[i].image}">
                <p class = " discount" >${products[i].discount}</p>
               
            </div>
            <div class ="pro2">    
                <p class = "name">${products[i].name}</p>        
                <span><del>${products[i].price[0]}</del></span> 
                <span class = "price">${products[i].price[1]}</span> <br>            
                <button class="btn-cart">${products[i].info}</button>
            </div>
        </div>
        `
    }
    
}
renderProducts();
class product1 {
    constructor(image, discount, name, price, info) {
        this.image = image;
        this.discount = discount;
        this.name = name;
        this.price = price;
        this.info = info;
    }
}
let products1 = [
    new product1('https://bizweb.dktcdn.net/100/342/645/products/0c6ae505cd0029d8918b8a6bebc82fe2.jpg?v=1545572483250',
                'Sale', 'Giày đá bóng sân cỏ nhân tạo', [180000, 150000], 'Thêm vào giỏ hàng'),
    new product1('https://bizweb.dktcdn.net/thumb/medium/100/342/645/products/men-s-original-canvas-casual-skate-shoes.png?v=1545564063607',
                'Sale', 'Giày đá bóng sân cỏ nhân tạo', [200000, 170000], 'Thêm vào giỏ hàng'),
    new product1('https://bizweb.dktcdn.net/thumb/medium/100/342/645/products/1-743624de-c3ad-40a5-a64e-6ac148652219-b0a6d7fb-0c11-4e3e-83a8-44d4e00066b5.png?v=1545572153183',
                'Sale', 'Giày đá bóng sân cỏ nhân tạo', [1800000, 1500000], 'Thêm vào giỏ hàng'),
    new product1('https://bizweb.dktcdn.net/thumb/medium/100/342/645/products/men-s-increase-shoes-8cm-height-increase.jpg?v=1545563234533',
                'Sale', 'Giày đá bóng sân cỏ nhân tạo', [1800000, 1500000], 'Thêm vào giỏ hàng'),
    new product1('https://bizweb.dktcdn.net/thumb/medium/100/342/645/products/women-casual-shoes-new-design-rubber-slide.jpg?v=1545563755483',
                'Sale', 'Giày đá bóng sân cỏ nhân tạo', [1800000, 1500000], 'Thêm vào giỏ hàng'),

]
function renderProducts1() {
    for (let i = 0; i < products1.length; i++) {
        document.querySelector('.forth1').innerHTML +=
         `
        <div class = "pro">
            <div class ="pro1">
                <img class = "image1" src="${products1[i].image}">
                <p class = " discount" >${products1[i].discount}</p>
               
            </div>
            <div class ="pro2">    
                <p class = "name">${products1[i].name}</p>        
                <span><del>${products1[i].price[0]}</del></span> 
                <span class = "price">${products1[i].price[1]}</span> <br>            
                </div>
                <button class="btn-cart">${products1[i].info}</button>
        </div>
        `
    }
    
}
renderProducts1();



