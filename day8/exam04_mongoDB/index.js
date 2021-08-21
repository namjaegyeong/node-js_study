import express from 'express'
import dotenv from 'dotenv'
import { MongoClient} from 'mongodb'

import memoDbRouter from './db_memo.js'

dotenv.config();



(async () => {
    try {
        //mongodb 접속
        const db_client = new MongoClient(process.env.MONGODB_URL);

        await db_client.connect()
        // console.log(_result)
        console.log(`db connect ok`);

        //express 실행
        const app = express();
        app.use(express.json()); //json 미들웨어 등록 , 바디파서
        app.use('/api/v1/memo/',memoDbRouter(db_client));

        if (process.env.NODE_ENV == 'dev') {
            app.get('/hello', (req, res) => {
                res.json({ r: 'ok' })
            });
        }

        app.listen(process.env.PORT, () => {

            if (process.env.NODE_ENV == 'dev') {
                console.log(`server started at : ${process.env.PORT}`);
            }
        })

    }
    catch (e) {
        console.log(e);
    }

})();

