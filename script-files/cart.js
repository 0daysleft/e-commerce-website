let cartArray = sessionStorage.getItem('cart')
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