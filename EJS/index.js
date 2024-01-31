import express from 'express'
import bodyparser from 'body-parser';

const app = express();
const port = 3000;

app.use(bodyparser.urlencoded({extended:true}));

const day = new Date().getDay();
var message="";
var dayType="";
if(day>5 && day <8){ 
    dayType="a weekend";
    message = "it's weekend have fun..";
}
else {
    dayType="a weekday"; 
    message= "it's working day get back to work!";
}

// app.get('/',(req,res) => {
//     res.render('index.ejs',{
//         dayType:dayType,
//         advice: message,
//     });
// })

// app.get("/",(req,res) => {
//     const data = {
//         title:"EJS Example1",
//         seconds: new Date().getSeconds(),
//         items: ["apple","mango","orange"],
//         htmlContent: "<em>This is some text</em>",
//     };

//     res.render('index.ejs',{data:data});
// })

app.get("/",(req,res) => {
    res.render('index1.ejs');
})

app.post('/submit',(req,res) => {
    res.render('index1.ejs',{name:req.body["name"].length});
})
app.listen(port, () => {
    console.log("Server is listening...");
})