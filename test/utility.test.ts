import { toCamelCase, convertKeysToCamelCase } from "../server/UtilityService";

describe("toCamelCase", () => {
  test("'_'が複数存在するスネークケースもキャメルケースに変換される", () => {
    expect(toCamelCase("hoge_foo_bar")).toBe("hogeFooBar");
  });
  test("先頭に'_'がある場合は削除され、先頭の文字が大文字にならない", () => {
    expect(toCamelCase("____hoge")).toBe("hoge");
  });
});

describe("convertKeysToCamelCase", () => {
  test("スネークケースになっているオブジェクトのキーが全てキャメルケースに変換される", () => {
    const target = { hoge_foo_bar: "", foo_bar_hoge: "", __hoge: "" };
    const expected = { hogeFooBar: "", fooBarHoge: "", hoge: "" };
    expect(convertKeysToCamelCase(target)).toEqual(expected);
  });
});
