/*document.querySelector("").addEventListener("click",function()

==> cacher le blur 
==> cacher le welcolme content 
==> afficher le nav
==> afficher la page du slide)
*/

/* event pour afficher skill page en cliquant sur la slider skill*/
document.querySelectorAll(".skill").forEach(element =>{element.addEventListener("click", function(){
    document.querySelector(".content_bckgnd").classList.add("none");
    document.querySelector(".contact_page").classList.add("none");
    document.querySelector(".education_page").classList.add("none");
    document.querySelector(".skill_page").classList.remove("none");
})});
document.querySelectorAll(".education").forEach(element =>{element.addEventListener("click", function(){
    document.querySelector(".content_bckgnd").classList.add("none");
    document.querySelector(".contact_page").classList.add("none");
    document.querySelector(".skill_page").classList.add("none");
    document.querySelector(".education_page").classList.remove("none");
})});
document.querySelectorAll(".contact").forEach(element =>{element.addEventListener("click", function(){
    document.querySelector(".content_bckgnd").classList.add("none");
    document.querySelector(".skill_page").classList.add("none");
    document.querySelector(".education_page").classList.add("none");
    document.querySelector(".contact_page").classList.remove("none");
})});
document.querySelectorAll(".welcome").forEach(element =>{element.addEventListener("click", function(){
    document.querySelector(".contact_page").classList.add("none");
    document.querySelector(".skill_page").classList.add("none");
    document.querySelector(".education_page").classList.add("none");
    document.querySelector(".content_bckgnd").classList.remove("none");
})});
