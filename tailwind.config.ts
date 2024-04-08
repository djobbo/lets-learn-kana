import type { Config } from "tailwindcss"

const config: Config = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        colors: {
            bg: "#F6F6F6",
            card: "#FFFFFF",
            text: "#1A032F",
            textSecondary: "#6D637B",
            primary: "#00ADB4",
            primaryLight: "#1BB5BD",
            accent: "#F38181",
        },
    },
    plugins: [],
}
export default config
