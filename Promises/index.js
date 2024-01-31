import express from 'express';
import axios from 'axios';

const app = express();

const connectURL = async (url) => {
    const req = axios.get(url);
    console.log(req);
    const products = (await req).data.products;
    console.log(JSON.stringify(products,null,
        4));
    products.forEach(element => {
     console.log(element.title);   
    });
}

console.log("Befor calling url");
connectURL("https://dummyjson.com/products");
console.log("After done ...");
// function getSumNum(a, b) {
//     const customPromise = new Promise((resolve, reject) => {
//       const sum = a + b;
  
//       if(sum <= 5){
//         resolve("Let's go!!")
//       } else {
//         reject(new Error('Oops!.. Number must be less than 5'))
//       }
//     })
  
//     return customPromise
//   }
  
//   // consuming the promise
//   getSumNum(1, 8).then(data => {
//     console.log(data)
//   })
//   .catch(err => {
//     console.log(err)
//   })


//   function perfectSquare (number) {
//     return new Promise(function (fulfilled, rejected) {
//       const bool = Number.isInteger(Math.sqrt(number))
//       if (!bool) {
//           return rejected( new Error(`Number ${number} is NOT a perfect square`) )
//       }
//       fulfilled( `Number ${number} is a perfect square` )
//     })
//   }
//   perfectSquare(15).then(res => {
//     console.log(res)
//   })
app.listen(3000,(error) => {
    console.log("Server is running...");
})