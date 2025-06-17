import products from "./products.js";
import script from "./script.js";
let cartArray = JSON.parse(sessionStorage.getItem("cart")) || [];
let selectedProductId = sessionStorage.getItem("elementId");
const product = products.find((prod) => prod.productId === selectedProductId);
let productDetailsDivElement = document.querySelector("#product-details");
const cartIcon = document.getElementById("lg-bag");

//IF YOU CLICK ANY ITEM IT TAKES YOU TO THE SINGLE SHOP PRODUCT PAGE

let productView = document.querySelectorAll("img");

function updateCartQuantity() {
    if (cartArray.length < 1) { cartIcon.style.display = 'none'; return }
    cartIcon.style.display = 'block'
    let cartQuantity = cartArray.map((item) => item.productQuantity).reduce((item, total = 0) => item + total) || []
    cartIcon.setAttribute("data-count", cartQuantity);
}

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
    const existing = cartArray.find(item => item.productId === pro.productId);

    if (existing) {
        existing.productQuantity += 1;
    } else {
        cartArray.push(pro);
    }

    // Step 4: Save and update
    sessionStorage.setItem("cart", JSON.stringify(cartArray));
    updateCartQuantity();
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

document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll("img.small-img").forEach(
        (e) => {
            e.addEventListener('click',
                () => {
                    document.getElementById("MainImg").src = (e.src)
                }
            )
        }
    )
    let btn = document.getElementById("single-page-product-button");

    if (document.getElementById("single-product-page")) {
        btn.addEventListener('click', () => {
            addProductToCart(product)
        })
    }
    updateCartQuantity()
})





//CHANGING THE IMAGE OF THE PRODUCT IN THE SINGLE PRODUCT PAGE.

//THIS CODE SNIPPET WILL CHANGE THE IMAGE OF THE BIGGER PRODUCT IMAGE FROM THE CLICKED ONE

//FUNCTION FOR CLOSE NAVIGATION BAR IN SMALL SCREENS
script();
call()