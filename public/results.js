let cardsResult = 0;
const flightTime = $('#departure')[0];
const landTime = $('#return')[0];
const source = $('#from')[0];
const destination = $('#to')[0];
const price = $('#price')[0];
const priceMin = $('#priceMin')[0];
const priceMax = $('#priceMax')[0];
const airlineName = $('#airlineName')[0];

$('#sumbitsort').click(function (e){
    e.preventDefault();
    allFlightResultMore();
})
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
function allFlightResultMore(){
    $.ajax({
        type: 'GET',
        url: "/flight/searchMoreSpecificFlight"+"?flightTime="+flightTime.value+"&landTime="+landTime.value+"&source="+source.value+"&destination="+destination.value+"&priceMin="+priceMin.value+"&priceMax="+priceMax.value+"&airlineName="+airlineName.value
    }).done(function (data){
        resetResultPage()
        if(data.length == 0){
            const p = document.createElement("div");
            p.innerHTML = "No Flights Found"
            p.className = "h1";
            document.getElementById('flightResult').appendChild(p);
        }
        data.forEach((data) => {addElementFlightResult(data)});
        $('#allFlightResult').modal('show');
    });
}
function allFlightResult(){
    $.ajax({
        type: 'GET',
        url: "/flight/searchSpesicFlight"+"?flightTime="+flightTime.value+"&landTime="+landTime.value+"&source="+source.value+"&destination="+destination.value,
    }).done(function (data){
        resetResultPage()
        if(data.length == 0){
            const p = document.createElement("div");
            p.innerHTML = "No Flights Found"
            p.className = "h1";
            document.getElementById('flightResult').appendChild(p);
        }
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

const inputRange = document.querySelectorAll(".input-range input");
const inputPrice = document.querySelectorAll(".price-input input");
let progress = document.querySelector(".progress-bar")

const priceGap = 200;

inputPrice.forEach(input =>{
    input.addEventListener("input",(e)=>{
        let minVal = parseInt(inputPrice[0].value);
        let maxVal = parseInt(inputPrice[1].value);
        if((maxVal-minVal >= priceGap) && maxVal<=10000 && minVal>=0){
            if(e.target.className === "min-input"){
                inputRange[0].value = minVal;
                progress.style.left = (minVal / inputRange[0].max) * 100 + "%";
            }else{
                inputRange[1].value = maxVal;
                progress.style.right = 100 - (maxVal / inputRange[1].max) * 100 + "%";
            }
        }
    })
})

inputRange.forEach(input =>{
    input.addEventListener("input",(e)=>{
        let minVal = parseInt(inputRange[0].value);
        let maxVal = parseInt(inputRange[1].value);
        if(maxVal-minVal < priceGap){
            if(e.target.className === "range-min"){ // if active slider is min slider
                inputRange[0].value = maxVal - priceGap;
            }else{
                inputRange[1].value = minVal + priceGap;
            }
        }else{
            inputPrice[0].value = minVal;
            inputPrice[1].value = maxVal;
            progress.style.left = (minVal / inputRange[0].max) * 100 + "%";
            progress.style.right = 100 - (maxVal / inputRange[1].max) * 100 + "%";
        }
    })
})

