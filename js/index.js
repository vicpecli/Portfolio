
function HideMenuLeft(){
    if(document.getElementById('menuLeft').classList.contains('view')){
        closeMenuLeft()
    }else {
        openMenuLeft()
    }
}

function closeMenuLeft(){
 
    console.log(document.getElementById('menuLeft').classList.contains('view'))
    document.getElementById('menuLeft').classList.remove('view');
    document.getElementById('menuLeft').className +=' disappear';

}
function openMenuLeft(){
 
    document.getElementById('menuLeft').classList.remove('disappear');
    document.getElementById('menuLeft').className +=' view';
    setTimeout(closeMenuLeft, 5000);

    
    
}


//Observadores del scroll

const faders = document.querySelectorAll('.fade-in')

const slidersLeft = document.querySelectorAll(".fade-in-left")
const slidersRight = document.querySelectorAll(".fade-in-right")
const slidersUp = document.querySelectorAll(".fade-in-up")

const slidersBouncing = document.querySelectorAll(".fade-in-bouncing")

const navbar =  document.querySelectorAll(".navbar")

const appearOptions={
    treshold: 0,
    rootMargin: "0px 0px -400px 0px"
};


const appearOnScroll = new IntersectionObserver(function(entries, appearOnScroll){

    entries.forEach(entry => {
        
        if(!entry.isIntersecting){
            return;
        }else{
            entry.target.classList.add('appear')
            appearOnScroll.unobserve(entry.target)
        }
    });


},appearOptions);


faders.forEach(fader=>{
     appearOnScroll.observe(fader)

})


slidersLeft.forEach(slider=>{
    appearOnScroll.observe(slider)

})



slidersRight.forEach(slider=>{
    appearOnScroll.observe(slider)
})

slidersUp.forEach(slider=>{
    appearOnScroll.observe(slider)
})

slidersBouncing.forEach(slider=>{
    appearOnScroll.observe(slider)
})

navbar.forEach(slider=>{
    appearOnScroll.observe(slider)
})





$('.navbar a').on('click', function(e){
    if(this.hash!==''){
        e.preventDefault();
        console.log(this.hash)

        // Para ordenador 100
        // Para Movil 300
        if($(window).width()>991){
            var minusposition = 100
        } else {
            var minusposition = 280
        }

        var posicion = $(this.hash).offset().top;

        $("html, body").animate({
            scrollTop: posicion-minusposition
        }, 2000); 
    }

});



$(document).ready(function(){
    var y = $(this).scrollTop()
    if(y>0){
        console.log('Soy mayor', y)
        $("html, body").animate({
            scrollTop: 0
        }, 3000);
    }else{
        console.log('Soy igual', y)
    }
           
 })



function collapseNavbar(){
                                                               

if(document.getElementById('navbarToggler').classList.contains('collapse')){
    document.getElementById('navbarToggler').classList.remove('collapse')
}else{
    document.getElementById('navbarToggler').classList.add('collapse')
}

}


// window.onload = function () {

//     var ln = navigator.language || navigator.userLanguage;
//     /*Validar que no se encuentre en la pagina correspondiente a su idioma*/
//     let pagActual = window.location.pathname;
    
//     console.log(ln)
    
//     if (ln == 'en-EN' && !pagActual.includes("indexEn")) {
//         window.location.href = 'indexEn.html';  
//     } else if (ln == 'es-ES' && !pagActual.includes("indexEs")) {
//         window.location.href = 'index.html';
//     } else if (ln == 'de-DE' && !pagActual.includes("indexDe")){
//         window.location.href = 'indexDe.html';
//     } else{
//       console.log("Otro idioma");
//     }
 
//  }