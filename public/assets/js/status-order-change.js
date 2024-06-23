function submitStatusForm(orderId, status, reason = '') {
    const email_user = document.querySelector(`input[name="email_user"][data-order-id="${orderId}"]`).value;
    const token = document.querySelector(`input[name="token"][data-order-id="${orderId}"]`).value;

    const form = document.createElement('form');
    form.method = 'POST';
    form.action = `/order/order-detail/update-status/${orderId}?_method=PUT`;

    const statusInput = document.createElement('input');
    statusInput.type = 'hidden';
    statusInput.name = 'status_order';
    statusInput.value = status;
    form.appendChild(statusInput);

    const emailInput = document.createElement('input');
    emailInput.type = 'hidden';
    emailInput.name = 'email_user';
    emailInput.value = email_user;
    form.appendChild(emailInput);

    const tokenInput = document.createElement('input');
    tokenInput.type = 'hidden';
    tokenInput.name = 'token';
    tokenInput.value = token;
    form.appendChild(tokenInput);    

    if (status === 'cancelled' && reason) {
        const reasonInput = document.createElement('input');
        reasonInput.type = 'hidden';
        reasonInput.name = 'reason';
        reasonInput.value = reason;
        form.appendChild(reasonInput);
    }

    const methodInput = document.createElement('input');
    methodInput.type = 'hidden';
    methodInput.name = '_method';
    methodInput.value = 'PUT';
    form.appendChild(methodInput);

    document.body.appendChild(form);
    form.submit();
}

function showCancellationModal(orderId) {
    document.getElementById('cancelOrderId').value = orderId;
    $('#cancellationModal').modal('show');
}

function submitCancellation() {
    var orderId = document.getElementById('cancelOrderId').value;
    var reason = document.getElementById('cancellationReason').value;

    if (!reason.trim()) {
        alert("Please provide a cancellation reason.");
        return;
    }

    $('#cancellationModal').modal('hide');
    submitStatusForm(orderId, 'cancelled', reason);
}
