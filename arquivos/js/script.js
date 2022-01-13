// Motrar menu

const mostrarMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show')
        })
    }
}

mostrarMenu('nav-toggle','nav-menu')

// Ativar e remover menu

const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    // active do link menu
    navLink.forEach(n => n.classList.remove('active'))
    this.classList.add('active')

    // remover menu mobile

    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show')
    
}

navLink.forEach(n => n.addEventListener('click', linkAction))