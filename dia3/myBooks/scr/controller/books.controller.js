const { Book } = require('../models/book')

let books=[
      new Book(117,117,"Sin noticias de Gurb","De bolsillo","Eduardo Mendoza",12,"https://i.pinimg.com/originals/af/3e/83/af3e832a5b849f48a9839a044f9ced7b.jpg"),
      new Book(118,118,"La inteligencia fracasada","De bolsillo","Jose Antonio Marina",10,"https://www.anagrama-ed.es/uploads/media/portadas/0001/13/ecb806fef2126f22ccb414df909745c3580f084b.jpeg"),
      new Book(119,119,"El capitán Alatriste","Tapa dura","Arturo Perez Reverte",15,"https://www.perezreverte.com/upload/fotos/libros/201002/alatristeanotado_med.jpg"),
    ] 
let book= new Book()

function getIdBook(request,response){
    console.log(" ");
    console.log("////EJECUTANDO GETIDBOOK////");
    console.log(" ");
    let respuesta;
    let bookId=request.params.id_book;
    console.log("ID RECIBIDA", bookId);
    console.log("LIBROS ACTUALES:", books);
    let book= books.find((book)=> book.id_book==bookId);
    console.log("LIBRO ENCONTRADO", book);
    if (book){
        respuesta=book; 
    }else{
        respuesta={error:true, codigo:200, mensaje:"no existe libro"};
        console.log("LIBRO NO ENCONTRADO"); 
    }
    response.send(respuesta);
}

function getBooks(request,response){
    console.log(" ");
    console.log('////EJECUTANDO GETBOOKS////');
    console.log(" ");
 let respuesta
    console.log('LIBROS: ',books);
if( books.length>0)
  respuesta=books
    else
respuesta={error:true, codigo:200, mensaje:"no existe libro"}
response.send(respuesta)
}

function postBooks(request,response){
    console.log(" ");
    console.log('////EJECUTANDO POSTBOOKS////');
    console.log(" ");
    let respuesta;
    console.log('NUEVO LIBRO:')
    console.log(request.body);
    let bookId=request.body.id_book
    let nothing= books.find((book)=>book.id_book===bookId)
    if (!nothing){
 let new_book=new Book(
            request.body.id_book,
            request.body.title,
            request.body.type,
            request.body.author,
            request.body.price,
            request.body.photo
 )
 books.push(new_book)
 respuesta={  
    error:false ,codigo:200, mensaje:'libro creado',data:new_book
}
}else
respuesta={
    error:true, codigo:200, mensaje:'error, libro ya existente'
}
console.log('LIBROS ACTUALES:', books);
response.send(respuesta)
}

function putBooks(request,response){
    console.log(" ");
    console.log('////EJECUTANDO PUTBOOKS///');
    console.log(" ");
    let respuesta;
    console.log('ACTUALIZACIÓN:');
    console.log(request.body);
    let bookId=request.body.id_book
    let bookIndex=books.findIndex((book1)=>book1.id_book===bookId);
    if(bookIndex!==-1){
    let update=books[bookIndex]
    update.title=request.body.title
    update.type=request.body.type
    update.author=request.body.author
    update.price=request.body.price
    update.photo=request.body.photo
    respuesta={error:false, codigo:200, mensaje:'libro actualizado',data:update
    }
}else
respuesta={
    error:true, codigo:200, mensaje:'El libro no existe'
}
console.log('LIBROS ACTUALES:', books);
response.send(respuesta)  
}

function delBooks(request,response){
    console.log(" ");
    console.log('////EJECUTANDO DELBOOKS////');
    let respuesta;
    let bookId=request.params.id_book;
    console.log('ID DEL LIBRO QUE SE VA A ELIMINAR:',bookId);
    let bookIndex=books.filter((book)=>book.id_book != bookId)
    if (bookIndex.length < books.length){
        books=bookIndex
        respuesta={
            error:false, codigo:200, mensaje: "libro borrado",data:bookIndex
        }
    }else{ 
    respuesta={
        error: true, codigo:200, mensaje:'el libro que quieres borrar no existe'
    }
    console.log('LIBROS ACTUALES:', books);}
    response.send(respuesta)
}

module.exports={getBooks,postBooks,putBooks,delBooks,getIdBook}

// {
//     "id_book": 10,
//     "title": "title",  
//     "type":"type",
//     "author":"author",
//     "price":10,
//     "photo": "photo"
//   }
// {

//     "id_book": 11,
//     "title": "title1",  
//     "type":"type1",
//     "author":"author1",
//     "price":11,
//     "photo": "photo1"
//   }

// {
//     "id_book": 12,
//     "title": "title2",  
//     "type":"type2",
//     "author":"author2",
//     "price":12,
//     "photo": "photho2"
//   }