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
    $('#airportCreate').click(function (e){
        e.preventDefault();
        $('#airportModalRegister').modal('show');
    });
    $('#myButtonParis').click(function () {
        $("#ParisModal").modal("hide");
        $("#paymentModal").modal("show");

    });
    $('#myButtonLondon').click(function () {
        $("#londonModal").modal("hide");
        $("#paymentModal").modal("show");

    });
    $('#myButtonNewYork').click(function () {
        $("#newYorkModal").modal("hide");
        $("#paymentModal").modal("show");
    });
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

