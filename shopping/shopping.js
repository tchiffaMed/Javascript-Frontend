
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

//cibler l'image
           let imageCard = event.target.parentElement.previousElementSibling; 

           imageCard = imageCard.getAttribute('src');

           let p = event.target.parentElement.parentElement.nextElementSibling.children[0];
//cibler le nom
           let name = p.children[0].textContent;
//cibler le prix
           let prix = parseInt(p.children[1].children[0].textContent);

           const harira = document.getElementById('harira');

           harira.children[0].textContent= parseInt(harira.children[0].textContent)+ 1;

           harira.children[1].textContent= parseInt(harira.children[1].textContent) + prix;


           document.getElementById('cart-total').textContent = harira.children[1].textContent;
// afficher le produit
           let mhd = document.getElementById('mhd');

           supp()

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
 
        }); 
        
    });
function supp(){
        let rem = document.getElementById('cart-item-remove');
            //(mhd.children[0].lastElementChild.children)
            
        (rem || missing).addEventListener('click', console.log('oui'));
           };
}
           
)();