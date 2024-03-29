const canvas = document.querySelector('canvas')
canvas.width = window.innerWidth;
canvas.height = 600;
const ctx = canvas.getContext('2d')


const navbar = document.getElementById(navbar)

canvas.addEventListener('click',()=>{
   ctx.strokeRect(0,0,navbar.width,navbar.height)
})












