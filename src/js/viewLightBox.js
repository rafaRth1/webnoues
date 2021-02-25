// Importanciones

// Variables
const vistaRapida = document.querySelector('.vistaRapida');
const box = document.querySelector('.vistaProducto');
const contenidoVista = document.querySelector('.contenidoVistaRapida');
const contenedorProductos = document.querySelector('.site-main');

// Contenedor del carrito
const contenedorCarrito = document.querySelector('.contenedor-carrito ul');
let productosCarrito = [];
let total;

document.addEventListener('DOMContentLoaded', () => {
	contenedorProductos.addEventListener('click', abriendoLigthBox);
	contenedorCarrito.addEventListener('click', eliminarProducto);
});

// Funciones

// Abre el lightBox
function abriendoLigthBox(e) {
	e.preventDefault();
	if (
		e.target.classList.contains('overlay') ||
		e.target.classList.contains('txt')
	) {
		box.style.opacity = 1;
		box.style['pointer-events'] = 'auto';
		const producto = e.target.parentElement;
		// Envio los datos del producto para presentar en el lightbox
		leerDatosProducto(producto);
	}
	cerrarLightBox();
}

// Cierra lightbox
function cerrarLightBox() {
	const btnBorrar = document.querySelector('.btn-borrar');
	btnBorrar.addEventListener('click', (e) => {
		e.preventDefault();
		box.style.opacity = 0;
		box.style['pointer-events'] = 'none';
	});
}

function leerDatosProducto(producto) {
	// Objeto del producto para la pantalla
	const infoProducto = {
		imagen: producto.querySelector('img').src,
		titulo: producto.querySelector('.dates-card p').innerText,
		precio: Number(
			producto.querySelector('.dates-card .precio-date span').innerText
		),
		cantidad: Number(1),
		id: producto.querySelector('img').getAttribute('data-id'),
		size: '',
	};
	insertHTMLightBox(infoProducto);
	validacionesProduct(infoProducto);
}

function insertHTMLightBox(productoObject) {
	// Creo mi div para insertar la imagen y sus datos
	/* console.log(productoObject); */
	const { imagen, titulo, precio, cantidad, id } = productoObject;

	eliminaHTMLContentVista();

	const div = document.createElement('div');
	div.classList.add('d-grid', 'm-2');
	div.innerHTML = `
		
		<img src="${imagen}" alt=""/ class="w-100">
		<div class="m-boxligh-date">
			<p class="title-deco">${titulo}</p>
			<span class="precio-date"  style="margin: 0!important;"> $${precio}</span>
			<p style="font-family: 'Oswald',
			sans-serif; color: #acacaa;
			font-size: 1.3rem";
			"> SKU: 0014</p>
			<div class="site-size">
				<p style="font-family: 'Roboto',sans-serif;
				color: #000000;
				font-weigth: 300; 
				font-size: 1.6rem";
				>Size</p>
				<select name="size" id="size" class="select-deco" >
					<option value="">Select Size</option>
					<option value="Large">Large</option>
					<option value="Medium">Medium</option>
					<option value="Small">Small</option>
				</select>
			</div>
	
			<div class="site-btnAddCard" >
				<button class="btn-addCard" 
				style="width: 300px!important;
				margin: 4rem 0 0 0 ;
				padding: 1.7rem;
				">
				Add to Card</button>
			</div>

			<section>
				<a href="#" class="closing-buy"
				style="font-size: 1.4rem;
				color:#000000;
				font-family: 'Roboto',sans-serif;
				margin: 2rem;
				display: block;
				">View More Details</a>
				<p style="font-family: 'Roboto',sans-serif;
				font-size: 1.6rem;
				">Product Info</span>
				<p class="info-product">
					I'm a product detail. I'm a great place to add more information 
					about your product such as sizing, material, care and cleaning instructions. 
					This is also a great space to write what makes this product special and how 
					your customers can benefit from this item.
				</p>
			</section>
		</div>
	
	`;
	/* 	<div class="site-quantify">
				<p style="font-family: 'Roboto',sans-serif;
				color: #000000;
				font-weigth: 300; 
				font-size: 1.6rem";
				>Quantify</p>
			</div>
			<section>
				<input type="number" max="10" placeholder="Seleccione Cantidad" min="1" class="input-number-deco">
			</section> */

	contenidoVista.appendChild(div);
}

function validacionesProduct(productoObject) {
	// Boton para agregar al carrito
	const btnAddCard = document.querySelector('.btn-addCard');

	// Este evento agregará un producto al contenedor del carrito
	btnAddCard.addEventListener('click', () => {
		// VALIDAR SI LOS DATOS SON CORRECTOS

		const size = document.querySelector('#size').value;
		productoObject.size = size;
		if (size === '') {
			alert('Rellene Correctamente', 'danger');
			return;
		} else {
			alert('Con exito!!');
		}

		// VALIDAD SI EL PRODUCTO EXISTE PARA NO DUPLICARLOS

		if (
			productosCarrito.some((producto) => producto.id === productoObject.id)
		) {
			const productos = productosCarrito.map((producto) => {
				if (producto.id === productoObject.id) {
					producto.cantidad++;
					return producto;
				} else {
					return producto;
				}
			});
			productosCarrito = [...productos];
		} else {
			productosCarrito = [...productosCarrito, productoObject];
		}

		console.log(productosCarrito);
		agregarAlcarrito();
		sumarPrecioProducto();
	});
}

// ELIMINA EL PRODUCTO DEL CARRITO
function eliminarProducto(e) {
	e.preventDefault();
	// Despues de agregar al carrito, creo la funcion de borra del carro

	if (e.target.classList.contains('borrar-curso')) {
		const cursoId = e.target.getAttribute('data-id');

		const arr = productosCarrito.filter(
			(producto) => producto.id === cursoId
		);
		restarPrecioELiminado(arr);

		productosCarrito = productosCarrito.filter(
			(producto) => producto.id !== cursoId
		);

		agregarAlcarrito();
	}
}

// FUNCION QUE IMPRIME EN EL CARRITO
function agregarAlcarrito() {
	eliminarHTMLCarrito();

	// Imprime el HTML en el carrito
	productosCarrito.forEach((producto) => {
		/* const { imagen, titulo, precio, id, cantidad } = producto; */
		const li = document.createElement('li');
		li.classList.add('deco-li-carrito');
		li.innerHTML = `
				<img
					src="${producto.imagen}"
					alt=""
				/>
				<div class="date-min-car">
					<p>${producto.titulo}</p>
					<span>$${producto.precio}</span>
					<p>Size: ${producto.size}</p>
					<input type="text" value="${producto.cantidad}" disabled/>
					<a href="#" class="borrar-curso" data-id="${producto.id}"> x </a>
				</div>
			`;

		contenedorCarrito.appendChild(li);
	});
}

function restarPrecioELiminado(arr) {
	arr.forEach((producto) => {
		let a = producto.cantidad * producto.precio;
		total = total - a;
		actualizarPrecio();
	});
}

function sumarPrecioProducto() {
	total = productosCarrito.reduce(
		(acc, { cantidad, precio }) => acc + cantidad * precio,
		0
	);

	actualizarPrecio();
}

function actualizarPrecio() {
	return (document.querySelector('#precio').textContent = `$${total}`);
}

// ALERTAS
function alert(message, type) {
	const siteSize = document.querySelector('.m-boxligh-date');
	const div = document.createElement('div');
	let errores = document.querySelectorAll('.error');

	if (type === 'danger') {
		div.classList.add('alert-danger', 'error');
		div.textContent = message;

		if (errores.length === 0) {
			siteSize.insertBefore(div, document.querySelector('.site-btnAddCard'));
		}
	} else {
		div.classList.add('alert-noDanger', 'error');
		div.textContent = message;

		if (errores.length === 0) {
			siteSize.insertBefore(div, document.querySelector('.site-btnAddCard'));
		}
	}

	setTimeout(() => {
		div.remove();
	}, 3000);
}

// ESTAS FUNCIONES ELIMINA EL HTML PREVIO

function eliminaHTMLContentVista() {
	while (contenidoVista.firstChild) {
		contenidoVista.removeChild(contenidoVista.firstChild);
	}
}

function eliminarHTMLCarrito() {
	while (contenedorCarrito.firstChild) {
		contenedorCarrito.removeChild(contenedorCarrito.firstChild);
	}
}

// Javascript para la pagina shopALl

const btnLoadMore = document.querySelector('#load-more');

btnLoadMore.addEventListener('click', deployImg);

function deployImg() {
	const spinner = document.querySelector('.sk-folding-cube');
	spinner.style.display = 'block';
	btnLoadMore.style.display = 'none';

	setTimeout(() => {
		spinner.style.display = 'none';

		const desplegar = document.querySelector('.desplegar');
		desplegar.style.display = 'grid';
	}, 3000);
}
