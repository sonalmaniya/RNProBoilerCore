module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['.'],
        extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
        alias: {
          '*': '.',
          '@root': './',
          '@src': './src',
          '@src/assets': './src/assets',
          '@src/config': './src/config',
          '@src/constants': './src/constants',
          '@src/components': './src/components',
          '@src/core-ui': './src/core-ui',
          '@src/fixtures': './src/fixtures',
          '@src/helpers': './src/helpers',
          '@src/hooks': './src/hooks',
          '@src/modules': './src/modules',
          '@src/navigation': './src/navigation',
          '@src/services': './src/services',
        },
      },
    ],
  ],
};
