import React from 'react'
import { Col, Row } from 'react-flexbox-grid'
import { Card, CardMedia, CardText, CardTitle } from 'material-ui/Card'
import Equalizer from 'react-equalizer'

import CardStick from './CardStick'
import { getVacantList } from '../rest/client'

class VacantList extends React.Component {
  constructor() {
    super()
    this.state = {
      list: []
    }
  }

  componentWillMount() {
    getVacantList().then((response) => {
      const vacantList = response.data.data.slice(0, 10)
      this.setState({
        list: vacantList
      })
      console.log(vacantList)
    })
  }

  getAddress(vacant) {
    return `${vacant.realestateSummary.address.postalCode} Sinn / ${vacant.realestateSummary.address.city}`
  }

  render() {
    return (
      <Equalizer
        className="row"
        byRow={false}
      >
        {this.state.list && this.state.list.map(vacant => (
          <Col
            key={vacant._id.$id}
            sm={6}
            md={4}
            style={{ textAlign: 'center', marginBottom: 20 }}
          >
            <Card style={{ margin: '0px 10px', height: 'inherit' }}>
              <CardMedia>
                <img src="https://d3e02gns9oqhhr.cloudfront.net/assets/expose_v2/573c7c608ffd7c0b2a8b45b6_variant_asset57ffa0ced86b1_inventoryM.jpg" alt="Vacant" />
                <CardStick
                  text={(vacant.advertisementPrice.sellPrice && 'Kaufen') || 'Mieten'}
                  textColor="#aaaaaa"
                />
              </CardMedia>
              <CardTitle
                className="card-title"
                title={vacant.title}
                subtitle={this.getAddress(vacant)}
              />
              <CardText className="card-text">
                <Row>
                  <Col
                    xs={5}
                    sm={12}
                    lg={4}
                    className="card-text_price"
                  >
                    <span>{vacant.advertisementPrice.sellPrice || vacant.advertisementPrice.baseRent} €</span>
                  </Col>
                  <Col
                    xs={7}
                    sm={12}
                    lg={8}
                    className="card-text_size"
                  >
                    <span>{vacant.realestateSummary.numberOfRooms} Zimmer</span>
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

export default VacantList
