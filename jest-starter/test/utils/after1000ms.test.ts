// tests/utils/after1000ms.test.ts
import after1000ms from "utils/after1000ms"

describe("after1000ms", () => {
  it("可以在 1000ms 后自动执行函数", (done) => {
    after1000ms(() => {
      expect("???")
      done()
    })
  })
})
