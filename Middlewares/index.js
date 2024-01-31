import express from 'express';

const app = express();
const router = express.Router();


//--------Route level middleware-----------------
// router.use((req,res,next) => {
//     console.log("router hits");
//     next();
// })

// router.get("/user",(req,res,next) => {
//     console.log("route with path");
//     next();
// })

// predicate the router with a check and bail out when needed
// router.use((req, res, next) => {
//     if (!req.headers['x-auth']) return next('router')
//     next()
//   })
  
//   router.get('/user/:id', (req, res) => {
//     res.send('hello, user!')
//   })
  
//   // use the router and 401 anything falling through
//   app.use('/admin', router, (req, res) => {
//     res.sendStatus(401)
//   })

// --------App level Middleware----------
// app.use("/",router);
// app.use((req,res,next) => {
//     console.log("middleware hits",new Date().getDate());
//     next();
// })

// app.get("/user/:id",(req,res,next) => {
//     console.log("Route specific app level",req.method);
//     next();
// })


// ---------Error handling middleware-----------
app.use("/user/:id",(err,req,res,next) => {
    if(req.params.id > 3) {
        console.error(err.stack);
        res.status(500).send("Something broke");
    }
    next();
})
app.listen(3000,(req,res) => {
    console.log("server is running..");
})