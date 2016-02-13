function send() {
    var applydata={
        name:$("input#name").val(),
        number_id:$("input#number").val(),
        class_id:$("#class").val(),
        reason:$("#reason").val(),
        cost:$("#cost").val(),
        address:$("#address").val()
    };
    if (!(!applydata.name || !applydata.number_id)) $.ajax({
        type: "POST",
        url: "apply",
        data: applydata,
        error: function (err) {
            console.log(err);
            $("#send").text("失败");
        },
        success: function (data) {
            if (data) {
                $("#send").text("成功");
            }
        }
    }); else {
        alert("请填写红色部分!");
    }
}

$("#auth").click(function () {
    var authdata = {
        user: $("#user").val(),
        pass: $("#pass").val()
    };
    if (!authdata.user || authdata.pass) {
        $.ajax({
            type: "POST",
            url: "login",
            data: authdata,
            success: function (data) {
                if (data == "wa") {
                    $("#auth").text("密码错误");
                    $("#auth").css("background-color", "#E42222");
                } else {
                    window.location.href = "admin";
                }
            }
        });
    }
});