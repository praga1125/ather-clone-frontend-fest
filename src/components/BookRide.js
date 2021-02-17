import React, { Component } from 'react';
import { Form, Input, Button, Select, Alert } from 'antd';
import { UserOutlined } from '@ant-design/icons';

const { Option } = Select;


class BookRide extends Component {

  constructor(props) {
    super(props)

    this.state = {
       name: '',
       location: null,
       alertMessage: '',
       status: ''
    }
  }

  onChangeName = (event) => {
    this.setState({ name: event.target.value })
  }

  onChangeLocation = (value) => {
    this.setState({ location: value })
  }

  bookRide = () => {
    const { name, location } = this.state
    let status, alertMessage;

    if(!name || !location ) {
      status = 'error';
      alertMessage = 'Please fill above details.'
    } else {
      status = 'success';
      alertMessage = "We'll call you shortly"
    }

    this.setState({
      status,
      alertMessage,
      name: '',
      location: null
    })
  }

  renderAlert = () => {
    const { status, alertMessage } = this.state
    return <Alert message={alertMessage} type={status} closable={true}/>;
  }

  render() {
    console.log(this.state);
    const { name, location } = this.state
    return (
      <div class="card booking-card mx-auto">
        <div class="card-body booking-card-body">
          <div className="form center bokking-row-split">
            <h2 className="reverse-content performance-bolder center">Book your test ride</h2>
            <Form
              name="normal_login"
              className="form center row-split"
              initialValues={{ remember: true }}
              onFinish={this.onFinish}
            >
              <Form.Item
                name="Name"
                rules={[{ required: true, message: 'Please input your name!'}]}
              >
              <Input
                prefix={<UserOutlined className="site-form-item-icon" />}
                placeholder="Name"
                onChange={this.onChangeName}
                value={this.state.name}
              />
              </Form.Item>
              <Form.Item
                name="username"
                rules={[{ required: true, message: 'Please input your name!'}]}
              >
              <Select onChange={this.onChangeLocation} placeholder="Select Location" defaultValue={location}>
                <Option value="Chennai">Chennai</Option>
                <Option value="Bangalore">Bangalore</Option>
                <Option value="Delhi">Delhi</Option>
                <Option value="Mumbai">Mumbai</Option>
              </Select>
              </Form.Item>

              <Form.Item>
                <Button type="primary" htmlType="submit" className="form-button" onClick={this.bookRide}>
                  Book Test Ride
                </Button>
              </Form.Item>
              {this.renderAlert()}

            </Form>
          </div>
        </div>
      </div>
    );
  }
}

export default BookRide;