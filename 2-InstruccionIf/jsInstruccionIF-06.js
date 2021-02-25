//Daniel Escobar 1H Ejercicio if 6

function mostrar()
{
	//txtIdEdad

	var edad;

	edad = txtIdEdad.value;

	edad = parseInt(edad);

	if(edad > 17)
	{
		alert(" Es mayor de edad ");
	}
	else
	{
		if(edad > 12 && edad < 18)
		{
			alert(" Es adolescente ");
		}
		else
		{
			if(edad < 13)
			{
				alert(" Es niño ");
			}
		}
	}
		

}//FIN DE LA FUNCIÓN