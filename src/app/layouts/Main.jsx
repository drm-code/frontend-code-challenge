import React from 'react'
import PropTypes from 'prop-types'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import { Grid, Row } from 'react-flexbox-grid'

import '../styles/global.scss'

class Main extends React.Component {
  render() {
    return (
      <MuiThemeProvider>
        <Grid>
          {this.props.children}
        </Grid>
      </MuiThemeProvider>
    )
  }
}

Main.propTypes = {
  children: PropTypes.node
}

export default Main