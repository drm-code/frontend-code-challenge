import React from 'react'
import { BeatLoader } from 'react-spinners'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

function Loading(props) {
  return (
    <div className="loading-overlay">
      <BeatLoader
        loading={props.show}
        color="#3D5AFE"
        size={30}
        margin="10px"
      />
    </div>
  )
}

Loading.propTypes = {
  show: PropTypes.bool
}

const mapStateToProps = ({ loading }) => ({
  show: loading.show
})

export default connect(mapStateToProps)(Loading)
