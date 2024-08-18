import ExpensesOutput from "../components/ExpensesOutput/ExpensesOutput";
import { useExpenses } from "../store/ExpensesContext";
import { getDateMinusDays } from "../util/date";

function RecentExpenses() {
  const { expenses } = useExpenses();

  const today = new Date();
  const lastWeek = getDateMinusDays(today, 7);

  const latestExpenses = expenses.filter((expense) => {
    return expense.date >= lastWeek;
  });

  return (
    <ExpensesOutput
      expenses={latestExpenses}
      expensesPeriod="Last 7 Days"
      fallbackText="No expenses registered for the last 7 days."
    />
  );
}

export default RecentExpenses;
