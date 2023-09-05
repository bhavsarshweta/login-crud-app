import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

export default defineEventHandler(async (event) => {
    const postdata = await readBody(event)
    
    
    try {

        const Usercreation = await prisma.usercreation.delete({
            where: {
                id:postdata.id
            },
        });
        return Usercreation;
    } catch (error) {
        return error
    }
})