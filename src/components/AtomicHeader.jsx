import React from 'react';
import { Col, Image, Row } from 'react-bootstrap';

function AtomicHeader(){
    const logo = "../../assets/PaqueteAtomic/atomic_logo.webp";
    return(
        <Row className="s-v-space">
            <Col xs={4}>
                <Image 
                    alt={'Atomic Logo'}
                    className={"atomic-logo"}
                    src={logo}
                />
            </Col>
        </Row>
        );
}//AtomicHeader

export default AtomicHeader;