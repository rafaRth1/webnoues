<?php 
	
	require 'includes/funciones.php';
	incluirTemplate('header');

?>
		<main class="site-main">
			<div class="fantas-box"></div>
			<div class="new-arri">
				<span>Shop All</span>
				<div class="line"></div>
			</div>

			<section class="site-img">
				<div class="card">
					<img src="build/img/1-min.jpg" alt="" data-id="1" />

					<div class="overlay">Quick View</div>

					<div class="dates-card">
						<p>I'm a product</p>
						<p class="precio-date">$ <span>32.00</span></p>
					</div>
				</div>

				<div class="card">
					<img src="build/img/2-min.jpg" alt="" data-id="2" />

					<div class="overlay">Quick View</div>

					<div class="dates-card">
						<p>I'm a product</p>
						<p class="precio-date">$ <span>12.00</span></p>
					</div>
				</div>

				<div class="card">
					<img src="build/img/3-min.jpg" alt="" data-id="3" />

					<div class="overlay">Quick View</div>

					<div class="dates-card">
						<p>I'm a product</p>
						<p class="precio-date">$ <span>54.00</span></p>
					</div>
				</div>

				<div class="card">
					<img src="build/img/4(1)-min.jpg" alt="" data-id="4" />

					<div class="overlay">Quick View</div>

					<div class="dates-card">
						<p>I'm a product</p>
						<p class="precio-date">$ <span>15.00</span></p>
					</div>
				</div>

				<div class="card">
					<img src="build/img/4-min.jpg" alt="" data-id="5" />

					<div class="overlay">Quick View</div>

					<div class="dates-card">
						<p>I'm a product</p>
						<p class="precio-date">$ <span>67.00</span></p>
					</div>
				</div>

				<div class="card">
					<img src="build/img/5-min.jpg" alt="" data-id="6" />

					<div class="overlay">Quick View</div>

					<div class="dates-card">
						<p>I'm a product</p>
						<p class="precio-date">$ <span>64.00</span></p>
					</div>
				</div>

				<div class="card">
					<img src="build/img/6-min.jpg" alt="" data-id="7" />

					<div class="overlay">Quick View</div>

					<div class="dates-card">
						<p>I'm a product</p>
						<p class="precio-date">$ <span>25.00</span></p>
					</div>
				</div>

				<div class="card">
					<img src="build/img/7-min.jpg" alt="" data-id="8" />

					<div class="overlay">Quick View</div>

					<div class="dates-card">
						<p>I'm a product</p>
						<p class="precio-date">$ <span>24.00</span></p>
					</div>
				</div>

				<div class="card">
					<img src="build/img/8-min.jpg" alt="" data-id="9" />

					<div class="overlay">Quick View</div>

					<div class="dates-card">
						<p>I'm a product</p>
						<p class="precio-date">$ <span>65.00</span></p>
					</div>
				</div>

				<div class="card">
					<img src="build/img/9-min.jpg" alt="" data-id="10" />

					<div class="overlay">Quick View</div>

					<div class="dates-card">
						<p>I'm a product</p>
						<p class="precio-date">$ <span>34.00</span></p>
					</div>
				</div>

				<div class="card">
					<img src="build/img/10-min.jpg" alt="" data-id="11" />

					<div class="overlay">Quick View</div>

					<div class="dates-card">
						<p>I'm a product</p>
						<p class="precio-date">$ <span>67.00</span></p>
					</div>
				</div>

				<div class="card">
					<img src="build/img/11-min.jpg" alt="" data-id="12" />

					<div class="overlay">Quick View</div>

					<div class="dates-card">
						<p>I'm a product</p>
						<p class="precio-date">$ <span>44.00</span></p>
					</div>
				</div>
			</section>

			<div class="desplegar">
				<div class="card">
					<img src="build/img/1-min.jpg" alt="" data-id="1" />
					<div class="overlay">Quick View</div>
					<div class="dates-card">
						<p>I'm a product</p>
						<p class="precio-date">$ <span>32.00</span></p>
					</div>
				</div>

				<div class="card">
					<img src="build/img/2-min.jpg" alt="" data-id="2" />
					<div class="overlay">Quick View</div>
					<div class="dates-card">
						<p>I'm a product</p>
						<p class="precio-date">$ <span>12.00</span></p>
					</div>
				</div>

				<div class="card">
					<img src="build/img/3-min.jpg" alt="" data-id="3" />
					<div class="overlay">Quick View</div>
					<div class="dates-card">
						<p>I'm a product</p>
						<p class="precio-date">$ <span>54.00</span></p>
					</div>
				</div>

				<div class="card">
					<img src="build/img/4(1)-min.jpg" alt="" data-id="4" />
					<div class="overlay">Quick View</div>
					<div class="dates-card">
						<p>I'm a product</p>
						<p class="precio-date">$ <span>15.00</span></p>
					</div>
				</div>
			</div>
		</main>

		<div class="sk-folding-cube">
			<div class="sk-cube1 sk-cube"></div>
			<div class="sk-cube2 sk-cube"></div>
			<div class="sk-cube4 sk-cube"></div>
			<div class="sk-cube3 sk-cube"></div>
		</div>

		<button id="load-more">Load More</button>

		<div id="miCarrito" class="vistaProducto">
			<div class="view-contenido">
				<i class="fas fa-times btn-borrar"></i>
				<div class="contenidoVistaRapida"></div>
			</div>
		</div>

		<!-- PARTE DEL CARRITO -->

		<div class="carrito">
			<div class="site-header-card">
				<p>
					<!-- 	<button>></button> -->
					Cart
				</p>
			</div>
			<div class="objects-card">
				<div class="contenedor-carrito">
					<ul></ul>
				</div>
			</div>

			<div class="precio-total">
				<p>Subtotal</p>
				<span id="precio">$0</span>
			</div>

			<hr class="separador" />

			<div class="view-car">View Card</div>
		</div>

		<!-- FIN DEL CARRITO -->

<?php 	incluirTemplate('footer'); ?>
	
