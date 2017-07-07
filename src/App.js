import React, { Component } from "react"
import ProfileList1 from "./examples/ProfileList"
import ProfileList2 from './examples/ProfileListWithOverdriveEdits'
import Tabs from './examples/TabsExample'

const tabsData = [
  { title : 'Nested animation', content : ProfileList1},
  { title : 'Nested animation with Overdrive hack', content : ProfileList2},
]

class App extends Component {

  render() {
    return (
      <div className="App">
        <Tabs tabs={tabsData} />
      </div>
    )
  }
}

export default App
