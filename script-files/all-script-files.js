
//import cart from "./cart.js";
import script from "./script.js";
import products from "./products.js";

console.log(products[0])
//console.log(cart)


//IF YOU CLICK ANY ITEM IT TAKES YOU TO THE SINGLE SHOPE PRODUCT PAGE

let productView = document.getElementsByClassName("pro");
        
let productArray = [...productView]

productArray.forEach(
    (element) => {
        element.addEventListener('click', 
            ()=>{
                window.location.href = './single-shop-product.html';
            }
        )
    }
)

//FUNCTION FOR CLOSE NAVqIGATION BAR IN SMALL SCREENS

script();
