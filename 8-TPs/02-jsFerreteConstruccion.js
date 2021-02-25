Daniel Escobar 1H 


/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
/*txtIdLargo
txtIdAncho
txtIdRadio*/

var largo;

var ancho;

var perimetro;

var cantidad;

largo = txtIdLargo.value;

ancho = txtIdAncho.value;

largo = parseFloat(largo);

ancho = parseFloat(ancho);

perimetro = largo * 2 + ancho * 2;

cantidad = perimetro * 3;

alert(" Cantidad de alambre es : " + cantidad);
}
function Circulo () 
{
var radio;

var circulo;

var cantidad;

radio = txtIdRadio.value;

radio = parseFloat(radio);

radio = (Math.PI * radio) * 2;

cantidad = radio * 3;

alert(" Cantidad de alambre es : " + cantidad);
}
function Materiales () 
{

var largo;

var ancho;

var perimetro;

var cantidad;

var cemento;

var cal;

largo = txtIdLargo.value;

ancho = txtIdAncho.value;

largo = parseInt(largo);

ancho = parseInt(ancho);

perimetro = largo * 2 + ancho * 2;

cemento = perimetro * 2;

cal = perimetro * 3;

alert(" La cantidad de cemento es : " + cemento);

alert(" La cantidad de cal es : " + cal);

}