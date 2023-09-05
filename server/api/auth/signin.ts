import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import { Prisma, PrismaClient } from '@prisma/client'
import db from '~/lib/prisma';

const prisma = new PrismaClient()

const secretKey = 'abcd';


const generateToken = (id: number) => {
    //please provide proper env file 'secreat token' instead 'ancdefg'
    return jwt.sign({ userId: id }, secretKey, {
        expiresIn: '10h',
    })
}



export default defineEventHandler(async (event) => {



    assertMethod(event, 'POST')
    const postData = await readBody(event)

    const { Username } = postData
   

    try {

        // if (postData.create === "User") {
            let user = await db.usercreation.findUnique({
                where: {
                    Username: Username,
                },
            });

            if (!user) {
                return { message: 'Username does not exists.' };
                
            }

            const isPasswordValid = await bcrypt.compare(postData.Password, user.Password)

            if (!isPasswordValid) {
                return { message: 'password mismatch.' };
            }

            if (user && isPasswordValid) {
               
              
                let use = user.Role
                // let admin = user.Admin
               
                let users;
                if(use=="User")
                users="https://www.google.com";
                else if(use=="Admin")
                users="/UserData";
               
                const token = generateToken(user.id)
               
                setCookie(event, 'user', JSON.stringify(user))
                setCookie(event, 'token', token)
                return { users, token };
            }

    } catch (error) {
        console.log(error)
        return  error ;
    }




})
