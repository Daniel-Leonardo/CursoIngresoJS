/*

Daniel Escobar 1H Ejercicio 5 bis corregido


Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados 
ej.: "Usted se llama José y tiene 66 años" 	*/
function mostrar()
{	
	var nombre

	nombre = document.getElementById('txtIdNombre').value

	var edad

	edad = document.getElementById('txtIdEdad').value

	var apellido = prompt(" Su apellido es ");



	alert(" Usted se llama " + nombre + " Y tiene " + edad + " Su apellido es " + apellido);


}

