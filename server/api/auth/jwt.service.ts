import { request } from 'express';
import  Jwt  from 'jsonwebtoken';

const secretKey = 'abcd';



export function verifyToken(token: any) {
  try {
    if(!token){
      return ({ message: "No token provided!" });
    }
    
    const value = token;
    const decoded = Jwt.verify(value,secretKey);
    return decoded;


  } catch (error) {
    console.log(error)
  
  }
}





    // return jwt.verify(token, secretKey, (err, decoded) => {
    //   if(err){
    //     return ({ message: "Unauthorised!" });
    //   }
    //   return decoded
    // });
// verifyToken = (req, res, next) => {
//   let token = req.session.token;

//   if (!token) {
//     return res.status(403).send({ message: "No token provided!" });
//   }

//   jwt.verify(token, config.secret, (err, decoded) => {
//     if (err) {
//       return res.status(401).send({ message: "Unauthorized!" });
//     }
//     req.userId = decoded.id;
//     next();
//   });
// };

    //  Jwt.verify(token, 'abcd', (err, decoded) => {
    //     if(err){
    //       console.log(err)
    //       return ({ message: "Unauthorised!" + err });
    //     }
    //     console.log(decoded)
    //       return decoded
          
    //   });
