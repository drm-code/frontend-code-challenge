import React from 'react'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

import Main from './src/app/layouts/Main'
import VacantList from './src/app/components/VacantList'
import reducers from './src/app/redux/reducers'

const store = createStore(
  reducers,
  {},
  applyMiddleware(thunk)
)

export default function App() {
  return (
    <Provider store={store}>
      <Main>
        <VacantList />
      </Main>
    </Provider>
  )
}
