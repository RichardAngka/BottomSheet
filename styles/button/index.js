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
  },
  size: {
    s: {
      paddingVertical: 8,
      paddingHorizontal: 16,
      fontSize: 12,
    },
    m: {
      paddingVertical: 16,
      paddingHorizontal: 32,
      fontSize: 18,
    },
    l: {
      paddingVertical: 18,
      paddingHorizontal: 36,
      fontSize: 22,
    },
  },
};

export default button;
