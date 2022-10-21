module.exports = {
  webpack: {
    resolve: {
      modules: ["src", "node_modules"],
    },
    configure: (webpackConfig) => {
      webpackConfig.module.rules.push({
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "astroturf/loader",
            options: { extension: ".module.scss", enableCssProp: true },
          },
        ],
      });

      return webpackConfig;
    }
  },
};
