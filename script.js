let sections = document.querySelectorAll(`section`);
let nevLinks = document.querySelectorAll(`header nav a`);

window.onscroll = () => {
    sections.forEach(sec => {
     let top = window.scrollY;
     let offset = sec.offsetTop - 150;
     let  height = sec.offsetHeight(`id`);

     if(top >= offset && top < offset + height){
        navLinks.forEach(links => {
            links.classList.remove(`active`);
            document.querySelector(`header nav a[href*=` + id + `]`).classList.add(`active`)
        })
     }
    });
};