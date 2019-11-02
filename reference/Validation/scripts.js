var quantity = [1,2,3,4,5];
var products = ["cats", "dogs", "snakes", "lizards"]

var myString = "";
for(var i = 0; i < quantity.length; i++){
    myString += "<option>" + quantity[i] + "</option>";
}
document.getElementById('quantity').innerHTML = myString;

// myString = "";
// for(var i = 0; i < products.length; i++){
//     myString += "<option>" + products[i] + "</option>";
// }
// document.getElementById('products').innerHTML = myString;

products.forEach(function(el){
    var productSelections = document.createElement("option");
    productSelections.value = el;
    productSelections.innerHTML = el;
    document.getElementById("productSelection").appendChild(productSelections);
});

function validateData(frm){
    var isValid = true;
    if(frm.name.value == ""){
        isValid = false;
        document.getElementById('alertName').innerHTML = "required fields are missing";
        document.getElementById('alertName').style.color = "red";
        frm.name.style.backgroundColor = "red";        
    }  
    if(frm.email.value == ""){
        isValid = false;
        document.getElementById('alertEmail').innerHTML = "required fields are missing";
        document.getElementById('alertEmail').style.color = "red";
        frm.email.style.backgroundColor = "red";        
    }  
    if(frm.phoneNumber.value == ""){
        isValid = false;
        document.getElementById('alertPhone').innerHTML = "required fields are missing";
        document.getElementById('alertPhone').style.color = "red";
        frm.phoneNumber.style.backgroundColor = "red";        
    }  
    return isValid;
}

function printQuery(){
    var query = window.location.search.substring(1);
    var valPairs = query.split("&");
    for(var i = 0; i < valPairs.length; i++){
        var pair = valPairs[i].split("=");
        document.write(`${pair[0]} gets ${pair[1]}<br>`);
    }
}
