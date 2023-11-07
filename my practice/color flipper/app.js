const simplebtn = document.querySelector('.simple-btn')
const simplecolor = document.querySelector('.simple-color')
const simple=document.querySelector('.bac-simple')
let spans=document.createElement('span')
spans.innerText="";
simple.append(spans)

simplebtn.addEventListener('click',()=>{
    let j=Math.floor(256*Math.random());
    let k=Math.floor(256*Math.random());
    let l=Math.floor(256*Math.random());
   simpleText = "rgb" +"("+j+","+ k +","+ l +")";
   spans.innerText=simpleText;
   simplecolor.style.backgroundColor=simpleText;
})





















