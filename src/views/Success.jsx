import React from 'react';
import { Image, Row, Col } from 'react-bootstrap';
import Footer from '../components/Footer';
import AtomicHeader from '../components/AtomicHeader';

function Success(){
    const chairMan = "../../assets/PaqueteAtomic/Group 4039.png";
    return(
        <div className="primary-div">
            <AtomicHeader />
            <Row className="justify-content-center s-margin-bottom">
                <Col sm={6}>
                    <Row className="m-margin-top p-15-left"><div className="bs-text bold-text white">TUS DATOS</div> </Row>
                    <Row className="p-15-left"><div className="bs-text bold-text orange">HAN SIDO ENVIADOS</div></Row>
                    <Row className="p-15-left"><div className="bs-text bold-text orange">CON ÉXITO</div></Row>
                    <Row className="s-v-space">
                        <Col sm={8} className="m-text white light-text left-text">
                            En breve recibirás un correo de confirmación por parte del equipo de AtomicLabs.
                        </Col>    
                    </Row>
                    <Row className="s-v-space">
                        <Col sm={7} className="ms-text white light-text left-text">
                            Recuerda revisar tu bandeja de SPAM ¡Esperamos verte pronto!
                        </Col> 
                    </Row>
                </Col>
                <Col sm={4}>
                    <Image 
                        alt="Atomic Spaceman"
                        className="full-img"
                        src={chairMan}
                    />
                </Col>
            </Row>
            <Footer />
        </div>
    );
}//Success

export default Success;