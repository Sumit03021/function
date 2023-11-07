const hexabtn=document.querySelector('.hexa-btn');
const hexa=[0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F'];
const hexacolor=document.querySelector('.hexa-color');
const color=document.querySelector('.bac-hexa')
let span=document.createElement('span')
color.append(span);
span.innerText="";
let hexaText="#";
hexabtn.addEventListener('click',()=>{
    for(let i=0;i<6;i++){
      let random=Math.floor(16*Math.random());
      hexaText+=hexa[random];
    }
    span.innerText=hexaText;
    hexacolor.style.backgroundColor=hexaText;
    hexaText="#";
})




