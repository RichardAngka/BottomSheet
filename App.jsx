import React, { useCallback, useRef } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import BottomSheet from "./components/BottomSheet";
import Button from "./components/Button";
import Input from "./components/Input";

const App = () => {
  const sheetRef = useRef(null);
  const onPress = useCallback(() => {
    const isActive = sheetRef?.current?.isActive();
    if (isActive) {
      sheetRef?.current?.scrollTo(0);
    }
    sheetRef?.current?.scrollTo(-200);
  }, []);

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <View style={styles.container}>
        <StatusBar style="light" />
        <TouchableOpacity style={styles.button} onPress={onPress} />
        <BottomSheet ref={sheetRef}>
          <Button />
          <Input />
        </BottomSheet>
      </View>
    </GestureHandlerRootView>
  );
};

const styles = StyleSheet.create({
  handlerContainer: {
    flex: 1,
  },
  container: {
    flex: 1,
    backgroundColor: "#111",
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    height: 50,
    borderRadius: 25,
    aspectRatio: 1,
    backgroundColor: "white",
  },
});

export default App;
