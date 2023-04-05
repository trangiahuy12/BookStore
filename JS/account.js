$(function() {
    $(".form").validate({
        rules: {
            "username": {
                required: true,
                minlength: 6,
                maxlength: 12,
                alpha_numericRegex: true
            },
            "password": {
                required: true,
                minlength: 6,
                maxlength: 20,
            },
            "confirm_password": {
                required: true,
                minlength: 6,
                maxlength: 20,
                equalTo: password,
            },
            "email": {
                required: true,
                maxlength: 200,
                email: true
            }
        },
        messages: {
            "username": {
                required: "Vui lòng điền tên đăng nhập",
                minlength: "Vui lòng nhập ít nhất {0} ký tự",
                maxlength: "Vui lòng nhập tối đa {0} ký tự",
                alpha_numericRegex:"Chỉ nhập ký tự chữ và số"
            },
            "password": {
                required: "Vui lòng điền mật khẩu",
                minlength: "Vui lòng nhập ít nhất {0} ký tự",
                maxlength: "Vui lòng nhập tối đa {0} ký tự"
            },
            "confirm_password": {
                required: "Vui lòng điền xác nhận mật khẩu",
                minlength: "Vui lòng nhập ít nhất {0} ký tự",
                maxlength: "Vui lòng nhập tối đa {0} ký tự",
                equalTo: "Mật khẩu xác nhận phải trùng khớp với mật khẩu"
            },
            "email": {
                required: "Vui lòng điền email",
                maxlength: "Vui lòng nhập tối đa {0} ký tự",
                email: "Vui lòng điền email hợp lệ <br> ví dụ: example@mail.com",
            }
        },
        submitHandler: function() {
            $.ajax( {
                type: "POST",
                url: 'https://hantinhcongnghe.com/ajaxData/proc_register',
                data: $(".form").serialize(),
                success: function(data)
                {
                    if (data.errCode == "0") {
                        alert("Đăng ký thành công");              
                        window.open('https://hantinhcongnghe.com/index', '_parent');                           
                    }else{       
                        alert(data.errCode + " - " + data.errMsg);
                        window.open('https://hantinhcongnghe.com', '_parent'); 
                    } 
                }
            });
        }
    });
});
$.validator.addMethod("numericRegex", function (value, element) {
    return this.optional(element) || /^[0-9\-]+$/i.test(value);
});
$.validator.addMethod("alpha_numericRegex", function (value, element) {
    return this.optional(element) || /^[a-z0-9\-]+$/i.test(value);
});

function sign_up(){
    alert("Đăng ký thành công");
    window.location.reload();
}

function sign_in(){
    alert("Đăng nhập thành công");
    window.location.reload();
}
