/** @type {import("tailwindcss").Config} */
module.exports = {
    mode: "jit",
    darkMode: ["class", '[data-q-theme="dark"]'],
    content: ["./public/**/*.html", "./src/**/*.{ts,tsx}"],
    theme: {
        extend: {
            minWidth: {
                "3xl": "48rem",
            },
            fontFamily: {
                sans: "'Poppins', sans-serif",
            },
            colors: {
                primary: "#C58F44",
            },
            boxShadow: {
                author: "0rem 0.625rem 1.25rem",
            },
        },
    },
    plugins: [],
}
