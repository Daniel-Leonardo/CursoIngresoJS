//Daniel Escobar 1H TP 4

/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */
 /*txtIdCantidad
 txtIdprecioDescuento
 Marca*/

function CalcularPrecio () 
{
	var Cantidad;

	var Marcalamp;

	var precioParcial;

	var precio;

	var precioFinal;

	var precioFinaldos;


	Cantidad = txtIdCantidad.value;

	Cantidad = parseInt(Cantidad);

	precio = 35;

	precioParcial = Cantidad * precio;

	Marcalamp = Marca.value;

	if(Cantidad > 5)
	{
		precioDescuento = precioParcial * 0.50;
	}
	if(Cantidad == 5 && Marcalamp == "ArgentinaLuz")
	{
		precioDescuento = precioParcial * 0.40;
	}
	else
	{
		if(Cantidad == 5 && Marcalamp != "ArgentinaLuz")
			{
				precioDescuento = precioParcial * 0.30;
			}	
	}
	if(Cantidad == 4 && Marcalamp == "ArgentinaLuz" || Marcalamp == "FelipeLamparas")
	{
		precioDescuento = precioParcial * 0.25;
	}
	else
	{
		if(Cantidad == 4 && Marcalamp != "ArgentinaLuz" || Marcalamp != "FelipeLamparas")
			{
				precioDescuento = precioParcial * 0.20;
			}
	}
	if(Cantidad == 3 && Marcalamp == "ArgentinaLuz")
	{
		precioDescuento = precioParcial * 0.15;
	}
	else
	{
		if(Cantidad == 3 && Marcalamp == "FelipeLamparas")
			{
				precioDescuento = precioParcial * 0.10;	
			}
			else
			{
				if(Cantidad == 3)
				{
					precioDescuento = precioParcial * 0.05;
				}
			}
	}
	if(precioFinal > 120)
	{
		precioFinaldos = precioFinal + (precioFinal * IIBB);

		alert(" Usted pago " + precioFinaldos);
	}

precioFinal = precioParcial - precioDescuento;

txtIdprecioDescuento.value = precioFinal;

//alert( " el descuento es de : " + precioFinal);
	
}
