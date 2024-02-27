import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      backgroundColor: {
        'rgb-dark': 'rgb(23, 18, 51)',
      },
      borderRadius: {
        '30': '30px',
      },
      fontFamily:{
        josefine:["Josefine","sans-serif"],
        newYork:["NewYork","sans-serif"]
      },
      colors: {
        darkPurple: '#190F53', 
        pastelPurple: '#CAB8FF', 
      },
    },
  },
  plugins: [],
};
export default config;
