import React, { Component } from 'react';
import { Carousel } from 'antd';
import image1 from '../static/2.jpg'
import image2 from '../static/4.jpg'
import image3 from '../static/6.jpg'
import image4 from '../static/5.jpg'


class Introduction extends Component {

	contentStyle = {
		height: '700px',
		lineHeight: '160px',
		textAlign: 'center',
		alignItems: 'center',
    alignContent: 'center',
		background: '#001529',
	};


	renderCarosel = () => {
		return (
			<>
				<Carousel autoplay>
					<div>
						<div style={this.contentStyle}>
							<img src={image1} alt='' className='photo'></img>
						</div>
					</div>
					<div>
						<div style={this.contentStyle}>
							<img src={image2} alt='' className='photo'></img>
						</div>
					</div>
					<div>
						<div style={this.contentStyle}>
						<img src={image3} alt='' className='photo'></img>
						</div>
					</div>
					<div>
						<div style={this.contentStyle} >
						<img src={image4} alt='' className='photo'></img>Hello
						</div>
					</div>
				</Carousel>
			</>
		)
	}

	renderIntroduction = () => {
		return (
			<div className='center'>
				<div className='intro-heading'>
					{`Goodbye scooter.`} <br/> {`Meet Ather 450X.`}
				</div>
				<h2 className='intro-sub-heading'>Designed, not built</h2>
				<h4 className='intro-content'>
					<i> We have designed the Ather 450 and everything <br/>around it from scratch to offer an exhilarating ride <br/>and a hassle-free ownership experience.</i>
				</h4>
			</div>
		);
	}

	render() {
		return (
			<div>
				{this.renderIntroduction()}
				{this.renderCarosel()}
			</div>
		);
	}
}

export default Introduction;
