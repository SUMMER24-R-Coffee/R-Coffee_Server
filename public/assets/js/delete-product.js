document.addEventListener("DOMContentLoaded",function(){
    var product_id;
    var btnComfirmDel=document.getElementById("btn-comfirm-del");        
    var delForm= document.forms["del-form-active"];

    $('#delete-active').on('show.bs.modal', function (event) {
        var button = $(event.relatedTarget) 
        product_id = button.data('id') 
    })
    btnComfirmDel.onclick=function(){
        delForm.action="/product/delete/"+product_id+"?_method=PUT"
        delForm.submit();
    }
})