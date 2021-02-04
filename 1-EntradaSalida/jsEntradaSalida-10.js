/*
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
/*txtIdImporte
txtIdResultado*/

	var importe

	var resultado

	var Descuento

	importe = txtIdImporte.value;

	importe = parseInt(importe);

	//Descuento = importe * 25/100;

	//Descuento = importe * 0.25;

	//resultado = importe - Descuento;

	resultado = importe - (importe * 0.25);

	txtIdResultado.value = resultado;
}
