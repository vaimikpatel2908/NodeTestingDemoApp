var express=require('express');
var app=express();
var path=require('path'); 
var bodyParser=require('body-parser'); // to pass data with form using post method

var router=require('./Router.js');
var userRouter=require('./userRouter.js');


//configure app
app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));

//use middleware
app.use(bodyParser());  //using middleware bodyparser for node 
app.use(express.static(path.join(__dirname,'bower_components')));

//define routes
app.use('/',router);
app.use('/users',userRouter);

app.listen(process.env.PORT || 1337,function(){
    console.log("server running at port 1337");
})