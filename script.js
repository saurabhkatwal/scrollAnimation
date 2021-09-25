const box=document.querySelectorAll('.box');
window.addEventListener('scroll',function(){
    const triggerBottom=(window.innerHeight/5*4);
    box.forEach(box=>{
        const boxtop=box.getBoundingClientRect().top;
        if(boxtop<triggerBottom){
            box.classList.add('show');
        }
        else{
            box.classList.remove('show');
        }
    })
})