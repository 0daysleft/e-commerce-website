import products from "./products.js";


function call(){

     

        let p = document.querySelector("#product-details");
        let btn = document.getElementById("single-page-product-button");
        let selectedProductId = sessionStorage.getItem("elementId");


        btn.addEventListener('click', () => {})

        const displaySingleProduct = () => {
            const product = products.find((prod) => prod.productId === selectedProductId);
            let singlePageSection = document.querySelector("#product-details");
            let singleItemDiv  = document.createElement("div");
            d.setAttribute("class", "single-product-image3")

            singleItemDiv.innerHTML = `
            
            
            <div class="single-product-image" >
                        <img src="../Images/products/f1.jpg" width="100%" id="MainImg">

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
                        <h6>Home / T-Shirt</h6>
                        <h4 id="product-title" >${product.productName}</h4>
                        <h2 id="product-price">${product.productPrice}</h2>
                        <select>
                            <option>Select Size</option>
                            <option>S</option>
                            <option>M</option>
                            <option>X</option>
                            <option>XL</option>
                            <option>XXL</option>  
                        </select>
                        <input type="number" value="3" id="single-page-product-price">
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
            console.log(selectedProductId)

            const product = products.find((prod) => prod.productId === selectedProductId);

            console.log(product)

            displaySingleProduct();
        }

        else{
            console.log("Not the page ")
        }

}

/*

*/

export default call;
