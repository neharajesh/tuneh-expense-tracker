'use client";';

import { AddExpenseButton } from "./addExpense";

export default function Header() {
  return (
    <div className="flex flex-col gap-16 items-center">
      <div>
        This month's goal - <strong>Do not spend more than 90000 Rs.</strong>
      </div>
      <AddExpenseButton />
    </div>
  );
}
