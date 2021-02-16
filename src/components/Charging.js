import React, { Component } from 'react';
import { Row, Col } from 'antd';
import { ApiOutlined, GlobalOutlined, ToolOutlined, TabletOutlined } from '@ant-design/icons';


import image3 from '../static/6.jpg'


class Charging extends Component {

	renderChargingHomeHeader = () => {
		return (
			<Row className='row-split reverse-content'>
				<Col span={12} className='reverse-content'>
					<span>Charging</span><br/>
					<span className='performance-bolder'>Home.Charge.</span>
				</Col>
				<Col span={12}>
					<span>
						Never go to refuel again. Meet Ather Dot. A dedicated, connected<br/>
						and easy-to-install home charger to recharge your Ather 450X in<br/>
						your own parking space.
					</span>
				</Col>
			</Row>
		)
	}

	renderChargingDetails = () => {

		return (
			<div className='charge-table'>
				<table>
					<tr className='charge-td'>
						<td>{<ApiOutlined />}</td>
						<td>&nbsp;&nbsp;0 - 80% in 3 hour 35 min.</td>
					</tr>
					<tr className='charge-td'>
						<td>{<GlobalOutlined />}</td>
						<td>&nbsp;&nbsp;Check charge status remotely through Ather app</td>
					</tr>
					<tr className='charge-td'>
						<td>{<TabletOutlined />}</td>
						<td>&nbsp;&nbsp;In-built auto cut-off</td>
					</tr>
					<tr className='charge-td'>
						<td>{<ToolOutlined />}</td>
						<td>&nbsp;&nbsp;Hassle-free installation by Ather</td>
					</tr>
				</table>
			</div>

		)
	}

	renderChargingImage = () => {
		return (
			<Row className='row-split reverse-content'>
				<Col span={10} className='reverse-content'>
					{this.renderChargingDetails()}
				</Col>
				<Col span={14}>
					<img src={image3} alt='' className='photo'></img>
				</Col>
			</Row>
		)
	}

	render() {
		return (
			<div>
				<h2 className='center row-split'>Hassle-free charging</h2>
				{this.renderChargingHomeHeader()}
				{this.renderChargingImage()}
			</div>
		);
	}
}

export default Charging;
