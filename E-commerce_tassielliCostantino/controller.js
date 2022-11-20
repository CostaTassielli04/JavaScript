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
            document.getElementById("name").innerHTML = ecommerce.products[0].title;
            document.getElementById("category").innerHTML = ecommerce.products[0].category;
            document.getElementById("desc").innerHTML = ecommerce.products[0].description;
            document.getElementById("price").innerHTML = ecommerce.products[0].price;
            document.getElementById("image").src = ecommerce.products[0].images[0];
        }
    });

});