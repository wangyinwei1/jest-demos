import React from "react"
import { Button } from "antd"
import Title from "components/Title"
import User from "components/User"

const App = () => {
  return (
    <div>
      {/* <Title type="small" title="小字" />
      <Title type="large" title="大字" /> */}
      <section>
        <User />
      </section>
    </div>
  )
}

export default App
