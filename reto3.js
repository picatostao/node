let readline=require('readline')
let fs=require('fs');
const { log } = require('console');
let rl=readline.createInterface(process.stdin, process.stdout)

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
            const personaJson = JSON.stringify(persona);
            fs.writeFile('persona2.json', personaJson, () => { 
                fs.readFile('persona2.json', 'utf8', (err, data) =>{
                    console.log(persona);
                    rl.close()
                })
            })
        })
    })
})









 


 