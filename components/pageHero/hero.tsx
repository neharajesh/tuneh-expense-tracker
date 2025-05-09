'use client";';

import { AddExpenseButton } from "../addExpense";
import "./index.css";

export default function Hero() {
  return (
    <div className="heroContainer">
      <div>
        This month's goal - <strong>Do not spend more than 90000 Rs.</strong>
      </div>
      <AddExpenseButton />
    </div>
  );
}
