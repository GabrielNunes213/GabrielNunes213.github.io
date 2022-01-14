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

//Efeito carregar pagina devagar

const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2000,
    delay: 200,
//     reset: true
});

sr.reveal('.home__data, .about__img, .skills__subtitle, .skills__text',{}); 
sr.reveal('.home__img, .about__subtitle, .contatos__subtitle, .about__text, .skills__img',{delay: 400}); 
sr.reveal('.home__social-icon, .contatos-div',{ interval: 200}); 
sr.reveal('.skills__data, .projetos__img, .contact__input',{interval: 200}); 
