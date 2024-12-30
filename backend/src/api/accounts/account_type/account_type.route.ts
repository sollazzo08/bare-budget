import { Router, Request, NextFunction } from "express"


const router = Router();

// Get all accounts
// router.get('/', async (req, res, next) => {
//     try {
//         const accounts = await AccountType.query().where('deleted_at', null);
//         res.status(200).json(accounts);
//     } catch (error) {
//         next(error);
//     }
// });

// Get account by Id
// router.get('/:id', async (req, res, next) => {
//     try {
//         const account = await AccountType.query().findById(req.params.id);
//         res.status(200).json(account);
//     } catch (error) {
//         next(error);
//     }
// });



  // Get All Accounts of a specific User
  // router.get('/user/:user_id', async (req: any, res: any, next: NextFunction) => {
  //   try {
      
  //     const account = await AccountType.query().where('user_id', req.params.user_id);
      
  //     res.status(200).json(account)

  //   } catch (error) {
  //     next(error);
  //   }
  // });

  // Add Account to DB
  // router.post('/', async (req: any, res: any, next: NextFunction) => {
  //     try {
        
  //       const account = await AccountType.query().insert(req.body);

  //       res.status(200).json({
  //         message: 'Account created successfully',
  //         data: account
  //       })

  //     } catch (error) {
  //       next(error);
  //     }
  //   });

  // Update a Account
  // router.patch('/:id', async (req: any, res, next) => {
  //   const accountId = req.params.id;

  //   try {
  //     const account: any = await AccountType.query().findById(accountId);


  //     const isOwner = account && account.user_id === req.user.id;
       
  //     if(!isOwner){
  //        const error = new Error('You are not authorized to update this account.')
  //        res.status(409);
  //        throw error;
  //     }

  //     const updatedAccount = Object.assign(account, req.body);
    
  //     await AccountType.query().where({id: req.params.id}).update(updatedAccount);
      
  //     res.json(updatedAccount);
  //   } catch (error) {
  //     next(error);
  //   }

  // });

  // Delete Account from DB
  // router.delete('/:id', async (req: any, res: any, next: NextFunction) => {
  //   try {
      
  //       const account: any = await AccountType.query().findById(req.params.id);

  //       const isOwner = account && account.user_id === req.user.id;
       
  //      if(!isOwner){
  //         const error = new Error('You are not authorized to delete this account.')
  //         res.status(409);
  //         throw error;
  //      }

  //      await AccountType.query().where('id', req.params.id).del();
       
  //      res.status(204).json({ message: 'Account Type deleted successfully' });

  //   } catch (error) {
  //     next(error);
  //   }
 
  // });

export default router;