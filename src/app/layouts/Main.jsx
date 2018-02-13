import React from 'react'
import PropTypes from 'prop-types'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import { Grid, Row } from 'react-flexbox-grid'

class Main extends React.Component {
  render() {
    return (
      <MuiThemeProvider>
        <Grid>
          <Row>
            {this.props.children}
          </Row>
        </Grid>
      </MuiThemeProvider>
    )
  }
}

Main.propTypes = {
  children: PropTypes.node
}

export default Main