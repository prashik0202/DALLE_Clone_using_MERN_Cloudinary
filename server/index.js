import express from 'express';
import * as dotenv from 'dotenv';
import cors from 'cors';
import connectDB from './mongodb/connect.js';
import postRoutes from './routes/PostRoutes.js';
import dalleRoutes from './routes/DaleRoutes.js';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json({ limit : '50mb'}));

app.use('/api/v1/post' , postRoutes);
app.use('/api/v1/dalle', dalleRoutes);

app.get('/' , async (req,res) => {
    res.send('Hello from DALL-E!');
})

const startServer = async() => {
    try {
        const port = 3000;
        connectDB(process.env.MONGODB_URL);
        app.listen(port , () => {
            console.log(`Server is Started on http://localhost:${port}`);
        })
    } catch (error) {
        console.log(error);
    }
    
}
startServer();