var articulos = [];

function crearArticulo() {
  var nombre = document.getElementById("articuloNombre").value;
  var precio = document.getElementById('articuloPrecio').value;
  var descripcion = document.getElementById('articuloDescripcion').value;

  if (nombre && precio && descripcion) {
    var articulo = {
      nombre: nombre,
      precio: parseFloat(precio),
      descripcion: descripcion
    };
    articulos.push(articulo);
    localStorage.setItem('articulos', JSON.stringify(articulos));
   
  }
  mostrarArticulos()
}


function mostrarArticulos() {
  var listaDiv = document.getElementById('listaArticulos');
  listaDiv.innerHTML = '';


  var articulosGuardados = localStorage.getItem('articulos');
  if (articulosGuardados) {
    articulos = JSON.parse(articulosGuardados);
  }
  
  for (var i = 0; i < articulos.length; i++) {
    var articulo = articulos[i];
    var articuloDiv = document.createElement('div');
    articuloDiv.innerHTML = 'Nombre:' + articulo.nombre + '<br>' +
      '<strong>Precio:</strong> $' + articulo.precio.toFixed(2) + '<br>' +
      '<strong>Descripción:</strong> ' + articulo.descripcion + '<br><br>';
    listaDiv.appendChild(articuloDiv);
  }

}


