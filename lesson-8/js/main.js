'use strict'

let cart = document.querySelector('.cart-add');
let popupCart = document.querySelector('.cart');
let listCart = document.querySelector('.box-result');

cart.addEventListener('click', function () {
    popupCart.classList.toggle('cart-active');
});

let nameGlobal = "";
let priceGlobal = "";
let quantityGlobal = 0;
let prodCartname = [];
let prodCartprice = [];
let quantityCartprice = [0, 0, 0, 0, 0, 0, 0];
let i = "";
let PastHTML = "";

let productBtn = document.querySelectorAll('.btn-addcart');
productBtn.forEach(element => {
    element.addEventListener('click', function () {
        let elementLi = element.parentElement.parentElement;
        nameGlobal = elementLi.querySelector('h3').textContent;
        priceGlobal = elementLi.querySelector('.product-price').textContent;
        i = +nameGlobal[nameGlobal.length - 1];
        prodCartname[i] = nameGlobal;
        prodCartprice[i] = priceGlobal;
        quantityCartprice[i] = quantityCartprice[i] + 1;
        // getProductMarkup(i, prodCartname[i], prodCartprice[i], quantityCartprice[i])
        let PastHTML = "";
        PastHTML = `<ul class="box-product${i} box">
                        <li class="menu">${prodCartname[i]}</li>
                        <li class="menu">${quantityCartprice[i]} шт.</li>
                        <li class="menu">${prodCartprice[i]}</li>
                        <li class="menu">${prodCartprice[i]}</li>
                    </ul>
                    <hr class="hr"></hr>
                    
                    <div class="product">`

        let boxP = `.box-product${i}`;
        let ulOld = document.querySelector(boxP)
        if (ulOld != null) {
            // ulOld.innerHTML = 
        } else {
            listCart.insertAdjacentHTML('beforeBegin', PastHTML)
        }
    })
});

// innerHeight

// function getProductMarkup(i, prodCartname, prodCartprice, quantityCartprice) {

//     return `<ul class="box-product>${i} box">
//                         <li class="menu">${prodCartname[i]}</li>
//                         <li class="menu">${quantityCartprice[i]} шт.</li>
//                         <li class="menu">$${prodCartprice[i]}</li>
//                         <li class="menu">$${prodCartprice[i]}</li>
//                     </ul>
//                     <hr class="hr"></hr>

//                     <div class="product">`



    // function showCategory(category) {
    //     //for (let i = 0; i < products.category.length; i++) {

    //     //}
    //     let PastHTML = "";
    //     let productAr = products[category];
    //     for (let i = 0; i < productAr.length; i++) {
    //         let product = productAr[i];
    //         PastHTML += getProductMarkup(product);
    //     }
    //     div.innerHTML = PastHTML;
// }