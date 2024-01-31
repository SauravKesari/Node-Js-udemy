import bodyParser from "body-parser";
import express from "express";

const app = express();
const port = 3000;

app.use((req,res,next) => {
  console.log("Request: ",req.method,req.url);
  next();
});
app.use(bodyParser.urlencoded({extended:true}));
app.get("/", (req, res) => {
  console.log(req.body);
  res.send("Hello");
});


app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
