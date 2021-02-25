Daniel Escobar 1H




/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{/*txtIdPrecioUno
txtIdPrecioDos
txtIdPrecioTres*/

	var PrecioUno;

	var PrecioDos;

	var PrecioTres;

	var suma;

	PrecioUno = txtIdPrecioUno.value;

	PrecioDos = txtIdPrecioDos.value;

	PrecioTres = txtIdPrecioTres.value;

	PrecioUno = parseInt(PrecioUno);

	PrecioDos = parseInt(PrecioDos);

	PrecioTres = parseInt(PrecioTres);

	suma = PrecioUno + PrecioDos + PrecioTres;

	alert(" La suma es " + suma);
}
function Promedio () 
{
	var PrecioUno;

	var PrecioDos;

	var PrecioTres;

	var Promedio;

	PrecioUno = txtIdPrecioUno.value;

	PrecioDos = txtIdPrecioDos.value;

	PrecioTres = txtIdPrecioTres.value;

	PrecioUno = parseInt(PrecioUno);

	PrecioDos = parseInt(PrecioDos);

	PrecioTres = parseInt(PrecioTres);

	Promedio = (PrecioUno + PrecioDos + PrecioTres)/3;

	alert(" El promedio es " + Promedio);
}
function PrecioFinal () 
{
	var PrecioUno;

	var PrecioDos;

	var PrecioTres;

	var suma;

	var PrecioFinal;

	PrecioUno = txtIdPrecioUno.value;

	PrecioDos = txtIdPrecioDos.value;

	PrecioTres = txtIdPrecioTres.value;

	PrecioUno = parseInt(PrecioUno);

	PrecioDos = parseInt(PrecioDos);

	PrecioTres = parseInt(PrecioTres);

	suma = (PrecioUno + PrecioDos + PrecioTres);

	PrecioFinal = (suma + (suma * 21/100))

	alert(" PrecioFinal " + PrecioFinal);
}