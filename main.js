var app = new Vue({
    el: "#app",
    data: {
        product: 'Socks',
        brand: 'Vue Mastery',
        selectedVariant: 0,
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
        updateProduct(index){
            this.selectedVariant = index;
            console.log(index);
        },
        removeFromCart(){
            this.cart -= 1
        }
    },
    computed: {
        title(){
            return this.brand + ' ' + this.product;
        },
        image(){
            return this.variants[this.selectedVariant].variantImage;
        },
        inStock(){
            return this.variants[this.selectedVariant].variantQuantity;
        }, 
        onSale(){
            return this.product + ' ' + this.brand;
        }
    }
})