import React from 'react'
import { Col, Row } from 'react-flexbox-grid'
import PropTypes from 'prop-types'
import { Card, CardMedia, CardText, CardTitle } from 'material-ui/Card'
import Equalizer from 'react-equalizer'
import { connect } from 'react-redux'

import CardStick from './CardStick'
import { getVacantList } from '../redux/actions/vacant'
import { hideLoading } from '../redux/actions/loading'

class VacantList extends React.Component {
  componentWillMount() {
    this.props.getVacantList().then(() => {
      this.props.hideLoading()
    })
  }

  render() {
    return (
      <Equalizer
        className="row"
        byRow={false}
      >
        {this.props.vacants && this.props.vacants.map(vacant => (
          <Col
            key={vacant.id}
            sm={6}
            md={4}
            style={{ textAlign: 'center', marginBottom: 20 }}
          >
            <Card style={{ margin: '0px 10px', height: 'inherit' }}>
              <CardMedia>
                <img src={vacant.image} alt="Vacant" />
                <CardStick
                  text={(vacant.sellPrice && 'Kaufen') || 'Mieten'}
                  textColor="#aaaaaa"
                />
              </CardMedia>
              <CardTitle
                className="card-title"
                title={vacant.title}
                subtitle={`${vacant.postalCode} Sinn / ${vacant.city}`}
              />
              <CardText className="card-text">
                <Row>
                  <Col
                    xs={5}
                    sm={12}
                    lg={4}
                    className="card-text_price"
                  >
                    <span>{vacant.sellPrice || vacant.baseRent} €</span>
                  </Col>
                  <Col
                    xs={7}
                    sm={12}
                    lg={8}
                    className="card-text_size"
                  >
                    <span>{vacant.rooms} Zimmer</span>
                    <span>ab 35m2</span>
                  </Col>
                </Row>
              </CardText>
            </Card>
          </Col>
        ))}
      </Equalizer>
    )
  }
}

VacantList.propTypes = {
  getVacantList: PropTypes.func,
  hideLoading: PropTypes.func,
  vacants: PropTypes.array,
}

const mapStateToProps = ({ vacant }) => ({
  vacants: vacant.vacantList
})

const mapDispatchToProps = dispatch => ({
  getVacantList: () => dispatch(getVacantList()),
  hideLoading: () => dispatch(hideLoading())
})

export default connect(mapStateToProps, mapDispatchToProps)(VacantList)
