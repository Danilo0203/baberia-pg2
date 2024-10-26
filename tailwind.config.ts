import { nextui } from "@nextui-org/theme";
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/components/(button|ripple|spinner).js",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        "item-espera": "#A09D9D",
        "card-atendiendo": "#DD3914",
      },
      backgroundImage: {
        "fondo-pantalla": "url(/img/Background/Barberia.png)",
      },
    },
  },
  darkMode: "class",
  plugins: [
    nextui({
      addCommonColors: true,

      themes: {
        "barberia-theme": {
          extend: "light",
          colors: {
            background: "#DD3914",
            foreground: "#ffffff",
            focus: "#F182F6",
            primary: {
              // 50: "#3B096C",
              // 100: "#520F83",
              // 200: "#7318A2",
              // 300: "#9823C2",
              // 400: "#c031e2",
              // 500: "#DD62ED",
              // 600: "#F182F6",
              // 700: "#FCADF9",
              // 800: "#FDD5F9",
              // 900: "#FEECFE",
              DEFAULT: "#DD62ED",
              foreground: "#ffffff",
            },

            secondary: {
              DEFAULT: "#A09D9D",
              foreground: "#fff",
            },
          },
        },
      },
    }),
  ],
};
export default config;
