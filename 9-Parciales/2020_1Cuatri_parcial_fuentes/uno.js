/*Daniel Escobar 1H*/




/*Debemos realizar la carga de 5(cinco) productos de prevención de contagio,
de cada una debo obtener los siguientes datos:
el tipo (validar "barbijo" , "jabón" o "alcohol") ,
el precio (validar entre 100 y 300),
la cantidad de unidades (no puede ser 0 o negativo y no debe superar las 1000 unidades),
la Marca y el fabricante.
Se debe Informar al usuario lo siguiente:
a) Del más barato de los alcohol, la cantidad de unidades y el fabricante
b) Del tipo con mas unidades, el promedio por compra
c) Cuántas unidades de jabones hay en total*/

function mostrar()
{
	var contador;

	var tipoProducto;

	var precioProducto;

	var cantidadUnidades;

	var marca;

	var fabricante;

	var contadorAlcohol;

	contador = 0;

	contadorAlcohol = 0;

	while(contador < 5)
	{
		tipoProducto = prompt("Ingrese su producto: barbijo, alcohol, jabón");
		while(isNaN(tipoProducto) == false || tipoProducto != "barbijo" && tipoProducto != "alcohol" && tipoProducto != "jabon")
		{
			tipoProducto = prompt("Error: Reingrese un producto valido");
		}
		precioProducto = prompt("Ingrese el precio");
		while(isNaN(precioProducto) == true || precioProducto < 100 || precioProducto > 300)
		{
			precioProducto = prompt("Ingrese un precio correcto");
		}
		cantidadUnidades = prompt("Ingrese una cantidad");
		while(isNaN(cantidadUnidades) == true || cantidadUnidades < 0 && cantidadUnidades >= 1000)
		{
			cantidadUnidades = prompt("Ingrese una cantidad valida");
		}
		marca = prompt("Ingrese una marca");
		while(isNaN(marca) == false)
		{
			marca = prompt("Reingrese una marca");
		}
		fabricante = prompt("Ingrese un fabricante");
		while(isNaN(fabricante) == false)
		{
			fabricante = prompt("Reingrese un fabricante");
		}
	if(tipoProducto == "alcohol")
		contador++;
	}

































	alert("uno");
}
