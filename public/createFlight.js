let today = new Date();
let dd = today.getDate();
let mm = today.getMonth() + 1; //January is 0!
let hour = today.getHours();
let minutes = today.getMinutes();
const yyyy = today.getFullYear();

if (dd < 10) {
    dd = '0' + dd;
}

if (mm < 10) {
    mm = '0' + mm;
}

if (hour < 10) {
    hour = '0' + hour;
}

if (minutes < 10) {
    minutes = '0' + minutes;
}

today = yyyy + '-' + mm + '-' + dd + "T" + hour + ":" + minutes;
document.getElementById("flightTimeCreate").setAttribute("min", today);
document.getElementById("landTimeFlightCreate").setAttribute("min", today);



const airline = $('#airlineNameCreate')[0];
const flightTime = $('#flightTimeCreate')[0];
const landTime = $('#landTimeFlightCreate')[0];
const source = $('#sourceFlightCreate')[0];
const destination = $('#destinationFlightCreate')[0];

$('#submitCreate').click(function (e){
    e.preventDefault();
    if(!checkValidCreate()){return;}
    $.ajax({
        type: 'POST',
        url: "/flight/create",
        data:{
            airlineName: airline.value,
            flightTime: flightTime.value,
            landTime: landTime.value,
            source: source.value,
            destination: destination.value
        },
        success: function (){
            $('#CF').modal('hide');
        },
        error: function (){alert("error")}
    });
});

function checkValidCreate() {
    function setError(element) {
        element.style.border = "solid 2px red";
    }
    function setOk(element){
        element.style.border = "solid 1px #dee2e6";
    }
    if(airline.value == null || airline.value === ""){
        setError(airline);
        return false;
    }
    else{
        setOk(airline);
    }
    if(flightTime.value == null || flightTime.value === ""){
        setError(flightTime);
        return false;
    }
    else{
        setOk(flightTime);
    }
    if(landTime.value == null || landTime.value === ""){
        setError(landTime);
        return false;
    }
    else{
        setOk(landTime);
    }
    if(source.value == null || source.value === ""){
        setError(source);
        return false;
    }
    else{
        setOk(source);
    }
    if(destination.value == null || destination.value === ""){
        setError(destination);
        return false;
    }
    else{
        setOk(destination);
    }
    return true;
}
