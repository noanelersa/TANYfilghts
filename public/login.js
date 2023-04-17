
$('#usernameLabelLogin').hide();
$('#passwordLabelLogin').hide();
$('#errorLoginLabel').hide();


$('#loginButton').click(function (e){
    e.preventDefault();
    let valid=true;
    const username = document.getElementById('usernameInputLogin').value;
    const password = document.getElementById('passwordInputLogin').value;
    if(username==null || username===""){
        $('#usernameLabelLogin').show();
        valid=false;
    }
    else
        $('#usernameLabelLogin').hide();

    if(password==null || password===""){
        $('#passwordLabelLogin').show();
        valid=false;
    }
    else
        $('#passwordLabelLogin').hide();

    if(valid){
        $.ajax({
            type:'POST',
            url:'/login',
            data:{
                username:username,
                password:password
            },
            success:(function (){
                $('#loginForm').modal('hide');
                window.location.reload();
            }),
            error:function (){
                $('#errorLoginLabel').show();
            }
        })
    }

})


$('#usernameLabelRegister').hide();
$('#passwordLabelRegister').hide();
$('#errorRegisterLabel').hide();
$('#ageLabelRegister').hide();
$('#firstnameLabelRegister').hide();
$('#lastnameLabelRegister').hide();
$('#emailLabelRegister').hide();

$('#registerButton').click(function (e){
    e.preventDefault();
    let valid=true;
    const username = document.getElementById('usernameInputRegister').value;
    const password = document.getElementById('passwordInputRegister').value;
    const firstname = document.getElementById('firstnameInputRegister').value;
    const lastname = document.getElementById('lastnameInputRegister').value;
    const email = document.getElementById('emailInputRegister').value;
    const age = document.getElementById('ageInputRegister').value;
    if(username==null || username===""){
        $('#usernameLabelRegister').show();
        valid=false;
    }
    else
        $('#usernameLabelRegister').hide();

    if(firstname==null || firstname===""){
        $('#firstnameLabelRegister').show();
        valid=false;
    }
    else
        $('#firstnameLabelRegister').hide();

    if(lastname==null || lastname===""){
        $('#lastnameLabelRegister').show();
        valid=false;
    }
    else
        $('#lastnameLabelRegister').hide();

    if(email==null || email===""){
        $('#emailLabelRegister').show();
        valid=false;
    }
    else
        $('#emailLabelRegister').hide();

    if(age==null || age===""){
        $('#ageLabelRegister').show();
        $('#ageLabelRegister').innerHTML="Please Enter Your Age";
        valid=false;
    }
    else {
        if (age < 1 || age > 120) {
            $('#ageLabelRegister').show();
            $('#ageLabelRegister').innerHTML = "Age Invalid, Must Be Between 1 To 120";
            valid = false;
        }
        else
            $('#ageLabelRegister').hide();
    }

    if(password==null || password===""){
        $('#passwordLabelRegister').show();
        valid=false;
    }
    else
        $('#passwordLabelRegister').hide();

    if(valid){
        $.ajax({
            type:'POST',
            url:'/register',
            data:{
                username:username,
                password:password,
                email: email,
                firstname:firstname,
                lastname:lastname,
                age:age
            },
            success:(function (){
                $('#registerForm').modal('hide');
                window.location.reload();
            }),
            error:function (){
                $('#errorRegisterLabel').show();
            }
        })
    }

})