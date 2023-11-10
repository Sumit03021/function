const btn=document.querySelector('button')
const video=document.querySelector('video')

btn.addEventListener('click',()=>{
    if(btn.children[0].classList.contains("switch-btn")){
        btn.children[0].classList.remove('switch-btn')
        btn.children[1].classList.add('switch-btn')
        video.play();
        // video.onratechange(10)
    }else{
        btn.children[1].classList.remove('switch-btn')
        btn.children[0].classList.add('switch-btn')
        video.pause();
    }
})
























