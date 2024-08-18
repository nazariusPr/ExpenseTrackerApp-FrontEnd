import { createContext, ReactNode, useContext, useState } from "react";
import Expense from "../models/Expense";

type ExpensesProviderProps = {
  children: ReactNode;
};

export type ExpenseDto = {
  description: string;
  amount: number;
  date: Date;
};

type ExpensesContextType = {
  expenses: Expense[];
  addExpense: (expense: ExpenseDto) => void;
  deleteExpense: (id: string) => void;
  updateExpense: (id: string, expense: ExpenseDto) => void;
};

const ExpensesContext = createContext({} as ExpensesContextType);

export function useExpenses() {
  return useContext(ExpensesContext);
}

const dummy_data: Expense[] = [
  new Expense(59.99, "Groceries", new Date(2023, 7, 1)),
  new Expense(120.5, "Electricity Bill", new Date(2024, 7, 15)),
  new Expense(15.75, "Coffee", new Date(2024, 7, 14)),
  new Expense(89.0, "Internet Subscription", new Date(2024, 7, 13)),
  new Expense(200.0, "New Headphones", new Date(2024, 7, 12)),
];

export function ExpensesProvider({ children }: ExpensesProviderProps) {
  const [expenses, setExpenses] = useState<Expense[]>(dummy_data);

  function addExpense(expenseDto: ExpenseDto): void {
    const expense = new Expense(
      expenseDto.amount,
      expenseDto.description,
      expenseDto.date
    );
    setExpenses((prev) => [...prev, expense]);
  }

  function deleteExpense(id: string): void {
    setExpenses((prev) => {
      return prev.filter((expense) => expense.id !== id);
    });
  }

  function updateExpense(id: string, expenseDto: ExpenseDto) {
    setExpenses((prev) => {
      return prev.map((expense) => {
        if (expense.id === id) {
          expense.amount = expenseDto.amount;
          expense.description = expenseDto.description;
          expense.date = expenseDto.date;
        }
        return expense;
      });
    });
  }

  return (
    <ExpensesContext.Provider
      value={{ expenses, addExpense, deleteExpense, updateExpense }}
    >
      {children}
    </ExpensesContext.Provider>
  );
}
