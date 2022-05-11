import { StyleSheet } from "react-native";
import input from "../../styles/input";

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    position: "relative",
    flexWrap: "wrap",
  },
  label: {
    fontSize: 16,
  },
  input: {
    ...input.baseStyle,
    ...input.variant.underline._normal,
  },
  iconContainer: {
    position: "absolute",
    bottom: 4,
    right: 4,
  },
});

export default styles;
