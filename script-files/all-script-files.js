
// import script from "./script.js";
// //import { addProductToCart, cartArray, quantity, updatePrices } from "./single-shop-product.js";
// import shopFunctions from "./single-shop-product.js";


// //cartArray
// //updateCartQuantity, updatePricesInLocaleString,
// //quantity//, updatePrices();
// //IF YOU CLICK ANY ITEM IT TAKES YOU TO THE SINGLE SHOPE PRODUCT PAGE

// let productView = document.querySelectorAll("img");
// console.log(productView)

// let productArray = [...productView]

// productArray.forEach(
//     (element) => {
//         element.addEventListener('click',
//             () => {
//                 window.location.href = './single-shop-product.html';
//                 sessionStorage.setItem("elementId", element.id);
//             })
//     }
// )

// // this code here will be executed once any add button in the page is clicked, used for adding a prodiuct direct in the page without the need for viewing the product
// document.querySelectorAll("#single-page-product-button").forEach(elem => elem.addEventListener('click', addProductToCart))

// //CHANGING THE IMAGE OF THE PRODUCT IN THE SINGLE PRODUCT PAGE.

// //THIS CODE SNIPPET WILL CHANGE THE IMAGE OF THE BIGGER PRODUCT IMAGE FROM THE CLICKED ONE

// document.addEventListener("DOMContentLoaded", () => {
//     document.querySelectorAll("img.small-img").forEach(
//         (e) => {
//             e.addEventListener('click',
//                 () => {
//                     document.getElementById("MainImg").src = (e.src)
//                 }
//             )
//         }
//     )

// })

// //FUNCTION FOR CLOSE NAVIGATION BAR IN SMALL SCREENS
// script();

// shopFunctions.call();
// shopFunctions.mainCart();
// //shopFunctions.updateCartQuantity();
// //updatePrices(quantity);
// //shopFunctions.updatePricesInLocaleString();
// // shopFunctions.cartArray;