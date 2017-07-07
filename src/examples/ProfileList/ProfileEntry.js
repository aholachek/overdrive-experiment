import React from "react"
import PropTypes from "prop-types"
import Overdrive from "react-overdrive"

import CSSModules from "react-css-modules"
import styles from "./ProfileList.scss"

 class ProfileEntry extends React.Component {

  render() {
    const id = this.props.data.id
    return (
      <Overdrive id={`card-${id}`} duration={this.props.duration}>
        <div
          onClick={this.props.onClick}
          className="card my-3 p-3 " styleName="profile-card"
          ref={el => (this.container = el)}
        >
          <div className="d-flex">
            <div>
              <Overdrive id={`img-${id}`} duration={this.props.duration}>
                <img
                  src={this.props.data.avatar}
                  alt=""
                  className="rounded-circle mr-3"
                  style={{ maxWidth: "50px", position : 'relative' }}
                />
              </Overdrive>
            </div>
            <div>
                <h3 className="h5">
                  {this.props.data.name}
                </h3>
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
