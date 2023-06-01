
let read= require("./readConsole");
let werite=require("./writeAndReadObject")
let read2=require("readline")



read.readConsole((paco)=>{
    werite.writeAndRead("personil.json",paco)
})