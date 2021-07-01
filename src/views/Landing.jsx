import React from 'react';
import {Container, Image, Row, Col} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ActionBtn from '../components/ActionBtn';
import AtomicCard from '../components/AtomicCard';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import PerksAtomic from '../components/PerksAtomic';
import Footer from '../components/Footer';
import Comparative from '../components/Comparative';

function Landing(){
    const spaceman = "../../assets/PaqueteAtomic/Group4032.png";
    const arrDown = "../../assets/PaqueteAtomic/Group 4013.png";
    const workers = "../../assets/PaqueteAtomic/Group 4040.png";
    const spaceDesign = "../../assets/PaqueteAtomic/Group 4041.png";
    const spaceDev = "../../assets/PaqueteAtomic/Group 4042.png";
    const spaceAth = "../../assets/PaqueteAtomic/Group 4043.png";

    function sendTo(){
        window.location.href = '/form';
    }

    return(
        <div className="primary-div">
            {/*<Container fluid>*/}
                <Row>
                    <Col xs={1}>
                        <Image 
                            alt={'Atomic Logo'}
                            className={"atomic-logo"}
                            src={spaceman}
                        />
                    </Col>
                </Row>
                <Row className="justify-content-center m-v-space">
                    <Col sm={5}>
                        <Image 
                            alt={'Atomic Spaceman'}
                            className={"full-img"}
                            src={spaceman}
                        />
                    </Col>
                    <Col sm={5}>
                        <Row className="justify-content-center">
                            <div className="justify-text">
                                <div className="title white">Desarrolla todo</div>
                                <div className="title orange inline">tu POTENCIAL</div>
                                <div className="title white">dentro del equipo</div>
                                <div className="title orange inline">ATOMIC</div><div className="title white inline">LABS</div>
                            </div>
                        </Row>
                        <Row className="justify-content-center m-v-space">
                            <Col sm={6}>
                                <ActionBtn
                                    text={"¡Quiero ser parte!"}
                                    clickFunc={sendTo}
                                />
                            </Col>
                        </Row>
                    </Col>
                </Row>
                <Row className="justify-content-center">
                    <Col xs={1}>
                        <Image 
                            alt={'Arrow Down'}
                            className={"full-img"}
                            src={arrDown}
                        />
                    </Col>
                </Row>
                <Row>
                    <Col className="normal-weight white">Quiero saber más</Col>
                </Row>
                <Row className="m-v-space">
                    <Col >
                        <Row className="justify-content-center"><div className="title white">SOMOS EL BRAZO DERECHO</div></Row>
                        <Row className="justify-content-center"><div className="title orange">DE LA TECNOLOGÍA</div></Row>
                    </Col>
                </Row>
                <Row className="justify-content-center v-center-content">
                    <AtomicCard
                        left={true}
                        cardIndex={0}
                    />
                    <AtomicCard
                        top={true}
                        cardIndex={1}
                    />
                    <AtomicCard
                        right={true}
                        cardIndex={2}
                    />
                </Row>
                <Row className="m-v-space">
                    <Col>
                        <Row className="justify-content-center title white">¡TE ENCANTARÁ</Row>
                        <Row className="justify-content-center title orange">TRABAJAR CON NOSOTROS!</Row>
                    </Col>
                </Row>
                <Row className="justify-content-center">
                    <Col sm={10}>
                        <Image 
                            alt={'Atomic Workers'}
                            className={"full-img"}
                            src={workers}
                        />
                    </Col>
                </Row>
                <Row className="justify-content-center v-center-content">
                    <Col sm={2} className="white m-text">Contratación remota</Col>
                    <Col sm={1} className="orange"><FontAwesomeIcon icon={faArrowRight} size="lg"/></Col>
                    <Col sm={2} className="white m-text">Entrevista con el área de RH</Col>
                    <Col sm={1} className="orange"><FontAwesomeIcon icon={faArrowRight} size="lg"/></Col>
                    <Col sm={2} className="white m-text">Prueba práctica</Col>
                    <Col sm={1} className="orange"><FontAwesomeIcon icon={faArrowRight} size="lg"/></Col>
                    <Col sm={2} className="white m-text">Entrevista técnica</Col>
                </Row>
                <Row className="justify-content-center m-v-space">
                    <Col sm={3}>
                        <ActionBtn
                            text={"¡Quiero ser parte!"}
                        />
                    </Col>
                </Row>
                <Row className="justify-content-center m-v-space">
                    <Col sm={6}>
                        <div className="title white inline">¿POR QUÉ</div>
                        <div className="title orange inline">ATOMIC?</div>
                    </Col>
                </Row>
                <Row className="blue-div"></Row>
                <Row className="justify-content-center">
                    <Col sm={3}>
                        <Image 
                            alt={'Atomic Workers'}
                            className={"full-img"}
                            src={spaceDesign}
                        />
                    </Col>
                    <Col sm={3}>
                        <Image 
                            alt={'Atomic Workers'}
                            className={"full-img"}
                            src={spaceDev}
                        />
                    </Col>
                    <Col sm={3}>
                        <Image 
                            alt={'Atomic Workers'}
                            className={"full-img"}
                            src={spaceAth}
                        />
                    </Col>
                </Row>
                <PerksAtomic />
                <Comparative />
                <Row className="justify-content-center m-v-space">
                    <Col sm={3}>
                        <ActionBtn
                            text={"¡Quiero ser parte!"}
                        />
                    </Col>
                </Row>
                <Footer />
            {/*</Container>*/}
        </div>
    );
}

export default Landing;