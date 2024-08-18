import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ManageExpense from "./screens/ManageExpense";
import RecentExpenses from "./screens/RecentExpenses";
import AllExpenses from "./screens/AllExpenses";
import { GlobalStyles } from "./constants/styles";
import { Ionicons } from "@expo/vector-icons";
import IconButton from "./components/UI/IconButton";
import { ExpensesProvider } from "./store/ExpensesContext";

export type RootBottomTabsParamList = {
  RecentExpenses: undefined;
  AllExpenses: undefined;
};

export type RootStackParamList = {
  ManageExpense: { expenseId: string } | undefined;
  ExpensesOverview: undefined;
};

const BottomTabs = createBottomTabNavigator<RootBottomTabsParamList>();
const Stack = createNativeStackNavigator<RootStackParamList>();

function ExpensesOverview() {
  return (
    <BottomTabs.Navigator
      screenOptions={({ navigation }) => ({
        headerStyle: {
          backgroundColor: GlobalStyles.colors.primary500,
        },
        headerTintColor: "#fff",
        tabBarStyle: {
          backgroundColor: GlobalStyles.colors.primary500,
        },
        tabBarActiveTintColor: GlobalStyles.colors.accent500,
        headerRight: ({ tintColor }) => {
          return (
            <IconButton
              name="add"
              size={24}
              color={tintColor}
              onPress={() => {
                navigation.navigate("ManageExpense");
              }}
            />
          );
        },
      })}
    >
      <BottomTabs.Screen
        name="RecentExpenses"
        component={RecentExpenses}
        options={{
          title: "Recent Expenses",
          tabBarLabel: "Recent",
          tabBarIcon: ({ color, size }) => {
            return <Ionicons name="hourglass" size={size} color={color} />;
          },
        }}
      />
      <BottomTabs.Screen
        name="AllExpenses"
        component={AllExpenses}
        options={{
          title: "All Expenses",
          tabBarLabel: "All",
          tabBarIcon: ({ color, size }) => {
            return <Ionicons name="calendar" size={size} color={color} />;
          },
        }}
      />
    </BottomTabs.Navigator>
  );
}

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <ExpensesProvider>
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              headerBackTitle: "Back",
              headerStyle: { backgroundColor: GlobalStyles.colors.primary500 },
              headerTintColor: "#fff",
            }}
          >
            <Stack.Screen
              name="ExpensesOverview"
              component={ExpensesOverview}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="ManageExpense"
              component={ManageExpense}
              options={{ presentation: "modal" }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </ExpensesProvider>
    </>
  );
}
