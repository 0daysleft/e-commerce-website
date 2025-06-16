import products from "./products.js";
import script from "./script.js";

let cartArray = JSON.parse(sessionStorage.getItem("cart")) || [];
let displayCart;
let selectedProductId = sessionStorage.getItem("elementId");
const product = products.find((prod) => prod.productId === selectedProductId);
let productDetailsDivElement = document.querySelector("#product-details");
const cartIcon = document.getElementById("lg-bag");
let cartTotal = document.getElementById("totalGoodsInCart");
let grandTotalElement = document.getElementById("totalCost")
let shippingCost = document.getElementById("shippingFee")
let quantity = [];
let updatePrices;


//IF YOU CLICK ANY ITEM IT TAKES YOU TO THE SINGLE SHOP PRODUCT PAGE

let productView = document.querySelectorAll("img");

let productArray = [...productView]

productArray.forEach(
    (element) => {
        element.addEventListener('click',
            () => {
                window.location.href = './single-shop-product.html';
                sessionStorage.setItem("elementId", element.id);
            })
    }
)

function addProductToCart(pro) {

    var existing = cartArray.find(item => item.productId === pro.productId)

    if (pro) {
        (existing) ? existing.productQuantity += 1 : cartArray.push(pro)
        console.log("Pro:", existing.productQuantity)
    }
    else {
        (existing) ? existing.productQuantity += 1 : cartArray.push(product)
    }
    sessionStorage.setItem("cart", JSON.stringify(cartArray))
    updateCartQuantity()
}

// this code here will be executed once any add button in the page is clicked, used for adding a prodiuct direct in the page without the need for viewing the product
document.querySelectorAll("#single-page-product-button").forEach((elem, ind) => elem.addEventListener('click', () => {
    addProductToCart(products[ind])
}))

function call() {

    const displaySingleProduct = () => {

        let singlePageSection = document.querySelector("#product-details");
        let singleItemDiv = document.createElement("div");
        singleItemDiv.setAttribute("id", "single-product-page")

        singleItemDiv.innerHTML = `

            <div class="single-product-image" >
                    
            <h6> <span style=" text-decoration: 'none'; " > <a href="../html-files/index.html"  " > Home </a> </span> / T-Shirt</h6>

                        <img src="${product.productImage}" width="100%" id="MainImg" alt='a picture of a ${product.productName}'/>

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

                        <div>
                        <select required>
                            <option>Select Size</option>
                            <option>S</option>
                            <option>M</option>
                            <option>X</option>
                            <option>XL</option>
                            <option>XXL</option>  
                        </select>
                        <button class="normal" id="single-page-product-button" >Add To Cart</button>
                        </div>
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

if (document.title == "Shop Page") {

    console.log(document.querySelectorAll("img.small-img"))
    document.querySelectorAll("img .small-img").forEach(
        (e) => {
            e.addEventListener('click',
                () => {
                    document.getElementById("MainImg").src = (e.src)
                }
            )
        }
    )
}
else {
    console.log('error')
}
function updateCartQuantity() {
    if (cartArray.length < 1) { cartIcon.style.display = 'none'; return }
    cartIcon.style.display = 'block'
    let cartQuantity = cartArray.map((item) => item.productQuantity).reduce((item, total = 0) => item + total) || []
    cartIcon.setAttribute("data-count", cartQuantity);
}

updateCartQuantity()



function convertToLocaleCurrencyString(price) {
    return price.toLocaleString('en-KE', { style: 'currency', currency: "KES" })
}

function updatePricesInLocaleString() {
    let totalCartPrice = cartArray.reduce((sum, item) => { return sum + (item.productPrice * item.productQuantity) }, 0)
    cartTotal.textContent = totalCartPrice//cartArray.reduce((item, total) => { item + (total.productPrice * total.productQuantity), 0 })

    /*(cartArray.length > 0) ? (cartArray.reduce((item, total) => { item + (total.productPrice * total.productQuantity), 0 }).toLocaleString('en-KE', {
        style: 'currency',
        currency: "KES"
    })) : (0).toLocaleString('en-KE', {
        style: 'currency',
        currency: "KES"
    });
    */
    let shipping = (totalCartPrice * 0.05)
    shippingCost.textContent = (shipping).toLocaleString('en-KE', {
        style: 'currency',
        currency: "KES"
    });

    grandTotalElement.innerHTML = (shipping + totalCartPrice).toLocaleString('en-KE', {
        style: 'currency',
        currency: "KES"
    });
}

function deleteProduct(cartNo) {
    cartArray.splice(cartNo, 1)
    sessionStorage.setItem("cart", JSON.stringify(cartArray))
    displayCart()
    updateCartQuantity()
    updatePricesInLocaleString()
    updatePrices()
}

function mainCart() {

    let btn = document.getElementById("single-page-product-button");
    const cartTableBody = document.getElementById("cartDetails")
    if (document.getElementById("single-product-page")) {
        console.log('This Pageue')
        btn.addEventListener('click', addProductToCart)
    }
    else {
        console.log('Wrong Page')
    }

    if (cartTableBody) {
        let totalSingleItemPrice;
        if (cartArray.length > 0) {

            displayCart = () => {
                cartTableBody.innerHTML = ""; // Reset the table body
                const fragment = document.createDocumentFragment();
                cartArray.forEach((elem, index) => {
                    const row = document.createElement("tr");

                    updatePrices = (totalQuantity) => {

                        totalSingleItemPrice = (elem.productPrice * totalQuantity)
                        quantity.push(totalSingleItemPrice)
                    }

                    updatePrices(elem.productQuantity);
                    const removeCell = document.createElement("td");
                    removeCell.innerHTML = `<a href="#"><i class="fa-solid fa-times-circle"></i></a>`;
                    row.appendChild(removeCell);
                    removeCell.setAttribute('data-delete', index)
                    removeCell.addEventListener('click', (e) => {
                        e.preventDefault();
                        deleteProduct(index)

                    })

                    const imgCell = document.createElement("td");
                    const img = document.createElement("img");
                    img.src = elem.productImage;
                    img.alt = elem.productName;
                    imgCell.appendChild(img);
                    row.appendChild(imgCell);

                    const productNameCell = document.createElement("td");
                    const productName = document.createTextNode(elem.productName)
                    productNameCell.setAttribute("class", 'product-name-cell')
                    productNameCell.appendChild(productName);
                    row.appendChild(productNameCell);

                    const productPriceCell = document.createElement("td");
                    const productPrice = document.createTextNode(convertToLocaleCurrencyString(Number(elem.productPrice)))
                    productPriceCell.appendChild(productPrice);
                    row.appendChild(productPriceCell);

                    const productQuantityCell = document.createElement("td");

                    const quantityInput = document.createElement("input");
                    quantityInput.setAttribute('type', 'number');
                    quantityInput.setAttribute('class', 'updated-item-quantity');
                    quantityInput.setAttribute('min', '1');
                    quantityInput.setAttribute('max', '99');
                    quantityInput.value = Number(elem.productQuantity);

                    quantityInput.addEventListener('input', (e) => {
                        quantity = [];
                        let newQuantity = Number(e.target.value);
                        elem.productQuantity = newQuantity;
                        if (newQuantity > 99) {
                            e.target.value = 99;
                            elem.productQuantity = 99;
                            sessionStorage.setItem("cart", JSON.stringify(cartArray))
                            alert('max value is 99')
                            return
                        }

                        function updateCartRowPrice(elem, row) {
                            const priceCell = row.querySelector('#cartTotalProductPrice span');
                            const newTotal = elem.productPrice * elem.productQuantity;
                            priceCell.textContent = newTotal.toLocaleString('en-KE', {
                                style: 'currency',
                                currency: "KES"
                            });
                        }

                        // Update the cart array
                        sessionStorage.setItem("cart", JSON.stringify(cartArray))
                        // Recalculate totals and update UI
                        updateCartQuantity()
                        updatePrices(quantity);
                        //addProductToCart()
                        mainCart()
                        updatePricesInLocaleString(); // Your function to recalculate totals
                        updateCartRowPrice(elem, row); // Optional: update just this row’s total
                    });

                    productQuantityCell.appendChild(quantityInput);
                    row.appendChild(productQuantityCell);


                    const productSubtotalCell = document.createElement("td");
                    const productSubtotal = document.createTextNode(convertToLocaleCurrencyString(totalSingleItemPrice))
                    productSubtotalCell.appendChild(productSubtotal);
                    row.appendChild(productSubtotalCell);
                    fragment.appendChild(row);
                });
                cartTableBody.appendChild(fragment);
                updatePricesInLocaleString();
            }

            displayCart()
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
            updatePricesInLocaleString();
        }
    }
}


//CHANGING THE IMAGE OF THE PRODUCT IN THE SINGLE PRODUCT PAGE.

//THIS CODE SNIPPET WILL CHANGE THE IMAGE OF THE BIGGER PRODUCT IMAGE FROM THE CLICKED ONE

//FUNCTION FOR CLOSE NAVIGATION BAR IN SMALL SCREENS
script();

mainCart()
call()