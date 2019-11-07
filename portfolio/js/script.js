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
// event pour action cliquer sur le boutton affiche le paragraphe associer de la page education 

document.querySelector(".it_button").addEventListener("click", () =>{
    document.querySelector(".it_education").classList.toggle("none");
    document.querySelector(".it_button").classList.toggle("margin_after");
    document.querySelector(".it_button").classList.toggle("margin_before");

});
document.querySelector(".op_button").addEventListener("click", () =>{
    document.querySelector(".op_education").classList.toggle("none");
    document.querySelector(".op_button").classList.toggle("margin_after");
    document.querySelector(".op_button").classList.toggle("margin_before");

});
document.querySelector(".isema_button").addEventListener("click", () =>{
    document.querySelector(".isema_education").classList.toggle("none");
    document.querySelector(".isema_button").classList.toggle("margin_after");
    document.querySelector(".isema_button").classList.toggle("margin_before");

});
document.querySelector(".bts_button").addEventListener("click", () =>{
    document.querySelector(".bts_education").classList.toggle("none");
    document.querySelector(".bts_button").classList.toggle("margin_after");
    document.querySelector(".bts_button").classList.toggle("margin_before");

});
