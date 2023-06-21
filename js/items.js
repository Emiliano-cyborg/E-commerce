const productos = [
  // Productos de la categoría Baño
  {
    id: "bano 1",
    nombre: "Cesto Premium De Ropa",
    marca: "MarcaBaño",
    precio: 25000,
    imagen: "../img/baño/cesto01.jpg",
    categoria: {
      nombre: "Baño",
      id: "bano"
    }
  },
  {
    id: "bano 2",
    nombre: "Cesto de Tela",
    marca: "MarcaBaño",
    precio: 17000,
    imagen: "../img/baño/cesto02.jpg",
    categoria: {
      nombre: "Baño",
      id: "bano"
    }
  },
  {
    id: "bano 3",
    nombre: "Cesto de Ropa Alta Calidad de Plastico",
    marca: "MarcaBaño",
    precio: 20000,
    imagen: "../img/baño/cesto03.jpg",
    categoria: {
      nombre: "Baño",
      id: "bano"
    }
  },
  {
    id: "bano 4",
    nombre: "Cepillo Limpiadro",
    marca: "MarcaBaño",
    precio: 8000,
    imagen: "../img/baño/limpiador01.jpg",
    categoria: {
      nombre: "Baño",
      id: "bano"
    }
  },
  {
    id: "bano 5",
    nombre: "Cepillo Limpiador Premium",
    marca: "MarcaBaño",
    precio: 12000,
    imagen: "../img/baño/limpiador02.jpg",
    categoria: {
      nombre: "Baño",
      id: "bano"
    }
  },
  {
    id: "bano 6",
    nombre: "Cesto Para Ropa",
    marca: "MarcaBaño",
    precio: 18000,
    imagen: "../img/baño/cesto04.jpg",
    categoria: {
      nombre: "Baño",
      id: "bano"
    }
  },
  {
    id: "bano 7",
    nombre: "Jabonera de Cristal",
    marca: "MarcaBaño",
    precio: 11000,
    imagen: "../img/baño/jabonera01.jpg",
    categoria: {
      nombre: "Baño",
      id: "bano"
    }
  },
  {
    id: "bano 8",
    nombre: "Tacho De Basura Premium",
    marca: "MarcaBaño",
    precio: 16000,
    imagen: "../img/baño/tacho01.jpg",
    categoria: {
      nombre: "Baño",
      id: "bano"
    }
  },
  // Productos de la categoría Cocina
  {
    id: "cocina 1",
    nombre: "Set Cuchillos Acero Inoxidable",
    marca: "MarcaCocina",
    precio: 40000,
    imagen: "../img/cocina/cuchillos01.jpg",
    categoria: {
      nombre: "Cocina",
      id: "cocina"
    }
  },
  {
    id: "cocina 2",
    nombre: "Set de Ollas Antiadherente Premium",
    marca: "MarcaCocina",
    precio: 140000,
    imagen: "../img/cocina/ollas01.jpg",
    categoria: {
      nombre: "Cocina",
      id: "cocina"
    }
  },
  {
    id: "cocina 3",
    nombre: "Sarten Parrillera Antiadherente",
    marca: "MarcaCocina",
    precio: 30000,
    imagen: "../img/cocina/sarten01.jpg",
    categoria: {
      nombre: "Cocina",
      id: "cocina"
    }
  },
  {
    id: "cocina 4",
    nombre: "Sarten Parrillera de Acero Inoxidable",
    marca: "MarcaCocina",
    precio: 16000,
    imagen: "../img/cocina/sarten02.jpg",
    categoria: {
      nombre: "Cocina",
      id: "cocina"
    }
  },
  {
    id: "cocina 5",
    nombre: "Sarten Premium",
    marca: "MarcaCocina",
    precio: 17000,
    imagen: "../img/cocina/sarten03.jpg",
    categoria: {
      nombre: "Cocina",
      id: "cocina"
    }
  },
  {
    id: "cocina 6",
    nombre: "Set de Tazas",
    marca: "MarcaCocina",
    precio: 16000,
    imagen: "../img/cocina/tazas01.jpg",
    categoria: {
      nombre: "Cocina",
      id: "cocina"
    }
  },
  {
    id: "cocina 7",
    nombre: "Sarten Parrillera de Acero Inoxidable Premium",
    marca: "MarcaCocina",
    precio: 25000,
    imagen: "../img/cocina/sarten04.jpg",
    categoria: {
      nombre: "Cocina",
      id: "cocina"
    }
  },
  {
    id: "cocina 8",
    nombre: "Sarten de Acero Inoxidable c/ Espumadera",
    marca: "MarcaCocina",
    precio: 19000,
    imagen: "../img/cocina/sarten05.jpg",
    categoria: {
      nombre: "Cocina",
      id: "cocina"
    }
  },
  {
    id: "cocina 9",
    nombre: "Set de Cubiertos con mango de Madera de Roble",
    marca: "MarcaCocina",
    precio: 20000,
    imagen: "../img/cocina/tenedores01.jpg",
    categoria: {
      nombre: "Cocina",
      id: "cocina"
    }
  },
  {
    id: "cocina 10",
    nombre: "Set de Cubiertos de Acero Inoxidable",
    marca: "MarcaCocina",
    precio: 26000,
    imagen: "../img/cocina/tenedores02.jpg",
    categoria: {
      nombre: "Cocina",
      id: "cocina"
    }
  },
  {
    id: "cocina 11",
    nombre: "Set de Chupitos de Cristal",
    marca: "MarcaCocina",
    precio: 23000,
    imagen: "../img/cocina/vasos01.jpg",
    categoria: {
      nombre: "Cocina",
      id: "cocina"
    }
  },
  {
    id: "cocina 12",
    nombre: "Set de Tazas",
    marca: "MarcaCocina",
    precio: 12000,
    imagen: "../img/cocina/tazas02.jpg",
    categoria: {
      nombre: "Cocina",
      id: "cocina"
    }
  },
  // Productos de la categoría Deco
  {
    id: "deco 1",
    nombre: "Perchero para Cuchillos",
    marca: "MarcaDeco",
    precio: 3300,
    imagen: "../img/deco/deco01.jpg",
    categoria: {
      nombre: "Deco",
      id: "deco"
    }
  },
  {
    id: "deco 2",
    nombre: "Cesto de Plastico",
    marca: "MarcaDeco",
    precio: 6600,
    imagen: "../img/deco/deco02.jpg",
    categoria: {
      nombre: "Deco",
      id: "deco"
    }
  },
  {
    id: "deco 3",
    nombre: "Canasto de metal",
    marca: "MarcaDeco",
    precio: 6300,
    imagen: "../img/deco/deco03.jpg",
    categoria: {
      nombre: "Deco",
      id: "deco"
    }
  },
  {
    id: "deco 4",
    nombre: "Alfombra Felpudo 100% Algodon",
    marca: "MarcaDeco",
    precio: 33330,
    imagen: "../img/deco/setdeco01.jpg",
    categoria: {
      nombre: "Deco",
      id: "deco"
    }
  }
];

let carritoEnLS = localStorage.getItem('productos');
let productosEnCarrito = [];

if (carritoEnLS) {
  productosEnCarrito = JSON.parse(carritoEnLS);
}

renderCarrito(productosEnCarrito);

const contenedorProductos = document.querySelector("#contenedor-productos");
const botonesCategorias = document.querySelectorAll(".boton-categoria");
const tituloPrincipal = document.querySelector("#titulo-principal");

function cargarProductos(productosElegidos) {
  contenedorProductos.innerHTML = "";

  productosElegidos.forEach(producto => {
    const div = document.createElement("div");
    div.classList.add("producto");
    div.innerHTML = `
      <img class="producto-imagen" src="${producto.imagen}" alt="${producto.nombre}">
      <div class="producto-detalles">
        <h3 class="producto-titulo">${producto.nombre}</h3>
        <p class="producto-precio">$${producto.precio}</p>
        <button class="producto-agregar" id="${producto.id}">Agregar</button>
      </div>`;

    contenedorProductos.appendChild(div);
  });

  actualizarBotonesAgregar();
}

cargarProductos(productos);

botonesCategorias.forEach(boton => {
  boton.addEventListener("click", (e) => {
    botonesCategorias.forEach(boton => boton.classList.remove("active"));
    e.currentTarget.classList.add("active");

    if (e.currentTarget.id !== "todos") {
      const productosBoton = productos.filter(producto => producto.categoria.id === e.currentTarget.id);
      tituloPrincipal.innerText = productosBoton[0].categoria.nombre;
      cargarProductos(productosBoton);
    } else {
      tituloPrincipal.innerText = "Todos los productos";
      cargarProductos(productos);
    }
  });
});

function actualizarBotonesAgregar() {
  const botonesAgregar = document.querySelectorAll(".producto-agregar");

  botonesAgregar.forEach(boton => {
    boton.addEventListener("click", agregarAlCarrito);
  });
}

function agregarAlCarrito(e) {
  const idBoton = e.currentTarget.id;
  const productoAgregado = productos.find(producto => producto.id === idBoton);

  if (productosEnCarrito.some(producto => producto.id === idBoton)) {
    const index = productosEnCarrito.findIndex(producto => producto.id === idBoton);
    productosEnCarrito[index].cantidad += 1;
  } else {
    productoAgregado.cantidad = 1;
    productosEnCarrito.push(productoAgregado);
  }

  console.log(productosEnCarrito);
}

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
      </div>
    `;
    contenedorCarrito.appendChild(div);
  });
}
