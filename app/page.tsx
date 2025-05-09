import { ExpenseList } from "@/components/expenseList/ExpenseList";
import { ExpenseSummary } from "@/components/expenseSummary/ExpenseSummary";
import Hero from "@/components/pageHero/hero";

export default async function Home() {
  return (
    <>
      <Hero />
      <ExpenseSummary />
      <ExpenseList />
    </>
  );
}
