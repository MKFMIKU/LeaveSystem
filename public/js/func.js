function send() {
    var applydata={
        name:$("input#name").val(),
        number_id:$("input#number").val(),
        class_id:$("#class").val(),
        reason:$("#reason").val(),
        cost:$("#cost").val(),
        address:$("#address").val()
    };
    if (!applydata.name || !applydata.number_id) {
        alert("请填写红色部分!");
    } else {
        $.ajax({
            type: "POST",
            url: "apply",
            data: applydata,
            error: function (err) {
                $("#send").text("Wrong");
            },
            success: function (data) {
                alert(data);
            }
        });
    }
}