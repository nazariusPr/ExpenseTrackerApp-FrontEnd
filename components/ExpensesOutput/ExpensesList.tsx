import { FlatList, StyleSheet, ViewStyle } from "react-native";
import Expense from "../../models/Expense";
import ExpenseItem from "./ExpenseItem";

type ExpensesListProps = {
  expenses: Expense[];
};

type RenderExpenseItemProps = {
  item: Expense;
};

function renderExpenseItem({ item }: RenderExpenseItemProps) {
  return (
    <ExpenseItem
      id={item.id}
      description={item.description}
      amount={item.amount}
      date={item.date}
    />
  );
}

function ExpensesList({ expenses }: ExpensesListProps) {
  return (
    <FlatList
      data={expenses}
      keyExtractor={(expense) => expense.id}
      renderItem={renderExpenseItem}
      style={styles.list}
    />
  );
}

export default ExpensesList;

type Styles = {
  list: ViewStyle;
};

const styles = StyleSheet.create<Styles>({
  list: {
    marginVertical: 12,
  },
});
