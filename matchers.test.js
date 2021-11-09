
// toEqual
// test('测试10=10', () => {
//  const a = { one: 1 }
//   expect(a).toEqual({ one: 1 })
// })

// toBeNull
// test('测试toBeNull', () => {
//   const a = undefined
//   expect(a).toBeNull()
// })

// toBeUndefined
// test('测试toBeUndefined', () => {
//   const a = undefined
//   expect(a).toBeUndefined()
// })

// // toBeDefined
// test('测试toBeDefined', () => {
//   const a = undefined
//   expect(a).toBeDefined()
// })

// // toBeTruthy
// test('测试 toBeTruthy', () => {
//   const a = 0
//   expect(a).toBeTruthy()
// })

// // toBeFalsy
// test('测试 toBeFalsy', () => {
//   const a = 0
//   expect(a).toBeFalsy()
// })

// // not
// test('测试 not 匹配器', () => {
//   const a = 0
//   expect(a).not.toBeFalsy()
// })

// 数字相关的匹配器
// test('测试 toBeGreaterThan', () => {
//   const a = 10
//   expect(a).toBeGreaterThan(1)
// })

// toBeGreaterThan

// toBeLessThan

// toBeGreaterThanOrEqual

// toBeCloseTo
// test('测试 toBeCloseTo', () => {
//   const a = 0.1
//   const b = 0.2
//   expect(a + b).toBeCloseTo(0.3)
// })

//  ============================= 字符串相关 =============================

// toMatch
// test('测试 toMatch', () => {
//   const str = 'www.melody.com'
//   // expect(str).toMatch('melody')
//   expect(str).toMatch(/melody/)
// })

//  ============================= 数组相关 =============================

// toContain
// test('测试 toContain, Array', () => {
//   const arr = ['melody', 'lili']
//   expect(arr).toContain('melody')
// })

// test('测试 toContain, Set', () => {
//   const arr = ['melody', 'lili']
//   const data = new Set(arr)
//   expect(data).toContain('melody')
// })

//  ============================= 异常类 =============================

test('测试 toThrow', () => {
  const throwNewErrorFunc = () => {
    throw new Error('this is an new error')
  }
  // expect(throwNewErrorFunc).toThrow() // true
  // expect(throwNewErrorFunc).toThrow('this is an new error') // true
  expect(throwNewErrorFunc).toThrow(/this is an new error/) // true
  // expect(throwNewErrorFunc).toThrow('this is an old error') // false
})