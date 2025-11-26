type RecurringType = "Bill" | "Subscription";

export type RecurringExpense = {
  id: string;
  name: string;
  type: RecurringType;
  amount: number;
  account: string;
  dueDay: number;
  autoPay: boolean;
};


export const recurringExpenses: RecurringExpense[] = [
  {
    id: "1",
    name: "Rent",
    type: "Bill",
    amount: 1500,
    account: "Checking",
    dueDay: 1,
    autoPay: false,
  },
  {
    id: "2",
    name: "Electric",
    type: "Bill",
    amount: 85,
    account: "Checking",
    dueDay: 12,
    autoPay: true,
  },
  {
    id: "3",
    name: "Internet",
    type: "Bill",
    amount: 70,
    account: "Checking",
    dueDay: 10,
    autoPay: true,
  },
  {
    id: "4",
    name: "Spotify",
    type: "Subscription",
    amount: 10.99,
    account: "Credit Card",
    dueDay: 5,
    autoPay: true,
  },
  {
    id: "5",
    name: "Netflix",
    type: "Subscription",
    amount: 15.49,
    account: "Credit Card",
    dueDay: 18,
    autoPay: true,
  },
  {
    id: "6",
    name: "Gym Membership",
    type: "Subscription",
    amount: 45,
    account: "Credit Card",
    dueDay: 20,
    autoPay: false,
  },
];
