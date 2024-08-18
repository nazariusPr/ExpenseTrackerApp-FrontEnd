import { Text, View, StyleSheet, ViewStyle, TextStyle } from "react-native";
import ExpensesSummary from "./ExpensesSummary";
import ExpensesList from "./ExpensesList";
import Expense from "../../models/Expense";
import { GlobalStyles } from "../../constants/styles";

type ExpensesOutputProps = {
  expenses: Expense[];
  expensesPeriod: string;
  fallbackText: string;
};

function ExpensesOutput({
  expenses,
  expensesPeriod,
  fallbackText,
}: ExpensesOutputProps) {
  let content = <Text style={styles.infoText}>{fallbackText}</Text>;

  if (expenses.length > 0) {
    content = <ExpensesList expenses={expenses} />;
  }

  return (
    <View style={styles.container}>
      <ExpensesSummary expenses={expenses} periodName={expensesPeriod} />
      {content}
    </View>
  );
}

export default ExpensesOutput;

type Styles = {
  container: ViewStyle;
  infoText: TextStyle;
};

const styles = StyleSheet.create<Styles>({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: GlobalStyles.colors.primary700,
  },
  infoText: {
    color: "#fff",
    fontSize: 16,
    textAlign: "center",
    marginTop: 32,
  },
});
