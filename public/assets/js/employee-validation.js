document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById("employeeForm");
    const empID = form.querySelector('input[name="emp_id"]');
    const empPassword = form.querySelector('input[name="emp_password"]');
    const empName = form.querySelector('input[name="emp_name"]');
    const empGender = form.querySelector('select[name="emp_gender"]');
    const empPhone = form.querySelector('input[name="emp_phone"]');
    const empImg = form.querySelector('input[name="img"]');


    function validateId() {
        if (empID.value.length > 10) {
            empID.classList.add('is-invalid');
            empID.nextElementSibling.style.display = 'block';
            return false;
        } else {
            empID.classList.remove('is-invalid');
            empID.nextElementSibling.style.display = 'none';
            return true;
        }
    }

    function validatePassword() {
        if (empPassword.value.length < 8) {
            empPassword.classList.add('is-invalid');
            empPassword.nextElementSibling.style.display = 'block';
            return false;
        } else {
            empPassword.classList.remove('is-invalid');
            empPassword.nextElementSibling.style.display = 'none';
            return true;
        }
    }

    function validateName() {
        const namePattern = /^[^\d]+$/; 
        if (empName.value.length >50 || !namePattern.test(empName.value)) {
            empName.classList.add('is-invalid');
            empName.nextElementSibling.style.display = 'block';
            return false;
        } else {
            empName.classList.remove('is-invalid');
            empName.nextElementSibling.style.display = 'none';
            return true;
        }
    }
    function validateGender() {
        if (empGender.value !== 'male' && empGender.value !== 'female') {
            empGender.classList.add('is-invalid');
            empGender.nextElementSibling.style.display = 'block';
            return false;
        } else {
            empGender.classList.remove('is-invalid');
            empGender.nextElementSibling.style.display = 'none';
            return true;
        }
    }

    function validatePhone() {
        const phonePattern = /^[0-9]{10,15}$/;
        if (!phonePattern.test(empPhone.value)) {
            empPhone.classList.add('is-invalid');
            empPhone.nextElementSibling.style.display = 'block';
            return false;
        } else {
            empPhone.classList.remove('is-invalid');
            empPhone.nextElementSibling.style.display = 'none';
            return true;
        }
    }


    function validateForm(event) {
        const isIdValid = validateId();
        const isPasswordValid = validatePassword();
        const isNameValid = validateName();
        const isGenderValid = validateGender();
        const isPhoneValid = validatePhone();

        const valid =isIdValid && isPasswordValid && isNameValid && isGenderValid && isPhoneValid && isImageValid;
        
        console.log("Form valid:", valid);

        if (!valid) {
            event.preventDefault();
            console.log("Form submission prevented");
        }
    }


    empID.addEventListener('input', validateId);
    empPassword.addEventListener('input', validatePassword);
    empName.addEventListener('input', validateName);
    empGender.addEventListener('input', validateGender);
    empPhone.addEventListener('input', validatePhone);
    form.addEventListener('submit', validateForm);
});
