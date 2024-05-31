document.addEventListener('DOMContentLoaded', function() {
    var voucherForm = document.getElementById('voucherForm');
    var modalLabel = document.getElementById('addVouchermodalLabel');
    var voucherIdInput = document.getElementById('voucher_id');
    var voucherCodeInput = document.getElementById('voucher_code');
    var percentInput = document.getElementById('percent');
    var validDateInput = document.getElementById('valid_date');
    var expDateInput = document.getElementById('exp_date');
    var saveButton = document.getElementById('btn-save-form-voucher');

    function formatDateForInput(dateString) {
        var date = new Date(dateString);
        var options = {
            year: 'numeric',
            month: '2-digit',
            day: '2-digit',
            hour: '2-digit',
            minute: '2-digit',
            timeZone: 'Asia/Ho_Chi_Minh',
            hour12: false
        };
        var formattedDateParts = new Intl.DateTimeFormat('en-GB', options).formatToParts(date);
        var formattedDate = `${formattedDateParts[4].value}-${formattedDateParts[2].value}-${formattedDateParts[0].value}T${formattedDateParts[6].value}:${formattedDateParts[8].value}`;
        return formattedDate;
    } 

    function validatePercent() {
        let valid = true;
        const percentValue = percentInput.value.trim();
        percentInput.classList.remove('is-invalid');
        percentInput.nextElementSibling && percentInput.nextElementSibling.remove();

        if (percentValue === '' || percentValue > 50 || percentValue < 1) {
            valid = false;
            percentInput.classList.add('is-invalid');
            addErrorMessage(percentInput, 'Percent must be between 1 and 50.');
        }

        return valid;
    }

    function validateValidDate() {
        let valid = true;
        const tomorrow = new Date();
        tomorrow.setDate(tomorrow.getDate() + 1);
        const validDateValue = new Date(validDateInput.value);

        validDateInput.classList.remove('is-invalid');
        validDateInput.nextElementSibling && validDateInput.nextElementSibling.remove();

        if (validDateInput.value.trim() === '' || isNaN(validDateValue) || validDateValue < tomorrow) {
            valid = false;
            validDateInput.classList.add('is-invalid');
            addErrorMessage(validDateInput, 'Available date must be tomorrow or later.');
        }

        return valid;
    }

    function validateExpDate() {
        let valid = true;
        const tomorrow = new Date();
        tomorrow.setDate(tomorrow.getDate());
        const validDateValue = new Date(validDateInput.value);
        const expDateValue = new Date(expDateInput.value);

        expDateInput.classList.remove('is-invalid');
        expDateInput.nextElementSibling && expDateInput.nextElementSibling.remove();

        if (expDateInput.value.trim() === '' || isNaN(expDateValue) || expDateValue < tomorrow) {
            valid = false;
            expDateInput.classList.add('is-invalid');
            addErrorMessage(expDateInput, 'Expired date must be tomorrow or later.');
        } else if (validDateInput.value.trim() !== '' && expDateValue < validDateValue) {
            valid = false;
            expDateInput.classList.add('is-invalid');
            addErrorMessage(expDateInput, 'Expired date cannot be earlier than available date.');
        }

        return valid;
    }

    function validateVoucherCode() {
        let valid = true;
        const voucherCode = voucherCodeInput.value.trim();

        voucherCodeInput.classList.remove('is-invalid');
        voucherCodeInput.nextElementSibling && voucherCodeInput.nextElementSibling.remove();

        if (voucherCode === '') {
            valid = false;
            voucherCodeInput.classList.add('is-invalid');
            addErrorMessage(voucherCodeInput, 'Voucher code cannot be empty.');
        } else if (voucherCode.length > 10) {
            valid = false;
            voucherCodeInput.classList.add('is-invalid');
            addErrorMessage(voucherCodeInput, 'Voucher code cannot exceed 10 characters.');
        }

        return valid;
    }

    function validateForm(event) {
        const isPercentValid = validatePercent();
        const isValidDateValid = validateValidDate();
        const isExpDateValid = validateExpDate();
        const isVoucherCodeValid = validateVoucherCode();

        const valid = isPercentValid && isValidDateValid && isExpDateValid && isVoucherCodeValid;

        console.log("Form valid:", valid);

        if (!valid) {
            event.preventDefault();
            console.log("Form submission prevented");
        }
    }

    function addErrorMessage(element, message) {
        const errorDiv = document.createElement('div');
        errorDiv.classList.add('invalid-feedback');
        errorDiv.textContent = message;
        element.parentNode.appendChild(errorDiv);
    }

    document.getElementById('addVoucherBtn').addEventListener('click', function() {
        modalLabel.innerText = 'Add Voucher';
        voucherForm.action = '/voucher/add-voucher/save';
        voucherIdInput.value = '';
        voucherCodeInput.value = '';
        percentInput.value = '';
        validDateInput.value = '';
        expDateInput.value = '';
    });

    document.querySelectorAll('.editVoucherBtn').forEach(function(button) {
        button.addEventListener('click', function() {
            var voucherId = this.getAttribute('data-id');
            var voucherCode = this.getAttribute('data-code');
            var percent = this.getAttribute('data-percent');
            var validDate = this.getAttribute('data-valid');
            var expDate = this.getAttribute('data-exp');

            modalLabel.innerText = 'Edit Voucher';
            voucherForm.action = '/voucher/update-voucher/' + voucherId + '?_method=PUT';
            voucherIdInput.value = voucherId;
            voucherCodeInput.value = voucherCode;
            percentInput.value = percent;
            validDateInput.value = formatDateForInput(validDate);
            expDateInput.value = formatDateForInput(expDate);
        });
    });

    percentInput.addEventListener('input', validatePercent);
    validDateInput.addEventListener('input', validateValidDate);
    expDateInput.addEventListener('input', validateExpDate);
    voucherCodeInput.addEventListener('input', validateVoucherCode);

    saveButton.addEventListener('click', validateForm);
});
