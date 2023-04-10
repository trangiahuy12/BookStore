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
                required: "Please enter your user name",
                minlength: "Please enter at least {0} characters",
                maxlength: "Please enter maximum {0} characters",
                alpha_numericRegex:"Enter only numerics and alphas"
            },
            "password": {
                required: "Please enter password",
                minlength: "Please enter at least {0} characters",
                maxlength: "Please enter maximum {0} characters"
            },
            "confirm_password": {
                required: "Please enter your password",
                minlength: "Please enter minimum {0} characters",
                maxlength: "Please enter maximum {0} characters",
                equalTo: "The password confirmation must be the same with the password"
            },
            "email": {
                required: "Please fill the email",
                maxlength: "Please enter maximum {0} characters",
                email: "Please fill in the valid email <br> ex: example@mail.com",
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
                        alert("Sign up success!");              
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
    alert("Sign up success!");
    window.location.reload();
}

function sign_in(){
    alert("Sign in success!");
    window.location.reload();
}
