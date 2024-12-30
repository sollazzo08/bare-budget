import { Router, Request, NextFunction } from "express"

const router = Router();

// // Get all tags
// router.get('/', async (req, res, next) => {
//     try {
//         const tags = await Tag.query().where('deleted_at', null);
//         res.status(200).json(tags);
//     } catch (error) {
//         next(error);
//     }
// });

// // Get tag by Id
// router.get('/:id', async (req, res, next) => {
//     try {
//         const tag = await Tag.query().findById(req.params.id);
//         res.status(200).json(tag);
//     } catch (error) {
//         next(error);
//     }
// });



//   // Add Tag to DB
//   router.post('/', async (req: any, res: any, next: NextFunction) => {
//       try {
        
//         const tag = await Tag.query().insert(req.body);

//         res.status(200).json({
//           message: 'tag created successfully',
//           data: tag
//         })

//       } catch (error) {
//         next(error);
//       }
//     });

//   // Update a Account
//   router.patch('/:id', async (req: any, res, next) => {
//     const accountId = req.params.id;

//     try {
//       const account: any = await Tag.query().findById(accountId);


//       const isOwner = account && account.user_id === req.user.id;
       
//       if(!isOwner){
//          const error = new Error('You are not authorized to update this account.')
//          res.status(409);
//          throw error;
//       }

//       const updatedAccount = Object.assign(account, req.body);
    
//       await Tag.query().where({id: req.params.id}).update(updatedAccount);
      
//       res.json(updatedAccount);
//     } catch (error) {
//       next(error);
//     }

//   });

//   // Delete Account from DB
//   router.delete('/:id', async (req: any, res: any, next: NextFunction) => {
//     try {
      
//         const account: any = await Tag.query().findById(req.params.id);

//         const isOwner = account && account.user_id === req.user.id;
       
//        if(!isOwner){
//           const error = new Error('You are not authorized to delete this account.')
//           res.status(409);
//           throw error;
//        }

//        await Tag.query().where('id', req.params.id).del();
       
//        res.status(204).json({ message: 'Account Type deleted successfully' });

//     } catch (error) {
//       next(error);
//     }
 
//   });

export default router;