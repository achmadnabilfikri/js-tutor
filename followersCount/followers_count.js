let count = 0;

function countDisplay() {
    document.getElementById("countDisplay").innerHTML= count;
}

function increaseCount() {
    count++;
    countDisplay();
    checkCountValue();
}

function checkCountValue() {
    if (count===30) {
        alert("Your instagram follower has gain 30, kepp it up");
    } 
    else if(count===40) {
        alert("your instgram follower has gain 40, keep it up");
    } 
    else if(count===50) {
        alert("your instgram follower has gain 50, keep it up");
    } 
}