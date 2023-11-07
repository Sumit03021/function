const answer=document.getElementsByClassName('inner-answer')
const icon=document.getElementsByTagName('i')
for(let i=0;i<icon.length;i++){
    icon[i].addEventListener('click',()=>{
       if(icon[i].classList.contains('fa-plus')){
        icon[i].classList.remove('fa-plus')
        icon[i].classList.add('fa-minus')
        answer[i].style.display="block"
       }else{
        icon[i].classList.remove('fa-minus')
        icon[i].classList.add('fa-plus')
        answer[i].style.display="none"
       }
    })
}































