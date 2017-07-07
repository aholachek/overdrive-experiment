import React, { Component } from "react"
import PropTypes from "prop-types"
import CSSModules from "react-css-modules"

import styles from "./ProfileList.scss"
import userData from "./userData"
import ProfileEntry from "./ProfileEntry"
import ProfileDisplay from "./ProfileDisplay"

class ProfileList extends Component {
  state = {
    activeIndex: null,
    duration: "slow"
  }

  renderProfileList = () => {
    return (
      <ul styleName="profile-list">
        {userData.map((d, i) =>
          <li>
            <ProfileEntry
              data={d}
              duration={this.state.duration === "fast" ? 500 : 3000}
              onClick={() =>
                this.setState({
                  activeIndex: i
                })}
            />
          </li>
        )}
      </ul>
    )
  }

  removeSelected = () => {
    this.setState({
      activeIndex: null
    })
  }

  renderSpeedSelect = () => {
    return ["fast", "slow"].map(s => {
      return (
        <label htmlFor="" className="mr-3">
          {s}&nbsp;
          <input
            type="radio"
            checked={this.state.duration === s}
            onClick={() => {
              this.setState({ duration: s })
            }}
          />
        </label>
      )
    })
  }

  render() {
    return (
      <div>
        <fieldset className=" mx-auto" style={{ width: "300px" }}>
          <legend className="h6">Animation Speed</legend>
          {this.renderSpeedSelect()}
        </fieldset>
        {this.state.activeIndex !== null
          ? <ProfileDisplay
              data={userData[this.state.activeIndex]}
              removeSelected={this.removeSelected}
              duration={this.state.duration === "fast" ? 500 : 3000}
            />
          : this.renderProfileList()}
      </div>
    )
  }
}

ProfileList.propTypes = {}

ProfileList.defaultProps = {}

export default CSSModules(ProfileList, styles)
