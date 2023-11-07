alert("Bienvenido a la Autoevaluacion correspondiente al primer mes \n\nSeleccione las respuestas que crea correctas, teniendo en "+
      "\ncuenta las siguientes consideraciones \n\n1. Los aciertos tienen el valor de un punto"+
	  " \n\n2. Las respuestas no contestadas ni suman ni restan puntos.")  
var resp = new Array;
var faite = new Array;
var score = 0;
var respuestas = [];

 
resp[1] = "b";
resp[2] = "a";
resp[3] = "c";
resp[4] = "b";
resp[5] = "c";
resp[6] = "c";
resp[7] = "b";
resp[8] = "c";
resp[9] = "b";
resp[10] = "a";
 
function Engine(question, repose)
{
   if (repose != resp[question])
	 {
             if (!faite[question])
			        {faite[question] = -1;
                        respuestas.push(question, repose)
                    }

                }
        else {
 
                if (!faite[question]) {
                        faite[question] = -1;
                        score++;
                        respuestas.push(question, repose)
                        }
 
                }
}
 
function Nivel () {
        if (score == 10){
            alert(score + "/10" + "Exelente. La perfeccion echa examen")
        }
        if (score >= 9 && score < 10) {
                alert(score + "/10 " + "Muy bien, prueba a superarlo");
                }
        if (score >= 7 && score <= 8) {
                alert(score + "/10 " + "Bien, pero puedes hacerlo mejor");
                }
        if (score >= 5 && score <= 6) {
                alert(score + "/10 " + "Desaprobado. pero por poco");
                }
        if (score >= 3 && score <= 4) {
                alert(score + "/10 " + "Pruebe estudiar con el libro abierto para la proxima. Desaprobado");
                }
        if (score < 2) {
                alert("Su puntuación es: "+ score +"/10"+"\n"
				+"\nLa puntuacion maxima que podia obtener es 10"+"\n"
				+"\nSe le aplico este examen a un Teletubie y le fue mejor que a usted"+"\n"
				+"\nSu porcentaje de aciertos es menos del 10%"+"\n"
                +"\nNos veremos el año que viene");
                }
}
function reiniciarEncuesta() {
    // Restablecer el formulario para permitir una nueva encuesta
    location.reload();
}