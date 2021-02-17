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
      <div class="card charge-card">
        <div class="card-body">
          <h2 className='center charge-header'>That’s not all</h2>
          <Row type="flex" className='charge-row'>
            <Col span={4} className='center charge-icon'><td>{<ApiOutlined />}</td></Col>
            <Col span={20} className='left charge-content'><td>0 - 80% in 3 hour 35 min.</td></Col>
          </Row>
          <Row type="flex" className='charge-row'>
            <Col span={4} className='center charge-icon'><td>{<GlobalOutlined />}</td></Col>
            <Col span={20} className='left'><td>Check charge status remotely through Ather app</td></Col>
          </Row>
          <Row type="flex" className='charge-row'>
            <Col span={4} className='center charge-icon'><td>{<TabletOutlined />}</td></Col>
            <Col span={20} className='left'><td>In-built auto cut-off</td></Col>
          </Row>
          <Row type="flex" className='charge-row'>
            <Col span={4} className='center charge-icon'><td>{<ToolOutlined />}</td></Col>
            <Col span={20} className='left'><td>Hassle-free installation by Ather</td></Col>
          </Row>
        </div>
      </div>
    )
  }

  renderChargingImage = () => {
    return (
      <Row className='row-split'>
        <Col span={10}>
          {this.renderChargingDetails()}
        </Col>
        <Col span={14}>
          <img src={image3} alt='' className='charge-photo'></img>
        </Col>
      </Row>
    )
  }

  render() {
    return (
      <div>
        <h2 className='center row-split reverse-content'>Hassle-free charging</h2>
        {this.renderChargingHomeHeader()}
        {this.renderChargingImage()}
      </div>
    );
  }
}

export default Charging;