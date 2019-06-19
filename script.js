$(document).ready(function () {
    $("#formButton").click(function () {
        $("#form1").toggle();
    });




    $(".smallCards").on("click", function () {
        $(this).toggleClass("selectedCard");
        $(this).find(":hidden").toggle()

    });




   
});
