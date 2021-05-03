/*===== MENU SHOW =====*/ 
const showMenu = (navToogle, navMenu) =>{
  const toggle = document.getElementById(navToogle),
  nav = document.getElementById(navMenu)

  if(toggle && nav){
      toggle.addEventListener('click', ()=>{
          nav.classList.toggle('show')
      })
  }
}
showMenu('navToogle','navMenu')

/*===== ACTIVE AND REMOVE MENU =====*/
const navLink = document.querySelectorAll('.nav_link');   

function linkAction(){
/*Active link*/
navLink.forEach(n => n.classList.remove('active'));
this.classList.add('active');

/*Remove menu mobile*/
const navMenu = document.getElementById('navmenu')
navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click', linkAction));