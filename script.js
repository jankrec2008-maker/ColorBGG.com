const btn = document.querySelector(".kontakt1");
const toast = document.getElementById("toast");

btn.addEventListener("click", function () {
    const textToCopy = "background-image: linear-gradient(to bottom right, #4400ff, #000002);";


    navigator.clipboard.writeText(textToCopy).then(() => {
        
        toast.classList.add("show");

        
        setTimeout(() => {
            toast.classList.remove("show");
        }, 2000);
    });
});

const btn1 = document.querySelector(".kontakt2");
const toast2 = document.getElementById("toast2");


btn1.addEventListener("click", function () {
    const textToCopy = "background-image: linear-gradient(to bottom right, #ff8800, #ffffff)";


    navigator.clipboard.writeText(textToCopy).then(() => {
        
        toast2.classList.add("show2");

        
        setTimeout(() => {
            toast2.classList.remove("show2");
        }, 2000);
    });
});
const btn3 = document.querySelector(".kontakt3");
const toast3 = document.getElementById("toast3");


btn3.addEventListener("click", function () {
    const textToCopy = "background-image: linear-gradient(to bottom right, #ff0000, #ff067a)";


    navigator.clipboard.writeText(textToCopy).then(() => {
        
        toast3.classList.add("show3");

        
        setTimeout(() => {
            toast3.classList.remove("show3");
        }, 2000);
    });
});