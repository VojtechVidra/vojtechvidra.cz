const neutral = {
  900: "#222322",
  800: "#323332",
  675: "#4a4b4a",
  575: "#636463",
  475: "#7d7f7d",
  375: "#989a98",
  250: "#b4b6b4",
  150: "#d1d3d1",
  50: "#f0f1f0",
  0: "#ffffff",
};

const green = {
  400: "#00976b",
  500: "#007a56",
  700: "#005238",
};

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    colors: {
      primary: {
        text: "var(--primary-text)",
        textHover: "var(--primary-textHover)",
      },
      neutral: {
        background: "var(--neutral-background)",
        backgroundSubtle: "var(--neutral-backgroundSubtle)",
        backgroundSlightlyTransparent:
          "var(--neutral-backgroundSlightlyTransparent) ",
        backgroundVerySlightlyTransparent:
          "var(--neutral-backgroundVerySlightlyTransparent)",
        text: "var(--neutral-text)",
        textSubtle: "var(--neutral-textSubtle)",
      },
    },
    fontSize: {
      h1: [
        "52px",
        {
          lineHeight: "56px",
          fontWeight: 700,
        },
      ],
      h2: [
        "36px",
        {
          lineHeight: "40px",
          fontWeight: 700,
        },
      ],
      h3: [
        "28px",
        {
          lineHeight: "32px",
          fontWeight: 700,
        },
      ],
      h4: [
        "20px",
        {
          lineHeight: "24px",
          fontWeight: 700,
        },
      ],
      body: [
        "16px",
        {
          lineHeight: "20px",
          fontWeight: 400,
        },
      ],
      footnote: [
        "12px",
        {
          lineHeight: "16px",
          fontWeight: 400,
        },
      ],
      perex: [
        "18px",
        {
          lineHeight: "24px",
          fontWeight: 500,
        },
      ],
      label: [
        "16px",
        {
          lineHeight: "20px",
          fontWeight: 700,
        },
      ],
    },
  },
  plugins: [],
};
