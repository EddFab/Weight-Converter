/*
document.getElementById("lbsinput").addEventListener('input', function(e){
    let lbs = e.target.value;
    document.getElementById("gramsoutput").innerHTML = lbs / 0.002204;
    document.getElementById("kilogramsoutput").innerHTML = lbs / 2.2046;
    document.getElementById("ouncesoutput").innerHTML = lbs * 16;
});
*/
/*************
ON DOCLOAD    
**************/
$(document).ready(function () {
    
    $("input").focus();
    
    /************************
    ON FIRST BUTTON CLICK    
    ************************/
    $("#firstbutton").on("click", function () {

        var changebutton; //CREATE VARIABLE FOR FUNCTION
        if ($(this).text() == "G") { // IF THE BUTTON PRESSED WAS GRAMS

            changebutton = function () { //FUNCTION NAMED "CHANGEBUTTON" EQUALS
                $("#firstbutton").text("LB"); // CHANGE BUTTON FROM GRAMS TO POUNDS
                $("#metricinput").attr("placeholder", "enter weight in grams..."); //CHANGE UNIT TO GRAMS
                $("#firstheading").html("Pounds:"); //CHANGE CARD HEADING TO POUNDS
                $("input").focus();
            };

        } else {

            changebutton = function () { //FUNCTION NAMED "CHANGEBUTTON" EQUALS
                $("#firstbutton").text("G"); // CHANGE BUTTON FROM POUNDS TO GRAMS
                $("#metricinput").attr("placeholder", "enter weight in pounds..."); //CHANGE UNIT TO POUNDS
                $("#firstheading").html("Grams:"); //CHANGE CARD HEADING TO GRAMS
                $("input").focus();
            };

        }
        changebutton();
        $("input").focus();

    });
    /*****************************
    END ON FIRST BUTTON CLICK    
    ******************************/
    
});