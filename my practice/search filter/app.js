const section=document.querySelector('section')
const input =document.querySelector('input');

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

for(let i of button){
 
}

for(let i=1;i<button.length;i++){
    const displayitem=button[i].getAttribute('data-filer').toUpperCase();
    button[i].addEventListener('click',()=>{
        if(article[i].getAttribute('category')==displayitem){
            article[i].style.display=""
        }else{
            article[i].style.display="none"
        }
        section.append(...article)
    })
}





















