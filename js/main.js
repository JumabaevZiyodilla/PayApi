let elInner = document.querySelector(".site-header__inner");
let elBtn = document.querySelector(".site-header__btn");
let elNavBtn = document.querySelector(".nav__btn");

elBtn.addEventListener("click" , function(){
  elInner.classList.toggle("site-header__inner--active");
})

elNavBtn.addEventListener("click" , function(){
  elInner.classList.remove("site-header__inner--active");
})