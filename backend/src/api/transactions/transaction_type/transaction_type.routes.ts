import { Router, NextFunction } from "express";

const router = Router();

// // Get all TransactionTypes
// router.get('/', async (req, res, next) => {
//     try {
//         const transactionTypes = await TransactionType.query().where('deleted_at', null);
//         res.status(200).json(transactionTypes)
//     } catch (error) {
//         next(error)
//     }
// });

// // Get transactionType by Id
// router.get('/:id', async (req, res, next) => {
//     try {
//         const transactionType = await TransactionType.query().findById(req.params.id);
//         res.status(200).json(transactionType);
//     } catch (error) {
//         next(error)
//     }
// });



//   // Add Category to DB
//   router.post('/', async (req: any, res: any, next: NextFunction) => {
//       try {
        
//         const category = await Category.query().insert(req.body);

//         res.status(200).json({
//           message: 'Category created successfully',
//           data: category
//         })

//       } catch (error) {
//         next(error);
//       }
//     });

//   // Update a Category
//   router.patch('/:id', async (req: any, res, next) => {
//     const categoryId = req.params.id;

//     try {
//       const category: any = await Category.query().findById(categoryId);


//       const isOwner = category && category.user_id === req.user.id;
       
//       if(!isOwner){
//          const error = new Error('You are not authorized to update this category.')
//          res.status(409);
//          throw error;
//       }

//       const updatedCategory = Object.assign(category, req.body);
    
//       await Category.query().where({id: req.params.id}).update(updatedCategory);
      
//       res.json(updatedCategory);
//     } catch (error) {
//       next(error);
//     }

//   });

//   // Delete Category from DB
//   router.delete('/:id', async (req: any, res: any, next: NextFunction) => {
//     try {
      
//         const category: any = await Category.query().findById(req.params.id);

//         const isOwner = category && category.user_id === req.user.id;
       
//        if(!isOwner){
//           const error = new Error('You are not authorized to delete this category.')
//           res.status(409);
//           throw error;
//        }

//        await Category.query().where('id', req.params.id).del();
       
//        res.status(204).json({ message: 'Category deleted successfully' });

//     } catch (error) {
//       next(error);
//     }
 
//   });

export default router;