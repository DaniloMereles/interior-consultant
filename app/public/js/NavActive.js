const navActive = () => {
    const navLinks = document.getElementById('nav__links')
    const hamburger = document.getElementById('nav__hamburger')

    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active')

        if(navLinks.className === "nav__links active"){
            hamburger.innerHTML = `<i class="fas fa-times"></i>`
        }else{
            hamburger.innerHTML = `<i class="fas fa-bars"></i>`
        }
    })
}

navActive()