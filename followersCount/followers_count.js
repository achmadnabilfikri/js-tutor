let count =0;

function increaseCount() {
    count++;
    countDisplay();
}

function countDisplay() {
    document.getElementById("countDisplay").innerHTML= count;
}

