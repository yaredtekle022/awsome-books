let listSection = document.querySelector(".list-section")
let addSection = document.querySelector(".add-section")
let contactSection = document.querySelector(".contact-section")
let listButton = document.querySelector(".list-button")
let addButton = document.querySelector(".add-button")
let contactButton = document.querySelector(".contact-button")

function showList(){
    addSection.classList.add("modal-disappear")
    contactSection.classList.add("modal-disappear")
    listSection.classList.add("modal-appear")
    console.log('list')
};
function showAdd(){
    addSection.classList.add("modal-appear")
    contactSection.classList.add("modal-disappear")
    listSection.classList.add("modal-disappear")
    console.log('add')
};
function showContact(){
    addSection.classList.add("modal-disappear")
    contactSection.classList.add("modal-appear")
    listSection.classList.add("modal-disappear")
    console.log('contact')
};
listButton.addEventListener("click", (e) => {
    showList()

});
addButton.addEventListener("click", (e) => {
    showAdd()

});
contactButton.addEventListener("click", (e) => {
    showContact()
});



