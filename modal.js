let listSection = document.querySelector(".list-section")
let addSection = document.querySelector(".add-section")
let contactSection = document.querySelector(".contact-section")
let listButton = document.querySelector(".list-button")
let addButton = document.querySelector(".add-button")
let contactButton = document.querySelector(".contact-button")
function showList(){
    listSection.style.display = "none"
    console.log('none')
};
listButton.addEventListener("click", (e) => {
    showList();
});