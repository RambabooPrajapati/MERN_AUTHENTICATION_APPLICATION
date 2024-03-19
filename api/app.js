import express from 'express';
const app = express();
import cookieParser from 'cookie-parser'
import bodyParser from 'body-parser';
import path from 'path';
const __dirname = path.resolve(); 
// Parse URL-encoded bodies for form data
app.use(bodyParser.urlencoded({extended: true}));
// Parse JSON bodies for API calls
app.use(bodyParser.json());


app.use(cookieParser());
app.use(express.static(path.join(__dirname, '/client/dist')))

import userRoutes from './routes/user.route.js';
import authRoutes from './routes/auth.route.js'; 

app.get('*', (req, res)=>{
    res.sendFile(path.join(__dirname, 'client', 'dist', 'index.html'))
})
app.use('/api/user', userRoutes);
app.use('/api/auth', authRoutes)

export default app;