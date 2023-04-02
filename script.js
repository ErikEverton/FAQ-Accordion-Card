const questions =  document.querySelectorAll(".question");
const elements = document.querySelectorAll(".disable");
const imagesArrow = document.querySelectorAll(".img-arrow");
const paragraphs = document.querySelectorAll(".para");

questions.forEach((question, index) => {
    question.addEventListener("click", function() {
        elements[index].classList.toggle("enable");
        
        if(imagesArrow[index].getAttribute("src") === "images/icon-arrow-down.svg") imagesArrow[index].src = "images/icon-arrow-up.svg";
        else imagesArrow[index].src = "images/icon-arrow-down.svg";

        paragraphs[index].classList.toggle("title");
    })
})