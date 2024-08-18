import {
  View,
  Text,
  StyleSheet,
  Pressable,
  ViewStyle,
  TextStyle,
} from "react-native";
import { GlobalStyles } from "../../constants/styles";

type Mode = "flat" | "not-flat";

type ButtonProps = {
  children: string;
  onPress: () => void;
  mode: Mode;
  style?: ViewStyle;
};

function Button({ children, onPress, mode, style }: ButtonProps) {
  return (
    <View style={style}>
      <Pressable
        onPress={onPress}
        style={({ pressed }) => pressed && styles.pressed}
      >
        <View style={[styles.button, mode === "flat" && styles.flat]}>
          <Text style={[styles.text, mode === "flat" && styles.flatText]}>
            {children}
          </Text>
        </View>
      </Pressable>
    </View>
  );
}

export default Button;

type Styles = {
  button: ViewStyle;
  flat: ViewStyle;
  text: TextStyle;
  flatText: TextStyle;
  pressed: ViewStyle;
};

const styles = StyleSheet.create<Styles>({
  button: {
    borderRadius: 4,
    padding: 8,
    backgroundColor: GlobalStyles.colors.primary500,
  },
  flat: {
    backgroundColor: "transparent",
  },
  text: {
    color: "#fff",
    textAlign: "center",
  },
  flatText: {
    color: GlobalStyles.colors.primary200,
  },
  pressed: {
    opacity: 0.75,
    backgroundColor: GlobalStyles.colors.primary100,
    borderRadius: 4,
  },
});
