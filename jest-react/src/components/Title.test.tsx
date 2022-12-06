import React from "react"
import { render } from "@testing-library/react"
import Title from "components/Title"

const aaa = () => {
  return `dfsdfsdfsdfsdfsd`
}
describe("Title", () => {
  it("可以正确渲染大字", () => {
    const { baseElement } = render(<Title type="large" title="大字" />)
    expect(baseElement).toMatchSnapshot()
  })

  it("可以正确渲染小字", () => {
    const { baseElement } = render(<Title type="small" title="小字" />)
    expect(baseElement).toMatchSnapshot()
  })
  it("输出", () => {
    expect(aaa()).toMatchSnapshot()
  })
})
