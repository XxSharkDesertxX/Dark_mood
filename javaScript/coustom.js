const Toggle_button = document.querySelector("#Toggle");
const Divs = document.querySelectorAll("div");
const Body = document.querySelector("body");
let Data = true;
Toggle_button.addEventListener("change",(e)=>{
    e.preventDefault();
    for(let i of Divs){
        i.classList.toggle("change_theme");
    }
    if (Data== true) {
        Body.style.backgroundColor="gray";
        Data=false;
    }else{
        Body.style.backgroundColor="var(--background_main)";
        Data=true;
    }
});


