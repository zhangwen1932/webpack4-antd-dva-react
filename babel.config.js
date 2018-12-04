// eslint-disable-next-line func-names
module.exports = function (api) {
  api.cache(true);
  const presets = ['@babel/preset-react'];
  const plugins = [
    '@babel/plugin-proposal-class-properties',
    [
      'import', {
        libraryName: 'antd',
        libraryDirectory: 'es',
        style: 'css', // `style: true` 会加载 less 文件
      },
    ],
  ];

  return {
    presets,
    plugins,
  };
};
