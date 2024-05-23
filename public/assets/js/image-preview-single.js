document.getElementById('img').addEventListener('change', function () {
    var imgPreview = document.getElementById('img-preview');
    var input = this;

    if (input.files && input.files[0]) {
        var reader = new FileReader();
        reader.onload = function (e) {
            imgPreview.src = e.target.result;
        };
        reader.readAsDataURL(input.files[0]);
    }
});
