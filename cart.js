const productos = [
    { nombre: 'Producto 1', descripcion: 'Descripción del producto 1' },
    { nombre: 'Producto 2', descripcion: 'Descripción del producto 2' },
    // Agrega más productos según sea necesario
];

const carrito = [];

// Función para mostrar los productos
function mostrarProductos() {
    const contenedorProductos = document.getElementById('productos');
    productos.forEach(producto => {
        const divProducto = document.createElement('div');
        divProducto.innerHTML = `
            <h3>${producto.nombre}</h3>
            <p>${producto.descripcion}</p>
            <button onclick="agregarAlCarrito('${producto.nombre}')">Agregar al carrito</button>
        `;
        contenedorProductos.appendChild(divProducto);
    });
}

// Función para agregar al carrito
function agregarAlCarrito(producto) {
    carrito.push(producto);
    actualizarCarrito();
}

// Función para actualizar el carrito en el DOM
function actualizarCarrito() {
    const listaCarrito = document.getElementById('lista-carrito');
    listaCarrito.innerHTML = ''; // Limpiar la lista antes de actualizar

    carrito.forEach(producto => {
        const li = document.createElement('li');
        li.textContent = producto;
        listaCarrito.appendChild(li);
    });
}

// Mostrar los productos al cargar la página
mostrarProductos();

  const carrito = [];

  function agregarAlCarrito(producto) {
      carrito.push(producto);
      actualizarCarrito();
  }

  function actualizarCarrito() {
      const listaCarrito = document.getElementById('lista-carrito');
      listaCarrito.innerHTML = ''; // Limpiar la lista antes de actualizar

      carrito.forEach((producto) => {
          const li = document.createElement('li');
          li.textContent = producto;
          listaCarrito.appendChild(li);
      });
  }
