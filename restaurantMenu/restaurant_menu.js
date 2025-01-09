const breakfastMenu = ["Pancakes", "Egg benedict", "Oatmeal", "Frittata"];
const maincourseMenu = ["Steak", "Pasta", "Burger", "Salmon"];
const dessertMenu = ["Cake", "Ice Cream", "Pudding", "Fruit Salad"];

// breakfast menu looping 
const breakfastMenuItemsHTML = breakfastMenu.map((item, index) => `<p>Item ${index + 1}: ${item}</p>`).join("");
document.getElementById("breakfastMenuItems").innerHTML= breakfastMenuItemsHTML;


//maincourse looping
let maincourseItem = '';
maincourseMenu.forEach((item, index) => {
    maincourseItem += `<p> Item ${index + 1}: ${item} </p>` ;
});
document.getElementById("maincourseMenuItems").innerHTML = maincourseItem;

//dessert looping
let dessertItem ='';
for (let i=0; i < dessertMenu.length; i++) {
    dessertItem += `<p> item ${i + 1}: ${dessertMenu[i]}</p>`;
}
document.getElementById("dessertMenuItems").innerHTML = dessertItem;