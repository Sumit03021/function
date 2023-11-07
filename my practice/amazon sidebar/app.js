const navopen=document.getElementById('open-nav-sidebar')
const sideopen=document.getElementById('sidebar-show')
const sideclose=document.getElementById('sidebar-close')
const sidecontain=document.querySelector('.sidebar-container')
navopen.addEventListener('click',()=>{
sidecontain.style.transform="translateX(0%)"
})

sideclose.addEventListener('click',()=>{
    sidecontain.style.transform="translateX(-100%)"
})












