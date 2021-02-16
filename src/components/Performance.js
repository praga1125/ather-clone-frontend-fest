import React, { Component } from 'react';
import { Row, Col } from 'antd';
// import ReactPlayer from 'react-player'
import ReactPlayer from 'react-player/lazy'
// import image1 from '../static/2.jpg'



class Performance extends Component {
	state = {  }

	renderPerformanceContent = () => {
		return (
			<Row className='row-split performance-content'>
				<Col span={12}>
					<span>Performance</span><br/>
					<span className='performance-bolder'>Quick. Exhilarating.<br/>Fun.</span>
				</Col>
				<Col span={12}>
					<span>
						Engineered ground-up with a singular focus on <br/>
						performance, the Ather 450X is a sheer joy to ride.<br/>
						Out accelerate everyone with a twist on the <br/>
						throttle, cruise at top speeds and criss-cross <br/>
						across the city on a single charge.
					</span>
				</Col>
			</Row>
		)
	}

	renderReverseModeContents = () => {
		return (
			<Row className='row-split reverse-content'>
				<Col span={12} className='reverse-content'>
					<span>Reverse mode</span><br/>
					<span className='performance-bolder'>Work out your<br/> legs later.</span>
				</Col>
				<Col span={12}>
					<span>
						Get your scooter off slopes, tight parking<br/>
						spots or uneven terrain with reverse assist.<br/>
					</span>
				</Col>
			</Row>
		)
	}

	renderReverseModeFeature = () => {
		return (
			<div className='row-split'>
				{this.renderReverseModeContents()}
				<div className='row-split'>
					<ReactPlayer
						url='https://www.atherenergy.com/video/reverse-mode.mp4'
						width='100%'
						height='700px'
						loop={true}
						playing={true}
						controls={true}
						light={'https://www.atherenergy.com/images/450x-new/overlay.jpg?v=2768'}
					/>
				</div>
			</div>
		)
	}

	render() {
		return (
			<div>
				<h2 className='center'>The power-pack</h2>
				{this.renderPerformanceContent()}
				<div className='row-split'>
					<ReactPlayer url='https://www.youtube.com/watch?v=5Lvmuddr0Ds' width='100%' height='700px'/>
				</div>
				{this.renderReverseModeFeature()}
			</div>
		);
	}
}

export default Performance;
