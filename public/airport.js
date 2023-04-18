const airportNameCreate = document.getElementById('nameAirportInputRegister');
const stateCreate= document.getElementById('stateAirportInputRegister');
const publishedDateCreate = document.getElementById('publishAirportInputRegister');
const ownerCreate = document.getElementById('ownerAirportInputRegister');
const numTerminalsCreate = document.getElementById('numTerminalsAirportInputRegister');
const passwordCreate = document.getElementById('passwordAirportInputRegister');

$('#nameAirportLabelRegister').hide();
$('#stateAirportLabelRegister').hide();
$('#publishAirportLabelRegister').hide();
$('#ownerAirportLabelRegister').hide();
$('#numTerminalsAirportLabelRegister').hide();
$('#passwordAirportLabelRegister').hide();
$('#errorAirportRegisterLabel').hide();

function checkValidCreateAirport() {
    function setError(element) {
        element.style.border = "solid 2px red";
        console.log(element)
    }
    function setOk(element){
        element.style.border = "solid 1px #dee2e6";
    }
    if(airportNameCreate.value == null || airportNameCreate.value === ""){
        setError(airportNameCreate);
        $('#nameAirportLabelRegister').show()
        return false;
    }
    else{
        setOk(airportNameCreate);
        $('#nameAirportLabelRegister').hide()
    }
    if(passwordCreate.value == null || passwordCreate.value === ""){
        setError(passwordCreate);
        $('#passwordAirportLabelRegister').show()
        return false;
    }
    else{
        setOk(passwordCreate);
        $('#passwordAirportLabelRegister').hide()
    }
    if(stateCreate.value == null || stateCreate.value === ""){
        setError(stateCreate);
        $('#stateAirportLabelRegister').show()
        return false;
    }
    else{
        setOk(stateCreate);
        $('#stateAirportLabelRegister').hide();
    }
    if(publishedDateCreate.value == null || publishedDateCreate.value === ""){
        setError(publishedDateCreate);
        $('#publishAirportLabelRegister').show()
        return false;
    }
    else{
        setOk(publishedDateCreate);
        $('#publishAirportLabelRegister').hide()

    }
    if(ownerCreate.value == null || ownerCreate.value === ""){
        setError(ownerCreate);
        $('#ownerAirportLabelRegister').show()
        return false;
    }
    else{
        setOk(ownerCreate);
        $('#ownerAirportLabelRegister').hide()

    }
    if(numTerminalsCreate.value == null || numTerminalsCreate.value === ""){
        setError(numTerminalsCreate);
        $('#numTerminalsAirportLabelRegister').show()
        return false;
    }
    else{
        setOk(numTerminalsCreate);
        $('#numTerminalsAirportLabelRegister').hide()
    }
    return true;
}

$('#createAirportBtn').click(function (e){
    e.preventDefault();
    if(checkValidCreateAirport()){
        $.ajax({
            type:'POST',
            url:"/airport/register",
            data:{
                name: airportNameCreate.value,
                password: passwordCreate.value,
                state: stateCreate.value,
                published : publishedDateCreate.value,
                owner : ownerCreate.value,
                numOfTerminals : numTerminalsCreate.value
            },
            success:(function (){
                $('#airportModalRegister').modal('hide');
                window.location.reload();
            }),
            error:function (){
                $('#errorAirportRegisterLabel').show();
            }
        })
    }

})

const airportNameUpdate = document.getElementById('nameAirportInputUpdate');
const stateUpdate= document.getElementById('stateAirportInputUpdate');
const publishedDateUpdate = document.getElementById('publishAirportInputUpdate');
const ownerUpdate = document.getElementById('ownerAirportInputUpdate');
const numTerminalsUpdate = document.getElementById('numTerminalsAirportInputUpdate');
const passwordUpdateAirport = document.getElementById('passwordAirportInputUpdate');

function updateAirportMenu(name){
    let user ;
    $.ajax({
        type: 'GET' ,
        url: 'airport/getAirport?name='+ name
    }).done(function (airport){
        $('#nameAirportLabelUpdate').hide();
        $('#stateAirportLabelUpdate').hide();
        $('#publishAirportLabelUpdate').hide();
        $('#ownerAirportLabelUpdate').hide();
        $('#numTerminalsAirportLabelUpdate').hide();
        $('#passwordAirportLabelUpdate').hide();
        $('#errorAirportUpdateLabel').hide();
        airportNameUpdate.value = airport.name;
        stateUpdate.value = airport.state;
        publishedDateUpdate.value = String(airport.published).split("T")[0];
        console.log(airport.published);
        ownerUpdate.value = airport.owner;
        passwordUpdateAirport.value = airport.password;
        numTerminalsUpdate.value = airport.numOfTerminals;
        $('#airportModalUpdate').modal('show');
    })

}

function checkValidUpdateAirport() {
    function setError(element) {
        element.style.border = "solid 2px red";
        console.log(element)
    }
    function setOk(element){
        element.style.border = "solid 1px #dee2e6";
    }
    if(airportNameUpdate.value == null || airportNameUpdate.value === ""){
        setError(airportNameUpdate);
        $('#nameAirportLabelUpdate').show()
        return false;
    }
    else{
        setOk(airportNameUpdate);
        $('#nameAirportLabelUpdate').hide()
    }
    if(passwordUpdateAirport.value == null || passwordUpdateAirport.value === ""){
        setError(passwordUpdateAirport);
        $('#passwordAirportLabelUpdate').show()
        return false;
    }
    else{
        setOk(passwordUpdateAirport);
        $('#passwordAirportLabelUpdate').hide()
    }
    if(stateUpdate.value == null || stateUpdate.value === ""){
        setError(stateUpdate);
        $('#stateAirportLabelUpdate').show()
        return false;
    }
    else{
        setOk(stateUpdate);
        $('#stateAirportLabelUpdate').hide();
    }
    if(publishedDateUpdate.value == null || publishedDateUpdate.value === ""){
        setError(publishedDateUpdate);
        $('#publishAirportLabelUpdate').show()
        return false;
    }
    else{
        setOk(publishedDateUpdate);
        $('#publishAirportLabelUpdate').hide()

    }
    if(ownerUpdate.value == null || ownerUpdate.value === ""){
        setError(ownerUpdate);
        $('#ownerAirportLabelUpdate').show()
        return false;
    }
    else{
        setOk(ownerUpdate);
        $('#ownerAirportLabelUpdate').hide()

    }
    if(numTerminalsUpdate.value == null || numTerminalsUpdate.value === ""){
        setError(numTerminalsUpdate);
        $('#numTerminalsAirportLabelUpdate').show()
        return false;
    }
    else{
        setOk(numTerminalsUpdate);
        $('#numTerminalsAirportLabelUpdate').hide()
    }
    return true;
}

$('#UpdateAirportBtn').click(function (e){
    e.preventDefault();
    if(checkValidUpdateAirport()){
        $.ajax({
            type:'POST',
            url:"/airport/update",
            data:{
                name: airportNameUpdate.value,
                password: passwordUpdateAirport.value,
                state: stateUpdate.value,
                published : publishedDateUpdate.value,
                owner : ownerUpdate.value,
                numOfTerminals : numTerminalsUpdate.value
            },
            success:(function (){
                $('#airportModalUpdate').modal('hide');
                window.location.reload();
            }),
            error:function (){
                $('#errorAirportUpdateLabel').show();
            }
        })
    }

})


$('#deleteAirportBtn').click(function (e){
    e.preventDefault();
    $.ajax({
        type:'POST',
        url:"/airport/delete",
        data:{
            name: document.getElementById('usernameID').className,
        },
        success:(function (){
            window.location = '/logout';
        }),
        error:function (){
            alert("error")
        }
    })

})
