try {

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
}
catch (e) {}



$('#logoutUser').click(function (e){
    e.preventDefault();
    window.location = '/logout'
})
