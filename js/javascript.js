// Nombres y apellidos: Noelia Castillo Rodriguez

// console.log("hola");

const botonMenu = document.getElementById('menu-toggle');
const navegacion = document.getElementById('navegacion');

function showHideMenu() {
    navegacion.classList.toggle('abierto');

    if(navegacion.classList.contains('abierto')){
        botonMenu.textContent = 'X Tancar';
    } else {
        botonMenu.textContent = '☰ Menu';
    }
}

botonMenu.addEventListener('click', showHideMenu);
