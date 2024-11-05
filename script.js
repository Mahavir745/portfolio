const aboutUs = document.querySelector("#aboutUs")
const menu = document.querySelector(".header_container #child1 #child1_items #element1")
const child1 = document.querySelector(".main_container #child1")

menu.addEventListener("click",()=>{
  child1.classList.toggle("menu_bar")
})