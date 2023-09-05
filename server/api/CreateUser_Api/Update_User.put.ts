import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

import bcrypt from 'bcrypt'

export default defineEventHandler(async (event) => {
    const postdata = await readBody(event)
   
   let hashedPassword = await bcrypt.hash(postdata.Password, 10);
   
    try {

        const Usercreation = await prisma.usercreation.update({
            where: {
                id: postdata.id,
            },
            data: {
                Username: postdata.Username,
                Password: hashedPassword,
                newPassword:postdata.Password
            },
        }); 
        
        return Usercreation;
    } catch (error) {
        return error
    }
})