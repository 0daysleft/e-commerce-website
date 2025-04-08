import products from "./products.js";
let selectedProductId = sessionStorage.getItem("elementId");
export const product = products.find((prod) => prod.productId === selectedProductId);
export let p = document.querySelector("#product-details");

export function call(){

        const displaySingleProduct = () => {

            let singlePageSection = document.querySelector("#product-details");
            let singleItemDiv  = document.createElement("div");
            singleItemDiv.setAttribute("id", "single-product-page")
            singlePageSection.append(singleItemDiv)
            singleItemDiv.innerHTML = `
        
            <div class="single-product-image" >
                    
            <h6> <span style=" text-decoration: 'none'; " > <a href="../html-files/index.html"  " > Home </a> </span> / T-Shirt</h6>

                        <img src="${product.productImage}" width="100%" id="MainImg">

                        <div class="small-img-group">
                            <div class="small-img-col">
                                <img src="../Images/products/f1.jpg" width="100%" class="small-img" alt="">
                            </div>

                            <div class="small-img-col">
                                <img src="../Images/products/f2.jpg" width="100%" class="small-img" alt="">
                            </div>

                            <div class="small-img-col">
                                <img src="../Images/products/f3.jpg" width="100%" class="small-img" alt="">
                            </div>

                            <div class="small-img-col">
                                <img src="../Images/products/f4.jpg" width="100%" class="small-img" alt="">
                            </div>
                        </div>

                    </div>

                    <div class="single-product-description" id="single-product-description" >
                        <h4 id="product-title" >${product.productName}</h4>
                        <h2 id="product-price">Price: $${product.productPrice}</h2>
                        <select>
                            <option>Select Size</option>
                            <option>S</option>
                            <option>M</option>
                            <option>X</option>
                            <option>XL</option>
                            <option>XXL</option>  
                        </select>
                        <button class="normal" id="single-page-product-button" >Add To Cart</button>
                        
                        <div class="material-h3" >
                        <h3 >Material: </h3> <span id="single-page-product-material" >${product.productMaterial}</span>
                        </div>

                        <h4>Product Details</h4>
                        <span  id="single-page-product-description" >
                           ${product.productDetails}
                        </span>

                        <div id="additional" >
                            <h3>Additional Features: </h3>
                            <ul id="additional-features">
                                ${product.additionalFeatures}
                            </ul>
                        </div>

                    </div>
    
            `
            
        }

        if(p){
            displaySingleProduct();
            let btn = document.getElementById("single-page-product-button");
        }

        else{
            console.log("Not the page ")
        }

}

//const couponButton = document.getElementById("copuon").ariaValueMax;
//const checkOutButton = document.getElementById("check").ariaValueMax;
const itemPrice = 0;
const itemQuantity = 0;
let cartProductImage;
let cartProductName;
let cartProductPrice;
let cartArray = [];

function cart() {

   const cartTableBody = document.getElementById("cartDetails")

   if(p){
   let btn = document.getElementById("single-page-product-button");
   
   btn.addEventListener('click', () => {
      
    cartArray.push(product);
    console.log("Pro: " + product)
    sessionStorage.setItem("cart", JSON.stringify(cartArray))
   
   })
   }

   if(cartTableBody){

    let item = JSON.parse(sessionStorage.getItem("cart"));

    item.find(
        (elem) => {
            console.log(elem.productId)
        }


)
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


export default {cart, call};
