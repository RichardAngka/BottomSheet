import { View, Text, TouchableOpacity } from "react-native";
import PropTypes from "prop-types";
import styles from "./styles";
import propTypes from "prop-types";

const Button = ({ iconRight, iconLeft, content }) => (
  <View style={styles.container}>
    <TouchableOpacity style={styles.normal}>
      <View style={styles.contentContainer}>
        {iconLeft !== undefined && iconLeft}
        <Text style={styles.content}>{content}</Text>
        {iconRight !== undefined && iconRight}
      </View>
    </TouchableOpacity>
  </View>
);

Button.propTypes = {
  content: PropTypes.string.isRequired,
  iconLeft: propTypes.children,
  iconRight: propTypes.children,
};
Button.defaultProps = {
  iconLeft: undefined,
  iconRight: undefined,
};

export default Button;
