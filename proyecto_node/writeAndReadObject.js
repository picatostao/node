
let fs=require('fs');
function writeAndRead(x,x1){

const personaJson = JSON.stringify(x1);
    
    fs.writeFile(x , personaJson , 'utf8', () => { 
    fs.readFile(x, 'utf8', (err , data) => {
        const persona =JSON.parse(data)
        console.log(persona);
    });
})}
// writeAndRead('./hola.json', { hola:'hola', si: 'si'});
module.exports={writeAndRead}
