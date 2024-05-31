    document.addEventListener('DOMContentLoaded', function () {
        const form = document.querySelector('form.form-sample');
        const empPassword = form.querySelector('input[name="emp_password"]');
        const empName = form.querySelector('input[name="emp_name"]');
        const empGender = form.querySelector('select[name="emp_gender"]');
        const empPhone = form.querySelector('input[name="emp_phone"]');
        const empImg = form.querySelector('input[name="emp_img"]');

        function validateForm(event) {
            let valid = true;

            if (empPassword.value.length < 8) {
                empPassword.classList.add('is-invalid');
                empPassword.nextElementSibling.style.display = 'block';
                valid = false;
            } else {
                empPassword.classList.remove('is-invalid');
                empPassword.nextElementSibling.style.display = 'none';
            }

            if (empName.value.trim() === '') {
                empName.classList.add('is-invalid');
                empName.nextElementSibling.style.display = 'block';
                valid = false;
            } else {
                empName.classList.remove('is-invalid');
                empName.nextElementSibling.style.display = 'none';
            }

            if (empGender.value !== 'male' && empGender.value !== 'female') {
                empGender.classList.add('is-invalid');
                empGender.nextElementSibling.style.display = 'block';
                valid = false;
            } else {
                empGender.classList.remove('is-invalid');
                empGender.nextElementSibling.style.display = 'none';
            }
            const phonePattern = /^[0-9]{10,15}$/;
            if (!phonePattern.test(empPhone.value)) {
                empPhone.classList.add('is-invalid');
                empPhone.nextElementSibling.style.display = 'block';
                valid = false;
            } else {
                empPhone.classList.remove('is-invalid');
                empPhone.nextElementSibling.style.display = 'none';
            }

            if (empImg.files.length > 0) {
                const file = empImg.files[0];
                const allowedTypes = ['image/jpeg', 'image/png', 'image/gif'];
                if (!allowedTypes.includes(file.type)) {
                    empImg.classList.add('is-invalid');
                    empImg.nextElementSibling.style.display = 'block';
                    valid = false;
                } else {
                    empImg.classList.remove('is-invalid');
                    empImg.nextElementSibling.style.display = 'none';
                }
            }

            if (!valid) {
                event.preventDefault();
            }
        }

        form.addEventListener('submit', validateForm);

    });
