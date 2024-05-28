// path/to/your/script.js
window.onload = function() {
    // Get the JSON data from the script tag
    const productDataElement = document.getElementById('product-data');
    const product = JSON.parse(productDataElement.textContent);

    console.log('name', product.name);
    if (product) {
        fillFormData(product[0]);
    }
};

function fillFormData(product) {
    document.querySelector('input[name="name"]').value = product.name;
    document.querySelector('select[name="category_id"]').value = product.category_id;
    document.querySelector('input[name="price"]').value = product.price;                
    document.getElementById('img-preview').src = product.img;
    document.querySelector('textarea[name="description"]').value = product.description;
    document.querySelector('input[name="current_img"]').value = product.img;
}
