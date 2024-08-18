import {
  Pressable,
  View,
  StyleSheet,
  TextStyle,
  ViewStyle,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

type IconButtonParams = {
  onPress: () => void;
  name: React.ComponentProps<typeof Ionicons>["name"];
  size: number;
  color: string | undefined;
  iconStyle?: TextStyle;
  buttonStyle?: ViewStyle;
};

function IconButton({
  onPress,
  name,
  size,
  color,
  iconStyle,
  buttonStyle,
}: IconButtonParams) {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => pressed && styles.pressed}
    >
      <View style={[styles.buttonContainer, buttonStyle]}>
        <Ionicons name={name} size={size} color={color} style={iconStyle} />
      </View>
    </Pressable>
  );
}

export default IconButton;

type Styles = {
  buttonContainer: ViewStyle;
  pressed: ViewStyle;
};

const styles = StyleSheet.create<Styles>({
  buttonContainer: {
    borderRadius: 24,
    padding: 6,
    marginHorizontal: 8,
  },
  pressed: {
    opacity: 0.75,
  },
});
