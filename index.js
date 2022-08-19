
const express = require('express')

const app = express()
const port = 8000

app.set('view engine', 'hbs')//set view engine hbs
app.use('/assets', express.static(__dirname + '/assets'))//biar bisa baca path folder assets

app.get('/home/:name', function(request,response){
    let id = request.params.name
    console.log(id);

    response.render("home", {
        id,
        title : "Selamat Datang di Web saya guys!"




    })
})
app.get('/add-project', function(request,response){
    response.render("add-project")
})
app.get('/contact', function(request,response){
    response.render("contact")
})


app.listen(port, function(){
    console.log(`server running on port ${port}`);
} 
)