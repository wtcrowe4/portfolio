import express from 'express';
import dotenv from 'dotenv';
import moongoose from 'mongoose';

dotenv.config();

const app = express();

//database connection
const db = process.env.MONGO_URI + process.env.MONGO_DBNAME;
moongoose.connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB Connected...'))


app.get('/', (req, res) => {
    res.send('Backend Root Route');
    });


const PORT = process.env.PORT;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));