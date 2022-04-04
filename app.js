const menuBtn = document.querySelector(".navbar-container-trigger-btn");
    menuBtn.addEventListener("click", ()=>{
        const menuContainer = document.querySelector(".navbar-container")
        menuContainer.classList.toggle('show');
    })

const closeBtn = document.querySelectorAll(".topnav-menu-container-trigger-btn");
closeBtn.forEach( btn =>{
    btn.addEventListener("click", ()=>{
        const topnavMenuContainer = document.querySelector(".topnav-menu-container");
        topnavMenuContainer.classList.toggle("hide")
    })
})