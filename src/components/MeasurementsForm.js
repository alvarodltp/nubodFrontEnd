import React from 'react'
import {Form, Input, Grid, Button} from 'semantic-ui-react'

class MeasurementsForm extends React.Component {
  render(){
    return(
      <Form>
        <Grid id="measurement-form" columns='two'>
          <Grid.Row>
            <Grid.Column>
              <Form.Field inline>
                <label>Body Fat</label>
                <Input type="number" placeholder='Body Fat' />
              </Form.Field>
            </Grid.Column>
            <Grid.Column>
              <Form.Field inline>
                <label>Chest</label>
                <Input type="number" placeholder='Chest' />
              </Form.Field>
            </Grid.Column>
          </Grid.Row>

          <Grid.Row>
            <Grid.Column>
              <Form.Field inline>
                <label>Shoulders</label>
                <Input type="number" placeholder='Shoulders' />
              </Form.Field>
            </Grid.Column>
            <Grid.Column>
              <Form.Field inline>
                <label>Neck</label>
                <Input type="number" placeholder='Neck' />
              </Form.Field>
            </Grid.Column>
          </Grid.Row>

          <Grid.Row>
            <Grid.Column>
              <Form.Field inline>
                <label>Biceps</label>
                <Input type="number" placeholder='Biceps' />
              </Form.Field>
            </Grid.Column>
            <Grid.Column>
              <Form.Field inline>
                <label>Waist</label>
                <Input type="number" placeholder='Waist' />
              </Form.Field>
            </Grid.Column>
          </Grid.Row>

          <Grid.Row>
            <Grid.Column>
              <Form.Field inline>
                <label>Hip</label>
                <Input type="number" placeholder='Hip' />
              </Form.Field>
            </Grid.Column>
            <Grid.Column>
              <Form.Field inline>
                <label>Thigh</label>
                <Input type="number" placeholder='Thigh' />
              </Form.Field>
            </Grid.Column>
          </Grid.Row>
            <Button size="tiny">Update</Button>
        </Grid>
      </Form>

    )
  }
}

export default MeasurementsForm
