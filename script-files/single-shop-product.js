import products from "./products.js";
let selectedProductId = sessionStorage.getItem("elementId");
export const product = products.find((prod) => prod.productId === selectedProductId);
export let p = document.querySelector("#product-details");
//console.log(typeof product.productQuantity)
const cartIcon = document.getElementById("lg-bag");

export function call(){

        const displaySingleProduct = () => {

            let singlePageSection = document.querySelector("#product-details");
            let singleItemDiv  = document.createElement("div");
            singleItemDiv.setAttribute("id", "single-product-page")
            
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
            singlePageSection.append(singleItemDiv)
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
        }

}

let cartArray =  JSON.parse(sessionStorage.getItem("cart")) || [];
cartIcon.setAttribute("data-count", cartArray.length);

function cart() {

   const cartTableBody = document.getElementById("cartDetails")

   if(p){
    let btn = document.getElementById("single-page-product-button");

    btn.addEventListener('click', (e) => {
            e.preventDefault()
        
            let existing = cartArray.find( (item) => item.productId )
        
            // console.log(product.productId)
            // console.log("E", existing.productId)
            if(existing){
                console.log(existing)
                let c = existing.productQuantity +=1;
                console.log(typeof existing.productQuantity)

                console.log("Item Already Exists", c)
            }
            else{
            cartArray.push(product);
            
            sessionStorage.setItem("cart", JSON.stringify(cartArray))
            cartIcon.setAttribute("data-count", cartArray.length);
        // alert("The product " + product.productName + " has been added to your cart!!")
            }
        })
    }


function updateCartTotal(inputElement) {
    const row = inputElement.closest('tr');
    const price = parseFloat(row.querySelector('#cartProductPrice').textContent);
    const quantity = parseInt(inputElement.value);
    const totalCell = row.querySelector('.cartTotalProductPrice');
    
    totalCell.textContent = `$${(price * quantity).toFixed(2)}`;
}


if(cartTableBody){
    let cartTotal = document.getElementById("totalGoodsInCart");
    let grandTotal = document.getElementById("totalCost")
    let shippingCost = document.getElementById("shippingFee")
    
    let item = cartArray;

    if(item !== null){

    item.find(
        (elem) => {
            let quantity = 1; // default value
            let totalPrice = elem.productPrice * quantity;
        
            cartTableBody.innerHTML += 
                        `
                            <tr style="font-weight: 100" >
                            <td id="removeItemFromCart" onclick="alert('clicked')" ><a href="#"><i class="fa-solid fa-times-circle" ></i></a></td>
                            <td id="cartImageProduct"><img src="${elem.productImage}" alt=""></td>
                            <td id="cartProductName" style="font-weight: 600"  >${elem.productName}</td>
                            <td id="cartProductPrice" style="font-weight: 700" >${elem.productPrice}</td>
                            <td id="cartProductQuantity" ><input type="number" name="" id="productQuantity" value="${elem.productQuantity}"></td>
                            <td id="cartTotalProductPrice" style="font-weight: 700" >$${totalPrice}</td>
                            </tr>
                        `
        }
    )

                                shippingCost.textContent = "$23";
                                cartTotal.textContent = "CAN'T CALCULATE NOW" + (product.productPrice * product.productPrice);
                                grandTotal.textContent = "UNABLE TO CALCULATE"
   
   }
   else{

    cartTableBody.innerHTML += 
    `
             <tr style="font-weight: 100" >
                <div style=" text-align:center;
                            padding: 100px;
                            margin: 10px;
                            width: 70vw;
                            font-size: 2rem;
                            font-weight: 900" >YOUR CART IS CURRENTLY EMPTY PLEASE SHOP</div>
             </tr>
    `
   }
}
}

export default {cart, call}
