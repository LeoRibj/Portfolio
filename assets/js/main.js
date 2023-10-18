const acortri=document.querySelectorAll(".acor .tri")

acortri.forEach((tri) =>{
    tri.addEventListener('click',(e)=>{
        const acor = tri.parentElement

        const isopen = acor.classList.contains("open")

        if(isopen){
            acor.classList.remove("open")
        }else{
            acor.classList.add("open")
        }
    })
})
