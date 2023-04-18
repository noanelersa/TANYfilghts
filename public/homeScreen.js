try {
    $('#createFlightBtn').click(function (e) {
        e.preventDefault();
        $('#CF').modal('show');
    });

    $('#updateFlightBtn').click(function (e) {
        e.preventDefault();
        updateAllFlight();
    });

    $('#deleteFlightBtn').click(function (e) {
        e.preventDefault();
        reloadAllFlightPageDelete();
    });
}
catch (e) {}
$('#airportCreate').click(function (e){
    e.preventDefault();
    $('#airportModalRegister').modal('show');
});