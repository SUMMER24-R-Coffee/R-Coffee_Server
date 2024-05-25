document.addEventListener("DOMContentLoaded", function() {
    var bannerId, img;
    var btnDelBanner = document.getElementById("btn-del-banner");
    var deleteForm = document.forms["del-form-baner"];

    $("#delete-banner").on("show.bs.modal", function(event) {
        var button = $(event.relatedTarget);
        bannerId = button.data("banner-id");
        img = button.data("img-url");
    });

    btnDelBanner.onclick = function() {
        deleteForm.innerHTML = ''; 
        var imgInput = document.createElement("input");
        imgInput.type = "hidden";
        imgInput.name = "img";
        imgInput.value = img;
        deleteForm.appendChild(imgInput);

        deleteForm.action = "/banner/delete/" + bannerId + "?_method=DELETE";

        deleteForm.submit();
    };
});
