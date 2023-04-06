
    // Kiem tra so dien thoai
    function checkPhone(str) {
        return /(03|05|07|08|09|01[2|6|8|9])+([0-9]{8})\b/.test(str);
    }

    var phoneNumElement = document.querySelector('input[type="tel"]');
    phoneNumElement.onblur = function(e) {
        if (e.target.value.length === 0) return;
        else if (!checkPhone(e.target.value)) {
            alert('Please input the field phoneNo with valid phone number!');
        }
    }

    // Kiem tra ten
    function checkName(str) {
        return /^[A-z\s]+$/.test(str);
    }
    var nameElement = document.querySelector('#name');
    nameElement.onblur = function(e) {
        if (!checkName(e.target.value) && e.target.value) {
            alert('Please input field Name alphabets only!');
        }
    }

    // Kiem tra email
    function checkMail(email) {
        // return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
        return /[a-zA-Z\._]+@[\w\.-]+/.test(email);
    }  
    var mailElement = document.querySelector('input[type="email"]');
    mailElement.onblur = function(e) {
        if (!checkMail(e.target.value) && e.target.value) {
            alert('Please input the valid email!');
        }
    }