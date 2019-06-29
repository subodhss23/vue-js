var app = new Vue({
    el: "#app",
    data: {
        product: 'Socks',
        image: './socks.jpg',
        link: 'https://www.google.com',
        inStock: true,
        details: [
            "80% cotton", "20% polyster", "Gender-neutral"
        ],
        sizes: [
            "small", "medium", "large", "extra-large"
        ]
    }
})