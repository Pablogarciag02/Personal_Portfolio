//Code for my modal
const modal = document.querySelector("#mymodal");
const squarebtn = document.querySelector("#square")

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


//Defining each button as a const to then through href go to the page where i want it to go.
const Github1 = document.querySelector("#project1Github")
const page1 = document.querySelector("#project1Page")

const Github2 = document.querySelector("#project2Github")
const page2 = document.querySelector("#project2Page")

const Github3 = document.querySelector("#project3Github")
const page3 = document.querySelector("#project3Page")

const Github4 = document.querySelector("#project4Github")
const page4 = document.querySelector("#project4Page")

Github1.addEventListener("click",()=>{
    location.href = "https://github.com/richardguarnieri/personal-asset-manager"
});

page1.addEventListener("click",()=>{
    location.href = "https://richardguarnieri.github.io/personal-asset-manager/"
});


Github2.addEventListener("click",()=>{
    location.href = "https://github.com/Pablogarciag02/Real-Time-Weather-Info-SearchBar-"
});

page2.addEventListener("click",()=>{
    location.href = "https://pablogarciag02.github.io/Real-Time-Weather-Info-SearchBar-/"
});


Github3.addEventListener("click",()=>{
    location.href = "https://github.com/Pablogarciag02/HomeworkWeek4"
});

page3.addEventListener("click",()=>{
    location.href = "https://pablogarciag02.github.io/HomeworkWeek4/"
});


Github4.addEventListener("click",()=>{
    location.href = "https://github.com/Pablogarciag02/HomeworkWeek5"
});

page4.addEventListener("click",()=>{
    location.href = "https://pablogarciag02.github.io/HomeworkWeek5/"
});