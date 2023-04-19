const airportNameCreate = document.getElementById('nameAirportInputRegister');
const stateCreate= document.getElementById('stateAirportInputRegister');
const publishedDateCreate = document.getElementById('publishAirportInputRegister');
const ownerCreate = document.getElementById('ownerAirportInputRegister');
const numTerminalsCreate = document.getElementById('numTerminalsAirportInputRegister');
const passwordCreate = document.getElementById('passwordAirportInputRegister');

function openCreateAirportMenu(){
    $('#nameAirportLabelRegister').hide();
    $('#stateAirportLabelRegister').hide();
    $('#publishAirportLabelRegister').hide();
    $('#ownerAirportLabelRegister').hide();
    $('#numTerminalsAirportLabelRegister').hide();
    $('#passwordAirportLabelRegister').hide();
    $('#errorAirportRegisterLabel').hide();
    $('#airportModalRegister').modal('show');
}



function checkValidCreateAirport() {
    function setError(element) {
        element.style.border = "solid 2px red";
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
    $.ajax({
        type: 'GET' ,
        url: '/airport/getAirport?name='+ name
    }).done(function (airport){
        $('#nameAirportLabelUpdate').hide();
        $('#stateAirportLabelUpdate').hide();
        $('#publishAirportLabelUpdate').hide();
        $('#ownerAirportLabelUpdate').hide();
        $('#numTerminalsAirportLabelUpdate').hide();
        $('#passwordAirportLabelUpdate').hide();
        $('#errorAirportUpdateLabel').hide();
        $('#IDofAirport')[0].className = airport.name;
        airportNameUpdate.value = airport.name;
        stateUpdate.value = airport.state;
        publishedDateUpdate.value = String(airport.published).split("T")[0];
        ownerUpdate.value = airport.owner;
        passwordUpdateAirport.value = airport.password;
        numTerminalsUpdate.value = airport.numOfTerminals;
        $('#airportModalUpdate').modal('show');
        $('#allAirportUpdate').modal('hide');
    })

}

function checkValidUpdateAirport() {
    function setError(element) {
        element.style.border = "solid 2px red";
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
                oldname: document.getElementById('IDofAirport').className,
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

let cardsUpdateAirport = 0;

function resetUpdateAirportPage() {
    while(document.getElementById('modalBodyUpdateAirport').hasChildNodes()){
        document.getElementById('modalBodyUpdateAirport').removeChild(document.getElementById('modalBodyUpdateAirport').firstChild);
    }
    const row = document.createElement('div')
    row.className = "row";
    row.id = "updateAirport"
    document.getElementById("modalBodyUpdateAirport").appendChild(row);
    cardsUpdateAirport = 0;
}

function updateAllAirport(){
    $.ajax({
        type: 'GET',
        url: "/airport/getAirports",
    }).done(function (data){
        resetUpdateAirportPage()
        data.forEach((data) => {addElementAirportUpdate(data)});
        $('#allAirportUpdate').modal('show');
    })
}


function addElementAirportUpdate(airport){
    const dateAll = airport.published;
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
    paragraphElement.innerHTML = "name: " + airport.name + "<br>" + "state: " + airport.state + "<br>" + "to: " + finalDate + "<br>" + "owner: " + airport.owner + "<br>" + "numbers Of Terminals" + airport.numOfTerminals;

    let buttonElement = document.createElement('button');
    buttonElement.className = "btn btn-primary";
    buttonElement.onclick = function () {updateAirportMenu(airport.name)}
    buttonElement.innerHTML = "update the airport"


    cardBody.appendChild(paragraphElement);
    cardBody.appendChild(buttonElement);
    card.appendChild(cardBody);
    col.appendChild(card)
    document.getElementById('updateAirport').appendChild(col);
    cardsUpdateAirport++;
    if (cardsUpdateAirport % 3 === 0){
        const oldRow = document.getElementById('updateAirport');
        const newRow = document.createElement('div')
        newRow.className = "row";
        newRow.style.marginTop = "2rem"
        oldRow.id = ""
        newRow.id = "updateAirport"
        document.getElementById("modalBodyUpdateAirport").appendChild(newRow);
        cardsUpdateAirport = 0;
    }
}

let cardsDeleteAirport = 0
function resetDeletePageAirport() {
    while(document.getElementById('modalBodyDeleteAirport').hasChildNodes()){
        document.getElementById('modalBodyDeleteAirport').removeChild(document.getElementById('modalBodyDeleteAirport').firstChild);
    }
    const row = document.createElement('div')
    row.className = "row";
    row.id = "deleteAirport"
    document.getElementById("modalBodyDeleteAirport").appendChild(row);
    cardsDelete = 0;
}

function reloadAllAirportPageDelete(){
    $.ajax({
        type: 'GET',
        url: "/airport/getAirports",
    }).done(function (data){
        resetDeletePageAirport()
        data.forEach((data) => {addElementAirportDelete(data)});
        $('#allAirportDelete').modal('show');
    })
}

function deleteFormAirport(name) {
    $.ajax({
        type: 'POST',
        url: "/airport/delete",
        data:{
          name:name
        },
        success: function (){
            reloadAllAirportPageDelete();
        },
        error: function (){alert("error")}
    });
}

function addElementAirportDelete(airport){
    const dateAll = airport.published;
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
    paragraphElement.innerHTML = "name: " + airport.name + "<br>" + "state: " + airport.state + "<br>" + "to: " + finalDate + "<br>" + "owner: " + airport.owner + "<br>" + "numbers Of Terminals" + airport.numOfTerminals;

    let buttonElement = document.createElement('button');
    buttonElement.className = "btn btn-primary";
    buttonElement.onclick = function () {deleteFormAirport(airport.name)}
    buttonElement.innerHTML = "delete the airport"


    cardBody.appendChild(paragraphElement);
    cardBody.appendChild(buttonElement);
    card.appendChild(cardBody);
    col.appendChild(card)
    document.getElementById('deleteAirport').appendChild(col);
    cardsDeleteAirport++;
    if (cardsDeleteAirport % 3 === 0){
        const oldRow = document.getElementById('deleteAirport');
        const newRow = document.createElement('div')
        newRow.className = "row";
        newRow.style.marginTop = "2rem"
        oldRow.id = ""
        newRow.id = "deleteAirport"
        document.getElementById("allAirportDelete").appendChild(newRow);
        cardsDeleteAirport = 0;
    }
}