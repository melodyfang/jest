function expect(result) {
  return {
    toBe: function (expected) {
      if (expected !== result) {
        throw Error(`预期和实际不符, 预期 ${expected}, 实际是 ${result}`)
      }
    }
  }
}
/**
 * 为了解决报错信息不明确的问题，引出了 test 方法
 */

function test (desc, fn) {
  try {
    fn()
    console.log(`${desc} 通过测试`)
  } catch (e) {
    console.log(`${desc} 没有通过测试; ${e}`)
  }
}

test('测试加法 3 + 7', () => {
  expect(add(3, 7)).toBe(10)
})

test('测试减法 3 - 3', () => {
  expect(minus(3, 3)).toBe(0)
})
