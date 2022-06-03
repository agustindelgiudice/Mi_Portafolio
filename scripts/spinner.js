window.onload = function () {
    let contenedor = document.getElementById('contenedor_carga');

    contenedor.style.visibility = 'hidden';
    contenedor.style.opacity = '0';

    setTimeout((() => {
        contenedor.remove()

    }, 300))
}