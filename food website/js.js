let menu = document.querySelector('#menu-bar');
let navbar = document.querySelector('.navbar');

menu.onclick = () =>{menu.classList.toggle('fa-times');
                     navbar.classList.toggle('active');}

window.onscroll = () =>{

menu.classList.remove('fa-times');
navbar.classList.remove('active');

  if(window.scrollY > 60){
    document.querySelector('#scroll-top').classList.add('active');
  }else{
    document.querySelector('#scroll-top').classList.remove('active');}
}

/*-------------------------- top --------------------------*/

window.onscroll = () =>{

menu.classList.remove('fa-times');
navbar.classList.remove('active');

  if(window.scrollY > 100){
    document.querySelector('#scroll-top').classList.add('active');
  }else{
    document.querySelector('#scroll-top').classList.remove('active');}
}

/*-------------------------- loading --------------------------*/

function loader(){
  document.querySelector('.loader-container').classList.add('fade-out');}

function fadeOut(){setInterval(loader, 3000);}

window.onload = fadeOut();

/*-------------------------- order --------------------------*/

document.querySelector('.order form .btn').onclick = () => {
		document.querySelector('.order .show').style.display = 'block';}
	
document.querySelector('.order .show .pop button').onclick = () => {
	document.querySelector('.order .show').style.display = 'none';}

