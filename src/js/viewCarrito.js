// Estos botones son para el carrito en la parte superior
const btnACCar = document.querySelector('.fa-shopping-cart');
const carrito = document.querySelector('.carrito');

// Este boton esta adentro del carrito

// Eventos

btnACCar.addEventListener('click', abriendoCar);

function abriendoCar() {
	carrito.classList.toggle('mode-car-ocultar');
}
