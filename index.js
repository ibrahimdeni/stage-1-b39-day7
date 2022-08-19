
const express = require('express')

const app = express()
const port = 8000

app.set('view engine', 'hbs')//set view engine hbs
app.use('/assets', express.static(__dirname + '/assets'))//biar bisa baca path folder assets

app.get('/home', function(request,response){
    response.render("home")
})
app.get('/add-project', function(request,response){
    response.render("add-project")
})
app.get('/blog-detail', function(request,response){
    response.render("blog-detail")
})
app.get('/contact', function(request,response){
    response.render("contact")
})


app.listen(port, function(){
    console.log(`server running on port ${port}`);
} 
)