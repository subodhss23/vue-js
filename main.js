Vue.component('product', {
    props: {
        premium: {
            type: Boolean,
            required: true
        }
    },
    template: `
    <div class="product">

        <div class="product-image">
                <img v-bind:src="image">
            </div>
    
            <div class="product-info">
                <h1>{{ title }}</h1>
                <p v-if="inStock">In Stock</p>
                <p v-else>Out of Stock</p>
                <p> Shipping {{shipping}} </p>

                <ul>
                    <li v-for="detail in details" >{{ detail }}</li>
                </ul>

                <div 
                    v-for="(variant, index) in variants" 
                        :key="variant.variantId"
                        class="color-box"
                        :style="{backgroundColor: variant.variantColor}"
                        @mouseover="updateProduct(index)"
                        >

                </div>

                <button v-on:click = "addToCart" 
                    :disabled="!inStock"
                    :class="{disabledButton: !inStock}">
                    Add to cart
                </button>
               
                
                <div class="cart">
                    <p>Cart({{cart.length}})</p>
                </div>
            </div>
    
    `,
    data(){
        return {
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
        }
    }, 
    methods:{ 
        addToCart(){
            this.$emit('add-to-cart', this.variants[this.selectedVariant].variantId)
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
        },
        shipping(){
            if (this.premium){
                return "Free"
            }
            return 2.99;
        }
    }
})

var app = new Vue({
    el: "#app",
    data:{
        premium: true
    },
    methods: {
        updateCart(id){
            this.cart.push(id)
        }
    }
})