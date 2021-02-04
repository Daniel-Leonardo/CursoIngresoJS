/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	
	var unNumero;
	
	var otroNumero;
	
	var suma;

	//entradas
	unNumero = txtIdNumeroUno.value;

	otroNumero = txtIdNumeroDos.value;

	//conversiones (parseo)

	unNumero = parseInt(unNumero);

	otroNumero = parseInt(otroNumero);
	

	suma = unNumero + otroNumero; 

	alert(" La suma es: " + suma);	
}

function restar()
{
	var unNumero;
	
	var otroNumero;
	
	var resta;

	//entradas
	unNumero = txtIdNumeroUno.value;

	otroNumero = txtIdNumeroDos.value;

	//conversiones (parseo)

	unNumero = parseInt(unNumero);

	otroNumero = parseInt(otroNumero);
	

	resta = unNumero - otroNumero; 

	alert(" La resta es: " + resta);
}

function multiplicar()
{ 
	var unNumero;

	var otroNumero;

	var multiplicar;

	//entrada

	unNumero = txtIdNumeroUno.value;

	otroNumero = txtIdNumeroDos.value;

	//conversion

	unNumero = parseInt(unNumero);

	otroNumero = parseInt(otroNumero);

	multiplicar = unNumero * otroNumero;

	alert(" La multiplicacion es: " + multiplicar);
}

function dividir()
{
	var unNumero;

	var otroNumero;

	var dividir;

	//entrada

	unNumero = txtIdNumeroUno.value;

	otroNumero = txtIdNumeroDos.value;

	//conversion

	unNumero = parseInt(unNumero);

	otroNumero = parseInt(otroNumero);

	dividir = unNumero / otroNumero

	dividir = dividir.toFixed(2);

	alert(" La division es: " + dividir);
}

