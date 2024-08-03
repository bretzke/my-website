import plugin from "tailwindcss/plugin";

function returnHexColor(variableColor: string) {
  return `hsl(var(--${variableColor}))`;
}

export const shadcnPlugin = plugin(
  function ({ addBase, addUtilities }) {
    const newUtilities = {
      ".container-app": {
        padding: "0 6rem",
      },
    };

    addUtilities(newUtilities);

    addBase({
      ":root": {
        "--background": "0 0% 100%",
        "--foreground": "240 10% 3.9%",
        "--card": "0 0% 100%",
        "--card-foreground": "240 10% 3.9%",
        "--popover": "0 0% 100%",
        "--popover-foreground": "240 10% 3.9%",
        "--primary": "346.8 77.2% 49.8%",
        "--primary-foreground": "355.7 100% 97.3%",
        "--secondary": "240 4.8% 95.9%",
        "--secondary-foreground": "240 5.9% 10%",
        "--muted": "240 4.8% 95.9%",
        "--muted-foreground": "240 3.8% 46.1%",
        "--accent": "240 4.8% 95.9%",
        "--accent-foreground": "240 5.9% 10%",
        "--destructive": "0 84.2% 60.2%",
        "--destructive-foreground": "0 0% 98%",
        "--border": "240 5.9% 90%",
        "--input": "240 5.9% 90%",
        "--ring": "346.8 77.2% 49.8%",
        "--radius": "0.5rem",
      },
      ".dark": {
        "--background": "20 14.3% 4.1%",
        "--foreground": "0 0% 95%",
        "--card": "24 9.8% 10%",
        "--card-foreground": "0 0% 95%",
        "--popover": "0 0% 9%",
        "--popover-foreground": "0 0% 95%",
        "--primary": "346.8 77.2% 49.8%",
        "--primary-foreground": "355.7 100% 97.3%",
        "--secondary": "240 3.7% 15.9%",
        "--secondary-foreground": "0 0% 98%",
        "--muted": "0 0% 15%",
        "--muted-foreground": "240 5% 64.9%",
        "--accent": "12 6.5% 15.1%",
        "--accent-foreground": "0 0% 98%",
        "--destructive": "0 62.8% 30.6%",
        "--destructive-foreground": "0 85.7% 97.3%",
        "--border": "240 3.7% 15.9%",
        "--input": "240 3.7% 15.9%",
        "--ring": "346.8 77.2% 49.8%",
      },
    });

    addBase({
      "*": {
        "@apply border-border": {},
      },
      body: {
        "@apply bg-background text-foreground": {},
      },
    });
  },
  {
    darkMode: ["class"],
    theme: {
      container: {
        // margin: '0',
        center: true,
        padding: {
          xs: "1rem",
          sm: "1rem",
          md: "2rem",
          lg: "2rem",
          xl: "2rem",
          "2xl": "2rem",
        },
      },
      extend: {
        colors: {
          border: returnHexColor("border"),
          input: returnHexColor("input"),
          ring: returnHexColor("ring"),
          background: returnHexColor("background"),
          foreground: returnHexColor("foreground"),
          primary: {
            DEFAULT: returnHexColor("primary"),
            foreground: returnHexColor("primary-foreground"),
          },
          secondary: {
            DEFAULT: returnHexColor("secondary"),
            foreground: returnHexColor("secondary-foreground"),
          },
          destructive: {
            DEFAULT: returnHexColor("destructive"),
            foreground: returnHexColor("destructive-foreground"),
          },
          muted: {
            DEFAULT: returnHexColor("muted"),
            foreground: returnHexColor("muted-foreground"),
          },
          accent: {
            DEFAULT: returnHexColor("accent"),
            foreground: returnHexColor("accent-foreground"),
          },
          popover: {
            DEFAULT: returnHexColor("popover"),
            foreground: returnHexColor("popover-foreground"),
          },
          card: {
            DEFAULT: returnHexColor("card"),
            foreground: returnHexColor("card-foreground"),
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
      },
    },
  }
);
