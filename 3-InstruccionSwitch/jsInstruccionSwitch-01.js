//Daniel Escobar 1H ejercicio switch 1


/*al seleccionar un mes informar.
si es Enero: "que comiences bien el año!!!."
si es Marzo: "a clases!!!."
si es Julio: "se vienen las vacaciones!!!."
si es Diciembre: "Felices fiesta!!!."*/

function mostrar()
{
	//tomo el mes
	var mesDelAño = txtIdMes.value;

	switch(mesDelAño)
		{
		case "Enero":

			alert(" Que comiences bien el año ");
			break;

		case "Marzo":

			alert(" A clases ");
			break;

		case "Julio":

			alert(" Se viene las vacaciones ");
			break;

		case "Diciembre":

			alert(" Felices fiestas!!! ");
			break;

		/*case "Febrero": 
		case "Abril": 
		case "Mayo": 
		case "Junio": 
		case "Agosto": 
		case "Septiembre": 
		case "Octubre": 
		case "Noviembre":*/

		default:

			alert(" Nada en este mes ");
			break;
		}
}