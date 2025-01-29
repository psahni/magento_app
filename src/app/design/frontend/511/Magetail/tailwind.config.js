/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
    "./app/design/frontend/511/Magetail/Magento_Theme/**/*.phtml",
    "./app/design/frontend/511/Magetail/Magento_Theme/web/**/*.js",
    "./app/design/frontend/511/Magetail/Magento_Theme/web/**/*.html",
    "./app/design/frontend/511/Magetail/Magento_Theme/**/*.xml",

    "./app/design/frontend/511/Magetail/Magento_Catalog/**/*.phtml",
    "./app/design/frontend/511/Magetail/Magento_Catalog/web/**/*.js",
    "./app/design/frontend/511/Magetail/Magento_Catalog/web/**/*.html",
    "./app/design/frontend/511/Magetail/Magento_Catalog/**/*.xml",
    "!./app/design/frontend/511/Magetail/node_modules/**/*",
    ],
  theme: {
    extend: {},
  },
  plugins: [],
}

