const config = {
  darkMode: 'class', // 👉 Enables class-based dark mode
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "hsl(0, 0%, 100%)",
        foreground: "hsl(240, 10%, 3.9%)",
        border: "hsl(240, 5%, 90%)",
        input: "hsl(240, 5%, 90%)",
        muted: "hsl(240, 4.8%, 95.9%)",
        "muted-foreground": "hsl(240, 3.8%, 46.1%)",

        // 👇 Optional: Dark mode overrides (you can use these in .dark class)
        "dark-background": "hsl(240, 10%, 3.9%)",
        "dark-foreground": "hsl(0, 0%, 100%)",
        "dark-muted": "hsl(240, 3.7%, 15%)",
        "dark-muted-foreground": "hsl(240, 5%, 70%)",
      },
    },
  },
  plugins: [],
};

export default config;







