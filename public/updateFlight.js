let cardsUpdate = 0;
const airlineUpdate = $('#airlineNameUpdate')[0];
const flightTimeUpdate = $('#flightTimeUpdate')[0];
const landTimeUpdate = $('#landTimeFlightUpdate')[0];
const sourceUpdate = $('#sourceFlightUpdate')[0];
const destinationUpdate = $('#destinationFlightUpdate')[0];
const priceUpdate= $('#priceFlightUpdate')[0];
const idFlight = $('#flightID')[0];
let airlineNameUpdateFlight;


function resetUpdatePage() {
    while(document.getElementById('modalBodyUpdate').hasChildNodes()){
        document.getElementById('modalBodyUpdate').removeChild(document.getElementById('modalBodyUpdate').firstChild);
    }
    const row = document.createElement('div')
    row.className = "row";
    row.id = "updateFlight"
    document.getElementById("modalBodyUpdate").appendChild(row);
    cardsUpdate = 0;
}
function setFlightStateUpdate(airportName){
    sourceUpdate.value = airportName;
    sourceUpdate.hidden = true;
    $('#brNameUpdate').show();
    $('#nameAirportStateUpdateFlight')[0].innerHTML = airportName;
    $('#nameAirportStateUpdateFlight').show();
}
function updateAllFlight(airlineName){
    airlineNameUpdateFlight = airlineName;
    $.ajax({
        type: 'GET',
        url: "/flight/allFlights?airlineName=" + airlineNameUpdateFlight,
    }).done(function (data){
        resetUpdatePage()
        data.forEach((data) => {addElementFlightUpdate(data)});
        $('#allFlightUpdate').modal('show');
    })
}

function updateForm(id,airline,flightTime,land,source,des,price) {
    $('#allFlightUpdate').modal('hide');
    let timeExit = String(flightTime).split(":");
    timeExit = timeExit[0] + ":" + timeExit[1];
    let timeLand = String(land).split(":");
    timeLand = timeLand[0] + ":" + timeLand[1];
    $('#airlineNameUpdate')[0].value = airline;
    $('#flightTimeUpdate')[0].value = timeExit;
    $('#landTimeFlightUpdate')[0].value = timeLand;
    $('#sourceFlightUpdate')[0].value = source;
    $('#destinationFlightUpdate')[0].value = des;
    $('#priceFlightUpdate')[0].value=price;
    const flightId = $('#flightID')[0]
    flightId.hide = true;
    flightId.className = "" + id;
    if(airlineNameUpdateFlight){
        setFlightStateUpdate(airlineNameUpdateFlight);
    }
    $('#UF').modal('show');
}

function addElementFlightUpdate(flight){
    const dateAll = flight.flightTime;
    const date = String(dateAll).split("T")[0].split("-")
    const hour = String(dateAll).split("T")[1].split(":")
    const finalDate = date[2] + "/" + date[1] + "/" + date[0] + " " + hour[0] + ":" + hour[1];

    let col = document.createElement('div')
    col.className = "col-3"

    let card = document.createElement('div');
    card.className = 'card shadow cursor-pointer';

    let cardBody = document.createElement('div');
    cardBody.className = 'card-body';

    let paragraphElement = document.createElement('p');
    paragraphElement.className = "card-text"
    paragraphElement.innerHTML = "airline: " + flight.airlineName + "<br>" + "from: " + flight.source + "<br>" + "to: " + flight.destination + "<br>" + "date: " + finalDate+"<br>"+"price: "+flight.price;

    let buttonElement = document.createElement('button');
    buttonElement.className = "btn btn-primary";
    buttonElement.onclick = function () {updateForm(flight._id, flight.airlineName, flight.flightTime, flight.landTime,flight.source,flight.destination,flight.price)}
    buttonElement.innerHTML = "update the flight"


    cardBody.appendChild(paragraphElement);
    cardBody.appendChild(buttonElement);
    card.appendChild(cardBody);
    col.appendChild(card)
    document.getElementById('updateFlight').appendChild(col);
    cardsUpdate++;
    if (cardsUpdate % 4 === 0){
        const oldRow = document.getElementById('updateFlight');
        const newRow = document.createElement('div')
        newRow.className = "row";
        newRow.style.marginTop = "2rem"
        oldRow.id = ""
        newRow.id = "updateFlight"
        document.getElementById("modalBodyUpdate").appendChild(newRow);
        cardsUpdate = 0;
    }
}
function checkValidUpdate() {
    function setError(element) {
        element.style.border = "solid 2px red";
    }
    function setOk(element){
        element.style.border = "solid 1px #dee2e6";
    }
    if(airlineUpdate.value == null || airlineUpdate.value === ""){
        setError(airlineUpdate);
        return false;
    }
    else{
        setOk(airlineUpdate);
    }
    if(flightTimeUpdate.value == null || flightTimeUpdate.value === ""){
        setError(flightTimeUpdate);
        return false;
    }
    else{
        setOk(flightTimeUpdate);
    }
    if(landTimeUpdate.value == null || landTimeUpdate.value === ""){
        setError(landTimeUpdate);
        return false;
    }
    else{
        setOk(landTimeUpdate);
    }
    if(sourceUpdate.value == null || sourceUpdate.value === ""){
        setError(sourceUpdate);
        return false;
    }
    else{
        setOk(sourceUpdate);
    }
    if(destinationUpdate.value == null || destinationUpdate.value === ""){
        setError(destinationUpdate);
        return false;
    }
    else{
        setOk(destinationUpdate);
    }
    if(priceUpdate.value == null || priceUpdate.value === ""){
        setError(priceUpdate);
        return false;
    }
    else{
        setOk(priceUpdate);
    }
    if(priceUpdate.value<=0){
        setError(priceUpdate);
        return false;
    }
    else{
        setOk(priceUpdate);
    }
    return true;
}

$('#submitUpdate').click(function(e){
    e.preventDefault();
    if(!checkValidUpdate()){return;}
    $.ajax({
        type: 'POST',
        url: "/flight/update?id=" + idFlight.className,
        data:{
            airlineName: airlineUpdate.value,
            flightTime: flightTimeUpdate.value,
            landTime: landTimeUpdate.value,
            source: sourceUpdate.value,
            destination: destinationUpdate.value,
            price:priceUpdate.value
        },
        success: function (){
            $('#allFlightUpdate').modal('hide');
            $('#UF').modal('hide');
            updateAllFlight(airlineNameUpdateFlight);
            updateGraphOne();
            updateGraphTwo();
        },
        error: function (){alert("error")}
    });

})
