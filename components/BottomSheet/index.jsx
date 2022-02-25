import React, { useEffect, useCallback, useImperativeHandle } from "react";
import { View, useWindowDimensions } from "react-native";
import { GestureDetector, Gesture } from "react-native-gesture-handler";
import Animated, {
  Extrapolate,
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from "react-native-reanimated";
import styles from "./styles";

const BottomSheet = ({ children }, ref) => {
  const translateY = useSharedValue(0);
  const active = useSharedValue(false);
  const context = useSharedValue({ y: 0 });
  const { height } = useWindowDimensions();
  const MAX_TRANSLATE_Y = -height + 50;

  const scrollTo = useCallback((destination) => {
    "worklet";

    if (destination === 0) {
      active.value = false;
    } else {
      active.value = true;
    }
    active.value = destination !== 0;
    translateY.value = withSpring(destination, { damping: 50 });
  }, []);

  const isActive = useCallback(() => {
    active.value;
  }, []);

  useImperativeHandle(ref, () => ({ scrollTo, isActive }), [
    scrollTo,
    isActive,
  ]);

  const gesture = Gesture.Pan()
    .onStart(() => {
      context.value = { y: translateY.value };
    })
    .onUpdate((event) => {
      translateY.value = event.translationY + context.value.y;
      translateY.value = Math.max(translateY.value, MAX_TRANSLATE_Y);
    })
    .onEnd(() => {
      if (translateY.value > -height / 3) {
        scrollTo(0);
      } else if (translateY.value < -height / 1.5) {
        scrollTo(MAX_TRANSLATE_Y);
      }
    });

  useEffect(() => {
    scrollTo(-height / 3);
  }, []);

  const rBottomSheetStyle = useAnimatedStyle(() => {
    const borderRadius = interpolate(
      translateY.value,
      [MAX_TRANSLATE_Y + 50, MAX_TRANSLATE_Y],
      [25, 5],
      Extrapolate.CLAMP
    );
    return {
      borderRadius,
      transform: [{ translateY: translateY.value }],
    };
  });

  return (
    <GestureDetector gesture={gesture}>
      <Animated.View
        style={[
          styles.bottomSheetContainer,
          { height: height, top: height },
          rBottomSheetStyle,
        ]}
      >
        <View style={styles.line} />
        {children}
      </Animated.View>
    </GestureDetector>
  );
};

BottomSheet.displayName = "BottomSheet";

export default React.forwardRef(BottomSheet);
