console.log('mensaje1')
setTimeout(function(){
    console.log('mensaje2');
    setTimeout(function(){
        console.log('mensaje3');
    })
},3000)