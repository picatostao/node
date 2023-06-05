const express = require('express')
const app = express()
app.get('/', function(request,response,next){
    console.log("petición recibida del cliente");
    console.log(request.url);
    console.log(request.method);
    console.log(request.headers['user-agent']);
    response.status(200).json({ok:true,
                            mensaje:"recibido"}
                            )}
                            )

app.get('/bye', function(request,response,next){
    console.log("petición recibida del cliente");
    console.log(request.url);
    console.log(request.method);
    console.log(request.headers['user-agent']);
    response.status(200).json({ok:true,
                            mensaje:"chao pescao!"

    })
})
app.listen(3100)