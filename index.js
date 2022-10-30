//importa el modulo/framework de express
const express = require('express');
const bodyParser = require('body-parser');

/* se crea la instancia de express.
Si se importara HTTP, no se usaría una instancia.*/
const app = express();
//app.use(bodyParser.json());

//import de modulos user defined
//se importa el modulo que se creó 
const studentsService = require("./services/students");


//funcion que se mostrará en el servidor
const alumnos = [
    {
        name: "jonathan",
        age: 17
    },
    {
        name: "jose",
        age: 16
    },
    {
        name: "carlos",
        age: 19
    }
];

/*Se usa para PEDIR información de una fuente*/ 
app.get('/alumnos', async function (_, response) {
    //le dice a la salida de pnatalla que espere a que termine la promesa , que es el resultado
    //console.log(await studentsService,getStudents());
    const students = await(studentsService,getStudents());
    response.send();
});

/*Se usa para enviar informacion a un servidor. no funcioan sin una función GET*/
app.post('/alumnos', function (request, response) {

    //Permite solicitar la información de parte del cliente en un string o objeto JSON
    const alumno = request.body;
    //está diciendo que se presente lo que está en la función alumnos en un string/JSON
   // alumnos.push(alumno);
    //de repuesta envia la fuhcion 
    response.send(alumnos);

});

app.listen(3000, function(){
    console.log("server started");
})