var express=require('express');
var router=express.Router();

var itemlist=[
    {id:1,desc:"item1"},
    {id:2,desc:"item2"},
    {id:3,desc:"item3"}
 ];

router.get("/",function(req,res){
        res.render('index',{
            title:'Index Page',
            items:itemlist});
});

router.post("/addProduct",function(req,res){
    var product=req.body.newProduct;
    console.log(product);
    itemlist.push({id:itemlist.length+1,desc:product});
    res.redirect('/');
});

router.get("/index",function(req,res){
    res.send("Index method executed");
});


module.exports = router;