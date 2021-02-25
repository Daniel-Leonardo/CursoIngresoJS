// Daniel Escobar 1H Ejercicio if 7

function mostrar()
{
	//txtIdEdad
	//estadoCivil

	var estado;

	var edad;

	edad = txtIdEdad.value;

	edad = parseInt(edad);

	estado = estadoCivil.value;

	console.log(edad);
	if(edad < 18 && estado != "Soltero")
		{
			alert("Es muy pequeño para NO ser soltero");
		}

}//FIN DE LA FUNCIÓN