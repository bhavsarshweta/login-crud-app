
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export default defineEventHandler(async (event) => {
    let cookie = JSON.parse(getCookie(event, 'user'));
    // const postData = await readBody(event)
   

     
    let response;
    const user = await prisma.usercreation.findMany({
        
        where: {
            NOT: {
                Username: cookie.Username
            },
        },

    }).then((res) => {
        response = res
    }).catch((err) => {
        response = err
    })

    return response;
    
});
