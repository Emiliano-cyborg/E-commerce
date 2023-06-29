
  console.log("hola")  

  let productosEnCarrito = JSON.parse(localStorage.getItem("productos"))
  
  let numerito = document.querySelector(".numerito")
  let cantCarrito = localStorage.getItem(".numerito")


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
      numerito.textContent = cantCarrito
      localStorage.setItem("numerito", cantCarrito)
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
      numerito.textContent = cantCarrito
      cantCarrito = 0
      localStorage.setItem("numerito", cantCarrito)
    }

    function eliminarDelCarrito(e) {
      const idBoton = e.currentTarget.dataset.id;
    
    productosEnCarrito = productosEnCarrito.filter(producto => producto.id !== idBoton);
    localStorage.setItem("productos", JSON.stringify(productosEnCarrito))
    
      renderCarrito(productosEnCarrito);
    }
    