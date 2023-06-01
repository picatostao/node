let read2=require("readline")
let fs=require('fs/promises');




function writeAndRead(x,x1){
    const personaJson = JSON.stringify(x1);
    
    fs.writeFile(x, personaJson,"utf-8",)
    .then(()=>{
        return fs.readFile(x,"utf8")
    })
    .then((data)=>{
        console.log(JSON.parse(data));
    })
    .catch((error)=>{
    console.log(error);
    })
    }


async function writeAndReadasinc(x,x1){
   try{
        const personaJson = JSON.stringify(x1)
        await fs.writeFile(x, personaJson)
        const lee= await fs.readFile(x,'utf8')
        console.log(JSON.parse(lee));}
    catch(error){
        console.log(error);
    }
    
}
module.exports={writeAndRead,writeAndReadasinc}


