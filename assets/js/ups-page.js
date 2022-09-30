

const productCategories = document.querySelectorAll("#productCategories");


const kva3 = document.querySelectorAll(".kva3");
const kva6 = document.querySelectorAll(".kva6");
const kva10 = document.querySelectorAll(".kva10");
const kva15 = document.querySelectorAll(".kva15");
const kva20 = document.querySelectorAll(".kva20");
const kva30 = document.querySelectorAll(".kva30");
const kva40 = document.querySelectorAll(".kva40");
const kva60 = document.querySelectorAll(".kva60");
const kva80 = document.querySelectorAll(".kva80");
const kva100 = document.querySelectorAll(".kva100");
const kva120 = document.querySelectorAll(".kva120");
const kva200 = document.querySelectorAll(".kva200");
const kva250 = document.querySelectorAll(".kva250");
const kva300 = document.querySelectorAll(".kva300");
const kva400 = document.querySelectorAll(".kva400");
const kva500 = document.querySelectorAll(".kva500");
const kva600 = document.querySelectorAll(".kva600");

function products (btn, visible, hidden1, hidden2, hidden3, hidden4, hidden5, hidden6, hidden7, hidden8, hidden9, hidden10, hidden11, hidden12, hidden13, hidden14, hidden15, hidden16){
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
        hidden10.forEach(hidden10 => {
            hidden10.style.display = "none";
        });
        hidden11.forEach(hidden11 => {
            hidden11.style.display = "none";
        });
        hidden12.forEach(hidden12 => {
            hidden12.style.display = "none";
        });
        hidden13.forEach(hidden13 => {
            hidden13.style.display = "none";
        });
        hidden14.forEach(hidden14 => {
            hidden14.style.display = "none";
        });
        hidden15.forEach(hidden15 => {
            hidden15.style.display = "none";
        });
        hidden16.forEach(hidden16 => {
            hidden16.style.display = "none";
        });
    });
};


products(productCategories[0], kva3, kva6, kva10, kva15, kva20, kva30, kva40, kva60, kva80, kva100, kva120, kva200, kva250, kva300, kva400, kva500, kva600);
products(productCategories[1], kva6, kva3, kva10, kva15, kva20, kva30, kva40, kva60, kva80, kva100, kva120, kva200, kva250, kva300, kva400, kva500, kva600);
products(productCategories[2], kva10, kva6, kva3, kva15, kva20, kva30, kva40, kva60, kva80, kva100, kva120, kva200, kva250, kva300, kva400, kva500, kva600);
products(productCategories[3], kva15, kva6, kva10, kva3, kva20, kva30, kva40, kva60, kva80, kva100, kva120, kva200, kva250, kva300, kva400, kva500, kva600);
products(productCategories[4], kva20, kva6, kva10, kva15, kva3, kva30, kva40, kva60, kva80, kva100, kva120, kva200, kva250, kva300, kva400, kva500, kva600);
products(productCategories[5], kva30, kva6, kva10, kva15, kva20, kva3, kva40, kva60, kva80, kva100, kva120, kva200, kva250, kva300, kva400, kva500, kva600);
products(productCategories[6], kva40, kva6, kva10, kva15, kva20, kva30, kva3, kva60, kva80, kva100, kva120, kva200, kva250, kva300, kva400, kva500, kva600);
products(productCategories[7], kva60, kva6, kva10, kva15, kva20, kva30, kva40, kva3, kva80, kva100, kva120, kva200, kva250, kva300, kva400, kva500, kva600);
products(productCategories[8], kva80, kva6, kva10, kva15, kva20, kva30, kva40, kva60, kva3, kva100, kva120, kva200, kva250, kva300, kva400, kva500, kva600);
products(productCategories[9], kva100, kva6, kva10, kva15, kva20, kva30, kva40, kva60, kva80, kva3, kva120, kva200, kva250, kva300, kva400, kva500, kva600);
products(productCategories[10], kva120, kva6, kva10, kva15, kva20, kva30, kva40, kva60, kva80, kva100, kva3, kva200, kva250, kva300, kva400, kva500, kva600);
products(productCategories[11], kva200, kva6, kva10, kva15, kva20, kva30, kva40, kva60, kva80, kva100, kva120, kva3, kva250, kva300, kva400, kva500, kva600);
products(productCategories[12], kva250, kva6, kva10, kva15, kva20, kva30, kva40, kva60, kva80, kva100, kva120, kva200, kva3, kva300, kva400, kva500, kva600);
products(productCategories[13], kva300, kva6, kva10, kva15, kva20, kva30, kva40, kva60, kva80, kva100, kva120, kva200, kva250, kva3, kva400, kva500, kva600);
products(productCategories[14], kva400, kva6, kva10, kva15, kva20, kva30, kva40, kva60, kva80, kva100, kva120, kva200, kva250, kva300, kva3, kva500, kva600);
products(productCategories[15], kva500, kva6, kva10, kva15, kva20, kva30, kva40, kva60, kva80, kva100, kva120, kva200, kva250, kva300, kva400, kva3, kva600);
products(productCategories[16], kva600, kva6, kva10, kva15, kva20, kva30, kva40, kva60, kva80, kva100, kva120, kva200, kva250, kva300, kva400, kva500, kva3);






















































































// const productCategories = document.querySelectorAll("#productCategories");


// const kva3 = document.querySelectorAll(".3_kva");
// const kva6 = document.querySelectorAll(".6_kva");
// const kva10 = document.querySelectorAll(".10_kva");
// const kva15 = document.querySelectorAll(".15_kva");
// const kva20 = document.querySelectorAll(".20_kva");
// const kva30 = document.querySelectorAll(".30_kva");
// const kva40 = document.querySelectorAll(".40_kva");
// const kva60 = document.querySelectorAll(".60_kva");
// const kva80 = document.querySelectorAll(".80_kva");
// const kva100 = document.querySelectorAll(".100_kva");
// const kva120 = document.querySelectorAll(".120_kva");
// const kva200 = document.querySelectorAll(".200_kva");
// const kva250 = document.querySelectorAll(".250_kva");
// const kva300 = document.querySelectorAll(".300_kva");
// const kva400 = document.querySelectorAll(".400_kva");
// const kva500 = document.querySelectorAll(".500_kva");
// const kva600 = document.querySelectorAll(".600_kva");

// function products (btn, visible, hidden1, hidden2, hidden3, hidden4, hidden5, hidden6, hidden7 , hidden8, hidden9, hidden10, hidden11, hidden12, hidden13, hidden14, hidden15, hidden16){
//     btn.addEventListener("click", ()=>{
//         visible.forEach(visible => {
//             visible.style.display = "block"
//         });
//         hidden1.forEach(hidden1 => {
//             hidden1.style.display = "none";
//         });
//         hidden2.forEach(hidden2 => {
//             hidden2.style.display = "none";
//         });
//         hidden3.forEach(hidden3 => {
//             hidden3.style.display = "none";
//         });
//         hidden4.forEach(hidden4 => {
//             hidden4.style.display = "none";
//         });
//         hidden5.forEach(hidden5 => {
//             hidden5.style.display = "none";
//         });

//         hidden6.forEach(hidden6 => {
//             hidden6.style.display = "none";
//         });

//         hidden7.forEach(hidden7 => {
//             hidden7.style.display = "none";
//         });

//         hidden8.forEach(hidden8 => {
//             hidden8.style.display = "none";
//         });

//         hidden9.forEach(hidden9 => {
//             hidden9.style.display = "none";
//         });

//         hidden10.forEach(hidden10 => {
//             hidden10.style.display = "none";
//         });

//         hidden11.forEach(hidden11 => {
//             hidden11.style.display = "none";
//         });

//         hidden12.forEach(hidden12 => {
//             hidden12.style.display = "none";
//         });

//         hidden13.forEach(hidden13 => {
//             hidden13.style.display = "none";
//         });

//         hidden14.forEach(hidden14 => {
//             hidden14.style.display = "none";
//         });

//         hidden15.forEach(hidden15 => {
//             hidden15.style.display = "none";
//         });

//         hidden16.forEach(hidden16 => {
//             hidden16.style.display = "none";
//         });
//     });
// };


// products(productCategories[0], kva3, kva6, kva10, kva15, kva20, kva30, kva40, kva60, kva80, kva100, kva120, kva200, kva250, kva300, kva400, kva500, kva600);
// products(productCategories[1], kva6, kva3, kva10, kva15, kva20, kva30, kva40, kva60, kva80, kva100, kva120, kva200, kva250, kva300, kva400, kva500, kva600);
// products(productCategories[2], kva10, kva6, kva3, kva15, kva20, kva30, kva40, kva60, kva80, kva100, kva120, kva200, kva250, kva300, kva400, kva500, kva600);
// products(productCategories[3], kva15, kva6, kva10, kva3, kva20, kva30, kva40, kva60, kva80, kva100, kva120, kva200, kva250, kva300, kva400, kva500, kva600);
// products(productCategories[4], kva20, kva6, kva10, kva15, kva3, kva30, kva40, kva60, kva80, kva100, kva120, kva200, kva250, kva300, kva400, kva500, kva600);
// // products(productCategories[5], kva3, kva6, kva10, kva15, kva20, kva30, kva40, kva60, kva80, kva100, kva120, kva200, kva250, kva300, kva400, kva500, kva600);
// // products(productCategories[6], kva3, kva6, kva10, kva15, kva20, kva30, kva40, kva60, kva80, kva100, kva120, kva200, kva250, kva300, kva400, kva500, kva600);
// // products(productCategories[7], kva3, kva6, kva10, kva15, kva20, kva30, kva40, kva60, kva80, kva100, kva120, kva200, kva250, kva300, kva400, kva500, kva600);
// // products(productCategories[8], kva3, kva6, kva10, kva15, kva20, kva30, kva40, kva60, kva80, kva100, kva120, kva200, kva250, kva300, kva400, kva500, kva600);
// // products(productCategories[9], kva3, kva6, kva10, kva15, kva20, kva30, kva40, kva60, kva80, kva100, kva120, kva200, kva250, kva300, kva400, kva500, kva600);
// // products(productCategories[10], kva3, kva6, kva10, kva15, kva20, kva30, kva40, kva60, kva80, kva100, kva120, kva200, kva250, kva300, kva400, kva500, kva600);
// // products(productCategories[11], kva3, kva6, kva10, kva15, kva20, kva30, kva40, kva60, kva80, kva100, kva120, kva200, kva250, kva300, kva400, kva500, kva600);
// // products(productCategories[12], kva3, kva6, kva10, kva15, kva20, kva30, kva40, kva60, kva80, kva100, kva120, kva200, kva250, kva300, kva400, kva500, kva600);
// // products(productCategories[13], kva3, kva6, kva10, kva15, kva20, kva30, kva40, kva60, kva80, kva100, kva120, kva200, kva250, kva300, kva400, kva500, kva600);
// // products(productCategories[14], kva3, kva6, kva10, kva15, kva20, kva30, kva40, kva60, kva80, kva100, kva120, kva200, kva250, kva300, kva400, kva500, kva600);
// // products(productCategories[15], kva3, kva6, kva10, kva15, kva20, kva30, kva40, kva60, kva80, kva100, kva120, kva200, kva250, kva300, kva400, kva500, kva600);
// // products(productCategories[16], kva3, kva6, kva10, kva15, kva20, kva30, kva40, kva60, kva80, kva100, kva120, kva200, kva250, kva300, kva400, kva500, kva600);