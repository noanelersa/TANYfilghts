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
        console.log(airportNameCreate.value)
        console.log(stateCreate.value)
        console.log()
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