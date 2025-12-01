import { Router, Response, Request, NextFunction } from "express";
import {
  getAllTransactions,
  addTransaction,
  CreateTransactionInput,
} from "./transactions.service";

const router = Router();

// Get all Transactions
router.get("/", async (req: Request, res: Response, next: NextFunction) => {
  try {
    // TODO: replace with real auth once I wire JWT/user in
    const userId = 1;

    const transactions = await getAllTransactions(userId);

    res.status(200).json(transactions);
  } catch (error) {
    next(error);
  }
});

// Add Transaction to DB
router.post("/", async (req: Request, res: Response, next: NextFunction) => {
  try {
    // TODO: validate with zod/yup
    const body = req.body as Partial<CreateTransactionInput>;

    // TODO: replace with req.user.id when auth is hooked up
    const userId = 1;

    if (!body.accountId || !body.amount || !body.description || !body.date) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    const transaction = await addTransaction({
      userId,
      accountId: body.accountId,
      categoryId: body.categoryId,
      budgetId: body.budgetId,
      amount: body.amount,
      description: body.description,
      date: body.date,
      note: body.note,
    });

    res.status(201).json({
      message: "Transaction created successfully",
      data: transaction,
    });
  } catch (error) {
    next(error);
  }
});

export default router;
