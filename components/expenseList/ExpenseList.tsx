import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import data from "../../data/expenses.js";

const expenseData: any = data.expenses;

const createExpenseData = (
  date: Date,
  description: string,
  amount: number,
  category: string
) => {
  return { date, description, amount, category };
};

const rows = expenseData.map((expense: any) =>
  createExpenseData(expense.date, expense.description, expense.amount, "Food")
);

export const ExpenseList = () => {
  return (
    <>
      <TableContainer component={Paper}>
        <Typography variant="h3" sx={{ fontSize: 24 }}>
          May Expense Log
        </Typography>
        <Table sx={{ minWidth: "100%" }} aria-label="Expenses Table">
          <TableHead>
            <TableRow>
              <TableCell>Date</TableCell>
              <TableCell>Description</TableCell>
              <TableCell>Amount Spent</TableCell>
              <TableCell>Category</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {rows.map((row: any) => (
              <TableRow key={row.date}>
                <TableCell component="th" scope="row">
                  {row.date}
                </TableCell>
                <TableCell>{row.description}</TableCell>
                <TableCell>{row.amount}</TableCell>
                <TableCell>{row.category}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};
