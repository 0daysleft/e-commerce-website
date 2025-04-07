
import call from "./single-shop-product.js";
import { product, p } from "./single-shop-product.js";

//The Cart Have 6 Colums for Delete Item, Product Image, Product Name, Price Of Product, Quantity Of Products, Total Price of The Products

//There is also a cart total Section Three Rows: Cart Sub Totals, Shipping Cost, Total(subtotals + shipping cost)

//Coupon Section Also

//const couponButton = document.getElementById("copuon").ariaValueMax;
//const checkOutButton = document.getElementById("check").ariaValueMax;
const itemPrice = 0;
const itemQuantity = 0;
let cartProductImage;
let cartProductName;
let cartProductPrice;


function cart() {

   const cartTableBody = document.getElementById("cartDetails")

   if(p){
   let btn = document.getElementById("single-page-product-button");
   btn.addEventListener('click', (e) => {
      
     sessionStorage.setItem("cart", JSON.stringify(product))
   
   })
   }

   if(cartTableBody){

      let item = JSON.parse(sessionStorage.getItem("cart"));
      console.log(typeof document.querySelector("input").value)

   cartTableBody.innerHTML = 
                        `
                                 <tr style="font-weight: 100" >
                                    <td id="removeItemFromCart"><a href="#"><i class="fa-solid fa-times-circle" ></i></a></td>
                                    <td id="cartImageProduct"><img src="${item.productImage}" alt=""></td>
                                    <td id="cartProductName" style="font-weight: 600"  >${item.productName}</td>
                                    <td id="cartProductPrice" style="font-weight: 700" >${item.productPrice}</td>
                                    <td id="cartProductQuantity" ><input type="number" disabled name="" id="" value="1"></td>
                                    <td id="cartTotalProductPrice" style="font-weight: 700" >$${(item.productPrice)* (Number(document.querySelector("input").value) || 1) }</td>
                                 </tr>
      
                        `
   }

}


export default cart;


