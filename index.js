
const express = require('express')

const app = express()
const port = 8000

app.set('view engine', 'hbs')//set view engine hbs
app.use('/assets', express.static(__dirname + '/assets'))//biar bisa baca path folder assets



let isLogin = false

app.get('/home', function(request,response){
    response.render("home", {isLogin})
})

app.get('/add-project', function(request,response){
    response.render("add-project")
})
app.get('/blog-detail/:name', function(request,response){
    let id = request.params.name
    console.log(id);

    response.render("blog-detail", {
        id,
        title: "Selamat Datang",
        description: "Hello World! i'm really really hungry",
        startdate: "18 Aug 2022",
        enddate: "28 Aug 2022"
    })
})
app.get('/contact', function(request,response){
    response.render("contact")
})


app.listen(port, function(){
    console.log(`server running on port ${port}`);
} 
)