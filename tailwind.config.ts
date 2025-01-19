import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      keyframes: {
        wobble: {
          "0%, 100%": { transform: "translateX(0%) rotate(0deg)" },
          "15%": { transform: "translateX(-25%) rotate(-5deg)" },
          "30%": { transform: "translateX(20%) rotate(3deg)" },
          "45%": { transform: "translateX(-15%) rotate(-3deg)" },
          "60%": { transform: "translateX(10%) rotate(2deg)" },
          "75%": { transform: "translateX(-5%) rotate(-1deg)" },
        },
      },
      animation: {
        wobble: "wobble 1s ease-in-out infinite",
      },
    },
  },
  plugins: [],
} satisfies Config;
