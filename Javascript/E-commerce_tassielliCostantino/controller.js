window.addEventListener("load", () => {
    let bottone = document.getElementById("bottone");
    bottone.addEventListener("click", () => {
        let product = document.getElementById("product").value;
        let requestURL = "https://dummyjson.com/products/search?q=" + product;
        let request = new XMLHttpRequest();
        request.open("GET", requestURL);
        request.responseType = "json";
        request.send();

        request.onload = () => {
            const ecommerce = request.response;
            for (let i = 0; i < 100; i++) {
                document.getElementById("name").innerHTML = ecommerce.products[i].title;
                document.getElementById("category").innerHTML = ecommerce.products[i].category;
                document.getElementById("desc").innerHTML = ecommerce.products[i].description;
                document.getElementById("price").innerHTML = ecommerce.products[i].price;
                document.getElementById("image").innerHTML = ecommerce.products[i].images;
            }
        }
    });

});