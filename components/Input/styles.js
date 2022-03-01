import { StyleSheet } from "react-native";
import input from "../../styles/input";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  input: {
    ...input.baseStyle,
    ...input.variant.underline._normal,
  },
});

export default styles;
