import React from 'react'
import PropTypes from 'prop-types'
import { Col } from 'react-flexbox-grid'

export default function CardStick(props) {
  const textStyle = {
    color: props.textColor,
    fontWeight: 500
  }

  return (
    <Col
      style={{ backgroundColor: props.bgColor }}
      className="card-stick"
    >
      <span
        style={textStyle}
        title={props.text}
      >
        {props.text}
      </span>
    </Col>
  )
}

CardStick.propTypes = {
  bgColor: PropTypes.string,
  textColor: PropTypes.string,
  text: PropTypes.string
}

CardStick.defaultProps = {
  bgColor: '#fff',
  textColor: '#000',
  text: ''
}
