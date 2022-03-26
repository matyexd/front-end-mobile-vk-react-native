module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module:react-native-dotenv',
      {
        modulename: '@env',
        path: '.env',
      },
    ],

    ['react-native-reanimated/plugin'],
  ],
};
