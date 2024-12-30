import express from 'express';
import transactions from './transactions/transactions.route';
import transactionTypes from './transactions/transaction_type/transaction_type.routes';
import users from './users/users.route';
import auth from './auth/auth.route';
import categories from './categories/categories.route';
import accounts from './accounts/accounts.route';
import accountTypes from './accounts/account_type/account_type.route';
import { isLoggedIn } from './auth/auth.middlewares';
import tags from './transactions/tags/tags.routes';

const router = express.Router();

router.get('/', (req, res) => {
  res.json({
    message: 'Root level for API',
  });
});

router.use('/transactions', isLoggedIn, transactions);
router.use('/transaction_types', isLoggedIn, transactionTypes);
router.use('/transaction_tags', isLoggedIn, tags)
router.use('/auth', auth);
router.use('/users', users);
router.use('/categories', isLoggedIn, categories);
router.use('/accounts', isLoggedIn, accounts);
router.use('/account_types', isLoggedIn, accountTypes);


export default router;
