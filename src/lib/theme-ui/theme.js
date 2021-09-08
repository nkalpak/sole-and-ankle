export const theme = {
  styles: {
    root: {
      "&, body": {
        height: "100%",
      },
      "& #root": {
        minHeight: "100%",
        display: "flex",
      },

      fontFamily: "body",
      fontWeight: "body",
      lineHeight: "body",
      color: "gray.900",

      h1: {
        fontWeight: "heading",
        fontSize: "2xl",
        lineHeight: "heading",
      },
      h2: {
        fontWeight: "body",
        fontSize: "2xl",
        lineHeight: "heading",
      },
    },
  },
  fonts: {
    body: "Raleway, sans-serif",
    heading: "Raleway, sans-serif",
    monospace: "mono",
  },
  fontSizes: {
    xs: 12,
    sm: 14,
    md: 16,
    lg: 18,
    xl: 20,
    "2xl": 24,
    "3xl": 32,
    "4xl": 48,
    "5xl": 64,
  },
  fontWeights: {
    medium: 500,
    body: 600,
    heading: 800,
  },
  lineHeights: {
    body: `${18 / 16}rem`,
    heading: `${24 / 16}rem`,
  },
  breakpoints: ["640px", "768px", "1024px", "1240px"],
  colors: {
    text: "gray.900",
    background: "white",
    primary: "#C5295D",
    secondary: "#6868D9",

    gray: {
      900: "#313235",
      700: "#60666C",
      500: "#949A9C",
      300: "#C9C3CF",
      100: "#F2F3F3",
    },
    white: "#fff",
  },
  space: {
    0: 0,
    1: 4,
    2: 8,
    3: 12,
    4: 16,
    5: 20,
    6: 24,
    7: 28,
    8: 32,
    9: 40,
    10: 48,
    11: 56,
    12: 64,
  },

  layout: {
    root: {
      display: "flex",
      flexDirection: "column",
      flex: 1,
    },
    superHeader: {
      height: "40px",
      display: "flex",
      alignItems: "center",
    },
    header: {
      py: 6,
      px: 8,
    },
    main: {
      px: 8,
      flex: 1,
    },
  },
  links: {
    nav: {
      fontWeight: "body",
      fontSize: "lg",
      color: "gray.900",
      textDecoration: "none",
      textTransform: "uppercase",

      '&:hover': {
        color: 'secondary',
      },

      "&.active": {
        color: "secondary",
      },
    },
  },
};
