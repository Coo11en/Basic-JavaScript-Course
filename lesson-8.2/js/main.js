'use strict'

let cart = document.querySelector('.cart-add');
let popupCart = document.querySelector('.cart');
let listCart = document.querySelector('.box-result');
let PastHTMLHR = '<hr class="hr"></hr>'

cart.addEventListener('click', function () {
    popupCart.classList.toggle('cart-active');
});

let nameGlobal = "";
let priceGlobal = "";
let SumGlobal = 0;
let quantityGlobal = 0;
let AllSumGlobal = 0;
let СountGlobal = 0;
let prodCartname = [];
let prodCartprice = [];
let prodCartSum = [0, 0, 0, 0, 0, 0, 0];
let quantityCartprice = [0, 0, 0, 0, 0, 0, 0];
let i = "";
let PastHTML = "";
let Сount = 0;

let productBtn = document.querySelectorAll('.btn-addcart');
productBtn.forEach(element => {
    element.addEventListener('click', function () {
        let elementLi = element.parentElement.parentElement;
        nameGlobal = elementLi.querySelector('h3').textContent;
        priceGlobal = elementLi.querySelector('.product-price').textContent.replace('$', '');
        i = +nameGlobal[nameGlobal.length - 1];
        prodCartname[i] = nameGlobal;
        prodCartprice[i] = priceGlobal;
        quantityCartprice[i] = quantityCartprice[i] + 1;
        prodCartSum[i] = prodCartSum[i] + +priceGlobal;
        AllSumGlobal += +priceGlobal;
        СountGlobal = СountGlobal + 1;
        let PastHTML = "";
        PastHTML = `<ul class="box-product${i} box">
                        <li class="menu">${prodCartname[i]}</li>
                        <li class="menu">${quantityCartprice[i]} шт.</li>
                        <li class="menu">$${prodCartprice[i]}</li>
                        <li class="menu">$${prodCartSum[i].toFixed(2)}</li>
                    </ul>`
        let boxP = `.box-product${i}`;
        let ulOld = document.querySelector(boxP)
        document.querySelector(".result").innerHTML = `Товаров в корзине на сумму: $${AllSumGlobal.toFixed(2)}`;
        if (document.querySelector(".card-quantity") === null) {
            document.querySelector(".cart-link").insertAdjacentHTML('beforeend', '<span class="card-quantity">0</span>');
        }
        if (ulOld != null) {
            ulOld.outerHTML = PastHTML;
        } else {
            listCart.insertAdjacentHTML('beforeBegin', PastHTML)
            listCart.insertAdjacentHTML('beforeBegin', PastHTMLHR)
        }
        document.querySelector(".card-quantity").innerHTML = СountGlobal;
    })
});
