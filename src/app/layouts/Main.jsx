import React from 'react'
import PropTypes from 'prop-types'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import { Grid } from 'react-flexbox-grid'
import { connect } from 'react-redux'

import Loading from '../components/Loading'

import '../styles/global.scss'

function Main(props) {
  return (
    <MuiThemeProvider>
      <div>
        <Loading />
        <Grid>
          {props.children}
        </Grid>
      </div>
    </MuiThemeProvider>
  )
}

Main.propTypes = {
  children: PropTypes.node.isRequired,
}

export default connect(null)(Main)
