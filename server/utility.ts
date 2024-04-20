// スネークケースの文字列をキャメルケースに変換する
export function toCamelCase(s: string): string {
  s=s.replace(/^_+/,'');
  return s.replace(/(_\w)/g, m => m[1].toUpperCase());
}

// オブジェクトのキーをスネークケースからキャメルケースに変換する
export function convertKeysToCamelCase(obj: any): any {
  if (obj instanceof Array) {
      return obj.map(v => convertKeysToCamelCase(v));
  } else if (obj !== null && obj.constructor === Object) {
      return Object.keys(obj).reduce((result, key) => ({
          ...result,
          [toCamelCase(key)]: convertKeysToCamelCase(obj[key])
      }), {});
  }
  return obj;
}
