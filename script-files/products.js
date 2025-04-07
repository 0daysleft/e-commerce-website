

/*

Tropical Breeze Short-Sleeve Shirt – Hawaiian Threads – $78 product[0]
Island Lily Button-Up Shirt – Paradise Wear – $72  product[1]
Vintage Floral Resort Shirt – Retro Styles – $75 product[2]
Cherry Blossom Casual Shirt – Spring Essence – $70 product [3]
Midnight Bloom Hawaiian Shirt – Aloha Trends – $78 product[4]
Rust & Blue Patchwork Shirt – Urban Casuals – $85 product[5]
Embroidered Linen Pants – Nature Wear – $65 product[6]
Cozy Cat Print Loose Top – Comfy Chic – $60 product[7]
*/
//New Arrivals Products
/*
Light Blue Mandarin Collar Shirt – UNIQLO – $40 product[8]
Black & White Checkered Long-Sleeve Shirt – H&M – $45 product[9]
Plain White Button-Up Shirt – Zara – $50 product[10]
Short-Sleeve Camo Print Shirt – G-Star RAW – $78 product[11]
Blue Denim Shirt – Levi’s – $60 product[12]
Striped Shorts with Belt – Tommy Hilfiger – $55 product[13]
Brown Military-Style Shirt – Ralph Lauren – $85 product[14]
Dark Gray Short-Sleeve Shirt – COS – $48 product[15]
*/

let products = [


    {
        productId: "SeletedProduct-01",
        productImage: "../Images/products",
        productName: "Tropical Breeze Short-Sleeve Shirt",
        productBrand: "Hawailian Threads",
        productPrice: "78",
        productMaterial: "100% Cotton",
        additionalFeatures: `
                            </br>
                            Relaxed, breathable fabric </br> </br>
                            Vibrant tropical print for a lively, vacation-ready style </br> </br>
                            Button-down front and collar for a classic look </br>
        `,
        productDetails: `
                        Embrace the essence of tropical getaways with this breezy short-sleeve shirt from Hawaiian Threads. Featuring vibrant, lush palm prints, it’s perfect for summer vacations or a relaxed beach day. Crafted from lightweight cotton, it ensures comfort even in the warmest temperatures.
        `
    },


    {
        productId: "SelectedProduct-02",
        productImage: "../Images/products",
        productName: "Island Lily Button-Up Shirt",
        productBrand: "Paradise Wear",
        productPrice: "72",
        productMaterial: "55% linen, 45% cotton",
        additionalFeatures: `
                            </br>
                            Breathable and lightweight fabric </br> </br>
                            Short sleeves for easy wear during warm months </br> </br>
                            Subtle floral detailing for a sophisticated touch </br>
        `,
        productDetails: `
                        A perfect blend of elegance and comfort, this button-up shirt features a subtle floral design inspired by tropical islands. Ideal for a laid-back evening dinner or a stroll through the resort, this shirt brings a touch of paradise wherever you go.
        `
    },


    {
        productId: "SeletedProduct-03",
        productImage: "../Images/products",
        productName: "Vintage Floral Resort Shirt",
        productBrand: "Retro Styles",
        productPrice: "75",
        productMaterial: "100% Cotton",
        additionalFeatures: `
                            </br>
                            Vintage-inspired floral print </br> </br>
                            Soft and lightweight for all-day comfort </br> </br>
                            Easy to pair with shorts or casual trousers    </br>
        `,
        productDetails: `
                        Channel vintage vacation vibes with this floral resort shirt. Designed for effortless style, it offers a relaxed fit that’s perfect for lounging poolside or attending an island event. The soft floral print gives it a nostalgic, yet timeless appeal.
        `
    },

    {
        productId: "SelectedProduct-04",
        productImage: "../Images/products",
        productName: "Cherry Blossom Casual Shirt",
        productBrand: "Spring Essence",
        productPrice: "70",
        productMaterial: "100% Cotton",
        additionalFeatures: `
                            </br>
                            Soft cotton that’s gentle on the skin </br> </br>
                            Fresh cherry blossom print for a seasonal, feminine touch </br> </br>
                            Ideal for casual or semi-casual wear </br>

        `,
        productDetails: `
                        Infused with the delicate beauty of cherry blossoms, this shirt offers a casual yet refined style. Its soft cotton fabric and airy design make it perfect for a sunny spring day or a relaxed weekend look.
        `
    },


    {
        productId: "SelectedProduct-05",
        productImage: "../Images/products",
        productName: "Midnight Bloom Hawaiian Shirt",
        productBrand: "Aloha Trends",
        productPrice: "78",
        productMaterial: "100% Rayon",
        additionalFeatures: `
                                </br>
                                Dark floral print for a sophisticated  </br>tropical vibe </br>
                                Lightweight rayon material </br> </br>
                                Button-down closure for a polished finish </br>
        `,
        productDetails: `
                        A striking design of dark florals against a midnight blue background, this shirt offers a modern twist on the classic Hawaiian style. Perfect for evening beach parties or an elegant resort dinner, its bold print and comfortable fit ensure you stand out.
        `
    },


    {
        productId: "SelectedProduct-06",
        productImage: "../Images/products",
        productName: "Rust & Blue Patchwork Shirt",
        productBrand: "Urban Casuals",
        productPrice: "85",
        productMaterial: "80% cotton, 20% polyester",
        additionalFeatures: `
                            </br>
                            Distinctive patchwork design with contrasting colors </br> </br>
                            Soft fabric with a slight stretch for added comfort </br> </br>
                            Ideal for layering or as a standout piece </br>
        `,
        productDetails: `
                        This unique patchwork shirt blends rich shades of rust and blue for an eye-catching, contemporary look. Whether layered or worn solo, it offers a bold statement while remaining comfortable and breathable, perfect for the modern casual wardrobe.
        `
    },


    {
        productId: "SelectedProduct-07",
        productImage: "../Images/products",
        productName: "Embroidered Linen Pants",
        productBrand: "Nature Wear",
        productPrice: "65",
        productMaterial: "100% Linen",
        additionalFeatures: `
                            </br>
                            Beautiful, hand-embroidered details </br> </br>
                            Lightweight and breathable fabric </br> </br>
                            Adjustable waistband for a comfortable fit </br>
        `,
        productDetails: `
                        Made from breathable linen, these embroidered pants offer a relaxed yet chic aesthetic. The intricate embroidery adds a touch of craftsmanship, making them suitable for both lounging and casual outings.
        `
    },


    {
        productId: "SelectedProduct-08",
        productImage: "../Images/products",
        productName: "Cozy Cat Print Loose Top",
        productBrand: "Comfy Chic",
        productPrice: "60",
        productMaterial: "100% Cotton",
        additionalFeatures: `
                            </br>
                            Fun and quirky cat print design </br> </br>
                            Comfortable loose fit for easy movement </br> </br>
                            Soft, breathable fabric for all-day wear </br>
        `,
        productDetails: `
                        Add a playful touch to your wardrobe with this cozy, cat-print loose top. Soft and relaxed, it’s perfect for casual days at home or outings with friends. Its fun, quirky design brings a light-hearted feel to any outfit.
        `
    },




    //NEW ARRIVALS PRODUCTS SECTION

    
    {
        productId: "NewArrival-01",
        productImage: "../Images/products/n1.jpg",
        productName: "Light Blue Mandarin Collar Shirt",
        productBrand: "UNIQLO",
        productPrice: "40",
        productMaterial: "100% Cotton",
        additionalFeatures: `
                                </br>
                                Single-button cuffs </br> </br>
                                Soft finish for all-day wear </br> </br>
                                Machine washable for easy maintenance </br>
                                        
        `,
        productDetails: `
                        This elegant, minimalist shirt features a mandarin collar, perfect for a modern yet classic look. The light blue color adds a refreshing touch, ideal for both office settings and weekend outings. Its crisp, breat   hable cotton fabric ensures comfort throughout the day, making it a versatile staple for your wardrobe.
       `
    },


    {
        productId: "NewArrival-02",
        productImage: "../Images/products/n2.jpg",
        productName: "Black & White Checkered Long-Sleeve Shirt",
        productBrand: "H&M",
        productPrice: "45",
        productMaterial: "65% polyester, 35% cotton",
        additionalFeatures: `
                            </br>
                            Button-down collar </br> </br>
                            Adjustable cuffs for a customized fit </br> </br>
                            Durable fabric that resists wrinkles </br>
        `,
        productDetails: `
                        The black and white checkered pattern brings a timeless, edgy twist to this long-sleeve shirt. A perfect blend of casual and semi-formal, it’s designed to complement both laid-back and office-ready outfits. Ideal for layering under a jacket or worn on its own for a sleek, contemporary look.
        `
    },


    {
        productId: "NewArrival-03",
        productImage: "../Images/products/n3.jpg",
        productName: "Plain White Button-Up Shirt",
        productBrand: "Zara",
        productPrice: "50",
        productMaterial: "100% Cotton",
        additionalFeatures: `
                            </br>
                            Double-stitched seams for durability </br> </br>
                            Soft, breathable fabric that holds its shape </br> </br>
                            Ideal for formal, smart-casual, and business casual settings  </br>
        `,
        productDetails: `
                            A pristine, plain white button-up shirt that’s essential for any wardrobe. Crafted with premium cotton, this shirt offers versatility from workwear to evenings out. The slim fit design enhances the contemporary style, offering a refined silhouette without being overly tight.
        `
    },


    {
        productId: "NewArrival-04",
        productImage: "../Images/products/n4.jpg",
        productName: "Short-Sleeve Camo Print Shirt",
        productBrand: "G-Star RAW",
        productPrice: "78",
        productMaterial: "100% Cotton",
        additionalFeatures: `
                            </br> Reinforced stitching for durability </br> </br>
                            Soft brushed finish for a comfortable feel </br> </br>
                            A chest pocket for added functionality </br>
        `,
        productDetails: `
                        Showcasing an urban, streetwear-inspired style, this short-sleeve shirt combines comfort with bold, camo print aesthetics. Its relaxed fit makes it perfect for casual weekends or pairing with denim for a laid-back yet trendy look. Designed for those who want to stand out with a military-inspired vibe.
        `
    },



    {
        productId: "NewArrival-05",
        productImage: "../Images/products/n5.jpg",
        productName: "Blue Denim Shirt",
        productBrand: "Levi's",
        productPrice: "60",
        productMaterial: "100% Cotton",
        additionalFeatures: `
                            </br>
                            Iconic Levi’s branded buttons </br> </br>
                            Button-flap chest pockets </br> <br>
                            Pre-washed for a soft, worn-in feel </br>

        `,
        productDetails: `
                        Levi’s classic blue denim shirt stands as a true testament to American heritage. Known for its durability and style, this piece offers a timeless design that pairs effortlessly with any outfit. Whether you wear it unbuttoned over a tee or as a standalone shirt, the sturdy denim construction ensures lasting wear.

        `
    },


    {
        productId: "NewArrival-06",
        productImage: "../Images/products/n6.jpg",
        productName: "Striped Shorts with Belt",
        productBrand: "Tommy Hilfiger",
        productPrice: "55",
        productMaterial: "98% cotton, 2% spandex",
        additionalFeatures: `
                            </br>
                            Adjustable waist with belt loops </br> </br>
                            Soft, stretchy material for freedom of movement </br> </br>
                            Machine washable for easy care </br>
        `,
        productDetails: `
                        These stylish striped shorts by Tommy Hilfiger offer a perfect balance between comfort and design. Featuring a matching belt for added style and convenience, they make an excellent choice for beach days or casual outings. The lightweight cotton blend keeps you cool, and the belt ensures the right fit every time.
        `
    },


    {
        productId: "NewArrival-07",
        productImage: "../Images/products/n7.jpg",
        productName: "Brown Military-Style Shirt",
        productBrand: "Ralph Lauren",
        productPrice: "85",
        productMaterial: "100% Cotton",
        additionalFeatures: `
                            </br>
                            Large, button-flap chest pockets </br> </br>
                            Epaulettes on shoulders for a military-inspired look </br> </br>
                            Reinforced stitching for long-lasting wear </br>
        `,
        productDetails: `
                            This military-style shirt by Ralph Lauren brings a rugged, masculine charm to any casual wardrobe. The rich brown color, combined with premium cotton, gives a sophisticated, utilitarian look that’s ideal for outdoor adventures or casual outings.

        `
    },

    {
        productId: "NewArrival-08",
        productImage: "../Images/products/n8.jpg",
        productName: "Dark Gray Short-Sleeve Shirt",
        productBrand: "COS",
        productPrice: "78",
        productMaterial: "100% Cotton",
        additionalFeatures: `
                    </br>  
                    Clean lines with no extra embellishments for a pure, modern aesthetic </br> </br>
                    Soft, breathable cotton ideal for warmer weather </br> </br>
                    Subtle button details for a touch of refinement </br>
        `,
        productDetails: `
                     This short-sleeve shirt from COS offers a sleek, minimalist design perfect for adding a sophisticated touch to any casual look. The dark gray hue pairs well with most colors, making it a versatile piece for various occasions, whether for relaxed or semi-formal events.
        `
    }


]


export default products;