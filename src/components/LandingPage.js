import React, { Component } from 'react';
import { Anchor, Menu, Layout, Affix } from 'antd';
import { HeartOutlined } from '@ant-design/icons';
import Introduction from './Introduction';
import Intelligence from './Intelligence';
import Performance from './Performance'
import Charging from './Charging';
import BookRide from './BookRide';

const { Header } = Layout;


class LandingPage extends Component {

	renderContent = () => {
		return (
			<>
				<div id='introduction'>
					<Introduction/>
				</div>
				<br/><br/>
				<div id='intelligence'>
					<Intelligence/>
				</div>
				<div id='performance'>
					<Performance/>
				</div>
				<div id='charging'>
					<Charging/>
				</div>
				<div id='bookRide'>
					<BookRide/>
				</div>
			</>
		)
	}

	render() {

		return (
			<>
				<Anchor>
					<Affix offsetTop={0.01}>
						<Layout>
							<Header className="header">
								<Menu theme="dark" mode="horizontal" defaultSelectedKeys={['default']} >
									<Menu.Item key="default">
										<a href="#introduction" > Ather 450X </a>
									</Menu.Item>
									<Menu.Item key="intelligence">
										<a href="#intelligence" > Intelligence </a>
									</Menu.Item>
									<Menu.Item key="performance">
										<a href="#performance" > Performance </a>
									</Menu.Item>
									<Menu.Item key="charging">
										<a href="#charging" > Charging </a>
									</Menu.Item>
									<Menu.Item key="bookRide" className='float-right' icon={<HeartOutlined />}>
										<a href="#bookRide" > Book Test Ride </a>
									</Menu.Item>
								</Menu>
								</Header>
							</Layout>
					</Affix>
					{this.renderContent()}
				</Anchor>
			</>
		);
	}
}

export default LandingPage;
