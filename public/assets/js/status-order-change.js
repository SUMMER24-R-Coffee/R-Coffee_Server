function submitStatusForm(orderId, status) {
    const form = document.createElement('form');
    form.method = 'POST';
    form.action = `/order/order-detail/update-status/${orderId}?_method=PUT`;

    const statusInput = document.createElement('input');
    statusInput.type = 'hidden';
    statusInput.name = 'status_order';
    statusInput.value = status;
    form.appendChild(statusInput);

    const methodInput = document.createElement('input');
    methodInput.type = 'hidden';
    form.appendChild(methodInput);

    document.body.appendChild(form);
    form.submit();
}