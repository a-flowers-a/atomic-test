import React from 'react';
import { Col, Image, Row } from 'react-bootstrap';

function Footer(){
    const linkedin = "../../assets/PaqueteAtomic/linkedin.png";
    const twitter = "../../assets/PaqueteAtomic/twitter.png";
    return(
        <Row className="footer bold-text justify-content-center v-center-content">
            <Col sm={6}>© 2020 AtomicLabs. Todos los derechos reservados.</Col>
            <Col sm={2} className="underline pointer">Aviso de privacidad</Col>
            <Col xs={1}><Image alt={'LinkedIn'} className="social-img" src={linkedin}/></Col>
            <Col xs={1}><Image alt={'Twitter'} className="social-img" src={twitter}/></Col>
        </Row>
    );
}//Footer

export default Footer;