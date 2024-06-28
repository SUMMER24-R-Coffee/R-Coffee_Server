$('#category-modal').on('show.bs.modal', function (event) {
    var button = $(event.relatedTarget); 
    var mode = button.data('mode');
    var modal = $(this);
    var form = modal.find('form');
    var categoryNameInput = modal.find('#category-name');

    if (mode === 'add') {
        modal.find('.modal-title').text('Add Category');
        form.attr('action', '/category/insert-category');
        form.attr('method', 'POST');
        categoryNameInput.val('');
    } else if (mode === 'update') {
        var categoryId = button.data('category-id');
        var categoryName = button.data('category-name');
        modal.find('.modal-title').text('Update Category');
        form.attr('action', '/category/update-category/' + categoryId + '?_method=PUT');
        form.attr('method', 'POST');
        categoryNameInput.val(categoryName);
    }
});