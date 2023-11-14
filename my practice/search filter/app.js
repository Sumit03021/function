const section = document.querySelector('section')
const input = document.querySelector('input');

input.addEventListener('keyup',()=>{
    let inputvalue=input.value.toUpperCase();
    let article=section.querySelectorAll('article')

    for(let i=0;i<article.length;i++){
        let h1=article[i].firstElementChild.querySelector('h1')
        if(h1.innerHTML.toUpperCase().indexOf(inputvalue)>-1){
            article[i].style.display="initial";
        }else{
            article[i].style.display="none";
        }
    }
})

const button=document.getElementsByTagName('button')
const article=Array.from(section.children)

for(let i of article){
    const first=i.firstElementChild.firstElementChild;
    const x=first.textContent.trim().toUpperCase();
    i.setAttribute('category',x);
}

for(let i of article){
    const last=i.firstElementChild.lastElementChild;
    const x=last.textContent.trim().toUpperCase();
    const y=Number(x.substring(3))
    i.setAttribute('data-price',y)
}
function highToLow(a,b){
  let ax=a.getAttribute('data-price');
  let bx=b.getAttribute('data-price');
  return bx-ax;
}

button[0].addEventListener('click',()=>{
    if(section.firstChild){
        while(section.firstChild){
            section.removeChild(section.firstChild)
        }
    }
    section.append(...article.sort(highToLow))
})

for(let i=1;i<button.length;i++){
    button[i].addEventListener('click',()=>{
        const displayitems=button[i].getAttribute('data-filter').toUpperCase();
        for(let j of article){
            if(j.getAttribute('category').toUpperCase()==displayitems){
                j.style.display=""
            }else{
                j.style.display="none"
            }
        }
        section.append(...article)
    })
}





















