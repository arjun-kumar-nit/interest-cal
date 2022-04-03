let btn = document.getElementById("btn");



btn.addEventListener("click", function(e) {

    let Principal = document.getElementById("principal").value;
    let Rate = document.getElementById("rate").value;
    let Time = document.getElementById("time").value;
    let Output = document.getElementById("output");
    if (Principal != "" && Rate != "" && Time != "") {
        var totalAmount = Principal * (1 + (Rate / 100)) ** Time;
        let compIn = totalAmount - Principal;
        Output.innerHTML = Math.floor(compIn);

    } else {
        Output.innerHTML = "Please enter all Fields...!!!"
    }



})