let intro = document.querySelector('.intro');
let logo = document.querySelector('.logo-header');
let logoSpan = document.querySelectorAll('.logo-splash');

window.addEventListener('DOMContentLoaded', () => {
/*Calculo el tiempo del texto de bienvenida */

    setTimeout(() => {

        logoSpan.forEach((span, idx) => {
            setTimeout(() => {
                span.classList.add('active2')
            }, (idx + 1) * 1000)
        });

        setTimeout(() => {
            logoSpan.forEach((span, idx) => {

                setTimeout(() => {
                    span.classList.remove('active2');
                    span.classList.add('fade');
                }, (idx + 1) * 1000)
            })

        }, 2000);

        setTimeout(() => {
            intro.style.top = '-100vh';
        }, 4000)


    })
})

    
    


