const express = require('express') 
const dotenv = require('dotenv').config() 
const mongoose = require('mongoose')
const app = express();

//database connection
const db = process.env.MONGO_URI 
mongoose.set('strictQuery', true)
mongoose.connect(db, () => {console.log('MongoDB Connected...')})
    
//testimonial schema
const testimonialSchema = new mongoose.Schema({
    name: String,
    testimonial: String
})
const Testimonial = mongoose.model('Testimonial', testimonialSchema)
const data = new Testimonial({
    name: 'John Doe',
    testimonial: 'This is a testimonial'
})
data.save()



app.get('/', (req, res) => {
    res.send('Backend Root Route');
    });


const PORT = process.env.PORT;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));

