import Replicate from "replicate";
import express from 'express';
import * as dotenv from 'dotenv';

dotenv.config();

const router  = express.Router();

const replicate = new Replicate({
  auth : process.env.REPLICATE_API_TOKEN
});

router.route('/').get( async (req,res) => {
  res.send('Hello from Dalle Replicate Route!');
});

router.route('/').post( async (req,res) => {
  try {
    const { prompt } = req.body;

    const output = await replicate.run(
      "stability-ai/sdxl:39ed52f2a78e934b3ba6e2a89f5b1c712de7dfea535525255b1aa35c5565e08b",
      {
        input: {
          prompt: prompt
        }
      }
    );
    
    res.status(200).json(output)
  } catch (error) {
    console.log(error)
  }
});

export default router;
