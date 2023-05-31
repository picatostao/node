
let read= require("./readConsole");
let werite=require("./writeAndReadObject")

read.readConsole((persona)=>{
    werite.writeAndRead("personilla.json",persona)
})