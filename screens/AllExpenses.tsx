import ExpensesOutput from "../components/ExpensesOutput/ExpensesOutput";
import { useExpenses } from "../store/ExpensesContext";

function AllExpenses() {
  const { expenses } = useExpenses();
  return (
    <ExpensesOutput
      expenses={expenses}
      expensesPeriod="Total"
      fallbackText="No registered expenses found!"
    />
  );
}

export default AllExpenses;
