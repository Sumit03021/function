let cart=document.querySelector('.cart')
let section=document.querySelector('section')
let addbtn=document.getElementsByClassName('add-btn')
let removebtn=document.getElementsByClassName('remove-btn')
let article=Array.from(section.children)

let arr=[];
for(let i of addbtn){
    i.addEventListener('click',()=>{
        console.log("yes")
        arr.push(article[i]);
    })
}
for(let i of removebtn){
    i.addEventListener('click',()=>{
        arr.pop(article[i])
    })
}



















