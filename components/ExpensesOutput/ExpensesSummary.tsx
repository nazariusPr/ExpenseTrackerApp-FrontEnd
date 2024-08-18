import { View, Text, StyleSheet, ViewStyle, TextStyle } from "react-native";
import { GlobalStyles } from "../../constants/styles";
import Expense from "../../models/Expense";

type ExpensesSummaryProps = {
  expenses: Expense[];
  periodName: string;
};

function ExpensesSummary({ expenses, periodName }: ExpensesSummaryProps) {
  const expensesSum = expenses.reduce((sum, expense) => {
    return sum + expense.amount;
  }, 0);

  return (
    <View style={styles.container}>
      <Text style={styles.period}>{periodName}</Text>
      <Text style={styles.sum}>${expensesSum.toFixed(2)}</Text>
    </View>
  );
}

export default ExpensesSummary;

type Styles = {
  container: ViewStyle;
  period: TextStyle;
  sum: TextStyle;
};

const styles = StyleSheet.create<Styles>({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 8,
    backgroundColor: GlobalStyles.colors.primary50,
    borderRadius: 6,
  },
  period: {
    fontSize: 12,
    color: GlobalStyles.colors.primary400,
  },
  sum: {
    fontSize: 16,
    fontWeight: "bold",
    color: GlobalStyles.colors.primary500,
  },
});
