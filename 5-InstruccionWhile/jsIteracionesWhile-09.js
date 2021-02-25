/*Daniel Escobar 1H While 9

/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
mostrar el número máximo y el número mínimo ingresado.*/
function mostrar()
{	// declarar variables
	var parMenor;
	var mayorNegativo
	var respuesta;
	var banderaPrimeroPar;
	var banderaPrimeroImpar;


	//iniciar variables

	banderaPrimeroPar = true;

	banderaPrimeroImpar = true;

	respuesta = " si ";
	
	while(respuesta == " si ")
	{
		numeroIngresado = prompt(" Ingrese un Numero ");

		numeroIngresado = parseInt(numeroIngresado);

		if(banderaPrimeroPar == true && numeroIngresado % 2 == 0)
		{
			parMenor = numeroIngresado;

			banderaPrimeroPar = false;
		}
		if(banderaPrimeroImpar == true && numeroIngresado < 0)
		{
			mayorNegativo = numeroIngresado;
			
			banderaPrimeroImpar = false;
		}
		if(numeroIngresado % 2 == 0 && numeroIngresado < parmenor)
		{
			
		}
	}

	txtIdMaximo.value = numeroMaximo;
	txtIdMinimo.value = numeroMinimo;
}//FIN DE LA FUNCIÓN