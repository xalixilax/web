const plugin = require("tailwindcss/plugin");

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      textShadow: {
        DEFAULT:
          "0 0.03em var(--tw-shadow-color), 0 0.06em var(--tw-shadow-color), 0 0.09em var(--tw-shadow-color)",
      },
      slope: {
        DEFAULT: "",
        s: "4vw",
        e: "4vw,0,0,4vw",
        st: "4vw,0,0,0",
        sb: "0,4vw,0,0",
        et: "0,0,4vw,0",
        eb: "0,0,0,4vw",
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
      },
    },
  },
  plugins: [
    plugin(({ matchUtilities, theme }) => {
      matchUtilities(
        {
          "text-shadow": (value) => ({
            textShadow: value,
          }),
        },
        { values: theme("textShadow") }
      );
    }),
    plugin(({ matchComponents, addComponents }) => {
      addComponents({
        ".slope": {
          clipPath: "polygon(var(--tw-slope))",
          paddingTop: "max(var(--tw-slope-a), var(--tw-slope-b))",
          paddingBottom: "max(var(--tw-slope-c), var(--tw-slope-d))",
        },
      });
      matchComponents({
        "slope-s": (value) => ({
          "--tw-slope-a": value,
          "--tw-slope-d": value,
        }),
        "slope-e": (value) => ({
          "--tw-slope-b": value,
          "--tw-slope-c": value,
        }),
        "slope-so": (value) => ({
          "--tw-slope-b": value,
          "--tw-slope-d": value,
        }),
        "slope-eo": (value) => ({
          "--tw-slope-a": value,
          "--tw-slope-c": value,
        }),
        "slope-st": (value) => ({
          "--tw-slope-a": value,
        }),
        "slope-sb": (value) => ({
          "--tw-slope-d": value,
        }),
        "slope-et": (value) => ({
          "--tw-slope-b": value,
        }),
        "slope-eb": (value) => ({
          "--tw-slope-c": value,
        }),
      });
    }),
    // plugin(({ matchUtilities, theme }) => {
    //   matchUtilities(
    //     {
    //       // Class name
    //       slope: (value) => {
    //         const values = value.split(",").map((v) => (v === "0" ? "0px" : v));

    //         return {
    //           backgroundColor: "#ff0000",
    //           clipPath: `polygon(0 ${values[0]}, 100% ${values[1]}, 100% calc(100% - ${values[2]}), 0 calc(100% - ${values[3]}))`,
    //           padding: `max(${values[0]}, ${values[1]}) 0 max(${values[2]}, ${values[3]}) 0`,
    //         };
    //       },
    //     },
    //     { values: theme("slope") }
    //   );
    // }),
    require("tailwindcss-animate"),
  ],
};
