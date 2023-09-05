import db from '~/lib/prisma'
import { verifyToken } from './jwt.service';



export default defineEventHandler(async (event) => {
    assertMethod(event, 'POST');

    try {

        // const hello = postdata.hello
        const token: any = getCookie(event, "token")
        const userID = verifyToken(token)  
        const user = await db.usercreation.findUnique({
               where: {
                id : userID?.userId
               }
        }).then( async (user)=>{
          
        })
        return  "done";

    } catch (error) {
        return "This is error" + error
    }




});


  