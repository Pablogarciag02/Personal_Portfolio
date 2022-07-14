//Code for my modal
const modal = document.querySelector("#mymodal");
const squarebtn = document.querySelector("#square");
const gobackbtn = document.querySelector("#goback");

modal.style.display = "none";

squarebtn.addEventListener("click", () => {
    console.log(squarebtn)
    if (modal.style.display === "none") {
        modal.style.display = "block";
      } else { console.log(squarebtn)
        modal.style.display = "none";
    }
})

window.addEventListener('click', (event) => {
    if (event.target == modal) {
        modal.style.display = "none";
    }
});

window.addEventListener('touch', (event) => {
    if (event.target == modal) {
        modal.style.display = "none";
    }
});


// This is added because on apple phones, window click or touch dont seem to be working
gobackbtn.addEventListener("click", () =>{
    modal.style.display = "none";
})

gobackbtn.addEventListener("touch", () =>{
    modal.style.display = "none";
})

