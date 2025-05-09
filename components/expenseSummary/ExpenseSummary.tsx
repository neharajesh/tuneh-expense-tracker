import "./expenseSummary.css";
import { SummaryCardProps } from "./types";
import { Card, CardContent, Typography } from "@mui/material";

const SummaryCard = ({ text, amount }: SummaryCardProps) => {
  return (
    <Card sx={{ minWidth: 300 }} variant="outlined">
      <CardContent>
        <Typography gutterBottom sx={{ color: "text.secondary", fontSize: 14 }}>
          {text}
        </Typography>
        <Typography> {amount} </Typography>
      </CardContent>
    </Card>
  );
};

export const ExpenseSummary = () => {
  return (
    <>
      <div className="expenseContainer">
        <SummaryCard text="Total" amount="Rs 400.34" />
        <SummaryCard text={"Budget"} amount="Rs 90000.00" />
        <SummaryCard text={"Remaining"} amount="Rs 60000.00" />
      </div>
    </>
  );
};
