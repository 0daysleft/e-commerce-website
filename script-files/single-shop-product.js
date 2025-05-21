import products from "./products.js";
let selectedProductId = sessionStorage.getItem("elementId");
export const product = products.find((prod) => prod.productId === selectedProductId);
export let productDetailsDivElement = document.querySelector("#product-details");
const cartIcon = document.getElementById("lg-bag");
let cartTotal = document.getElementById("totalGoodsInCart");
let grandTotalElement = document.getElementById("totalCost")
let shippingCost = document.getElementById("shippingFee")
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

    if (productDetailsDivElement) {
        if (product && typeof product === "object") {
            displaySingleProduct();
        } else {
            console.error("❌ Product not found. ID:", selectedProductId);
            productDetailsDivElement.innerHTML = `
                    <div style="padding: 40px;">
                        <h2>⚠️ Product Not Found</h2>
                        <productDetailsDivElement>This product does not exist or could not be loaded.</productDetailsDivElement>
                        <a href="../html-files/index.html">Go back to home</a>
                    </div>
                `;
            return;
        }
    }

}

let cartArray = JSON.parse(sessionStorage.getItem("cart")) || [];
function updateCartQuatity() {
    if (cartArray.length < 1) { cartIcon.style.display = 'none'; return }
    cartIcon.style.display = 'block'
    let cartQuantity = cartArray.map((item) => item.productQuantity).reduce((item, total = 0) => item + total)
    cartIcon.setAttribute("data-count", cartQuantity);
}

updateCartQuatity()

function addProductToCart(e) {
    e.preventDefault()
    let existing = cartArray.find((item) => item.productId === product.productId);

    (existing) ? existing.productQuantity += 1 : cartArray.push(product)
    sessionStorage.setItem("cart", JSON.stringify(cartArray))
    updateCartQuatity()

}

function updatePrices() {
    cartTotal.textContent = (quantity.length > 0) ? (quantity.reduce((item, total) => item + total).toLocaleString('en-KE', {
        style: 'currency',
        currency: "KES"
    })) : (0).toLocaleString('en-KE', {
        style: 'currency',
        currency: "KES"
    });
    let shipping = quantity.length > 0 ? (quantity.reduce((item, total) => item + total) * 0.05) : 0
    shippingCost.textContent = (shipping).toLocaleString('en-KE', {
        style: 'currency',
        currency: "KES"
    });

    grandTotalElement.innerHTML = (Number(shipping) + quantity.length > 0 ? quantity.reduce((item, total) => item + total) : 0).toLocaleString('en-KE', {
        style: 'currency',
        currency: "KES"
    });
}

function cart() {

    const cartTableBody = document.getElementById("cartDetails")

    if (productDetailsDivElement) {
        let btn = document.getElementById("single-page-product-button");
        btn.addEventListener('click', addProductToCart)

    }


    if (cartTableBody) {
        let totalSingleItemPrice;
        /*
                if (cartArray.length > 0) {
        
                    cartArray.forEach(
                        (elem) => {
                            totalSingleItemPrice = (elem.productPrice * elem.productQuantity)
                            quantity.push(totalSingleItemPrice)
                            cartTableBody.innerHTML +=
                                `
                                    <tr style="font-weight: 100" >
                                    <td id="removeItemFromCart" ><a href="#"><i class="fa-solid fa-times-circle" ></i></a></td>
                                    <td id="cartImageProduct"><img src="${elem.productImage}" alt=""></td>
                                    <td id="cartProductName"
                                    style="
                                            font-weight: 600;
                                            max-width: max-content;
                                            white-space: nowrap;
                                            overflow: hidden;
                                            text-overflow: ellipsis;
                                    "  >${elem.productName}</td>
                                    <td id="cartProductPrice" style="font-weight: 700" >${(elem.productPrice).toLocaleString('en-KE', {
                                    style: 'currency',
                                    currency: "KES"
                                })
                                }</td>
                                    <td id="cartProductQuantity" ><input type="number" name="" id="productQuantity" disabled value="${elem.productQuantity}" style='cursor: not-allowed'></td>
                                    <td id="cartTotalProductPrice" style="font-weight: 700" ><span id="cartItemsCount">${(totalSingleItemPrice).toLocaleString('en-KE', {
                                    style: 'currency',
                                    currency: "KES"
                                })
                                }</span></td>
                                    </tr>
                                `
                        }
                    )
        
                    updatePrices()
        
                }
                else {
        
                    cartTableBody.innerHTML +=
                        `
                     <tr style="text-align: center; font-weight: 100" >
                        <div style=" text-align:center;
                                    padding: 10px;
                                    color: red;
                                    margin: 0 auto;
                                    width: 90vw;
                                    font-size: 1.2rem;
                                    font-weight: 900" >
                                    <br> Oopsi!! 🥲🥲🥲 <br> <br><hr> <br><br><br>
                                    IT SEEMS THAT YOUR CART🛒 IS CURRENTLY EMPTY <br> <br><br> <hr> <br> 
                                    <span style="text-align: center" > <a href='./shop.html' style='color: green; text-decoration: none'>
                                    PLEASE SHOP 🛍️</a></span><br><br></div>
                     </tr>
            `
                    updatePrices()
                }
                    */
        if (cartArray.length > 0) {
            cartTableBody.innerHTML = ""; // Reset the table body
            const fragment = document.createDocumentFragment();

            cartArray.forEach(elem => {
                const row = document.createElement("tr");

                const removeCell = document.createElement("td");
                removeCell.innerHTML = `<a href="#"><i class="fa-solid fa-times-circle"></i></a>`;
                row.appendChild(removeCell);

                const imgCell = document.createElement("td");
                const img = document.createElement("img");
                img.src = elem.productImage;
                img.alt = elem.productName;
                imgCell.appendChild(img);
                row.appendChild(imgCell);

                const productNameCell = document.createElement("td");
                const productName = document.createTextNode(elem.productName)
                //img.src = elem.productImage;
                productNameCell.appendChild(productName);
                row.appendChild(productNameCell);




                // Repeat for product name, price, quantity, total, using createElement/textContent

                fragment.appendChild(row);
            });

            cartTableBody.appendChild(fragment);
            updatePrices();
        } else {
            cartTableBody.innerHTML = ""; // Clear old rows

            const emptyRow = document.createElement("tr");
            const emptyCell = document.createElement("td");
            emptyCell.colSpan = 6;
            emptyCell.innerHTML = `
                <div style="padding: 20px; text-align: center; color: red;">
                    🥲 Your cart is empty! <br><br>
                    <a href="./shop.html" style="color: green;">Please Shop 🛍️</a>
                </div>
            `;
            emptyRow.appendChild(emptyCell);
            cartTableBody.appendChild(emptyRow);
            updatePrices();
        }

    }
}

export default { cart, call }
