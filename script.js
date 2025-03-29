
const bar = document.getElementById("bar");

const footerDateUpdate = document.getElementById("footerDateUpdate");

const close = document.getElementById("close");

const nav = document.getElementById("navbar");

if(bar){
    bar.addEventListener('click', () => {
        nav.classList.add("active")
    })
}


if(close){
    close.addEventListener('click', () => {
        nav.classList.remove("active")
    })
}

















































footerDateUpdate.textContent = new Date().getFullYear();