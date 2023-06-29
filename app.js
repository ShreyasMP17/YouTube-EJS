const express=require("express")
const app=express()

app.set("view engine","ejs")
app.use(express.static('public')) 

let categories = [
    {title:"All"},
    {title:"Music"},
    {title:"Comedy"},
    {title:"Sports"},
    {title:"News"},
    {title:"Bollywood"},
    {title:"Reality Shows"},
    {title:"Live"},
    {title:"Cricket"},
    {title:"Football"},
    {title:"Entertainment"}
]

let videos=[
    {images:"/images/one.png",title:"Title of the video",channel:"YOUTUBE"},
    {images:"/images/two.webp",title:"Title of the video",channel:"YOUTUBE"},
    {images:"/images/three.webp",title:"Title of the video",channel:"YOUTUBE"},
    {images:"/images/four.webp",title:"Title of the video",channel:"YOUTUBE"},
    {images:"/images/five.webp",title:"Title of the video",channel:"YOUTUBE"},
    {images:"/images/six.webp",title:"Title of the video",channel:"YOUTUBE"},
    {images:"/images/seven.webp",title:"Title of the video",channel:"YOUTUBE"},
    {images:"/images/eight.webp",title:"Title of the video",channel:"YOUTUBE"},
    {images:"/images/nine.webp",title:"Title of the video",channel:"YOUTUBE"},
]

app.get('/',(req,res)=>{
    res.render('home',{categories ,videos})   //to pass the array elements
})

app.listen(3000,()=>{
    console.log("listen at port 3000");
})