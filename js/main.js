document.addEventListener('DOMContentLoaded', function() {
  const eliminarBotones = document.querySelectorAll('.carrito-producto-eliminar');

  eliminarBotones.forEach((boton) => {
    boton.addEventListener('click', function() {
      Swal.fire({
        title: '¿Estás seguro de eliminar el producto?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Sí, seguro',
        cancelButtonText: 'No, no quiero',
      }).then((result) => {
        if (result.isConfirmed) {
          const producto = this.parentNode;
          producto.remove();

          actualizarTotalCarrito();
        }
      });
    });
  });

  function actualizarTotalCarrito() {
    const productos = document.querySelectorAll('.carrito-producto');
    let total = 0;

    productos.forEach((producto) => {
      const subtotal = parseInt(producto.querySelector('.carrito-producto-subtotal p').textContent.replace('$', ''));
      total += subtotal;
    });

    const totalElemento = document.getElementById('total');
    totalElemento.textContent = '$' + total;
  }
});

const botonesAgregar = document.querySelectorAll('#agregar');

botonesAgregar.forEach((btn) => {
  btn.addEventListener('click', () => {
    Swal.fire({
      title: '¡Genial!',
      text: '¡Has agregado items a tu carrito!',
      icon: 'success',
      confirmButtonText: 'Cool'
    });
  });
});
