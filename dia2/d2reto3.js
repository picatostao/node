let readline=require('readline')
let fs=require('fs/promises');

let persona={
    name:" ",
    surname:" ",
    age:0
}
function pregunta(pregunta){
    const quiestion=new Promise ((resolve,reject)=>{
        const rl =readline.createInterface({
            input:process.stdin, 
            output:process.stdout
        })
        rl.question(pregunta,(respuesta)=>{
            resolve(respuesta)
            rl.close()
        })
    })
    return quiestion
}
  
function datosPersona(){
    let persona={
        name:" ",
        surname:" ",
        age:0
    }
    pregunta ("nombre?:") .then (name=>{persona.name=name;
        pregunta("apellido?:").then (surn=>{persona.surname=surn;
            pregunta("edad?:").then(age=>{persona.age=parseInt (age);
             
}).then(()=>{
     fs.writeFile("personaje.json", JSON.stringify(persona))
    .then(()=>{
        return fs.readFile("personaje.json","utf8");
    })
    .then((data)=>{
        console.log(JSON.parse(data));
    })
})
})
})  
    .catch((error)=>{
    console.log(error);
    }
    )}
    






    async function datosPersonaasinc(){
    try{
        let persona={
            name:" ",
            surname:" ",
            age:0
        }
        let name= await pregunta("nombre:");
        let surn= await pregunta("apellido:");
        let age= await pregunta("age:");
        persona.name=name;
        persona.surname=surn;
        persona.age=age;
        console.log(persona);
        await fs.writeFile("personaje2.json", JSON.stringify(persona));
        const lee= await fs.readFile('personaje2.json','utf8');
        console.log(JSON.parse(lee));
    }
    catch(error){
        console.log(error);
    }
    }
    //comentar y descomentar para probar cada funcion.
    datosPersona();
    // datosPersonaasinc();
        















 


 