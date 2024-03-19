import dotenv from 'dotenv';
dotenv.config();
import mongoose from 'mongoose'; 
import app from './app.js';
const port = process.env.PORT || 4000


mongoose.connect(process.env.MONGODB_URL).then(()=>{console.log(`DB Connected`)}).catch((error)=>{console.log(error)});

app.listen(port, ()=>{
    console.log(`Server is listening on port:http://localhost:${port}`)
})