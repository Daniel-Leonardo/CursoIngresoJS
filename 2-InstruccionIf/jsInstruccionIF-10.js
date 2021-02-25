//Daniel Escobar 1H Ejercicio IF 10
/*test 
Nota = 9 Excelente
Nota = 8 Aprobo
Nota = 4 Aprobo
Nota = 3 Vamos, la proxima se puede
*/
function mostrar()
{
	var Nota;

	//Nota = Math.floor(Math.random() * 10) + 1;
	//Harcodeo

	Nota = 2;

	if(Nota > 8)
	{
		alert(" Excelente ");
	}
	else
	{
		if(Nota > 3)
		{
			alert(" Aprobo ");
		}
		else
		{
			alert(" Vamos, la proxima se puede");
		}
	}
}