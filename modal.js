let listSection = document.querySelector(".list-section")
let addSection = document.querySelector(".add-section")
let contactSection = document.querySelector(".contact")
let listButton = document.querySelector(".list-button")
let addButton = document.querySelector(".add-button")
let contactButton = document.querySelector(".contact-button")
function showList(){
    listSection.style.display = "none"
    console.log('none')
};
listButton.addEventListener("click", (e) => {
    listSection.style.display = "none";

});

contactSection.addEventListener('click', (e) => {
    listSection.style.display = 'none';
    addSection.style.display = 'none';
    contactSection.style.display = 'flex'
});

