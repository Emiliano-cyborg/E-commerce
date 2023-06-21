const productos = [
  // Productos de la categoría Baño
  {
    id: "bano 1",
    nombre: "Producto Baño 1",
    marca: "MarcaBaño",
    precio: 50,
    imagen: "../img/baño/cesto01.jpg",
    categoria: {
      nombre: "Baño",
      id: "bano"
    }
  },
  {
    id: "bano 2",
    nombre: "Producto Baño 2",
    marca: "MarcaBaño",
    precio: 60,
    imagen: "../img/baño/cesto02.jpg",
    categoria: {
      nombre: "Baño",
      id: "bano"
    }
  },
  {
    id: "bano 3",
    nombre: "Producto Baño 3",
    marca: "MarcaBaño",
    precio: 70,
    imagen: "../img/baño/cesto03.jpg",
    categoria: {
      nombre: "Baño",
      id: "bano"
    }
  },
  {
    id: "bano 4",
    nombre: "Producto Baño 4",
    marca: "MarcaBaño",
    precio: 80,
    imagen: "../img/baño/limpiador01.jpg",
    categoria: {
      nombre: "Baño",
      id: "bano"
    }
  },
  {
    id: "bano 5",
    nombre: "Producto Baño 5",
    marca: "MarcaBaño",
    precio: 90,
    imagen: "../img/baño/limpiador02.jpg",
    categoria: {
      nombre: "Baño",
      id: "bano"
    }
  },
  {
    id: "bano 6",
    nombre: "Producto Baño 6",
    marca: "MarcaBaño",
    precio: 100,
    imagen: "../img/baño/cesto04.jpg",
    categoria: {
      nombre: "Baño",
      id: "bano"
    }
  },
  {
    id: "bano 7",
    nombre: "Producto Baño 7",
    marca: "MarcaBaño",
    precio: 110,
    imagen: "../img/baño/jabonera01.jpg",
    categoria: {
      nombre: "Baño",
      id: "bano"
    }
  },
  {
    id: "bano 8",
    nombre: "Producto Baño 8",
    marca: "MarcaBaño",
    precio: 120,
    imagen: "../img/baño/tacho01.jpg",
    categoria: {
      nombre: "Baño",
      id: "bano"
    }
  },
  // Productos de la categoría Cocina
  {
    id: "cocina 1",
    nombre: "Producto Cocina 1",
    marca: "MarcaCocina",
    precio: 130,
    imagen: "../img/cocina/cuchillos01.jpg",
    categoria: {
      nombre: "Cocina",
      id: "cocina"
    }
  },
  {
    id: "cocina 2",
    nombre: "Producto Cocina 2",
    marca: "MarcaCocina",
    precio: 140,
    imagen: "../img/cocina/ollas01.jpg",
    categoria: {
      nombre: "Cocina",
      id: "cocina"
    }
  },
  {
    id: "cocina 3",
    nombre: "Producto Cocina 3",
    marca: "MarcaCocina",
    precio: 150,
    imagen: "../img/cocina/sarten01.jpg",
    categoria: {
      nombre: "Cocina",
      id: "cocina"
    }
  },
  {
    id: "cocina 4",
    nombre: "Producto Cocina 4",
    marca: "MarcaCocina",
    precio: 160,
    imagen: "../img/cocina/sarten02.jpg",
    categoria: {
      nombre: "Cocina",
      id: "cocina"
    }
  },
  {
    id: "cocina 5",
    nombre: "Producto Cocina 5",
    marca: "MarcaCocina",
    precio: 170,
    imagen: "../img/cocina/sarten03.jpg",
    categoria: {
      nombre: "Cocina",
      id: "cocina"
    }
  },
  {
    id: "cocina 6",
    nombre: "Producto Cocina 6",
    marca: "MarcaCocina",
    precio: 180,
    imagen: "../img/cocina/tazas01.jpg",
    categoria: {
      nombre: "Cocina",
      id: "cocina"
    }
  },
  {
    id: "cocina 7",
    nombre: "Producto Cocina 7",
    marca: "MarcaCocina",
    precio: 190,
    imagen: "../img/cocina/sarten04.jpg",
    categoria: {
      nombre: "Cocina",
      id: "cocina"
    }
  },
  {
    id: "cocina 8",
    nombre: "Producto Cocina 8",
    marca: "MarcaCocina",
    precio: 200,
    imagen: "../img/cocina/sarten05.jpg",
    categoria: {
      nombre: "Cocina",
      id: "cocina"
    }
  },
  {
    id: "cocina 9",
    nombre: "Producto Cocina 9",
    marca: "MarcaCocina",
    precio: 200,
    imagen: "../img/cocina/tenedores01.jpg",
    categoria: {
      nombre: "Cocina",
      id: "cocina"
    }
  },
  {
    id: "cocina 10",
    nombre: "Producto Cocina 10",
    marca: "MarcaCocina",
    precio: 200,
    imagen: "../img/cocina/tenedores02.jpg",
    categoria: {
      nombre: "Cocina",
      id: "cocina"
    }
  },
  {
    id: "cocina 11",
    nombre: "Producto Cocina 11",
    marca: "MarcaCocina",
    precio: 200,
    imagen: "../img/cocina/vasos01.jpg",
    categoria: {
      nombre: "Cocina",
      id: "cocina"
    }
  },
  {
    id: "cocina 12",
    nombre: "Producto Cocina 12",
    marca: "MarcaCocina",
    precio: 200,
    imagen: "../img/cocina/tazas02.jpg",
    categoria: {
      nombre: "Cocina",
      id: "cocina"
    }
  },
  // Productos de la categoría Deco
  {
    id: "deco 1",
    nombre: "Producto Deco 1",
    marca: "MarcaDeco",
    precio: 210,
    imagen: "../img/deco/deco01.jpg",
    categoria: {
      nombre: "Deco",
      id: "deco"
    }
  },
  {
    id: "deco 2",
    nombre: "Producto Deco 2",
    marca: "MarcaDeco",
    precio: 220,
    imagen: "../img/deco/deco02.jpg",
    categoria: {
      nombre: "Deco",
      id: "deco"
    }
  },
  {
    id: "deco 3",
    nombre: "Producto Deco 3",
    marca: "MarcaDeco",
    precio: 230,
    imagen: "../img/deco/deco03.jpg",
    categoria: {
      nombre: "Deco",
      id: "deco"
    }
  },
  {
    id: "deco 4",
    nombre: "Producto Deco 4",
    marca: "MarcaDeco",
    precio: 240,
    imagen: "../img/deco/setdeco01.jpg",
    categoria: {
      nombre: "Deco",
      id: "deco"
    }
  }
];


const contenedorProductos = document.querySelector("#contenedor-productos");
const botonesCategorias = document.querySelectorAll(".boton-categoria");
const tituloPrincipal = document.querySelector("#titulo-principal");
/* let botonesAgregar = document.querySelectorAll(".producto-agregar");
 */
function cargarProductos(productosElegidos) {

  contenedorProductos.innerHTML = "";

  productosElegidos.forEach(producto => {

      const div = document.createElement("div");
      div.classList.add("producto");
      div.innerHTML = `
      <img class="producto-imagen" src="${producto.imagen}" alt="${producto.titulo}">
      <div class="producto-detalles">
          <h3 class="producto-titulo">${producto.titulo}</h3>
          <p class="producto-precio">$${producto.precio}</p>
          <button class="producto-agregar" id="${producto.id}">Agregar</button>
      </div> `;

    contenedorProductos.append(div);
  
  })

/*   actualizarBotonesAgregar(); */

}

cargarProductos(productos);

botonesCategorias.forEach(boton => {
  boton.addEventListener("click", (e) => {

    botonesCategorias.forEach(boton => boton.classList.remove("active"));

    e.currentTarget.classList.add("active");


    if (e.currentTarget.id != "todos") {
      const productoCategoria = productos.find(producto => producto.categoria.id === e.currentTarget.id); 
      tituloPrincipal.innerText = productoCategoria.categoria.nombre;

      const productosBoton = productos.filter(producto => producto.categoria.id === e.currentTarget.id);
  
      cargarProductos(productosBoton);

    } else{
      tituloPrincipal.innerHTML = "Todos los productos";
      cargarProductos(productos);
    }


  })

});

function actualizarBotonesAgregar() {
  botonesAgregar = document.querySelectorAll(".producto-agregar");


  botonesAgregar.forEach(boton => {
    boton.addEventListener("click", agregarAlCarrito);
  });
}

const productosEnCarrito = [];

function agregarAlCarrito(e){
   const idBoton = e.currentTarget.id;
  const productoAgregado = productos.find(producto => producto.id === idBoton);

  if(productosEnCarrito.some(producto => producto.id === idBoton)) {
  const index =  productosEnCarrito.findIndex(producto => producto.id === idBoton)
  }else{

    productoAgregado.cantidad = 1;
    productosEnCarrito.push(productoAgregado);

  }

  console.log(productosEnCarrito)
  

}