const { resolve } = require("path");
export default {
  root: "./",
  plugins: [],
  server: {
    open: "/index.html",
    port: 3116,
  },
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        another: resolve(__dirname, "another.html"),
      },
    },
  },
};
