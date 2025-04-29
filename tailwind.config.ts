// import { plugin } from 'postcss';
import type { Config } from "tailwindcss";
// import backdropFilter from '@tailwindcss/backdrop-filter';

import { tailwindSafelist } from "./tailwind.safelist";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#0078D4", // blue-600
          lightest: "#EBF4FF", // blue-50
          lighter: "#B8DFF9", // blue-200
          light: "#85C6F2", // blue-350
          lighten: "#52ADEC", // blue-500
          darken: "#005FB9", // blue-700
          dark: "#004791", // blue-800
          darker: "#003069", // blue-900
          darkest: "#001438", // blue-950
          contrast: "#FFFFFF",
        },

        secondary: {
          DEFAULT: "#ce82ff", // purple-400
          lightest: "#FBEBFF", // purple-50
          lighter: "#E6C2FF", // purple-200
          light: "#D699FF", // purple-350
          lighten: "#C170FF", // purple-500
          darken: "#A65ECB", // purple-600
          dark: "#8B2B9E", // purple-700
          darker: "#721990", // purple-800
          darkest: "#3D1D4B", // purple-950
          contrast: "#FFFFFF",
        },

        success: {
          DEFAULT: "#107C10", // green-600
          lightest: "#E6F3E6", // green-50
          lighter: "#B8E6B8", // green-200
          light: "#81C981", // green-350
          lighten: "#52A952", // green-500
          darken: "#0A5C0A", // green-700
          dark: "#084B06", // green-800
          darker: "#064104", // green-900
          darkest: "#021F02", // green-950
          contrast: "#FFFFFF",
        },

        error: {
          DEFAULT: "#D13438", // red-600
          lightest: "#FFEBEB", // red-50
          lighter: "#F4C7CB", // red-200
          light: "#EC9195", // red-350
          lighten: "#E3595D", // red-500
          darken: "#A4262C", // red-700
          dark: "#8F1C24", // red-800
          darker: "#740B11", // red-900
          darkest: "#3B0509", // red-950
          contrast: "#FFFFFF",
        },

        warning: {
          DEFAULT: "#FFB900", // amber-500
          lightest: "#FFF8E6", // amber-50
          lighter: "#FFE599", // amber-200
          light: "#FFD166", // amber-350
          lighten: "#FFB900", // amber-500
          darken: "#CC8B00", // amber-700
          dark: "#994E00", // amber-800
          darker: "#7F3C00", // amber-900
          darkest: "#4D2D00", // amber-950
          contrast: "#FFFFFF",
        },

        info: {
          DEFAULT: "#605E5C", // neutral-600
          lightest: "#F0F0F0", // neutral-50
          lighter: "#D2D0CE", // neutral-200
          light: "#A19F9D", // neutral-350
          lighten: "#7A7876", // neutral-500
          darken: "#3B3A39", // neutral-700
          dark: "#2A2927", // neutral-800
          darker: "#1F1E1D", // neutral-900
          darkest: "#0F0E0D", // neutral-950
          contrast: "#FFFFFF",
        },

        neutral: {
          DEFAULT: "#A0A0A0",
          lightest: "#F8F8F8",
          lighter: "#D3D3D3",
          light: "#C0C0C0",
          lighten: "#9A9A9A",
          darken: "#777777",
          dark: "#525252",
          darker: "#333333",
          darkest: "#1A1A1A",
        },
        background: {
          DEFAULT: "#F9FAFB", // gray-50
          dark: "#111827", // gray-900
          light: "#F3F4F6", // gray-100
          darker: "#1A1F2E", // gray-950
        },

        text: {
          DEFAULT: "#1F2937", // gray-800
          dark: "#F9FAFB", // gray-50
        },
      },
      transitionDuration: {
        250: "250ms",
        400: "400ms",
      },

      // Espaçamento e tamanhos estendidos
      spacing: {
        13: "3.25rem",
        15: "3.75rem",
        18: "4.5rem",
        22: "5.5rem",
        26: "6.5rem",
        30: "7.5rem",
        34: "8.5rem",
        38: "9.5rem",
        42: "10.5rem",
        46: "11.5rem",
        50: "12.5rem",
        "screen-90": "90vh",
        "screen-80": "80vh",
      },

      // Tamanhos máximos
      maxWidth: {
        "8xl": "90rem",
        "9xl": "100rem",
        "screen-2xl": "1440px",
      },

      fontFamily: {
        inter: ["var(--font-inter)", "sans-serif"],
        montserrat: ["var(--font-montserrat)", "sans-serif"],
      },

      // Configurações de tipografia
      fontSize: {
        "2xs": ["0.625rem", "0.875rem"],
        "3xl": ["1.75rem", "2.25rem"],
        "4xl": ["2.25rem", "2.5rem"],
        "5xl": ["3rem", "3.5rem"],
        "6xl": ["3.75rem", "4.25rem"],
        "7xl": ["4.5rem", "5rem"],
      },

      letterSpacing: {
        DEFAULT: "0.05em",
        tightest: "-0.02em",
        tight: "0em",
        wide: "0.07em",
        wider: "0.10em",
        extrawide: "0.14em",
      },

      // Bordas e cantos arredondados
      borderRadius: {
        xl: "0.75rem",
        "2xl": "1rem",
        "3xl": "1.5rem",
        "4xl": "2rem",
      },

      // Opacidade
      opacity: {
        15: "0.15",
        35: "0.35",
        65: "0.65",
        85: "0.85",
      },

      // Z-index
      zIndex: {
        60: "60",
        70: "70",
        80: "80",
        90: "90",
        100: "100",
      },
    },
  },

  plugins: [],

  // Configuração de safelist (para classes dinâmicas)
  safelist: tailwindSafelist,
};

export default config;
