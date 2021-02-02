/* 
Debemos lograr tomar un dato por 'PROMPT' 
y lo muestro por 'ID' al presionar el botón 'mostrar'
*/
function mostrar()
{	
	var nombre

	nombre = document.getElementById('txtIdNombre').value

	nombre = prompt(" Su nombre es ")


	alert(" Su nombre es " + nombre);
}

