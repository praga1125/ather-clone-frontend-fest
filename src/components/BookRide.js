import React, { Component } from 'react';
import { Form, Input, Button } from 'antd';
import { UserOutlined, GlobalOutlined } from '@ant-design/icons';

class BookRide extends Component {

	render() {
		return (
			<div className="form center row-split">
				<h2 className="reverse-content performance-bolder center row-split">Book your test ride</h2>
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
					<Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Name" />
					</Form.Item>
					<Form.Item
						name="username"
						rules={[{ required: true, message: 'Please input your name!'}]}
					>
					<Input prefix={<GlobalOutlined className="site-form-item-icon" />} placeholder="Location" />
					</Form.Item>

					<Form.Item>
						<Button type="primary" htmlType="submit" className="form-button" onClick={() => alert(`We'll call you shortly.`)}>
							Book Test Ride
						</Button>
					</Form.Item>
				</Form>
			</div>
		);
	}
}

export default BookRide;
