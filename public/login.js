$(window).on('load', function() {
    $('#loginForm').modal('show');
});
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
                window.location="/";
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
$('#registerButton').click(function (e){
    e.preventDefault();
    let valid=true;
    const username = document.getElementById('usernameInputRegister').value;
    const password = document.getElementById('passwordInputRegister').value;
    if(username==null || username===""){
        $('#usernameLabelRegister').show();
        valid=false;
    }
    else
        $('#usernameLabelRegister').hide();

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
                password:password
            },
            success:(function (){
                $('#registerForm').modal('hide');
            }),
            error:function (){
                $('#errorRegisterLabel').show();
            }
        })
    }

})