
fetch('ejemplo.json')
.then(response => {
  // Verificamos si la respuesta fue exitosa
  if (!response.ok) {
    throw new Error('Error en la solicitud');
  }
  return response.text();
})
.then(textoJson => {
    console.log("OK")
  // Convertimos el texto de JSON a un objeto JavaScript
  const productos = JSON.parse(textoJson);
  const tbody = document.getElementById('productos');

  // Creamos una fila en la tabla para cada producto
  productos.forEach(producto => {
    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td>${producto.nombre}</td>
      <td>${producto.descripcion}</td>
      <td>$${producto.precio}</td>
      <td><img src="${producto.foto}" alt="${producto.nombre}" style="width: 100px;"></td>
    `;
    tbody.appendChild(tr);
  });
})
.catch(error => {
  console.error(error);
  alert('Hubo un error al cargar los productos');
});