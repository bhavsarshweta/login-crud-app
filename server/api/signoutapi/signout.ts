export default defineEventHandler(async (event) => {
    
    try {  
        const token = event.node.req.headers.cookie?.split(';') 
                      .map((cookie) => cookie.trim())
                      .find((cookie) => cookie.startsWith('token='));
       

          if (token) {
              try {
                // Verify the token using the imported function
              //   verifyToken(token);
                setCookie(event, 'token', '', {expires: new Date(0)} );
                setCookie(event, 'user', '', {expires: new Date(0)} );
                return {message: 'User signed out successfully.'}

              } catch (error) {
                console.error('Invalid token:', error);
                // Handle invalid token error if needed
              }

              
              // return {message: 'User signed out successfully.'}
            }

          //   setCookie(event, 'token', '', {expires: new Date(0)} );
          //   return {message: 'User signed out successfully.'}


  }catch(error){
    return error;
  }

})




