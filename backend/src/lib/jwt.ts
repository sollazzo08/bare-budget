import jwt from 'jsonwebtoken';

export function verify(token: any) {
    return new Promise((resolve, reject) => {
      jwt.verify(token, process.env.JWT_SECRET as string, (error: any, decoded: any) => {
        if (error) return reject(error);
        return resolve(decoded);
      });
    });
  }

export function sign(payload: any){
    return new Promise((resolve, reject) => {
        jwt.sign(
            payload, 
            process.env.JWT_SECRET as string,
            { expiresIn: '1d'},
            ((error, token) => {
             if(error) return reject(error);
             return resolve(token);
            })
         );
    })

};
