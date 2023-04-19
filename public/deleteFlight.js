let cardsDelete = 0;

function resetDeletePage() {
    while(document.getElementById('modalBodyDelete').hasChildNodes()){
        document.getElementById('modalBodyDelete').removeChild(document.getElementById('modalBodyDelete').firstChild);
    }
    const row = document.createElement('div')
    row.className = "row";
    row.id = "deleteFlight"
    document.getElementById("modalBodyDelete").appendChild(row);
    cardsDelete = 0;
}

function reloadAllFlightPageDelete(){
    $.ajax({
        type: 'GET',
        url: "/flight/allFlights",
    }).done(function (data){
        resetDeletePage()
        data.forEach((data) => {addElementFlightDelete(data)});
        $('#allFlightDelete').modal('show');
    })
}

function deleteForm(id) {
    $.ajax({
        type: 'POST',
        url: "/flight/delete?id=" + id,
        success: function (){
            reloadAllFlightPageDelete();
            updateGraphOne();
            updateGraphTwo();
        },
        error: function (){alert("error")}
    });
}

function addElementFlightDelete(flight){
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
    buttonElement.onclick = function () {deleteForm(flight._id)}
    buttonElement.innerHTML = "delete the flight"


    cardBody.appendChild(paragraphElement);
    cardBody.appendChild(buttonElement);
    card.appendChild(cardBody);
    col.appendChild(card)
    document.getElementById('deleteFlight').appendChild(col);
    cardsDelete++;
    if (cardsDelete % 4 === 0){
        const oldRow = document.getElementById('deleteFlight');
        const newRow = document.createElement('div')
        newRow.className = "row";
        newRow.style.marginTop = "2rem"
        oldRow.id = ""
        newRow.id = "deleteFlight"
        document.getElementById("modalBodyDelete").appendChild(newRow);
        cardsDelete = 0;
    }
}
