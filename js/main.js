
  
  console.log("hola")  

  let productosEnCarrito = JSON.parse(localStorage.getItem("productos"))
 /*  
  let numerito = document.querySelector(".numerito")
  let cantCarrito = localStorage.getItem(".numerito") */


    renderCarrito(productosEnCarrito);
  
    function renderCarrito(productosEnCarrito) {
      const contenedorCarrito = document.querySelector("#contenedor-carrito");
      contenedorCarrito.innerHTML = "";
    
      productosEnCarrito.forEach(producto => {
        const div = document.createElement("div");
        div.classList.add("producto-carrito");
        div.innerHTML = `
          <img class="producto-imagen-carrito" src="${producto.imagen}" alt="${producto.nombre}">
          <div class="producto-detalles-carrito">
            <h3 class="producto-nombre-carrito">${producto.nombre}</h3>
            <p class="producto-precio-carrito">$${producto.precio}</p>
            <p class="producto-cantidad-carrito">Cantidad: ${producto.cantidad}</p>
            <button class="producto-eliminar" data-id="${producto.id}"><i class='bx bx-trash-alt' ></i></button>
          </div>`;
    
        contenedorCarrito.appendChild(div);
      });
      actualizarBotonesEliminar();
    }
    
    function actualizarBotonesEliminar() {
      const botonesEliminar = document.querySelectorAll(".producto-eliminar");
    
      botonesEliminar.forEach(boton => {
        boton.addEventListener("click", eliminarDelCarrito);
      });
    }

    function vaciarCarrito(){
      const botonVaciar = document.querySelector(".carrito-acciones-vaciar");

      botonVaciar.forEach(boton => {
        boton.addEventListener("click", vaciarCarritoBoton);
      })
    }
    
    function vaciarCarritoBoton() {
      productosEnCarrito = [];
    }

    function eliminarDelCarrito(e) {
  const idBoton = e.currentTarget.dataset.id;

  let productoEnCarrito;
  for (let i = 0; i < productosEnCarrito.length; i++) {
    if (productosEnCarrito[i].id === idBoton) {
      productoEnCarrito = productosEnCarrito[i];
      break;
    }
  }

  if (productoEnCarrito) {
    if (productoEnCarrito.cantidad > 1) {
      productoEnCarrito.cantidad--;
    } else {
      productosEnCarrito = productosEnCarrito.filter(producto => producto.id !== idBoton);
    }
    localStorage.setItem("productos", JSON.stringify(productosEnCarrito));

    Swal.fire({
      title: '¿Estás seguro?',
      text: 'Esto eliminará una unidad del producto del carrito',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sí, eliminar'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          'Eliminado',
          'Se ha eliminado una unidad del producto del carrito',
          'success'
        );
        renderCarrito(productosEnCarrito);
      }
    });
  }
}

  function accionesComprar() {
  const botonComprar = document.querySelector(".carrito-acciones-comprar");
  const carrito = document.querySelector("#contenedor-carrito");

  botonComprar.addEventListener("click", () => {
    Swal.fire({
      icon: 'success',
      title: '¡Muchas Gracias Por Tu Compra!',
    }).then((result) => {
      if (result.isConfirmed) {
        carrito.innerHTML = "";
      }
    });
  });
}

accionesComprar();

function vaciarCarrito() {
  const botonVaciar = document.querySelector(".carrito-acciones-vaciar");

  botonVaciar.addEventListener("click", () => {
    Swal.fire({
      title: '¿Estás seguro?',
      text: 'Esto vaciará tu carrito',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Sí, vaciar carrito',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
      
        productosEnCarrito = [];
        localStorage.removeItem('productos');
        Swal.fire('Carrito vaciado', 'Tu carrito ha sido vaciado', 'success');
        renderCarrito(productosEnCarrito);
      }
    });
  });
}

vaciarCarrito();





    