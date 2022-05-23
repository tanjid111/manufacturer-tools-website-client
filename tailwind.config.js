module.exports = {
    content: ["./src/**/*.{html,js}"],
    daisyui: {
        themes: [
            {
                mytheme: {
                    primary: "#2596BE",
                    secondary: "#3a9473",
                    accent: "#3A4256",
                    neutral: "#3d4451",
                    "base-100": "#ffffff",
                },
            },
            "dark"
        ],
    },
    plugins: [require("daisyui")],

}