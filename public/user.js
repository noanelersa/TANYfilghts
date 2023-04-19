
const usernameUpdate = $('#usernameUpdate')[0];
const passwordUpdate = $('#passwordUpdate')[0];
const emailUpdate = $('#emailUpdate')[0];
const firstnameUpdate = $('#firstnameUpdate')[0];
const lastnameUpdate = $('#lastnameUpdate')[0];
const ageUpdate = $('#ageUpdate')[0];
const idUser = $('#userUpdateId')[0];



function userUpdateMenu(username){
    let user ;
    $.ajax({
        type: 'GET' ,
        url: 'user/getUser?username='+ username
    }).done(function (data){
        user = data;
        usernameUpdate.value= user.username;
        passwordUpdate.value=user.password;
        emailUpdate.value = user.email;
        firstnameUpdate.value = user.firstname;
        lastnameUpdate.value = user.lastname;
        ageUpdate.value= user.age;
        idUser.className = user._id;
        document.getElementById("userUpdateId").style.display="none"
        $('#UserUpdateModal').modal('show');
    })

}
function checkValidUpdateUser() {
    function setError(element) {
        element.style.border = "solid 2px red";
    }
    function setOk(element){
        element.style.border = "solid 1px #dee2e6";
    }
    if(usernameUpdate.value == null || usernameUpdate.value === ""){
        setError(usernameUpdate);
        return false;
    }
    else{
        setOk(usernameUpdate);
    }
    if(passwordUpdate.value == null || passwordUpdate.value === ""){
        setError(passwordUpdate);
        return false;
    }
    else{
        setOk(passwordUpdate);
    }
    if(emailUpdate.value == null || emailUpdate.value === ""){
        setError(emailUpdate);
        return false;
    }
    else{
        if(!String(emailUpdate.value).includes("@")){
            alert("Email input is not valid");
            setError(emailUpdate);
            return false;
        }
        setOk(emailUpdate);
    }
    if(firstnameUpdate.value == null || firstnameUpdate.value === ""){
        setError(firstnameUpdate);
        return false;
    }
    else{
        setOk(firstnameUpdate);
    }
    if(lastnameUpdate.value == null || lastnameUpdate.value === ""){
        setError(lastnameUpdate);
        return false;
    }
    else{
        setOk(lastnameUpdate);
    }
    if(ageUpdate.value == null || ageUpdate.value === ""){
        setError(ageUpdate);
        return false;
    }
    else{
        if(ageUpdate.value < 1 || ageUpdate.value> 120)
        {
            setError(ageUpdate);
            alert("Age Invalid, Must Be Between 1 To 120");
            return false;
        }
        setOk(ageUpdate);
    }
    return true;
}

$('#userUpdateSubmit').click(function(e){
    e.preventDefault();
    if(!checkValidUpdateUser()){return;}
    $.ajax({
        type: 'POST',
        url: "/user/update?id=" + idUser.className,
        data:{
            username: usernameUpdate.value,
            password: passwordUpdate.value,
            email: emailUpdate.value,
            firstname: firstnameUpdate.value,
            lastname: lastnameUpdate.value,
            age: ageUpdate.value
        },
        success: function (){
           $('#UserUpdateModal').modal('hide');
           window.location.reload();
        },
        error: function (){alert("Username Is Already Taken")}
    });


})

function deleteUser(username){
    $.ajax({
        type: 'GET' ,
        url: 'user/getuser?username='+ username
    }).done(function (data){
        $.ajax({
            type: 'POST',
            url: "/user/delete?id=" + data._id,
            success: function (){
                window.location ="/logout";
            },
            error: function (){alert("error")}
        });
    })

}