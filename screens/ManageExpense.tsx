import { useLayoutEffect } from "react";
import { View, StyleSheet, ViewStyle } from "react-native";
import {
  NativeStackScreenProps,
  NativeStackNavigationOptions,
} from "@react-navigation/native-stack";
import { RootStackParamList } from "../App";
import IconButton from "../components/UI/IconButton";
import { GlobalStyles } from "../constants/styles";
import { useExpenses } from "../store/ExpensesContext";
import Button from "../components/UI/Button";

type ManageExpenseProps = NativeStackScreenProps<
  RootStackParamList,
  "ManageExpense"
>;

function ManageExpense({ route, navigation }: ManageExpenseProps) {
  const editedExpenseId = route.params?.expenseId;
  const isEditing = !!editedExpenseId;

  const { addExpense, updateExpense, deleteExpense } = useExpenses();

  useLayoutEffect(() => {
    const options: NativeStackNavigationOptions = {
      title: isEditing ? "Edit Expense" : "Add Expense",
    };
    navigation.setOptions(options);
  }, [navigation, isEditing]);

  function deleteExpenseHandler() {
    const expenseId = route.params?.expenseId;
    if (expenseId) {
      deleteExpense(expenseId);
    }
    navigation.goBack();
  }

  function cancelHandler() {
    navigation.goBack();
  }

  function confirmHandler() {
    navigation.goBack();
  }

  return (
    <View style={styles.container}>
      <View style={styles.buttons}>
        <Button mode="flat" onPress={cancelHandler} style={styles.button}>
          Cancel
        </Button>
        <Button mode="not-flat" onPress={confirmHandler} style={styles.button}>
          {isEditing ? "Update" : "Add"}
        </Button>
      </View>
      {isEditing && (
        <View style={styles.deleteContainer}>
          <IconButton
            name="trash"
            color={GlobalStyles.colors.error500}
            size={36}
            onPress={deleteExpenseHandler}
          />
        </View>
      )}
    </View>
  );
}

export default ManageExpense;

type Styles = {
  container: ViewStyle;
  buttons: ViewStyle;
  button: ViewStyle;
  deleteContainer: ViewStyle;
};

const styles = StyleSheet.create<Styles>({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: GlobalStyles.colors.primary800,
  },
  buttons: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    minWidth: 120,
    marginHorizontal: 8,
  },
  deleteContainer: {
    marginTop: 16,
    paddingTop: 8,
    borderTopWidth: 2,
    borderTopColor: GlobalStyles.colors.primary200,
    alignItems: "center",
  },
});
