import {Router, Response, Request, NextFunction} from 'express';

const router = Router();

// // Get all Transactions
// router.get('/', async (req: Request, res: Response, next: NextFunction) => {
//       try {
//         const transactions = await Transaction.query()
//         .withGraphFetched('category')
//         .withGraphFetched('user')
//         .withGraphFetched('account')
//         .withGraphFetched('transaction_type')
//         .whereNull('deleted_at')
//         .select('id', 'amount', 'date', 'note', 'created_at', 'updated_at');
//         res.status(200).json(transactions);

//       } catch (error) {
//         next(error)
//       }
//   });

//   // Get Transaction by ID
//   router.get('/:id', async (req: Request, res: Response, next: NextFunction) => {
//     try {
      
//       const transaction = await Transaction.query().findById(req.params.id);

//       res.status(200).json(transaction)

//     } catch (error) {
//       next(error);
//     }
//   });
  
//     // Get All Transactions of a specific User
//     router.get('/user/:user_id', async (req: Request, res: Response, next: NextFunction) => {
//       try {
        
//         const transaction = await Transaction.query().where('user_id', req.params.user_id);
        
//         res.status(200).json(transaction)
  
//       } catch (error) {
//         next(error);
//       }
//     });

//     // Add Transaction to DB
//     router.post('/', async (req: Request, res: Response, next: NextFunction) => {
//         try {
          
//           const transaction = await Transaction.query().insert(req.body);

//           res.status(200).json({
//             message: 'Transaction created successfully',
//             data: transaction
//           })

//         } catch (error) {
//           next(error);
//         }
//       });

//     // Update a transaction
//     router.patch('/:id', async (req: any, res, next) => {
//       const transactionId = req.params.id;

//       try {
//         const transaction: any = await Transaction.query().findById(transactionId);


//         const isOwner = transaction && transaction.user_id === req.user.id;
         
//         if(!isOwner){
//            const error = new Error('You are not authorized to update this transaction.')
//            res.status(409);
//            throw error;
//         }

//         const updatedTransaction = Object.assign(transaction, req.body);
      
//         await Transaction.query().where({id: req.params.id}).update(updatedTransaction);
        
//         res.json(updatedTransaction);
//       } catch (error) {
//         next(error);
//       }

//     });

//     // Delete Transaction from DB
//     router.delete('/:id', async (req: any, res: Response, next: NextFunction) => {
//       try {
        
//           const transaction: any = await Transaction.query().findById(req.params.id);

//           const isOwner = transaction && transaction.user_id === req.user.id;
         
//          if(!isOwner){
//             const error = new Error('You are not authorized to delete this transaction.')
//             res.status(409);
//             throw error;
//          }

//          await Transaction.query().where('id', req.params.id).del();
         
//          res.status(204).json({ message: 'Transaction deleted successfully' });

//       } catch (error) {
//         next(error);
//       }
   
//     });

export default router;
