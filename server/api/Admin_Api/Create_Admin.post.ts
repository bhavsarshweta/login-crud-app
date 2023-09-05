import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export default defineEventHandler(async (event) => {
    const postdata = await readBody(event)

    try {

        const Usercreation = await prisma.usercreation.create({
            data: {
                Username: postdata.Username,
                Password: postdata.Password,
                Role: "Admin",
            },
        })
        return Usercreation;
    } catch (error) {
        return error;
    }
})