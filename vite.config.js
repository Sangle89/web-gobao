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
        about: resolve(__dirname, "about.html"),
        project: resolve(__dirname, "project.html"),
      },
      output: {
        entryFileNames: "assets/[name].js",
        chunkFileNames: "assets/[name].js",
        assetFileNames: "assets/[name].[ext]",
      },
    },
  },
};
