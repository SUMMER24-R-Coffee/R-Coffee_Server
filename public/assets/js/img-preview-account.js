document.getElementById('emp_img').addEventListener('change', function () {
    var imgPreview = document.getElementById('img-preview-account');
    var input = this;

    if (input.files && input.files[0]) {
        var reader = new FileReader();
        reader.onload = function (er) {
            imgPreview.src = er.target.result;
        };
        reader.readAsDataURL(input.files[0]);
    }
});
