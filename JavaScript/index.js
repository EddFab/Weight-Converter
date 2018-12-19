document.getElementById("lbsinput").addEventListener('input', function(e){
    let lbs = e.target.value;
    document.getElementById("gramsoutput").innerHTML = lbs / 0.002204;
    document.getElementById("kilogramsoutput").innerHTML = lbs / 2.2046;
    document.getElementById("ouncesoutput").innerHTML = lbs * 16;
});