var myName = "My name is Nick";
console.log(myName.length);
console.log(myName.charAt(4));

for(var i = 0; i < myName.length; i++){
    console.log(myName.charAt(i));
}

//********************************* Three Uses of Regex */

//************************* Validation */
var phoneNumber = "281-733-9060";
var regex = /\d{3}[.-]\d{3}[.-]\d{4}/
var isValidNumber = regex.test(phoneNumber);
console.log(isValidNumber);

//************************* Extraction */
var address = "1570 Alyeska Point rd, Lampe, MO 65681";
var extractedInfo = address.match(/[A-Z]+\s\d{5}/g);
console.log(extractedInfo);

//************************* Replacement */
var name = "Nick love cats, Nick has cats";
var replacement = name.replace(/Nick/gi, "Pazuzu");
console.log(replacement);