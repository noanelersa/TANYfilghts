const usernameAdminUpdate = $('#usernameInputAdminUpdate')[0]
const passwordAdminUpdate = $('#passwordInputAdminUpdate')[0]
const idAdminUpdate = $('#usernameID')[0]

function updateFormUpdate(username) {
    $.ajax({
        type: 'GET' ,
        url: 'admin/getadmin?username='+ username
    }).done(function (data){
        $('#usernameLabelAdminUpdate').hide();
        $('#passwordLabelAdminUpdate').hide();
        $('#errorAdminUpdateLabel').hide();
        usernameAdminUpdate.value = data.username;
        passwordAdminUpdate.value = data.password;
        idAdminUpdate.className = data._id;
        $('#adminUpdateForm').modal('show');
    })

}

function checkValidUpdateAdmin() {
    function setError(element) {
        element.style.border = "solid 2px red";
    }
    function setOk(element){
        element.style.border = "solid 1px #dee2e6";
    }
    if(usernameAdminUpdate.value == null || usernameAdminUpdate.value === ""){
        setError(usernameAdminUpdate);
        return false;
    }
    else{
        setOk(usernameAdminUpdate);
    }
    if(passwordAdminUpdate.value == null || passwordAdminUpdate.value === ""){
        setError(passwordAdminUpdate);
        return false;
    }
    else{
        setOk(passwordAdminUpdate);
    }
    return true;
}

$('#adminUpdateButton').click(function(e){
    e.preventDefault();
    if(!checkValidUpdateAdmin()){return;}
    $.ajax({
        type: 'POST',
        url: "/admin/update?id=" + idAdminUpdate.className,
        data:{
            username: usernameAdminUpdate.value,
            password: passwordAdminUpdate.value,
        },
        success: function (){
            $('#adminUpdateForm').modal('hide');
        },
        error: function (){$('#errorAdminUpdateLabel').show();}
    });

})



const usernameAdminCreate = $('#usernameInputAdminCreate')[0]
const passwordAdminCreate = $('#passwordInputAdminCreate')[0]
const idAdminCreate = $('#usernameID')[0]
$('#usernameLabelAdminCreate').hide();
$('#passwordLabelAdminCreate').hide();
$('#errorAdminCreateLabel').hide();


function checkValidCreateAdmin() {
    function setError(element) {
        element.style.border = "solid 2px red";
    }
    function setOk(element){
        element.style.border = "solid 1px #dee2e6";
    }
    if(usernameAdminCreate.value == null || usernameAdminCreate.value === ""){
        setError(usernameAdminCreate);
        return false;
    }
    else{
        setOk(usernameAdminCreate);
    }
    if(passwordAdminCreate.value == null || passwordAdminCreate.value === ""){
        setError(passwordAdminCreate);
        return false;
    }
    else{
        setOk(passwordAdminCreate);
    }
    return true;
}

$('#adminCreateButton').click(function(e){
    e.preventDefault();
    if(!checkValidCreateAdmin()){return;}
    $.ajax({
        type: 'POST',
        url: "/admin/create?id=" + idAdminCreate.className,
        data:{
            username: usernameAdminCreate.value,
            password: passwordAdminCreate.value,
        },
        success: function (){
            $('#adminCreateForm').modal('hide');
        },
        error: function (){$('#errorAdminCreateLabel').show();}
    });

})
