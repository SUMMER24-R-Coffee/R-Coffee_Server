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
            console.log('IDUPT', voucherId)

            modalLabel.innerText = 'Edit Voucher';
            voucherForm.action = '/voucher/update-voucher/' + voucherId + '?_method=PUT';
            voucherIdInput.value = voucherId;
            voucherCodeInput.value = voucherCode;
            percentInput.value = percent;
            validDateInput.value = formatDateForInput(validDate);
            expDateInput.value = formatDateForInput(expDate);
        });
    });

    saveButton.addEventListener('click', function(event) {
        event.preventDefault(); 
        voucherForm.submit();
    });
}); 