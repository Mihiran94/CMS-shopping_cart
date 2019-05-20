const express = require('express');
const path = require('path');

//init app
const app = express();

//view engine setup
app.set('views', path.join(__dirname,'views'));
app.set('view engine' ,'ejs');

//set public folder
app.use(express.static(path.join(__dirname,'public')));


app.get('/',function(req,res){
    res.send('Working');
});


//start server
const port = 3000;
app.listen(port,function(){
    console.log('server start at port:'+ port);
})
