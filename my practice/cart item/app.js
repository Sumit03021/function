const cart=document.querySelector('.cart')
const section=document.querySelector('section')
const addbtn=document.getElementsByClassName('add-btn')
const removebtn=document.getElementsByClassName('remove-btn')
const article=Array.from(section.children)

let arr=[];
for(let i of addbtn){
    i.addEventListener('click',()=>{
        console.log("yes")
        arr.push(article[i]);
        cart.innerHTML=arr.join("")
    })
}
for(let i of removebtn){
    i.addEventListener('click',()=>{
        arr.pop(article[i])
        cart.innerHTML=arr.join("")
    })
}