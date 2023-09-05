
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import { PrismaClient } from '@prisma/client'


import { verifyToken } from './jwt.service';
import db from '~/lib/prisma';

const prisma = new PrismaClient()

const sessionOptions = {
    password: process.env.SESSION_PASSWORD,
    cookieName: 'session',
    cookieOptions: {
        secure: process.env.NODE_ENV === 'production',
    }
}



const secretKey = 'abcd';


const generateToken = (id: number ) => {
    //please provide proper env file 'secreat token' instead 'ancdefg'
    return jwt.sign({ userId: id }, secretKey, {
        expiresIn: '10h',
    })
}


export default defineEventHandler(async (event) => {
    // assertMethod(event, 'POST');
    const postData = await readBody(event)
   
        assertMethod(event, 'POST');

        // const postData = await readBody(event);

        try {
            // assert(postData, userVM)
            const { Username, Password, Role } = postData
            
         
        // ---------------------The user and vendor creation section starts here -------------

        {

             // Check if the username already exists in the database
             const existingUser = await prisma.usercreation.findUnique({
                where: {
                    Username: postData.Username,
                },
            })

            if (existingUser) {
                
                return 'Username already exists.' ;
            }
           
            let hashedPassword = await bcrypt.hash(Password, 10);
         
            

            const user = await prisma.usercreation.create({
                data: {
                     
                    Username:postData.Username,
                    Password:hashedPassword,
                    // Password:hashedPassword,
                    newPassword:postData.Password,
                    Role:postData.Role,
    
                },
            })


            if (!user) {
                return { message: 'User creating failed.' };
            }
            if(user){

            const str="User Created  Sucessfully!"   
            return "User Created  Sucessfully!" ;


        }

    }
        
        } catch (error) {
            return error;
        }
    
    
});


// import { IncomingMessage, ServerResponse } from 'http'
// import { NuxtHTTPInstance } from '@nuxt/http'





// const middleware: Middleware = async (context) => {
//   const { app, req, res } = context

//   try {
//     const http = app.$http as NuxtHTTPInstance<IncomingMessage, ServerResponse>

//     const { action, username, password, mobileno } = http.parsedBody

//     if (action === 'signup') {
//       const hashedPassword = await bcrypt.hash(password, 10)

//       // Check if the username already exists in the database
//       const existingUser = await prisma.vendor.findFirst({
//         where: {
//           Username: username,
//         },
//       })

//       if (existingUser) {
//         throw new Error('Username already exists.')
//       }

//       const user = await prisma.vendor.create({
//         data: {
//           Username: username,
//           Mobileno: mobileno,
//           Password: hashedPassword,
//         },
//       })

//       if (!user) {
//         throw new Error('User creation failed.')
//       }



//       const token = generateToken(user.id)

//       // Save the userId in the session
//       await http.$session.set('userId', user.id)
//       await http.$session.save()

//       res.json({ user, token })
//     } else if (action === 'signin') {
//       const user = await prisma.vendor.findUnique({
//         where: {
//           Username: username,
//         },
//       })

//       if (!user) {
//         return res.status(404).json({ error: 'The user does not exist' })
//       }

//       const isPasswordValid = await bcrypt.compare(password, user.Password)

//       if (!isPasswordValid) {
//         return res.status(401).json({ error: 'Invalid password' })
//       }

//       const token = generateToken(user.id)

//       res.json({ user, token })
//     } else {
//       res.status(400).json({ error: 'Invalid action' })
//     }
//   } catch (error) {
//     res.status(500).json({ error: error.message })
//   }
// }

// export default middleware
