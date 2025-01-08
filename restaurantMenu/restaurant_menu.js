const breakfastMenu = ["Pancakes", "Egg benedict", "Oatmeal", "Frittata"];
const maincourseMenu = ["Steak", "Pasta", "Burger", "Salmon"];
const dessert = ["Cake", "Ice Cream", "Pudding", "Fruit Salad"];

// breakfast menu looping 
const breakfastMenuItemsHTML = breakfastMenu.map((item, index) => `<p>Item ${index + 1}: ${item}</p>`).join("");
document.getElementById("breakfastMenuItems").innerHTML= breakfastMenuItemsHTML;


//maincourse looping
let maincourseItem = "";
maincourseMenu.forEach((item, index) => {
    maincourseItem += `<p> Item ${index + 1}: ${item} </p>` ;
});
document.getElementById("maincoursemenuItems").innerHTML = maincourseItem;