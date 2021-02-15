function mostrar()
{
  let nombre;
  let localidad;

  nombre = document.getElementById('elNombre').value;
  localidad = document.getElementById('laLocalidad').value;

  alert("usted se llama " + nombre + "y vive en " + localidad);
}
