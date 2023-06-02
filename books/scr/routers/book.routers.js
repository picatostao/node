const {Router} = require ("express");
const router = Router();
const bookCtrl = require("../controller/book.controller");
const bookscrtl=require('../controller/books.controller')

router.get("/book", bookCtrl.getBook);
router.post("/book", bookCtrl.postBook);
router.delete("/book", bookCtrl.deleteBook);
router.put("/book", bookCtrl.putBook)

router.get("/books", bookscrtl.getBooks)
router.get("/books", bookscrtl.getBooks)
router.post("/books", bookscrtl.postBooks)
router.put("/books", bookscrtl.putBooks)
router.delete("/books", bookscrtl.delBooks)


module.exports=router