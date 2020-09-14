
//Afficher la partie info liste panier
(function(){
const cartInfo = document.getElementById('cart-info');
const cart = document.getElementById('cart');

cartInfo.addEventListener('click', function() {
    cart.classList.toggle('show-cart');
});

})();


(function(){
    const cartBtn = document.querySelectorAll(".store-item-icon");

    cartBtn.forEach(function(btn) {
        btn.addEventListener('click', function(event){
           let imageCard = event.target.parentElement.previousElementSibling; 
           imageCard =imageCard.getAttribute('src');
           let p = event.target.parentElement.parentElement.nextElementSibling.children[0];
           let name = p.children[0].textContent;
           let prix = parseInt(p.children[1].children[0].textContent);
           const harira = document.getElementById('harira');
           harira.children[0].textContent= parseInt(harira.children[0].textContent)+ 1;
           harira.children[1].textContent= parseInt(harira.children[1].textContent) + prix;
           let mhd = document.getElementById('mhd');
           mhd.innerHTML+=`
           <div class="cart-item d-flex justify-content-between text-capitalize my-3">
                <img src=${imageCard} class="img-fluid rounded-circle item-img" id="item-img" alt="">
                <div class="cart-item-text">

                  <p id="cart-item-title" class="font-weight-bold mb-0">${name}</p>
                  
                  <span id="cart-item-price" class="cart-item-price" class="mb-0">${prix}</span>
                  <span> Fcfa</span>
                </div>
                <a href="#" id='cart-item-remove' class="cart-item-remove">
                  <img src="i/trash.svg">
                </a>
              </div>
           `;
           console.log();
           
            // if(event.target.parentElement.classList.contains('store-item-icon')) {
            //     let fullPath = event.target.parentElement.previousElementSibling.src;
            //     let pos = fullPath.indexOf('img') + 3;
            //     let partPath = fullPath.slice(pos);

            //     const item = {};
            //     item.img = `ì${partPath}`
            //     let name = event.target.parentElement.parentElement.nextElementSibling.children[0].children[0].textContent; 


            //     item.name = name;
            //     let price = event.target.parentElement.parentElement.nextElementSibling.children[0].children[1].textContent; 

            //     let finalPrice =  price.slice(1).trim();

            //     item.price = finalPrice;


            //     const cartItem = document.createElement('div');
            //     cartItem.classList.add(
            //         'cart-item',
            //         'd-flex',
            //         'justify-content-between',
            //         'text-capitalize',
            //         'my-3'
            //     );

            //     cartItem.innerHTML = `
            //     <img src="${item.img}" class="img-fluid rounded-circle" id="item-img" alt="">

            //     <div class="item-text">
            //         <p id="cart-item-title" class="font-weight-bold mb-0">${item.name}</p>
            //         <span id="cart-item-price" class="cart-item-price" class="mb-0">${item.price}</span>
            //         <span>Fcfa</span>
            //     </div>

            //     <a href="#" id='cart-item-remove' class="cart-item-remove">
            //     <img src="i/trash.svg">
            //     </a> `;
                
            //     const cart = document.getElementById('cart');
            //     const total = document.querySelector('.cart-total-container');

            //     cart.insertBefore(cartItem, total);
            //     alert('Votre choix a été ajouté au panier avec succès !');
            //     showTotals();
            // }
        });
    });

    function showTotals() {
        const total = [];
        const items = document.querySelectorAll('.cart-item-price');

        items.forEach(function(item) {
            total.push(parseFloat(item.textContent));
        });

        const totalMoney = total.reduce(function(total, item) {
            total += item;
            return total;
        }, 0);

        const finalMoney =  totalMoney.toFixed(2);
    document.getElementById('cart-total').textContent = finalMoney;
    document.querySelector('.item-total').textContent = finalMoney;
    document.getElementById('item-count').textContent = total.lenght;

    }
})();