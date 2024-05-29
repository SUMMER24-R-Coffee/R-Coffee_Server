document.addEventListener("DOMContentLoaded",function(){
    var voucher_id;
    var btnComfirmDel=document.getElementById("btn-comfirm-del");        
    var delForm= document.forms["del-form-active"];

    $('#delete-active').on('show.bs.modal', function (event) {
        var button = $(event.relatedTarget) 
        voucher_id = button.data('id') 
    })
    btnComfirmDel.onclick=function(){
        delForm.action="/voucher/delete/"+voucher_id+"?_method=PUT"
        delForm.submit();
    }
    
})