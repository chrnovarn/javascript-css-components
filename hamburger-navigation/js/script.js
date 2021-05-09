var hamburgerButton = document.getElementsByClassName("hamburger__button");
var hamburgerItems = document.querySelector(".hamburger__items");


[].forEach.call(hamburgerButton, function (m){
    m.addEventListener("click", () => {
        m.classList.toggle("open");
        hamburgerItems.style.display = hamburgerItems.style.display === 'block' ? 'none' : 'block';
        
    })
})