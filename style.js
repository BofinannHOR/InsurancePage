const icon = document.getElementById("icon");
const mobilelist= document.getElementById("mobilelist");

icon.addEventListener('click', ()=>{
    icon.classList.toggle("show");
     mobilelist.classList.toggle('show');
});