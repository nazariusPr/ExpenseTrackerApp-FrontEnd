import {
  View,
  StyleSheet,
  Text,
  Pressable,
  ViewStyle,
  TextStyle,
} from "react-native";
import { RootStackParamList } from "../../App";
import { useNavigation } from "@react-navigation/native";
import { GlobalStyles } from "../../constants/styles";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

type ExpenseItemType = {
  id: string;
  description: string;
  amount: number;
  date: Date;
};

type StackProps = NativeStackScreenProps<
  RootStackParamList,
  "ExpensesOverview"
>;

function ExpenseItem({ id, description, amount, date }: ExpenseItemType) {
  const navigation = useNavigation<StackProps["navigation"]>();

  function expensePressHandler() {
    navigation.navigate("ManageExpense", { expenseId: id });
  }

  return (
    <Pressable
      onPress={expensePressHandler}
      style={({ pressed }) => pressed && styles.pressed}
    >
      <View style={styles.expenseItem}>
        <View>
          <Text style={[styles.textBase, styles.description]}>
            {description}
          </Text>
          <Text style={styles.textBase}>{date.toDateString()}</Text>
        </View>
        <View style={styles.amountContainer}>
          <Text style={styles.amount}>{amount.toFixed(2)}</Text>
        </View>
      </View>
    </Pressable>
  );
}

export default ExpenseItem;

type Styles = {
  pressed: ViewStyle;
  expenseItem: ViewStyle;
  textBase: TextStyle;
  description: TextStyle;
  amountContainer: ViewStyle;
  amount: TextStyle;
};

const styles = StyleSheet.create<Styles>({
  pressed: {
    opacity: 0.75,
  },
  expenseItem: {
    padding: 12,
    marginVertical: 8,
    backgroundColor: GlobalStyles.colors.primary500,
    flexDirection: "row",
    justifyContent: "space-between",
    borderRadius: 6,
    elevation: 3,
    shadowColor: GlobalStyles.colors.gray500,
    shadowRadius: 4,
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.4,
  },
  textBase: {
    color: GlobalStyles.colors.primary50,
  },
  description: {
    fontSize: 16,
    marginBottom: 4,
    fontWeight: "bold",
  },
  amountContainer: {
    minWidth: 80,
    paddingHorizontal: 12,
    paddingVertical: 4,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 4,
  },
  amount: {
    color: GlobalStyles.colors.primary500,
    fontWeight: "bold",
  },
});
