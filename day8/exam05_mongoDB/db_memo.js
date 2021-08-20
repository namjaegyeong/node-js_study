import express from 'express'
import {ObjectId} from 'mongodb'

const router = express.Router()

export default (db_client) => {
    router.use('/',(req,res,next)=> {
        console.log(`allowed cors : ${req.originalUrl}`);
        // res.set('Access-Control-Allow-Origin','http://localhost:8080')
        
        res.set('Access-Control-Allow-Origin','*'); //cors 전체 허용
        res.set('Access-Control-Allow-Methods', '*');
        res.set("Access-Control-Allow-Headers", "*");
        next();
    });
    router.post('/insert', async (req, res) => {

        try {
            const database = db_client.db('node_stduy');
            const memo = database.collection('memo');

            console.log(req.body)

            let _res = await memo.insertOne(req.body);

            res.json({ r: 'ok', d: _res });
        }
        catch (e) {
            res.json({ r: 'err', err: e })
        }
    });

    router.get('/find/skip/:skip/limit/:limit', async (req, res) => {
        try {
            console.log(req.params)
            const database = db_client.db('node_stduy');
            const memo = database.collection('memo');
            let cursor = await memo.find()
                .skip(parseInt(req.params.skip))
                .limit(parseInt(req.params.limit));

            let items = await cursor.toArray();
            res            
            .json({ r: 'ok', d: items });
        }
        catch (e) {
            res.json({ r: 'err', err: e })
        }
    });

    router.get('/delete/id/:id', async (req, res) => {
        try {
            const database = db_client.db('node_stduy');
            const memo = database.collection('memo');
            let _res = await memo.deleteOne({ _id: new ObjectId(req.params.id) });

            res.json({ r: 'ok', d: _res })

        }
        catch (e) {
            res.json({ r: 'err', d: e })
        }

    });
    return router;
}