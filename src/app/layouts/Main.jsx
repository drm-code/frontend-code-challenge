import React from 'react'
import PropTypes from 'prop-types'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import { Grid } from 'react-flexbox-grid'

import '../styles/global.scss'

export default function Main(props) {
  return (
    <MuiThemeProvider>
      <Grid>
        {props.children}
      </Grid>
    </MuiThemeProvider>
  )
}

Main.propTypes = {
  children: PropTypes.node.isRequired
}
