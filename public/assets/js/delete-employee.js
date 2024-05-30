document.addEventListener("DOMContentLoaded",function(){
    var emp_id;
    var btnComfirmDel=document.getElementById("btn-comfirm-del");        
    var delForm= document.forms["del-form-active"];

    $('#delete-active').on('show.bs.modal', function (event) {
        var button = $(event.relatedTarget) 
        emp_id = button.data('id') 
    })
    btnComfirmDel.onclick=function(){
        delForm.action="/employee/delete/"+emp_id+"?_method=PUT"
        delForm.submit();
    }
    
})