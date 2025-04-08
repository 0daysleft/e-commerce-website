
//import cart from "./cart.js";
import script from "./script.js";
//import products from "./products.js";
import shopFunctions from "./single-shop-product.js";



//IF YOU CLICK ANY ITEM IT TAKES YOU TO THE SINGLE SHOPE PRODUCT PAGE

let productView = document.getElementsByClassName("pro");
        
let productArray = [...productView]

productArray.forEach(
    (element) => {
        element.addEventListener('click', 
            ()=>{
                    window.location.href = './single-shop-product.html';
                    sessionStorage.setItem("elementId", element.id);
                })
            }
        )
//CHANGING THE IMAGE OF THE PRODUCT IN THE SINGLE PRODUCT PAGE.

//THIS CODE SNIPPET WILL CHANGE THE IMAGE OF THE BIGGER PRODUCT IMAGE FROM THE CLICKED ONE

document.querySelectorAll(".small-img-col").forEach(
    (e) => {
        e.addEventListener('click',
            () => {
                
                document.getElementById("MainImg").src = e.firstElementChild.currentSrc;
            }
        )
    }
)

//FUNCTION FOR CLOSE NAVIGATION BAR IN SMALL SCREENS
script();

shopFunctions.call();
shopFunctions.cart();

