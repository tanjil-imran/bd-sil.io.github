const productData = document.querySelectorAll("#productData");


const batterypack = document.querySelectorAll(".batterypack");
const card = document.querySelectorAll(".card");
const parallel = document.querySelectorAll(".parallel");
const rail = document.querySelectorAll(".rail");
const pdm = document.querySelectorAll(".pdm");

function products (btn, visible, hidden1, hidden2, hidden3, hidden4){
    btn.addEventListener("click", ()=>{
        visible.forEach(visible => {
            visible.style.display = "block";
        });
        hidden1.forEach(hidden1 => {
            hidden1.style.display = "none";
        });
        hidden2.forEach(hidden2 => {
            hidden2.style.display = "none";
        });
        hidden3.forEach(hidden3 => {
            hidden3.style.display = "none";
        });
        hidden4.forEach(hidden4 => {
            hidden4.style.display = "none";
        });
    });
};


products(productData[0], batterypack, card, parallel, rail, pdm);
products(productData[1], card, batterypack, parallel, rail, pdm);
products(productData[2], parallel, card, batterypack, rail, pdm);
products(productData[3], rail, card, parallel, batterypack, pdm);
products(productData[4], pdm, card, parallel, rail, batterypack);

