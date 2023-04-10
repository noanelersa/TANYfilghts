let cards = 0;
const airline = $('#airlineNameUpdate')[0];
const flightTime = $('#flightTimeUpdate')[0];
const landTime = $('#landTimeFlightUpdate')[0];
const source = $('#sourceFlightUpdate')[0];
const destination = $('#destinationFlightUpdate')[0];
const id = $('#flightID')[0];

function resetUpdatePage() {
    while(document.getElementById('modalBodyUpdate').hasChildNodes()){
        document.getElementById('modalBodyUpdate').removeChild(document.getElementById('modalBodyUpdate').firstChild);
    }
    const row = document.createElement('div')
    row.className = "row";
    row.id = "updateFlight"
    document.getElementById("modalBodyUpdate").appendChild(row);
    cards = 0;
}

function updateAllFlight(){
    $.ajax({
        type: 'GET',
        url: "/flight/allFlights",
    }).done(function (data){
        resetUpdatePage()
        data.forEach((data) => {addElementFlight(data)});
        $('#allFlightUpdate').modal('show');
    })
}

function updateForm(id,airline,flightTime,land,source,des) {
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
    const flightId = $('#flightID')[0]
    flightId.hide = true;
    flightId.className = "" + id;
    $('#UF').modal('show');
}

function addElementFlight(flight){
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
    paragraphElement.innerHTML = "airline: " + flight.airlineName + "<br>" + "from: " + flight.source + "<br>" + "to: " + flight.destination + "<br>" + "date: " + finalDate;

    let buttonElement = document.createElement('button');
    buttonElement.className = "btn btn-primary";
    buttonElement.onclick = function () {updateForm(flight._id, flight.airlineName, flight.flightTime, flight.landTime,flight.source,flight.destination)}
    buttonElement.innerHTML = "update the flight"


    cardBody.appendChild(paragraphElement);
    cardBody.appendChild(buttonElement);
    card.appendChild(cardBody);
    col.appendChild(card)
    document.getElementById('updateFlight').appendChild(col);
    cards++;
    if (cards % 4 === 0){
        const oldRow = document.getElementById('updateFlight');
        const newRow = document.createElement('div')
        newRow.className = "row";
        newRow.style.marginTop = "2rem"
        oldRow.id = ""
        newRow.id = "updateFlight"
        document.getElementById("modalBodyUpdate").appendChild(newRow);
        cards = 0;
    }
}
updateAllFlight();
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

$('#submitUpdate').click(function(e){
    e.preventDefault();
    if(!checkValidCreate()){return;}
    $.ajax({
        type: 'POST',
        url: "/flight/update?id=" + id.className,
        data:{
            airlineName: airline.value,
            flightTime: flightTime.value,
            landTime: landTime.value,
            source: source.value,
            destination: destination.value
        },
        success: function (){
            $('#allFlightUpdate').modal('hide');
            $('#UF').modal('hide');
            updateAllFlight();
        },
        error: function (){alert("error")}
    });

})
