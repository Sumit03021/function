const decbtn=document.querySelector('.decrease')
const resetbtn=document.querySelector('.reset')
const incbtn=document.querySelector('.increase')
const counter=document.querySelector('.counter')
let span=document.createElement('span')
counter.append(span);
let count=0;
decbtn.addEventListener('click',()=>{
count--;
span.innerText= count;
if(count<0){
    counter.style.backgroundColor="red"
}
})

resetbtn.addEventListener('click',()=>{
count=0;
span.innerText= count;
if(count==0){
    counter.style.backgroundColor="white"
}
})


incbtn.addEventListener('click',()=>{
count++;
span.innerText= count;
if(count>0){
    counter.style.backgroundColor="green"
}
})















