function expect(result) {
  return {
    toBe: function (expected) {
      if (expected !== result) {
        throw Error(`预期和实际不符`)
      }
    }
  }
}

/**
 * 目前该方法的局限性是报错信息不明确，引出了进一步优化的版本
 */


expect(add(3, 7)).toBe(10)
expect(minus(3, 3)).toBe(0)
