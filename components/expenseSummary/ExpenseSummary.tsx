import { Banknote, HandCoins, ReceiptIndianRupee } from "lucide-react";
import "./expenseSummary.css";
import { SummaryCardProps } from "./types";

const SummaryCard = ({ icon, text, amount }: SummaryCardProps) => {
  return (
    <div className="cardContainer">
      <div> {icon} </div>
      <div>
        <div className="cardText">{text}</div>
        <div className="cardAmount">{amount}</div>
      </div>
    </div>
  );
};

export const ExpenseSummary = () => {
  return (
    <>
      <div className="expenseContainer">
        <SummaryCard
          icon={<ReceiptIndianRupee />}
          text="Total"
          amount="Rs 400.34"
        />

        <SummaryCard
          icon={<HandCoins />}
          text={"Budget"}
          amount="Rs 90000.00"
        />

        <SummaryCard
          icon={<Banknote />}
          text={"Remaining"}
          amount="Rs 60000.00"
        />
      </div>
    </>
  );
};
