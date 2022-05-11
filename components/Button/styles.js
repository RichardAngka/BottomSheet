import { StyleSheet } from "react-native";
import button from "../../styles/button";

const styles = StyleSheet.create({
  container: {
    flexWrap: "wrap",
  },
  normal: {
    ...button.baseStyle,
    ...button.variants.primary._active,
    ...button.variants.primary._disabled,
  },
  contentContainer: {
    flexDirection: "row",
    alignItems: "center",
    ...button.size.l,
  },
  content: {
    color: "#1b1b1b",
    //typography here
  },
});

export default styles;
