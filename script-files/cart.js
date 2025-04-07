
import call from "./single-shop-product.js";

//The Cart Have 6 Colums for Delete Item, Product Image, Product Name, Price Of Product, Quantity Of Products, Total Price of The Products

//There is also a cart total Section Three Rows: Cart Sub Totals, Shipping Cost, Total(subtotals + shipping cost)

//Coupon Section Also

//const couponButton = document.getElementById("copuon").ariaValueMax;
//const checkOutButton = document.getElementById("check").ariaValueMax;
const itemPrice = 0;
const itemQuantity = 0;

function cart() {

   const cartTableBody = document.getElementById("cartDetails")

   if(cartTableBody){

   call();
     

   cartTableBody.innerHTML = 
                        `
                                 <tr style="font-weight: 100" >
                                    <td id="removeItemFromCart"><a href="#"><i class="fa-solid fa-times-circle" ></i></a></td>
                                    <td id="cartImageProduct"><img src="../Images/products/f1.jpg" alt=""></td>
                                    <td id="cartProductName" style="font-weight: 700"  >artoon Astrnout T-Shirts</td>
                                    <td id="cartProductPrice" style="font-weight: 700" >$118.90</td>
                                    <td id="cartProductQuantity" ><input type="number" name="" id="" value="3"></td>
                                    <td id="cartTotalProductPrice" style="font-weight: 700" >$356.7</td>
                                 </tr>
      
                        `
   }

}


export default cart;


