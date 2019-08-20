async function loadItems() {
    
    var result = await fetch('http://localhost:3000/api/getProducts', {
        method: 'GET',
        mode: 'cors',
        cache: 'no-cache',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json; charset=utf-8',
        },
        redirect: 'follow',
        referrer: 'no-referrer'
    });
    let response = await result.text();
    let context = JSON.parse(response);
    context.products.forEach(product => {
        let productsList = document.getElementById('productsList');
        var startDiv = $('<div class="col-lg-3 col-md-6 mb-4"></div>');
        var cardDiv = $(`<div class="card" id="${product.id}"> <img id="product_Image" class="card-img-top" src="${product.image}" alt="product image"> <div class="card-body"> <h4 class="card-title" id="product_Title">${product.title}</h4> <p class="card-text" id="product_Description">${product.description}</p> </div> <div class="card-footer"> <button type="button" onclick="addToCart(${product.id})" class="btn btn-primary">Add To Cart</button> </div> </div>`);
        cardDiv.appendTo(startDiv);
        startDiv.appendTo(productsList);
    });

}
function addToCart() {
    
}