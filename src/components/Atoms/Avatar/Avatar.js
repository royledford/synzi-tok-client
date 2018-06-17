import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './Avatar.css'
import { getInitials } from '../../../Helpers/Helpers'

export default class Avatar extends Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
    size: PropTypes.oneOf(['small', 'medium', 'large']),
    src: PropTypes.string,
    srcSet: PropTypes.string,
  }
  static defaultProps = {
    size: 'medium',
    src: '',
    srcSet: '',
  }

  constructor(props) {
    super(props)
    this.state = {
      someState: true,
    }
  }

  render() {
    const { name, size, src, srcSet } = this.props
    let sizePx = 0
    switch (size) {
      case 'small':
        sizePx = 24
        break
      case 'medium':
        sizePx = 32
        break
      case 'large':
        sizePx = 64
        break
      default:
        sizePx = 32
    }

    let initials = ''
    if (name !== '') {
      initials = getInitials(name)
    }

    const style = {
      lineHeight: sizePx + 'px',
      width: sizePx + 'px',
      height: sizePx + 'px',
    }

    const innerStyle = {
      fontSize: sizePx * 0.5 + 'px',
    }

    let display = null
    if (src === '') {
      display = initials
    } else {
      display = (
        <img
          className="avatar-img"
          src={src}
          srcSet={srcSet}
          alt={name}
          style={style}
        />
      )
    }

    const wrapperStyle = Object.assign({}, style, this.props.style)

    return (
      <div aria-label={name} className="avatar" style={wrapperStyle}>
        <div className="avatar-inner" style={innerStyle}>
          {display}
        </div>
      </div>
    )
  }
}
