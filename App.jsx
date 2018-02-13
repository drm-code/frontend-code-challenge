import React from 'react'
import { Col } from 'react-flexbox-grid'

import Main from './src/app/layouts/Main'
import VacantList from './src/app/components/VacantList'

export default function App() {
  return (
    <Main>
      <VacantList />
    </Main>    
  )
}
