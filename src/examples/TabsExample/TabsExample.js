import React, { Component } from "react"
import PropTypes from "prop-types"
import CSSModules from "react-css-modules"
import styles from "./TabsExample.scss"
import Overdrive from "react-overdrive"
import SampleData from './SampleData'

class TabsExample extends Component {
  state = {
    active: 0
  }

  onTabSelect = i => e => {
    e.preventDefault()
    this.setState(prevState => {
      return {
        active: i
      }
    })
  }

  renderTabs = () => {
    return this.props.tabs.map((t, i) => {
      const isActive = i === this.state.active
      return (
        <li role="presentation">
          <a
            role="tab"
            href="#"
            aria-selected={this.state.active ? true : false}
            id={`tab-${i}`}
            onClick={this.onTabSelect(i)}
          >
            {t.title}
          </a>
          {isActive &&
            <Overdrive id="active-tab-indicator">
              <span styleName="active-indicator" aria-hidden />
            </Overdrive>}
        </li>
      )
    })
  }

  renderTabPanel = ()=> {
    const Content = this.props.tabs[this.state.active].content
    return (
      <div
        className='py-1'
        role="tabpanel"
        aria-labelledby={`tab-${this.state.active}`}
        ref={el => (this.activeTab = el)}
      >
            { Content instanceof Function ? <Content/> : Content }
      </div>
    )
  }

  render() {
    return (
      <div styleName="tab-container">
        <ul styleName="tab-list" role="tablist">
          {this.renderTabs()}
        </ul>
        <div>
          {this.renderTabPanel()}
        </div>
      </div>
    )
  }
}

TabsExample.propTypes = {}

TabsExample.defaultProps = {
  tabs : SampleData
}

export default CSSModules(TabsExample, styles)
