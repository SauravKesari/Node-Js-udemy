import express from 'express';
import jsonwebToken from 'jsonwebtoken';
import bodyParser from 'body-parser';

const app = express();
app.use(express.json());
app.use(bodyParser.urlencoded({extended:true}));

const JWT_SECRET = "asdfghjklmnbvcxz";

app.post("/login",(req,res) => {
    const {uname,pass} = req.body;
    console.log(req.body);
    if(uname === "user" && pass === "password") {
        return res.json({
            token: jsonwebToken.sign({user:"user"},JWT_SECRET),
        })
    }
    return res.status(401).json({message:"Invalid username or password"});
})

app.get("/employee",(req,res) => {
    let tkn = req.header("Authorization");
    console.log(tkn);
    let tokenValue ="";
    if(!tkn) return res.status(401).json({message:"Not accessible without login"});

    if(tkn.startsWith("Bearer")) {
        tokenValue = tkn.slice(7,tkn.length).trimLeft();
        const decoded = jsonwebToken.verify(tokenValue,JWT_SECRET);
        if(decoded.user === "user") {
            return res.status(200).json({message:"access successfull.."});
        }
        return res;
    }

})

app.listen(3000,(err) => {
    console.log("server started...")
})