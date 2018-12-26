$(document).ready(function () {
    $("input").val("");
    $("input").focus();

    /************************
    ON FIRST BUTTON CLICK    
    ************************/
    $("#firstbutton").on("click", function () {

        $("input").val("");
        $("#secondbutton").text("KG");
        $("#thirdbutton").text("OZ");
        $("#secondheading").html("Kilograms:");
        $("#thirdheading").html("Ounces:");
        $("#gramsoutput").html(0);
        $("#kilogramsoutput").html(0);
        $("#ouncesoutput").html(0);

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

    /************************
    ON SECOND BUTTON CLICK    
    ************************/
    $("#secondbutton").on("click", function () {

        $("input").val("");
        $("#firstbutton").text("G");
        $("#thirdbutton").text("OZ");
        $("#firstheading").html("Grams:");
        $("#thirdheading").html("Ounces:");
        $("#gramsoutput").html(0);
        $("#kilogramsoutput").html(0);
        $("#ouncesoutput").html(0);

        var changebutton; //CREATE VARIABLE FOR FUNCTION
        if ($(this).text() == "KG") { // IF THE BUTTON PRESSED WAS KILOGRAMS
            changebutton = function () { //FUNCTION NAMED "CHANGEBUTTON" EQUALS
                $("#secondbutton").text("LB"); // CHANGE BUTTON FROM KILOGRAMS TO POUNDS
                $("#metricinput").attr("placeholder", "enter weight in kilograms..."); //CHANGE UNIT TO KILOGRAMS
                $("#secondheading").html("Pounds:"); //CHANGE CARD HEADING TO POUNDS
                $("input").focus();
            };
        } else {
            changebutton = function () { //FUNCTION NAMED "CHANGEBUTTON" EQUALS
                $("#secondbutton").text("KG"); // CHANGE BUTTON FROM POUNDS TO KILOGRAMS
                $("#metricinput").attr("placeholder", "enter weight in pounds..."); //CHANGE UNIT TO POUNDS
                $("#secondheading").html("Kilograms:"); //CHANGE CARD HEADING TO KILOGRAMS
                $("input").focus();
            };
        }
        changebutton();
        $("input").focus();

    });

    /************************
    ON THIRD BUTTON CLICK    
    ************************/
    $("#thirdbutton").on("click", function () {

        $("input").val("");
        $("#firstbutton").text("G");
        $("#secondbutton").text("KG");
        $("#firstheading").html("Grams:");
        $("#secondheading").html("Kilograms:");
        $("#gramsoutput").html(0);
        $("#kilogramsoutput").html(0);
        $("#ouncesoutput").html(0);

        var changebutton; //CREATE VARIABLE FOR FUNCTION
        if ($(this).text() == "OZ") { // IF THE BUTTON PRESSED WAS OUNCES
            changebutton = function () { //FUNCTION NAMED "CHANGEBUTTON" EQUALS
                $("#thirdbutton").text("LB"); // CHANGE BUTTON FROM OUNCES TO POUNDS
                $("#metricinput").attr("placeholder", "enter weight in ounces..."); //CHANGE UNIT TO OUNCES
                $("#thirdheading").html("Pounds:"); //CHANGE CARD HEADING TO POUNDS
                $("input").focus();
            };
        } else {
            changebutton = function () { //FUNCTION NAMED "CHANGEBUTTON" EQUALS
                $("#thirdbutton").text("OZ"); // CHANGE BUTTON FROM POUNDS TO KILOGRAMS
                $("#metricinput").attr("placeholder", "enter weight in pounds..."); //CHANGE UNIT TO POUNDS
                $("#thirdheading").html("Ounces:"); //CHANGE CARD HEADING TO KILOGRAMS
                $("input").focus();
            };
        }
        changebutton();
        $("input").focus();

    });

    /******************
    ON INPUT CHANGE
    *******************/
    $("input").on("input", function () {

        var changeoutput;
        var numbercheck = function () {
            alert("Please Enter Numeric Values Only");
            $("input").val("");
            $("input").focus();
        };

        ($.isNumeric($(this).val())) ? $("input").focus(): numbercheck();

        if ($("#metricinput").attr("placeholder") == "enter weight in pounds...") {
            let output = $(this).val();
            changeoutput = function () {
                $("#gramsoutput").html((output / 0.002204).toFixed(2));
                $("#kilogramsoutput").html((output / 2.2046).toFixed(2));
                $("#ouncesoutput").html((output * 16).toFixed(2));
            }
        } else if ($("#metricinput").attr("placeholder") == "enter weight in grams...") {
            let output = $(this).val();
            changeoutput = function () {
                $("#gramsoutput").html((output * 0.0022046226).toFixed(2));
                $("#kilogramsoutput").html((output * 0.001).toFixed(2));
                $("#ouncesoutput").html((output * 0.035273962).toFixed(2));
            }
        } else if ($("#metricinput").attr("placeholder") == "enter weight in kilograms...") {
            let output = $(this).val();
            changeoutput = function () {
                $("#gramsoutput").html((output * 1000).toFixed(2));
                $("#kilogramsoutput").html((output * 2.2046226).toFixed(2));
                $("#ouncesoutput").html((output * 35.273962).toFixed(2));
            }
        } else if ($("#metricinput").attr("placeholder") == "enter weight in ounces...") {
            let output = $(this).val();
            changeoutput = function () {
                $("#gramsoutput").html((output * 28.349523).toFixed(2));
                $("#kilogramsoutput").html((output * 0.028349523).toFixed(2));
                $("#ouncesoutput").html((output * 0.0625).toFixed(2));
            }
        }
        changeoutput();
    });

});