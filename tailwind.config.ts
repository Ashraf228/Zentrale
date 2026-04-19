import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx}",
    "./lib/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          50: "#eef4ff",
          100: "#d9e5ff",
          200: "#b9ceff",
          300: "#89abff",
          400: "#567fff",
          500: "#2f5dee",
          600: "#1f45cc",
          700: "#1937a4",
          800: "#1b3283",
          900: "#11204f",
          950: "#09112b",
        },
        accent: {
          50: "#f4fbfb",
          100: "#d8f4f3",
          200: "#b3e8e5",
          300: "#7ad4d1",
          400: "#44b8b5",
          500: "#279d9a",
          600: "#1b807d",
          700: "#176766",
          800: "#165354",
          900: "#164647",
        },
      },
      boxShadow: {
        panel: "0 20px 60px rgba(7, 18, 52, 0.12)",
      },
      fontFamily: {
        sans: ["ui-sans-serif", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        hero:
          "radial-gradient(circle at top left, rgba(86,127,255,0.24), transparent 30%), radial-gradient(circle at bottom right, rgba(39,157,154,0.18), transparent 24%), linear-gradient(135deg, #09112b 0%, #11204f 45%, #16325f 100%)",
      },
    },
  },
  plugins: [],
};

export default config;
