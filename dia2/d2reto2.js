

const { writeFile } = require("fs");
let fs=require("fs/promises")


let persona={
    name:"aw",
    surname:"bw",
    age:04
}


const personaJson = JSON.stringify(persona);
    
    fs.writeFile("personaPrometida.json", personaJson)
    .then((resultado)=>{
        return fs.readFile("personaPrometida.json","utf8")
    })
    .then((data)=>{
        console.log(JSON.parse(data));
    })
    .catch((error)=>{
    console.log(error);
    })


    //asín/awai!

    async function asyncAwait(){
        await fs.writeFile("nuevo.json", personaJson)
        const lee= await fs.readFile('nuevo.json','utf8')
        console.log(JSON.parse(lee));
    }
    asyncAwait()