var result = add(3, 7)
var expected = 10

if (result !== expected) {
  throw Error(`3 + 7 应该等于 ${expected}，但是结果却是 ${result}`)
}

var result = add(3, 3)
var expected = 0

if (result !== expected) {
  throw Error(`3 - 3 应该等于 ${expected}，但是结果却是 ${result}`)
}
