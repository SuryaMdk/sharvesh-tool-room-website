const button = document.querySelector(".navbar-button");
const navlist = document.querySelector(".navbar-items");

button.addEventListener("click", function(){
	navlist.classList.toggle("hide");
});