const express = require('express');
const mysql = require ('mysql');
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 3010;
const app = express();
const cors = require('cors');

app.use(express.json());
app.use(cors());

const connection = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'password',
    database:'100original'

})

//rountes
app.get('/',(req,res)=>{
    res.send('Welcome to 100Original');

})

// Get, get/id and post from sale
app.get('/sale',(req,res)=>{
    const sql = "SELECT * from sale";
    connection.query(sql,(error, results)=>{
        if(error) throw error;
        if(results.length >0){
            res.json(results);
        }else{
            res.send('No results');
        }

    })

})

/* Formato para hacer un post en sale 
{
    "id_sale": "S0002",
    "date": "2020-07-11",
    "quantity": 3,
    "total": 1500,
    "id_platform": "P1"
}
*/


app.post('/sale',(req,res)=>{
    const sql ='INSERT into sale SET ?'
    product = {
        "id_sale": req.body.id_sale,
        "date": req.body.date,
        "quantity": req.body.quantity,
        "total": req.body.total,
        "id_platform": req.body.id_platform,
    }
    connection.query(sql,product,error =>{
        if(error) throw error;
        res.send('Sale Created Succesfully!!!');
    })
})

app.get('/sale/:id',(req,res)=>{
    const {id } = req.params;
    const sql = `SELECT * FROM sale WHERE id_sale="${id}"`;
    connection.query(sql,(error,results)=>{
        if(error) throw error;
        if(results.length >0){
            res.json(results);
        }else{
            res.send('No results');
        }

    })
})


// Get, get/id and post from product
app.get('/product',(req,res)=>{
    const sql = "SELECT * from product";
    connection.query(sql,(error, results)=>{
        if(error) throw error;
        if(results.length >0){
            res.json(results);
        }else{
            res.send('No results');
        }

    })

})
app.post('/product',(req,res)=>{
    const sql ='INSERT into PRODUCT SET ?'
    product = {
        "id_product": req.body.id_product,
        "unit_price": req.body.unit_price,
        "unit_cost": req.body.unit_cost,
        "product_name": req.body.product_name,
        "product_code": req.body.product_code,
        "stock": req.body.stock,
        "img_url": req.body.img_url,
        "id_type": req.body.id_type,
        "id_supplier": req.body.id_supplier,
    }
    connection.query(sql,product,error =>{
        if(error) throw error;
        res.send('Product Created Succesfully!!!');
    })
})

/* Formato para hacer un post de un nuevo de producto
{
    "id_product": "P0007",
    "unit_price": 350,
    "unit_cost": 200,
    "product_name": "Reloj contra agua casio",
    "product_code": "CAS10201",
    "stock": 5,
    "img_url": "www.casioAgua.com",
    "id_type": "T1",
    "id_supplier": "S1003"
}
*/


//Get, get/id and post from supplier 
app.get('/supplier',(req,res)=>{
    const sql = "SELECT * from supplier";
    connection.query(sql,(error, results)=>{
        if(error) throw error;
        if(results.length >0){
            res.json(results);
        }else{
            res.send('No results');
        }

    })

})
app.post('/supplier',(req,res)=>{
    const sql ='INSERT into supplier SET ?'
    supplier = {
        "id_supplier": req.body.id_supplier,
        "name": req.body.name,
        "contact": req.body.contact,
    }
    connection.query(sql,supplier,error =>{
        if(error) throw error;
        res.send('Supplier Created Succesfully!!!');
    })
})
/* Formato para hacer un post de supplier
{
        "id_supplier": "S0001",
        "name": "Bryan Monroy",
        "contact": "bryamon@gmail.com"
}
*/

app.get('/product/:id',(req,res)=>{
    const {id } = req.params;
    const sql = `SELECT * FROM product WHERE id_product="${id}"`;
    connection.query(sql,(error,results)=>{
        if(error) throw error;
        if(results.length >0){
            res.json(results);
        }else{
            res.send('No results');
        }

    })
})





connection.connect(error =>{
    if(error) throw error;
    console.log('Database up and running');

})



app.listen(PORT,()=>console.log('Server up and running '+PORT))