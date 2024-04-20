module.exports = {
  env: {
    "jest/globals": true, // 追加
    jest: true, // Jestの環境を追加
  },
  extends: [
    "eslint:recommended",
    "plugin:jest/recommended", // eslint-plugin-jestの推奨設定を追加
  ],
  plugins: [
    "jest", // Jestプラグインを使用する宣言
  ],
};
