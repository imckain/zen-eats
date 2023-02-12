module.exports = function (api) {
  api.cache(true);
  return {
    plugins: [
      [
        "module:react-native-dotenv",
        {
          moduleName: "@env",
          path: ".env",
        },
      ],
      "react-native-reanimated/plugin",
    ],
    presets: ["babel-preset-expo"],
  };
};
