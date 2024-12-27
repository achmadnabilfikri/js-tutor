let role= document.createElement("input");
let messages;
let dietaryService = "first";
let onOnOne= "two"
role.type = "text";

switch (role) {
    case "employee":
        messages= dietaryService;
        break;

    case "enrolled member":
        messages= dietaryService && onOnOne;
        break;
    
    case "subscriber" :
        messages= dietaryService;
        break;
    
    default:
        messages= "please subscribe first"
}