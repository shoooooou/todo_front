import { toCamelCase, convertKeysToCamelCase } from "../server/utility";

describe("toCamelCase", () => {
  test("'_'が複数存在するスネークケースもキャメルケースに変換される", () => {
    expect(toCamelCase("hoge_foo_bar")).toBe("hogeFooBar");
  });
  test("先頭に'_'がある場合は削除され、先頭の文字が大文字にならない", () => {
    expect(toCamelCase("____hoge")).toBe("hoge");
  });
});
