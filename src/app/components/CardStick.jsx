import React from 'react'
import { Col } from 'react-flexbox-grid'

export default function CardStick (props) {
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

CardStick.defaultProps = {
  bgColor: '#fff',
  textColor: '#000',
}