import React from 'react'
import { Col } from 'react-flexbox-grid'

import Main from './src/app/layouts/Main'

export default function App() {
  return (
    <Main>
      <Col xs={12}>
        <h1>Hi I'm the Main Container Component</h1>
      </Col>
    </Main>    
  )
}
