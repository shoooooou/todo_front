export default {
  transform: {
    "^.+\\.[t|j]sx?$": "babel-jest",
  },
  preset: "ts-jest",

  moduleNameMapper: {
    // モジュールのマッピングが必要な場合ここに追加
  },
  testEnvironment: "node", // 'jsdom' の場合もある
};
