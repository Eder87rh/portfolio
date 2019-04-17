module.exports = {
  css: {
    loaderOptions: {
      sass: {
        data: `@import "@/styles/_main.scss";`
      }
    }
  },
  publicPath: process.env.NODE_ENV === "production" ? "/portfolio" : "/"
};
