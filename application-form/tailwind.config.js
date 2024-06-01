/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.html', './src/**/*.jsx', './src/**/*.tsx'],
  theme: {
    extend: {
      "colors":{
        "primary":"#023E62",
        "secondary":"rgb(255,235,52)",
        'secondary-dark':"#F8CF01",
        "darker":"#121212",
        "dark":"#3D3D3D",
        "dark-100":"rgb(61,61,61,0.1)",
        "dark-200":"rgb(61,61,61,0.2)",
        "dark-300":"rgb(61,61,61,0.3)",
        "dark-400":"rgb(61,61,61,0.4)",
        "dark-500":"rgb(61,61,61,0.5)",
        "dark-600":"rgb(61,61,61,0.6)",
        "dark-700":"rgb(61,61,61,0.7)",
        "dark-800":"rgb(61,61,61,0.8)",
        "dark-900":"rgb(61,61,61,0.9)",
        "secondary-100":"rgb(255,235,52,0.1)",
        "secondary-200":"rgb(255,235,52,0.2)",
        "secondary-300":"rgb(255,235,52,0.3)",
        "secondary-400":"rgb(255,235,52,0.4)",
        "secondary-500":"rgb(255,235,52,0.5)",
        "secondary-600":"rgb(255,235,52,0.6)",
        "secondary-700":"rgb(255,235,52,0.7)",
        "secondary-800":"rgb(255,235,52,0.8)",
        "secondary-900":"rgb(255,235,52,0.9)",
        "primary-dark-2":"#10253F",
        "primary-100":"rgb(2,62,98,0.1)",
        "primary-200":"rgb(2,62,98,0.2)",
        "primary-300":"rgb(2,62,98,0.3)",
        "primary-400":"rgb(2,62,98,0.4)",
        "primary-500":"rgb(2,62,98,0.5)",
        "primary-600":"rgb(2,62,98,0.6)",
        "primary-700":"rgb(2,62,98,0.7)",
        "primary-800":"rgb(2,62,98,0.8)",
        "primary-900":"rgb(2,62,98,0.9)",
        "primary-dark":"#0D1226",
        "grey":"#F3F4F4"
      }
    },
  },
  plugins: [],
}

