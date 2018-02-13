import React from 'react'
import { Col, Row } from 'react-flexbox-grid'
import { Card, CardMedia, CardText, CardTitle } from 'material-ui/Card'

import CardStick from './CardStick'

class VacantList extends React.Component {
  render() {
    return (
      <Row>
        {[1,2,3].map((i, ix) => (
          <Col
            key={ix}
            sm={6}
            md={4}
            style={{textAlign:'center'}}
          >
            <Card style={{ margin: '0px 10px 20px' }}>
              <CardMedia>
                <img src="https://d3e02gns9oqhhr.cloudfront.net/assets/expose_v2/573c7c608ffd7c0b2a8b45b6_variant_asset57ffa0ced86b1_inventoryM.jpg" />
                <CardStick
                  text="Mieten"
                  textColor="#aaaaaa"
                />
              </CardMedia>
              <CardTitle
                className="card-title"
                title="Einmaliges Anlageobjekt in attraktiver Wohnlage nahe der Zentrums"
                subtitle="35764 Sinn / Fleisbach"
              />
              <CardText className="card-text">
                <Row>
                  <Col
                    xs={5}
                    sm={12}
                    lg={4}
                    className="card-text_price"
                  >
                    <span>1645.01 E</span>
                  </Col>
                  <Col
                    xs={7}
                    sm={12}
                    lg={8}
                    className="card-text_size"
                  >
                    <span>3 Zimmer</span>
                    <span>ab 35m2</span>
                  </Col>
                </Row>
              </CardText>
            </Card>
          </Col>
        ))}
      </Row>
    )
  }
}

export default VacantList