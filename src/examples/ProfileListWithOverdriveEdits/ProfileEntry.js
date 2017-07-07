import React from "react"
import PropTypes from "prop-types"
import Overdrive from "../../react-overdrive/src"

import CSSModules from "react-css-modules"
import styles from "./ProfileList.scss"

import anime from "animejs"

const animateIn = el => {
  const containers = [...el.querySelector("div[data-fade-in]").querySelectorAll('*')]
  containers.forEach(c=> c.style.opacity = 0)
  anime({
      targets: containers,
      duration: 400,
      opacity: [0, 1],
      translateX: [-20, 0],
      delay: function(el, i, l) {
        return i * 100
      }
    })
}


const containerAnimation = (stage, el) => {
  ;[...el.children].forEach(c => (c.style.opacity = 0))
  el.style.zIndex = 1
}

const imageAnimation = (stage, el) => {
  el.style.zIndex = 2
}

class ProfileEntry extends React.Component {
  animateTextIn = (el) => {
    animateIn(el)
  }
  render() {
    const id = this.props.data.id
    return (
      <Overdrive
        id={`card-${id}`}
        duration={this.props.duration}
        animationStart={containerAnimation}
        onAnimationEnd={this.animateTextIn}
      >
        <div
          onClick={this.props.onClick}
          className="card my-3 p-3 "
          styleName="profile-card"
          ref={el => (this.container = el)}
        >
          <div className="d-flex">
            <div>
              <Overdrive
                id={`img-${id}`}
                duration={this.props.duration}
                animationStart={imageAnimation}
              >
                <img
                  src={this.props.data.avatar}
                  alt=""
                  className="rounded-circle mr-3"
                  style={{ maxWidth: "50px", position: "relative" }}
                />
              </Overdrive>
            </div>
            <div data-fade-in>
              <div>
                <h3 className="h5">
                  {this.props.data.name}
                </h3>
              </div>
              <div>
                {this.props.data.job}
              </div>
            </div>
          </div>
        </div>
      </Overdrive>
    )
  }
}

export default CSSModules(ProfileEntry, styles)

ProfileEntry.defaultProps = {}
ProfileEntry.propTypes = {}
