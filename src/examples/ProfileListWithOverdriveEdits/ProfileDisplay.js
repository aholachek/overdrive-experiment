import React from "react"
import PropTypes from "prop-types"
import Overdrive from "../../react-overdrive/src/index"
import CSSModules from "react-css-modules"
import styles from "./ProfileList.scss"

import StaggeredFadeIn, { FadeContainer } from "../../StaggeredFadeIn"

const containerAnimation = (stage, el) => {
  ;[...el.children].forEach(c => (c.style.visibility = "hidden"))
  el.style.zIndex = 1
}

const imageAnimation = (stage, el) => {
  el.style.zIndex = 2
}

class ProfileDisplay extends React.Component {
  render() {
    const id = this.props.data.id
    return (
      <div styleName="profile-display">
        <button
          className="btn d-block my-3"
          onClick={this.props.removeSelected}
        >
          back
        </button>
        <StaggeredFadeIn delay={this.props.duration}>
          <Overdrive
            id={`card-${id}`}
            duration={this.props.duration}
            animationStart={containerAnimation}
          >
            <div className="text-center p-5 card" styleName="profile-card">
              <div>
                <FadeContainer>
                  <h1 className="display-2">
                    {this.props.data.name}
                  </h1>
                </FadeContainer>

                <Overdrive
                  id={`img-${id}`}
                  duration={this.props.duration}
                  animationStart={imageAnimation}
                >
                  <img
                    src={this.props.data.avatar}
                    alt=""
                    className="my-3 rounded-circle"
                    style={{ zIndex: 4000, position: "relative" }}
                  />
                </Overdrive>
                <FadeContainer>
                  <div className="lead mb-3">
                    {this.props.data.job}
                  </div>
                </FadeContainer>
                <FadeContainer>
                  <div className="text-left">
                    {this.props.data.text}
                  </div>
                </FadeContainer>
              </div>
            </div>
          </Overdrive>
        </StaggeredFadeIn>
      </div>
    )
  }
}

export default CSSModules(ProfileDisplay, styles)

ProfileDisplay.defaultProps = {}
ProfileDisplay.propTypes = {}
