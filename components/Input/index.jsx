import { TextInput, Text, View } from "react-native";
import PropTypes from "prop-types";
import styles from "./styles";

const Input = ({ iconRight, content, placeholder }) => (
  <View style={styles.container}>
    <Text style={styles.label}>Test</Text>
    <TextInput style={styles.input} placeholder={placeholder}>
      {content}
    </TextInput>
    <View style={styles.iconContainer}>
      {iconRight !== undefined && iconRight}
    </View>
  </View>
);
Input.propTypes = {
  iconRight: PropTypes.node,
  content: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
};
Input.defaultProps = {
  iconRight: undefined,
};

export default Input;
