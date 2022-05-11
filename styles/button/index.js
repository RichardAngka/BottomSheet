const button = {
  baseStyle: {
    borderRadius: 100,
  },
  variants: {
    primary: {
      _active: {
        backgroundColor: "#c6d2fd",
      },
      _disabled: {
        backgroundColor: "#cecece",
      },
    },
    secondary: {
      // your style here
    },
    ghost: {
      //Your style here
    },
  },
  size: {
    s: {
      paddingVertical: 8,
      paddingHorizontal: 16,
    },
    m: {
      paddingVertical: 16,
      paddingHorizontal: 32,
    },
    l: {
      paddingVertical: 18,
      paddingHorizontal: 36,
    },
  },
};

export default button;
