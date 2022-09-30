const productData = document.querySelectorAll("#productData");


const rack = document.querySelectorAll(".rack");
const kvm = document.querySelectorAll(".kvm");
const cable = document.querySelectorAll(".cable");
const fixed = document.querySelectorAll(".fixed");
const blanking = document.querySelectorAll(".blanking");
const sliding = document.querySelectorAll(".sliding");
const power = document.querySelectorAll(".power");
const sensor = document.querySelectorAll(".sensor");
const roof = document.querySelectorAll(".roof");

function products (btn, visible, hidden1, hidden2, hidden3, hidden4, hidden5, hidden6, hidden7, hidden8, hidden9){
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
        hidden5.forEach(hidden5 => {
            hidden5.style.display = "none";
        });
        hidden6.forEach(hidden6 => {
            hidden6.style.display = "none";
        });
        hidden7.forEach(hidden7 => {
            hidden7.style.display = "none";
        });
        hidden8.forEach(hidden8 => {
            hidden8.style.display = "none";
        });
        hidden9.forEach(hidden9 => {
            hidden9.style.display = "none";
        });
    });
};


products(productData[0], rack, kvm, cable, fixed, blanking, sliding, power, sensor, roof);
products(productData[1], kvm, rack, cable, fixed, blanking, sliding, power, sensor, roof);
products(productData[2], cable, kvm, rack, fixed, blanking, sliding, power, sensor, roof);
products(productData[3], fixed, kvm, cable, rack, blanking, sliding, power, sensor, roof);
products(productData[4], blanking, kvm, cable, fixed, rack, sliding, power, sensor, roof);
products(productData[5], sliding, kvm, cable, fixed, blanking, rack, power, sensor, roof);
products(productData[6], power, kvm, cable, fixed, blanking, sliding, rack, sensor, roof);
products(productData[7], sensor, kvm, cable, fixed, blanking, sliding, power, rack, roof);
products(productData[8], roof, kvm, cable, fixed, blanking, sliding, power, sensor, rack);



