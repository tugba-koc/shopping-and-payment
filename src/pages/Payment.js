import React from 'react'
import Header from '../components/Header/Header';
import CardInfo from '../components/CardInfo/CardInfo';
import PackageInfo from '../components/PackageInfo/PackageInfo';
import { Row, Col } from 'antd';

function Payment() {
    return (
        <div className="main-wrapper--payment">
            <Header />
            <Row gutter={[24, 8]}>
                <Col className="gutter-row" span={12} offset={3}>
                    <div><CardInfo /></div>
                </Col>
                <Col className="gutter-row" span={6}>
                    <div><PackageInfo /></div>
                </Col>
            </Row>
        </div>
    )
}

export default Payment