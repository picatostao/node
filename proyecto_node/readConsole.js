let readline=require('readline')
let fs=require('fs');
function readConsole(callback){
    const rl=readline.createInterface( 
        process.stdin,
        process.stdout
    )

let persona={
    name:"",
    surname:"",
    age:0
}
rl.question("nombre?:", (name)=>{
    persona.name=name;

    rl.question("apellido?:", (surname)=>{
        persona.surname=surname;
        rl.question("edad?:", (age)=>{
            persona.age=parseInt(age);
                    rl.close()
                    callback(persona)
                    console.log(persona)
                });
            });
        });
    }
module.exports={readConsole}