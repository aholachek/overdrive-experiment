import React from "react"
import PropTypes from "prop-types"

import ReactDOM from "react-dom"
import anime from "animejs"

const animateIn = gridContainer => {
  const containers = gridContainer.querySelectorAll("div[data-fade-in]")
  const currentAnimation = anime
    .timeline()
    .add({
      targets: containers,
      opacity: 0,
      duration: 1
    })
    .add({
      targets: containers,
      duration: 800,
      opacity: [0, 1],
      translateY: [-30, 0],
      delay: function(el, i, l) {
        return i * 100
      }
    })
}

export const FadeContainer = props => {
  return (
    <div data-fade-in style={{ opacity: 0 }}>
      {props.children}
    </div>
  )
}

export default class GradualFadeIn extends React.Component {
  componentDidMount() {
    setTimeout(() => {
      try {
        animateIn(ReactDOM.findDOMNode(this))
      } catch (e) {
        console.log(e)
      }
    }, this.props.delay)
  }

  render() {
    return (
      <div>
        {this.props.children}
      </div>
    )
  }
}

GradualFadeIn.defaultProps = {
  delay: 0
}
GradualFadeIn.propTypes = {}
