



function display() {

    let userName = document.getElementById("name").value;
    let age = document.getElementById("age").value;
    let email = document.getElementById("email").value;
    let job = document.getElementById("job").value;
    let designation = document.getElementById("designation").value;
    let productType = document.getElementById("productType").value;
    let feedback = document.getElementById("feedbackText").value;
    
    //display
    document.getElementById("userName").innerHTML= userName;
    
    document.getElementById    
    ("userAge").innerHTML=age;
    
    document.getElementById    
    ("userEmail").innerHTML=email;

    document.getElementById    
    ("userJob").innerHTML=job;
    
    document.getElementById   
    ("userDesignation").innerHTML=designation;

    document.getElementById   
    ("userProductChoice").innerHTML=productType;

    document.getElementById("userFeedback").innerHTML=feedback;

    document.getElementById("userInfo").style.display = "block";
}

const button = document.getElementById("submitButton");

button.onclick= display;

