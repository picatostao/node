

let fs=require('fs')


let persona={
    name:"aw",
    surname:"bw",
    age:04
}


const personaJson = JSON.stringify(persona);
    
    fs.writeFile('persona.json', personaJson, () => { 
    fs.readFile('persona.json', 'utf8', (err, data) => {
        const personas=JSON.parse(data)
        console.log(personas);
    });
});
