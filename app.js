const express = require ("express") ;
const app = express() ;
const path = require("path") ;
app.listen(3000, () => console.log("estoy corriendo en el puerto 3000")) ;
app.use(express.static(path.join(__dirname, "public")));
app.get("/" , (req, res) => {
    const laRuta = path.resolve(__dirname, "./views/home.html") ;
    res.sendFile(laRuta) ; })
app.get("/register" , (req, res) => {
        const laRuta = path.resolve(__dirname, "./views/register.html") ;
        res.sendFile(laRuta) ; }) ;
app.get("/login" , (req, res) => {
        const laRuta = path.resolve(__dirname, "./views/login.html") ;
        res.sendFile(laRuta) ; })