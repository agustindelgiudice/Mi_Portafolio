Swal.fire({ //al trabajar con objetos, no olvidar de la coma
    title: 'Bienvenido!',
    text: 'Gracias por visitar mi página web',
    // html: '<b>Hola!</b>'
    icon: 'error',
    /*warning, info, success, error, question */
    confirmButtonText: 'Skip',
    // footer: '<span class="alert-pie-pagina">Pie de página</span>',
    width: '90%',
    /**Si le pongo pixeles deja de ser responsive */
    padding: '1rem',
    // background: '#000',
    // grow: 'fullscreen' /* column (establece arriba)*/ 
    // backdrop: true, /*es el fondo oscuro que está detras */
    timer: 30000, /*cinco segundos y se cierra la ventana */
    timerProgressBar: true, /*MUESTRA UNA BARRA CON EL TIEMPO QUE LE QUEDA */
    toast: false, /*HACE LA VENTANA MAS PEQUEÑA */
    position: 'center',
    /* top, bottom-end, bottom, center */
    allowOutsideClick: 'true',
    /* PERMITE AL USUARIO AFUERA DEL ALERTA PARA CERRARLA */
    allowEscapeKey: 'false',
    /*Permite al usuario con la tecla escape cerrar la ventana */
    allowEnterKey: 'false',
    /*Con la tecla ENTER LO CIERRA */
    stopKeydownPropagation: 'true',
    /*cuanto tengamos la ventana activa, lo que va a sucederparar es que los eventos de tecleado no van a funcionar para la pagina, la prograpacion, es una tema mas avanzado, por defecto false.*/

    input: 'text',
    /*select, text */
    inputPlaceholder: 'Nombre',
    inputValue: '',
    inputOptions: {
        mexico: 'Mexico',
        españa: 'España'
    },

    /*Custom Class nos permite agregarle clases a cada uno de los elementos de nuestra vantana emergente. */

    customClass: { //agregamos clases para darle estilos en css
        // container: 'container-anuncio',
        popup: '',
        header: '',
        title: '',
        closeButton: '',
        icon: '',
        image:'',
        content:'',
        input:'',
        actions:'', //Contenedor buttton
        confirmButton:'',
        cancelButton:'',
    }
});