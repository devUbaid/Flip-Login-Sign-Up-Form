document.querySelector("#signbtn").addEventListener('click', ()=>{
    document.querySelector(".container").style.transform="rotateY(180deg)";
    document.querySelector(".head").innerHTML="create account";
});

document.querySelector("#loginbtn").addEventListener('click', ()=>{
    document.querySelector(".container").style.transform="rotateY(0deg)";
    document.querySelector(".head").innerHTML="login account";
});