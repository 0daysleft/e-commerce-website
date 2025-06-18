let cartArray = JSON.parse(sessionStorage.getItem('cart'))
let totalSingleItemPrice;
const cartIcon = document.getElementById("lg-bag");
const cartTableBody = document.getElementById("cartDetails")
let cartTotal = document.getElementById("totalGoodsInCart");
let grandTotalElement = document.getElementById("totalCost")
let shippingCost = document.getElementById("shippingFee")
let updatePrices;
let displayCart;
let cartVoucherAndSubtotal = document.getElementById('cart-add')

function convertToLocaleCurrencyString(price) {
     return price.toLocaleString('en-KE', { style: 'currency', currency: "KES" })
}

function updatePricesInLocaleString() {
     let totalCartPrice = cartArray.reduce((sum, item) => { return sum + (item.productPrice * item.productQuantity) }, 0)
     cartTotal.textContent = totalCartPrice.toLocaleString('en-KE', {
          style: 'currency',
          currency: "KES"
     })
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
     updateCartPage()
     updatePricesInLocaleString();
     displayCart()
     updateCartQuantity()
}

function updateCartQuantity() {
     if (cartArray.length < 1) { cartIcon.style.display = 'none'; return }
     cartIcon.style.display = 'block'
     let cartQuantity = cartArray.map((item) => item.productQuantity).reduce((item, total = 0) => item + total) || []
     cartIcon.setAttribute("data-count", cartQuantity);
}

function displayEmptyCartAlert() {
     cartTableBody.innerHTML = ""; // Clear old rows
     const emptyRow = document.createElement("tr");
     const emptyCell = document.createElement("td");
     emptyCell.colSpan = 6;
     emptyCell.innerHTML = `
      <div style="padding: 20px; text-align: center; color: red; height: 40vh; display: flex; justify-content: center; align-items: center; flex-direction: column">
           🥲 Your cart is empty! <br><br>
          <a href="./shop.html" style="color: green;">Please Shop 🛍️</a>
      </div>
  `;
     emptyRow.appendChild(emptyCell);
     cartTableBody.appendChild(emptyRow);
     updatePricesInLocaleString();
}

function updateCartPage() {
     if (cartArray.length > 0 || cartArray == []) {
          displayCart = () => {
               cartTableBody.innerHTML = ""; // Reset the table body
               const fragment = document.createDocumentFragment();
               cartArray.forEach((elem, index) => {
                    const row = document.createElement("tr");

                    updatePrices = (totalQuantity) => {
                         totalSingleItemPrice = (elem.productPrice * totalQuantity)
                    }

                    let updateCartRowPrice = () => {
                         const newTotal = (elem.productPrice * elem.productQuantity).toLocaleString('en-KE', {
                              style: 'currency',
                              currency: "KES"
                         });
                         return newTotal;
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
                    let newQuantity;
                    quantityInput.addEventListener('input', (e) => {
                         newQuantity = Number(e.target.value);
                         elem.productQuantity = newQuantity;
                         if (newQuantity > 99) {
                              e.target.value = 99;
                              elem.productQuantity = 99;
                              sessionStorage.setItem("cart", JSON.stringify(cartArray))
                              alert('max value is 99')
                              return
                         }
                         else if (newQuantity < 1) {
                              e.target.value = 1;
                              elem.productQuantity = 1;
                              sessionStorage.setItem("cart", JSON.stringify(cartArray))
                              alert('Min value is 1')
                              return
                         }

                         sessionStorage.setItem("cart", JSON.stringify(cartArray))
                         // Recalculate totals and update UI
                         updateCartQuantity()
                         updatePrices();
                         //addProductToCart()
                         updatePricesInLocaleString(); // Your function to recalculate totals
                         updateCartRowPrice(); // Optional: update just this row’s total
                    });

                    productQuantityCell.appendChild(quantityInput);
                    row.appendChild(productQuantityCell);

                    const productSubtotalCell = document.createElement("td");
                    const productSubtotal = document.createTextNode(updateCartRowPrice())
                    productSubtotalCell.appendChild(productSubtotal);
                    row.appendChild(productSubtotalCell);

                    fragment.appendChild(row);
               });
               cartTableBody.appendChild(fragment);
               updatePricesInLocaleString();
          }

          displayCart()

     } else {
          displayEmptyCartAlert()
          cartVoucherAndSubtotal.style.display = 'none'
     }
}

updateCartQuantity()
updateCartPage()
