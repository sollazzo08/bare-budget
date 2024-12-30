import { NextFunction, Request, Response, Router } from 'express';

const router = Router();

// // Get all Users
// router.get('/', async (req: Request, res: Response, next: NextFunction) => {
//     try {
//         const users = await User.query().where('deleted_at', null);
//         res.status(200).json(users);
//     } catch (error) {
//         next(error);
//     }
// });

// // Get User by ID
// router.get('/:id', async (req: Request, res: Response, next: NextFunction) => {
//     try {
//         const user = await User.query().findById(req.params.id);
//         res.status(200).json(user);
//     } catch (error) {
//         next(error);
//     }
// });



export default router;
