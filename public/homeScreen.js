try {
$('#createFlightBtn').click(function (e){
    e.preventDefault();
    $('#CF').modal('show');
});

    $('#deleteAirportBtnAdmin').click(function (e) {
        e.preventDefault();
        reloadAllAirportPageDelete();
    });
    $('#deleteFlightBtn').click(function (e) {
        e.preventDefault();
        reloadAllFlightPageDelete();
    });
    $('#updateAirportBtnAdmin').click(function (e){
        e.preventDefault();
        updateAllAirport();
    });
    $('#airportCreate').click(function (e){
        e.preventDefault();
        openCreateAirportMenu()
    });
    $('#createAdminBtn').click(function (e){
        e.preventDefault();
        $('#adminCreateForm').modal('show');
    });
    $('#updateAdminBtn').click(function (e){
        e.preventDefault();
        updateFormUpdate(document.getElementById('usernameID').className);
    })
    $('#myButtonLondon').click(function (e){
        $('#paymentModal').modal('show');
        $('#londonModal').modal('hide');
    })
    $('#myButtonParis').click(function (e){
        $('#paymentModal').modal('show');
        $('#ParisModal').modal('hide');
    })
    $('#myButtonNewYork').click(function (e){
        $('#paymentModal').modal('show');
        $('#newYorkModal').modal('hide');
    })
    function openPopup(){
        const popup = document.getElementById("popup");
        return popup.classList.add("open-popup");
    }
    function closePopup(){
        const popup = document.getElementById("popup");
        $('#paymentModal').modal('hide')
        return popup.classList.remove("open-popup");
    }

    document.getElementById("openBtn").addEventListener("click",()=>{openPopup()});
    document.getElementById("closeBtn").addEventListener("click",()=>{closePopup()});

}
catch (e) {}



$('#logoutUser').click(function (e){
    e.preventDefault();
    window.location = '/logout'
})
var canvas = document.getElementById('canvas');
var c = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var x = 0;

var airplane = '\u2708';
var airplaneWidth = c.measureText(airplane).width;

var yMin = 50;
var yMax = innerHeight - yMin;

var y = Math.floor(Math.random() * (yMax - yMin)) + yMin;

//var randomnumber = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;

function animate(){
    requestAnimationFrame(animate); // this creates a loop

    c.clearRect(0, 0, canvas.width, canvas.height); // clear the canvas

    c.font = '64px Arial'; // draw the airplane
    c.fillStyle = '#f0ffff';
    c.fillText(airplane, x, y);

    x += 2;

    if ( x > innerWidth + airplaneWidth){ // if the airplane goes off the page, return to x coordinate of 0
        x = 0;
    }
}

animate();