var articulos = [];
var articulos = JSON.parse(localStorage.getItem('articulos')) || [];
function crearArticulo() {
  var nombre = document.getElementById("nombre").value;
  var precio = document.getElementById('precio').value;
  var descripcion = document.getElementById('descripcion').value;

  if (nombre && precio && descripcion) {
    var articulo = {
      nombre: nombre,
      precio: precio,
      descripcion: descripcion
    };
    articulos.push(articulo);
    localStorage.setItem('articulos', JSON.stringify(articulos));

  }
  mostrarArticulos();
}


function mostrarArticulos() {
  var listaDiv = document.getElementById('listaArticulos');
  var articulosGuardados = localStorage.getItem('articulos');

  if (articulosGuardados) {
    articulos = JSON.parse(articulosGuardados);
  }

  for (var i = 0; i < articulos.length; i++) {

    var articulo = articulos[i];

    let dArticulo = document.createElement("p")
    dArticulo.textContent = articulo.descripcion;

  }

  var articuloDiv = document.createElement('div');
  aticuloDiv.appendChild(dArticulo);

}


