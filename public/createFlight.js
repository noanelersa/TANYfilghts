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



const airlineCreate = $('#airlineNameCreate')[0];
const flightTimeCreate = $('#flightTimeCreate')[0];
const landTimeCreate = $('#landTimeFlightCreate')[0];
const sourceCreate = $('#sourceFlightCreate')[0];
const destinationCreate = $('#destinationFlightCreate')[0];
const priceCreate= $('#priceFlightCreate')[0];


$('#submitCreate').click(function (e){
    e.preventDefault();
    if(!checkValidCreate()){return;}
    $.ajax({
        type: 'POST',
        url: "/flight/create",
        data:{
            airlineName: airlineCreate.value,
            flightTime: flightTimeCreate.value,
            landTime: landTimeCreate.value,
            source: sourceCreate.value,
            destination: destinationCreate.value,
            price:priceCreate.value,
        },
        success: function (){
            $('#CF').modal('hide');
            airlineCreate.value="";
            flightTimeCreate.value="";
            landTimeCreate.value="";
            sourceCreate.value="";
            destinationCreate.value="";
            priceCreate.value="";
            updateGraphOne();
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
    if(airlineCreate.value == null || airlineCreate.value === ""){
        setError(airlineCreate);
        return false;
    }
    else{
        setOk(airlineCreate);
    }
    if(flightTimeCreate.value == null || flightTimeCreate.value === ""){
        setError(flightTimeCreate);
        return false;
    }
    else{
        setOk(flightTimeCreate);
    }
    if(landTimeCreate.value == null || landTimeCreate.value === ""){
        setError(landTimeCreate);
        return false;
    }
    else{
        setOk(landTimeCreate);
    }
    if(sourceCreate.value == null || sourceCreate.value === ""){
        setError(sourceCreate);
        return false;
    }
    else{
        setOk(sourceCreate);
    }
    if(destinationCreate.value == null || destinationCreate.value === ""){
        setError(destinationCreate);
        return false;
    }
    else{
        setOk(destinationCreate);
    }
    if(priceCreate.value == null || priceCreate.value === ""){
        setError(priceCreate);
        return false;
    }
    else{
        setOk(priceCreate);
    }
    if(priceCreate.value<=0){
        setError(priceCreate);
        return false;
    }
    else{
        setOk(priceCreate);
    }

    return true;
}
