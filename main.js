var app = new Vue({
    el: "#app",
    data: {
        product: 'Socks',
        image: './socks_green.jpg',
        link: 'https://www.google.com',
        inStock: true,
        details: [
            "80% cotton", "20% polyster", "Gender-neutral"
        ],
        cart: 0,
        variants: [
            {
                variantId: 2234,
                variantColor: 'green',
                variantImage: './socks_green.jpg'
            },
            {
                varinatId: 2245,
                variantColor: 'blue',
                variantImage: './socks_blue.jpg'
            }
        ]
    },
    methods:{ 
        addToCart(){
            this.cart += 1
        },
        updateProduct(variantImage){
            this.image = variantImage;
        },
        removeFromCart(){
            this.cart -= 1
        }
    }
    
})