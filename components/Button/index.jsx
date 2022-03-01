import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import styles from "./styles";

const Button = () => (
  <View style={styles.container}>
    <TouchableOpacity style={styles.normal}>
      <Text style={styles.content}>Test</Text>
    </TouchableOpacity>
  </View>
);

export default Button;
