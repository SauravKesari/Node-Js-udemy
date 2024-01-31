#! File System Modules
//const fs= require("fs");

// fs.writeFile("message.txt","hello from node js",(error) => {
//     if(error) throw error;
//     console.log("file saved");
// });

// fs.readFile('./message.txt',"utf8",(err,data) => {
//     if(err) throw err;
//     console.log(data);
// })

// Http module for server creation

// const http = require('http');
// const myModule = require('./customModule');
// http.createServer((req,res) => {
//     res.writeHead(200,{'Content-Type': 'text/html'});
//     res.end("Hello World"+myModule.myDateTime());
// }).listen(8080);


// Sillyname package
// var generateName = require('sillyname');
// var sillyName = generateName();
// console.log(sillyName);

// import superheroes from 'superheroes';

// console.log(`I am ${superheroes.random()}!`);

// QR Image Generator
import inquirer from "inquirer"
import qrImage from "qr-image";
import file from 'fs';

const questions=[{
    name:"URL",
    message:"Type your url here",
}]

const prompt = inquirer.createPromptModule();

prompt(questions).then((answers) => {
    const url = answers.URL;

    const qr_svg = qrImage.image(url);

    qr_svg.pipe(file.createWriteStream('qr.png'));   
    
    file.writeFile("url.txt",url,(error) => {
        if(error) throw error;
        console.log("URL saved to file");
    });

}).catch((error) => {
    console.log(error);
})