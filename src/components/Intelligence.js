import React, { Component } from 'react';
import { Row, Col } from 'antd';

import image from '../static/mint.png'
import atherGif from '../static/atherVideo.gif'

class Intelligence extends Component {

  renderIntelligenceContent = () => {
    return (
      <Row className='row-split'>
        <Col span={12}>
          <div className='center'>
            <span className='int-heading'>{`All Brain. All Power. All Electric.`}</span>
            <p className="int-content">Everything you imagined your next ride to be and beyond.<br/>The Ather 450X.</p>
          </div>
        </Col>
        <Col span={12} className='center'>
          <img src={image} alt='' className='int-photo'></img>
        </Col>
      </Row>
    );
  }

  renderVideoContent = () =>
    <img src={atherGif} alt='' className='int-gif row-split'></img>

  renderDisplayContent = () => {
    return (
      <Row className='row-split'>
        <Col span={12}>
        <span className='int-connected'>Connected</span>
          <div className='int-connected'>
            <p className="int-content">Never take your phone <br/>out when you ride.</p>
          </div>
        </Col>
        <Col span={12} className=''>
          <span className='int-content'>
            A 7” LCD display for everything you need to see on <br/>your ride - from navigation to incoming calls to
            <br/>nearest charging points.
          </span>
        </Col>
      </Row>
    );
  }

  renderIntelligentHeader = () => {
    return (
      <h2 className='center'>Powered by intelligence</h2>
    )
  }

  render() {
    return (
      <div>
        {this.renderIntelligentHeader()}
        {this.renderIntelligenceContent()}
        {this.renderDisplayContent()}
        {this.renderVideoContent()}
      </div>
    );
  }
}

export default Intelligence;