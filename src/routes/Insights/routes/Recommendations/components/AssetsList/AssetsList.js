import React from 'react'
import Card from 'react-bootstrap/Card'
import Form from 'react-bootstrap/Form'
import Typography from 'components/Typography'
import './AssetsList.scss'

const assets = [
  'Power Generation Equipment',
  'Pumping Equipment',
  'Water Treatments Equipment',
  'Distribution Reservoirs and Standpipes',
  'Distribution Lines',
  'Services',
  'Meters and Meter Installations',
  'Hydrants'
]

function AssetsList(props) {
  return (
    <Card className="AssetsList">
      <Card.Body>
        <Typography gutterBottom uppercase variant="subtitle">
          Assets
        </Typography>
        {assets.map((item, key) => (
          <Form.Group className="mb-1" controlId={key} key={key}>
            <Form.Check type="checkbox" label={item} />
          </Form.Group>
        ))}
      </Card.Body>
    </Card>
  )
}

export default AssetsList
