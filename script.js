const menuToggle = document.querySelector('.menuToggle');
const ulMenu = document.querySelector('#nav-div-list');
const burger_spans = document.querySelectorAll('.span_rotate');

menuToggle.addEventListener("click", displayMenu)

function displayMenu(){
	menuToggle.classList.toggle('rotate_class')
	ulMenu.classList.toggle("ulToggle");
}

window.onscroll = function(){
	menuToggle.classList.remove('rotate_class')
	ulMenu.classList.remove("ulToggle");
}
console.log(burger_spans);