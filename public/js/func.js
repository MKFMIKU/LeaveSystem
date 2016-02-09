$("#send").click(function(){
    var applydata={
        name:$("input#name").val(),
        numberid:$("input#number").val(),
        class:$("#class").val(),
        reason:$("#reason").val(),
        address:$("input#address").val(),
        phone:$("input#phone").val(),
        time:$("input#time").val()
    };
    $.ajax({
        type:"POST",
        url:"push",
        data:applydata,
        error:function(err){
            alert(err);
        },
        success:function(data){
            alert(data);
        }
    });
});