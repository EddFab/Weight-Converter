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

    /************************
    ON FIRST BUTTON CLICK    
    ************************/
    $("#firstbutton").click(function () {
        var original;

        var whichbutton = ($(this).text = "G") ? "LB" : "G";

        function inputchangegram() {
            $("#metricinput").attr("placeholder", "enter weight in grams..."); //CHANGE UNIT TO GRAMS
            $("#firstbutton").text(whichbutton); //CHANGE BUTTON TO POUNDS
            $("#firstheading").html("Pounds:"); //CHANGE CARD HEADING TO POUNDS
            var original = false;
        }

        function inputchangepound() {
            $("#metricinput").attr("placeholder", "enter weight in pounds..."); //CHANGE UNIT TO POUNDS        
            $("#firstbutton").text(whichbutton); //CHANGE BUTTON TO GRAMS
            $("#firstheading").html("Grams:"); //CHANGE CARD HEADING TO GRAMS
            var orginial = true;
        }

        ($(this).text = "G") ? inputchangegram() : inputchangepound();
        /*
        if ($(this).text = "G") {
            $(this).text = ($(this).text = "G") ? inputchangegram() : inputchangepound();
        } else if ($(this).text = "LB") {
            $(this).text = ($(this).text = "G") ? inputchangegram() : inputchangepound();
        }*/

        //var currentmu = $("#metricinput").attr("placeholder"); //CREATE VARIABLE EQUAL TO THE CURRENT INPUT'S METRIC


        /*  if ($(this).text = "G") { // IF THE FIRST BUTTON CLICKED IS GRAMS
              $("#metricinput").attr("placeholder", "enter weight in grams..."); //CHANGE UNIT TO GRAMS
              $("#firstbutton").text(whichbutton); //CHANGE BUTTON TO POUNDS
              $("#firstheading").html("Pounds:"); //CHANGE CARD HEADING TO POUNDS
          }         
          
          else if (fake = false) {
              $("#metricinput").attr("placeholder", "enter weight in pounds..."); //CHANGE UNIT TO POUNDS
              $("#firstbutton").text(whichbutton); //CHANGE BUTTON TO GRAMS
              $("#firstheading").html("Grams:"); //CHANGE CARD HEADING TO GRAMS
          } */
    });

});