import React from 'react'
import { Col, Row } from 'react-flexbox-grid'

class VacantList extends React.Component {
  render() {
    return (
      <Row>
        {[1,2,3].map((i, ix) => (
          <Col key={ix} sm={6} md={4} style={{textAlign:'center'}}>
            <h1>{i}</h1>
          </Col>
        ))}
      </Row>
    )
  }
}

export default VacantList