/*
document.getElementById("lbsinput").addEventListener('input', function(e){
    let lbs = e.target.value;
    document.getElementById("gramsoutput").innerHTML = lbs / 0.002204;
    document.getElementById("kilogramsoutput").innerHTML = lbs / 2.2046;
    document.getElementById("ouncesoutput").innerHTML = lbs * 16;
});
*/

$(document).ready(function () {
    
    /************************
    ON FIRST BUTTON CLICK    
    ************************/
    $("#firstbutton").click(function () {
        
        var currentmu = $("#metricinput").attr("placeholder");
        
        if ( $("#firstbutton").html = "G" ) {
            if (currentmu = "enter weight in pounds..."){
                
            }
        } else if ( $("#firstbutton").html = "G" ) {
            
        }
        
        /*
        if ($("#metricinput").attr("placeholder") == "enter weight in pounds...") {// IF THE CURRENT UNIT IS POUNDS
            $("#metricinput").attr("placeholder", "enter weight in grams...");// CHANGE UNIT TO GRAMS
            $("#firstbutton").html("LB");//CHANGE BUTTON TO POUNDS
            $("#firstheading").html("Pounds");//CHANGE CARD HEADING TO POUNDS
        } else {
            $("#metricinput").attr("placeholder", "enter weight in pounds...");
            $("#firstbutton").html("G");
            $("#firstheading").html("Grams");
        }*/
        
    });

});