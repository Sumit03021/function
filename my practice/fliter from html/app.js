const section=document.querySelector('section')
const article=Array.from(section.children);
const button=document.getElementsByTagName('button')

for(let i of article){
    const last=i.firstElementChild.lastElementChild;
    const x=last.textContent.trim();
    const y=Number(x.substring(3));
    i.setAttribute('data-price',y);
}

function lowToHigh(a,b){
    const ax=a.getAttribute('data-price')
    const bx=b.getAttribute('data-price')
    return ax-bx;
}

function highToLow(a,b){
    const ax=a.getAttribute('data-price');
    const bx=b.getAttribute('data-price');
    return bx-ax;
}
button[3].onclick=()=>{
    if(section.firstChild){
        while(section.firstChild){
            section.removeChild(section.firstChild)
        }
    }
    section.append(...article.sort(lowToHigh))
}
button[4].onclick=()=>{
    if(section.firstChild){
        while(section.firstChild){
            section.removeChild(section.firstChild)
        }
    }
    section.append(...article.sort(highToLow))
}
let arr=[];
for(let i of article){
    const first=i.firstElementChild.firstElementChild;
    const x=first.textContent.trim().toUpperCase();
    i.setAttribute('category',x);
}

let arr1=[];
let arr2=[];
let arr3=[];
for(let i=0;i<6;i++){
    if(article[i].getAttribute('category')=="BREAKFAST"){
        arr1.push(article[i].innerHTML);
    }else if(article[i].getAttribute('category')=="LUNCH"){
        arr2.push(article[i].innerHTML);
    }else if(article[i].getAttribute('category')=="DINNER"){
        arr3.push(article[i].innerHTML);
    }
}

button[0].onclick=()=>{
    section.innerHTML=arr1.join("");
}
button[1].onclick=()=>{
    section.innerHTML=arr2.join("");
}
button[2].onclick=()=>{
    section.innerHTML=arr3.join("");
}




















































































