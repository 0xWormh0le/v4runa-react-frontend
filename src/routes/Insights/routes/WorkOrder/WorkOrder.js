import React from 'react'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import { Field, Formik } from 'formik'
import * as Yup from 'yup'

import FormInput from 'components/FormInput'
import Typography from 'components/Typography'
import Loader from 'components/Loader'

import './WorkOrder.scss'

const validation = Yup.object().shape({})

const init = {}

const purposePlaceholder =
  'Give complete explanation here, not by letter. ' +
  'Attach extra sheet if necessary. ' +
  'Sketch must accompany changes in distribution system, buildings, pumping equipment and piping.' +
  'If contribution or refundable deposit towards the cost is to be obtained, ' +
  'state the amound thereof, from whom it will be received, ' +
  'and if an agreement is to be entered into, submit the signed aggrement.'

const WorkOrderForm = ({ handleSubmit, submitting }) => (
  <form className="LoginForm" onSubmit={handleSubmit}>
    <Row>
      <Col>
        <Field name="date" type="input" label="Date" component={FormInput} className="mb-0" />
      </Col>
      <Col sm={6}>
        <Field name="location" type="input" label="Location" component={FormInput} className="mb-0" />
      </Col>
      <Col>
        <Field name="number" type="input" label="No." component={FormInput} className="mb-0" />
      </Col>
    </Row>
    <hr />
    <Row>
      <Col>
        <Field name="description" label="Description" component={FormInput} className="mb-0" multiline />
      </Col>
      <Col>
        <Field
          name="purpose"
          label="Purpose"
          component={FormInput}
          className="mb-0"
          placeholder={purposePlaceholder}
          multiline
        />
      </Col>
    </Row>

    <div className="WorkOrder__types">
      <Field name="type-new" label="New" type="checkbox" component={FormInput} className="my-1" />
      <Field name="type-replacement" label="Replacement" type="checkbox" component={FormInput} className="my-1" />
      <Field name="type-repairs" label="Repairs" type="checkbox" component={FormInput} className="my-1" />
      <Field name="type-main" label="Main" type="checkbox" component={FormInput} className="my-1" />
      <Field name="type-service" label="Service" type="checkbox" component={FormInput} className="my-1" />
      <Field name="type-hydrant" label="Hydrant" type="checkbox" component={FormInput} className="my-1" />
      <Field name="type-ext" label="Ext" type="checkbox" component={FormInput} className="my-1" />
    </div>

    <Row>
      <Col>
        <Typography uppercase as="label" className="mb-2">
          Charge Order To
        </Typography>
        <Typography>Account Number:</Typography>
        <Typography>Total Feet:</Typography>
        <Typography>Cost Per Foot:</Typography>
        <Typography>Date Started</Typography>
        <Typography>Date Complete</Typography>
        <Typography>Approved By:</Typography>
        <Typography>Approved By:</Typography>
        <Typography>Approved By:</Typography>
      </Col>
      <Col>
        <Typography uppercase as="label" className="mb-2">
          Summarized Cost
        </Typography>
        <Typography>Stock:</Typography>
        <Typography>Labor:</Typography>
        <Typography>Truck:</Typography>
        <Typography>Compressor:</Typography>
        <Typography>Rental Equipment:</Typography>
        <Typography>Overhead:</Typography>
        <Typography>Other:</Typography>
        <Typography>Total:</Typography>
      </Col>
    </Row>

    <Row className="mt-3">
      <Col>
        <Field name="excavation" label="Type Excavation Encountered" component={FormInput} className="mb-0" multiline />
      </Col>
      <Col>
        <Field name="remarks" label="Remarks" component={FormInput} className="mb-0" multiline />
      </Col>
    </Row>

    <Row className="mt-3">
      <Col>
        <Typography>Type of Road:</Typography>
        <Typography>Distance From Curb:</Typography>
        <Typography>Depth Of Cover:</Typography>
      </Col>
      <Col>
        <div className="WorkOrder__next-wrapper">
          <Button className="WorkOrder__next">Next</Button>
        </div>
      </Col>
    </Row>
    {submitting && <Loader />}
  </form>
)

function WorkOrder(props) {
  const handleSubmit = (values, formActions) => {}

  return (
    <Card className="WorkOrder">
      <Card.Body className="p-5">
        <Typography gutterBottom uppercase variant="subtitle" as="h1">
          Work Order
        </Typography>

        <Formik component={WorkOrderForm} onSubmit={handleSubmit} validationSchema={validation} initialValues={init} />
      </Card.Body>
    </Card>
  )
}

export default WorkOrder
