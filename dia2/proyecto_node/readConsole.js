
let fs=require('fs/promises');
let read2=require("readline")



let persona={
    name:" ",
    surname:" ",
    age:0
}
function pregunta(pregunta){
    
    const quiestion=new Promise ((resolve,reject)=>{
        const rl =read2.createInterface({
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

function readConsole(callback){
    let persona={
        name:" ",
        surname:" ",
        age:0
    }
    pregunta ("nombre:") .then (name=>{persona.name=name;
        pregunta("apellido:").then (surn=>{persona.surname=surn;
            pregunta("edad:").then(age=>{persona.age=parseInt (age);
                return callback(persona)
             
})
})
})  
    .catch((error)=>{
    console.log(error);
    }
    )}




    
    async function readConsoleasinc(callback){
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
            return callback(persona);
        }
        catch(error){
            console.log(error);
        }
        }
    
module.exports={readConsole,readConsoleasinc,pregunta}
