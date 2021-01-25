new Glide('.glide').mount();

let animacion = document.querySelectorAll('.animacion');
let header = document.getElementById('header');

document.getElementById('cuerpo').addEventListener('click', function(){
    let scrollTop = document.documentElement.scrollTop;
    //console.log(scrollTop);
    if(scrollTop > 200){
        header.classList.remove('header');
        header.classList.add('headerScroll');
    }
    else{
        header.classList.add('header');
        header.classList.remove('headerScroll');
    }
})

let historia = document.getElementById('historiaa');
historia.addEventListener('click', function(){
    scrollTo(0,2200);

})
