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

                        <img src="${product.productImage || "../Images/products/f7.jpg"}" width="100%" id="MainImg">

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

                        <form>
                        <select required>
                            <option>Select Size</option>
                            <option>S</option>
                            <option>M</option>
                            <option>X</option>
                            <option>XL</option>
                            <option>XXL</option>  
                        </select>
                        <button class="normal" id="single-page-product-button" >Add To Cart</button>
                        </form>
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
            if (product && typeof product === "object") {
                displaySingleProduct();
            } else {
                console.error("❌ Product not found. ID:", selectedProductId);
                p.innerHTML = `
                    <div style="padding: 40px;">
                        <h2>⚠️ Product Not Found</h2>
                        <p>This product does not exist or could not be loaded.</p>
                        <a href="../html-files/index.html">Go back to home</a>
                    </div>
                `;
                return;
            }
            
            let btn = document.getElementById("single-page-product-button");
        }

}

let cartArray =  JSON.parse(sessionStorage.getItem("cart")) || [];

function cart() {

   const cartTableBody = document.getElementById("cartDetails")

   if(p){
   let btn = document.getElementById("single-page-product-button");

   btn.addEventListener('click', () => {
      
    cartArray.push(product);
    sessionStorage.setItem("cart", JSON.stringify(cartArray))
    alert("The product " + product.productName + " has been added to your cart!!")
   
   })
   }

   if(cartTableBody){
    let cartTotal = document.getElementById("totalGoodsInCart");
    let grandTotal = document.getElementById("totalCost")
    let shippingCost = document.getElementById("shippingFee")

    let item = JSON.parse(sessionStorage.getItem("cart"));

    item.find(
        (elem) => {
        
            cartTableBody.innerHTML += 
                        `
                                 <tr style="font-weight: 100" >
                                    <td id="removeItemFromCart" onclick="alert('clicked')" ><a href="#"><i class="fa-solid fa-times-circle" ></i></a></td>
                                    <td id="cartImageProduct"><img src="${elem.productImage}" alt=""></td>
                                    <td id="cartProductName" style="font-weight: 600"  >${elem.productName}</td>
                                    <td id="cartProductPrice" style="font-weight: 700" >${elem.productPrice}</td>
                                    <td id="cartProductQuantity" ><input type="number" disabled name="" id="" value="1"></td>
                                    <td id="cartTotalProductPrice" style="font-weight: 700" >$${(elem.productPrice)* (Number(document.querySelector("input").value) || 1) }</td>
                                 </tr>
                        `
        }

)
shippingCost.textContent = "$23";
cartTotal.textContent = "CAN'T CALCULATE NOW" + (product.productPrice * product.productPrice);
grandTotal.textContent = "UNABLE TO CALCULATE"
   
   }

}


export default {cart, call};
