document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById("productForm");
    const name = form.querySelector('input[name="name"]');
    const price = form.querySelector('input[name="price"]');
    const description = form.querySelector('textarea[name="description"]');

    function validateName() {
        if (name.value.trim() === "") {
            name.classList.add('is-invalid');
            name.nextElementSibling.style.display = 'block';
            return false;
        } else {
            name.classList.remove('is-invalid');
            name.nextElementSibling.style.display = 'none';
            return true;
        }
    }

    function validatePrice() {
        if (parseInt(price.value) > 100000 || price.value.trim() === "") {
            price.classList.add('is-invalid');
            price.nextElementSibling.style.display = 'block';
            return false;
        } else {
            price.classList.remove('is-invalid');
            price.nextElementSibling.style.display = 'none';
            return true;
        }
    }

    function validateDescription() {
        if (description.value.trim() === "") {
            description.classList.add('is-invalid');
            description.nextElementSibling.style.display = 'block';
            return false;
        } else {
            description.classList.remove('is-invalid');
            description.nextElementSibling.style.display = 'none';
            return true;
        }
    }

    function validateForm(event) {
        const isNameValid = validateName();
        const isPriceValid = validatePrice();
        const isDescriptionValid = validateDescription();

        const valid = isNameValid && isPriceValid && isDescriptionValid;
        
        console.log("Form valid:", valid);

        if (!valid) {
            event.preventDefault();
            console.log("Form submission prevented");
        }
    }

    name.addEventListener('input', validateName);
    price.addEventListener('input', validatePrice);
    description.addEventListener('input', validateDescription);
    form.addEventListener('submit', validateForm);
});
