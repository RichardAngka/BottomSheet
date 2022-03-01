import { StyleSheet } from "react-native";
import button from "../../styles/button";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexWrap: "wrap",
  },
  normal: {
    ...button.baseStyle,
    ...button.variants.primary._active,
    ...button.variants.primary._disabled,
  },
  content: {
    color: "#1b1b1b",
    textAlign: "center",
    ...button.size.l,
  },
});

export default styles;
