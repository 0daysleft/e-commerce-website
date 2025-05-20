import products from "./products.js";
let selectedProductId = sessionStorage.getItem("elementId");
export const product = products.find((prod) => prod.productId === selectedProductId);
export let p = document.querySelector("#product-details");
//console.log(typeof product.productQuantity)
const cartIcon = document.getElementById("lg-bag");
let quantity = [];

export function call() {

    const displaySingleProduct = () => {

        let singlePageSection = document.querySelector("#product-details");
        let singleItemDiv = document.createElement("div");
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

    if (p) {
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

let cartArray = JSON.parse(sessionStorage.getItem("cart")) || [];
function updateCartQuatity() {
    let cartQuantity = cartArray.map((item) => item.productQuantity).reduce((item, total = 0) => item + total)
    cartIcon.setAttribute("data-count", cartQuantity);
}
updateCartQuatity()

function cart() {

    const cartTableBody = document.getElementById("cartDetails")

    if (p) {
        let btn = document.getElementById("single-page-product-button");

        btn.addEventListener('click', (e) => {
            e.preventDefault()
            let existing = cartArray.find((item) => item.productId === product.productId);

            if (existing) {
                existing.productQuantity += 1;
            }
            else {

                cartArray.push(product);

            }

            sessionStorage.setItem("cart", JSON.stringify(cartArray))
            updateCartQuatity()
        }
        )

    }


    if (cartTableBody) {
        let cartTotal = document.getElementById("totalGoodsInCart");
        let grandTotal = document.getElementById("totalCost")
        let shippingCost = document.getElementById("shippingFee")

        let item = cartArray;

        if (item !== null) {

            item.find(
                (elem) => {
                    let item1 = (elem.productPrice * elem.productQuantity)
                    quantity.push(item1)
                    cartTableBody.innerHTML +=
                        `
                            <tr style="font-weight: 100" >
                            <td id="removeItemFromCart" onclick="alert('clicked')" ><a href="#"><i class="fa-solid fa-times-circle" ></i></a></td>
                            <td id="cartImageProduct"><img src="${elem.productImage}" alt=""></td>
                            <td id="cartProductName"
                            style="
                                    font-weight: 600;
                                    max-width: max-content;
                                    white-space: nowrap;
                                    overflow: hidden;
                                    text-overflow: ellipsis;
                            "  >${elem.productName}</td>
                            <td id="cartProductPrice" style="font-weight: 700" >${elem.productPrice}</td>
                            <td id="cartProductQuantity" ><input type="number" name="" id="productQuantity" value="${elem.productQuantity}"></td>
                            <td id="cartTotalProductPrice" style="font-weight: 700" >$<span id="cartItemsCount">${item1}</span></td>
                            </tr>
                        `
                }
            )

            cartTotal.textContent = quantity.reduce((item, total) => item + total);
            shippingCost.textContent = "$23";
            grandTotal.textContent = (shippingCost.textContent + cartTotal.textContent)

        }
        else {

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

console.log(quantity)

export default { cart, call }
