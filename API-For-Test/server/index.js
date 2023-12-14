const express = require('express')
const cors = require('cors')

const app = express()

app.use(cors())
app.use(express.json())

const Products =[
        {
          "id": 1,
          "productId": 1,
          "productName": "Doner"
        },
        {
          "id": 2,
          "productId": 2,
          "productName": "Shaurma"
        },
        {
          "id": 3,
          "productId": 3,
          "productName": "Merci"
        },
        {
          "id": 4,
          "productId": 4,
          "productName": "Ayran"
        },
        {
          "id": 5,
          "productId": 5,
          "productName": "Cola"
        },
        {
          "id": 6,
          "productId": 6,
          "productName": "Fanta"
        }
]


app.get('/products', (req, res) => {
    res.send(Products);
});

app.listen(3000, () => console.log('Example app is listening on port 3000.'));
