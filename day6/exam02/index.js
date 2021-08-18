
import express from 'express'
import dotenv from 'dotenv'
import {logger,autholize,testmw_1,testmw_2} from './mw.js'
dotenv.config()

const app = express()

//app.use(logger)
//app.use(autholize) // 전역 스코프
app.use(
    [morgan('method :url :status :res[content-length] - :responsce-time ms'),
autholize])//배열로 다수 넘기기

app.use('/home',[testmw_1,morgan(':remote-addr')]) //home 스코프
app.use('/about',testmw_2) //about 스코프


app.get('/home',(req,res)=>{
    res.send('<h1>home</h1>')
})
app.get('/home/welcome',(req,res)=>{
    res.send('<h1>welcome to home</h1>')
})

app.get('/about',(req,res)=>{
    res.send('<h1>about</h1>')
})

//use 쓰지 않고 직접 미들웨어 등록하기
app.get('/blog',
(req,res,netx) => { //미들웨어 임배딩
    console.log('blog middel ware')
    netx()
},(req,res)=>{
    res.send('<h1>blog</h1>')
})

app.listen(process.env.PORT,() =>{
    console.log(`server start at : ${process.env.PORT}`)

})