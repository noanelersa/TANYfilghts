let cardsResult = 0;
const flightTime = $('#departure')[0];
const landTime = $('#return')[0];
const source = $('#from')[0];
const destination = $('#to')[0];
const price = $('#price')[0];


function resetResultPage() {
    while(document.getElementById('modalBodyResult').hasChildNodes()){
        document.getElementById('modalBodyResult').removeChild(document.getElementById('modalBodyResult').firstChild);
    }
    const row = document.createElement('div')
    row.className = "row";
    row.id = "flightResult"
    document.getElementById("modalBodyResult").appendChild(row);
    cardsResult = 0;
}
function allFlightResult(){
    $.ajax({
        type: 'GET',
        url: "/flight/searchSpesicFlight"+"?flightTime="+flightTime.value+"&landTime="+landTime.value+"&source="+source.value+"&destination="+destination.value+"&price="+price,
    }).done(function (data){
        resetResultPage()
        data.forEach((data) => {addElementFlightResult(data)});
        $('#allFlightResult').modal('show');
    });
}

function addElementFlightResult(flight){
    const dateAll = flight.flightTime;
    const date = String(dateAll).split("T")[0].split("-")
    const finalDate = date[2] + "/" + date[1] + "/" + date[0];

    const hour = String(dateAll).split("T")[1].split(":")
    finalHour=hour[0] + ":" + hour[1];

    let col = document.createElement('div')
    col.className = "col-3"
    let card = document.createElement('div');
    card.className = 'card shadow cursor-pointer';

    let cardBody = document.createElement('div');
    cardBody.className = 'card-body';

    let paragraphElement = document.createElement('p');
    paragraphElement.className = "card-text"
    paragraphElement.innerHTML = "airline: " + flight.airlineName + "<br>" + "from: " + flight.source + "<br>" + "to: " + flight.destination + "<br>" + "date: " + finalDate+"<br>"+"flight time: "+finalHour+"<br>"+"price: "+flight.price;

    let buttonElement = document.createElement('button');
    buttonElement.className = "btn btn-primary";
    buttonElement.innerHTML = "book the flight"


    cardBody.appendChild(paragraphElement);
    cardBody.appendChild(buttonElement);
    card.appendChild(cardBody);
    col.appendChild(card)
    document.getElementById('flightResult').appendChild(col);
    cardsResult++;
    if (cardsResult % 4 === 0){
        const oldRow = document.getElementById('flightResult');
        const newRow = document.createElement('div')
        newRow.className = "row";
        newRow.style.marginTop = "2rem"
        oldRow.id = ""
        newRow.id = "flightResult"
        document.getElementById("modalBodyResult").appendChild(newRow);
        cardsResult = 0;
    }
}
