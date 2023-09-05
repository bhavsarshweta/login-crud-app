import  express from 'express'
 import  { Request, Response, request } from 'express';
import bodyParser from 'body-parser'

import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()


const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }));


// app.post('/api/action', (req: Request, res: Response) => {
//   const { action } = req.body;

//   if (action === 'signin') {
//     // Handle signin logic
//     // const { email, password } = req.body;
//     // Perform signin authentication and generate JWT token
//     // Return appropriate response
//     res.json({ message: 'Signin successful' });
//   } else if (action === 'signup') {
//     // Handle signup logic
//     // const { email, password } = req.body;
//     // Perform signup logic, such as creating a new user
//     // Return appropriate response
//     res.json({ message: 'Signup successful' });
//   } else {
//     res.status(400).json({ error: 'Invalid action' });
//   }
// });

// app.get('/r', async (req: Request, res: Response) => {

//   try{
//     const id = req.body.id
//     res.json("ddd" + id);

//   }catch(error){
//     res.json({error})
//   }
//   // const data = 'this is rahul';
//   // res.json(data);
// });

export default function(req: Request, res: Response){

  const {action} = req.params;
 
  if (action === 'signin') {
    // Handle signin logic
    // const { email, password } = req.body;
    // Perform signin authentication and generate JWT token
    // Return appropriate response
    
    res.json({ message: 'Signin successful' });
  } else if (action === 'signup') {
    // Handle signup logic
    // const { email, password } = req.body;
    // Perform signup logic, such as creating a new user
    // Return appropriate response
    res.json({ message: 'Signup successful' });
  } else {
    res.status(400).json({ error: 'Invalid action' });
  }

}





