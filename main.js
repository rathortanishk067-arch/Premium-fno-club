// ==========================
// Premium F&O Club
// script.js
// ==========================

// Live Online Counter
const online = document.getElementById("online");

let count = 5947;

setInterval(() => {

let random = Math.floor(Math.random()*5)-2;

count += random;

if(count<5900){
count=5900;
}

if(count>6100){
count=6020;
}

online.innerHTML=count;

},2500);


// Fade Animation on Scroll

const observer=new IntersectionObserver((entries)=>{

entries.forEach((entry)=>{

if(entry.isIntersecting){

entry.target.classList.add("fade");

}

});

});

document.querySelectorAll(".feature,.box,.join,.heading").forEach((el)=>{

observer.observe(el);

});


// Button Click Effect

document.querySelectorAll(".join").forEach((btn)=>{

btn.addEventListener("click",()=>{

btn.style.transform="scale(.96)";

setTimeout(()=>{

btn.style.transform="scale(1)";

},180);

});

});


// Counter Animation

document.querySelectorAll(".box h2").forEach((item)=>{

const target=item.innerText;

item.innerText="0";

let current=0;

let end=parseInt(target);

let speed=40;

let timer=setInterval(()=>{

current++;

item.innerText=current;

if(target.includes("%")){

item.innerText=current+"%";

}

if(target.includes("+")){

item.innerText=current+"+";

}

if(current>=end){

item.innerText=target;

clearInterval(timer);

}

},speed);

});


//