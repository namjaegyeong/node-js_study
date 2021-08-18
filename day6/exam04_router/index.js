import express from 'express'
import dotenv from 'dotenv'
dotenv.config()
const app = express()

// const router = express.Router()
// const router2 = express.Router()
// router2.get('/list',(req,res)=>{
//     res.json({r:'ok',data:'this is product list'})
// })

import user_router from './routers/user.js'
import product_router from './routers/product.js'

app.use('/api/v1/',express.json())

app.use('/api/v1/user',user_router)
app.use('/api/v1/product',product_router)

app.listen(process.env.PORT, () => {
    if (process.env.NODE_ENV == 'dev') {
        console.log(`server start at : ${process.env.PORT}`)
    }
})