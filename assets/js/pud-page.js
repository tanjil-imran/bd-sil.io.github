const productData = document.querySelectorAll("#productData");


const basic = document.querySelectorAll(".basic");
const metered = document.querySelectorAll(".metered");
const outlet = document.querySelectorAll(".outlet");
const switched = document.querySelectorAll(".switched");

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


products(productData[0], basic, metered, outlet, switched);
products(productData[1], metered, basic, outlet, switched);
products(productData[2], outlet, metered, basic, switched);
products(productData[3], switched, metered, outlet, basic);



