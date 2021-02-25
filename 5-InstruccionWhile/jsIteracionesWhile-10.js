/*
Al presionar el botón pedir  números  
hasta que el usuario quiera, mostrar:
1-Suma de los negativos.
2-Suma de los positivos.
3-Cantidad de positivos.
4-Cantidad de negativos.
5-Cantidad de ceros.
6-Cantidad de números pares.
7-Promedio de positivos.
8-Promedios de negativos.
9-Diferencia entre positivos y negativos, (positivos-negativos). */
function mostrar()
{
	//declarar contadores y variables 
	var respuesta;

	var numeroIngresado;

	var CantidadNegativos;

	var CantidadPositivos;

	var CantidadCeros;

	var CantidadPar;

	var PromedioNegativo;

	var PromedioPositivo;

	var AcumuladorPositivos;

	var AcumuladorNegativos;

	var DiferenciaPositivosNegativos;

	var maximoNegativo;

	var minimoPar;

	CantidadNegativos = 0;

	CantidadPositivos = 0;

	CantidadCeros = 0;

	CantidadPar = 0;

	AcumuladorNegativos = 0;

	AcumuladorPositivos = 0;


	respuesta =  "si";

	while(respuesta=="si")
	{
		numeroIngresado = prompt("ingrese un numero");
		numeroIngresado = parseInt(numeroIngresado);

		if(numeroIngresado < 0)
		{
			AcumuladorNegativos = AcumuladorNegativos + numeroIngresado;
			CantidadNegativos++;
		}
		else
		{
			if(numeroIngresado > 0)
			{
			AcumuladorPositivos = AcumuladorPositivos + numeroIngresado;
			CantidadPositivos = CantidadPositivos + 1;
			}
			else
			{
				CantidadCeros++;
			}
		}
		if(numeroIngresado % 2 == 0)
		{
			CantidadPar++;
		}

		respuesta = prompt("Deses ingresar otro numero? si/no");
	}//fin del while
	
	document.write("la acumulacion de negativos es :"+ AcumuladorNegativos + "<br>");
	document.write("la acumulacion de los positivos es :"+ AcumuladorPositivos + "<br>");
	document.write("la cantidad de positivos es :" + CantidadPositivos + "<br>");
	document.write("la cantidad de negativos es :" + CantidadNegativos + "<br>");
	document.write("la cantidad de ceros es :" + CantidadCeros + "<br>");
	document.write("la cantidad de pares  es :" + CantidadPar + "<br>");

	if(CantidadPositivos != 0)
	{
		PromedioPositivo = AcumuladorPositivos/CantidadPositivos;
		document.write("el Promedio de los Positivos es: " + PromedioPositivo + "<br>");
	}
	else
	{
		document.write("el promedio de los positovs es: No hubo ingreso de numeros positivos <br>");
	}
	if(CantidadNegativos != 0)
	{
		PromedioNegativo = AcumuladorNegativos/CantidadNegativos;
		document.write("el Promedio de los negativos es: " + PromedioNegativo + "<br>");
	}
	else
	{
		document.write("el promedio de los negativos es: No ingreso de numeros negativos <br>");
	}

	
}//FIN DE LA FUNCIÓN

/*

contador = contador + 1;

contador ++;

contador+ = 1;


acumulador = acumulador + valor;

0+100=100
100+200=300*/

