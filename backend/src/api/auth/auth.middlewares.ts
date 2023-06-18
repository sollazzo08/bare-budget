import { verify } from "../../lib/jwt";

export const setUserFromTokenIfValid = async (req: any, res: any, next: any) => {
    const authHeader = req.get('authorization');
    if (authHeader) {
      try {
        const [, token] = authHeader.split(' ');
        const user = await verify(token);
        req.user = user;
        return next();
      } catch (error) {
        console.log(error);
      }
    }
    return next();
  };

export const isLoggedIn = (req: any, res: any, next: any) => {

    if(req.user){
        return next();
    }
    const error = new Error('Un-Authuorized');
    res.status(401);
    return next(error);
}

