import express from 'express'

const app = express();

app.get("/",(req,res) => {
    res.send('hello')
})

app.get('/user/:id', (req, res) => {
    res.send(`user ${req.params.id}`)
  })

app.post('/register',(req,res) => {
    res.sendStatus(201);
})

app.put('/update/:id',(req,res) => {
    res.sendStatus(300);
})

app.delete('/delete',(req,res) => {
    res.sendStatus(200);
})
app.listen(3000,() => {
    console.log("Server is listening on Port 3000")
})