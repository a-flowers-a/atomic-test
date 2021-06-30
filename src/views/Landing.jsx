import React from 'react';
import {Container, Image, Row, Col} from 'react-bootstrap';
import ActionBtn from '../components/ActionBtn';
import AtomicCard from '../components/AtomicCard';

function Landing(){
    const spaceman = "../../assets/PaqueteAtomic/Group4032.png";
    const arrDown = "../../assets/PaqueteAtomic/Group 4013.png";

    return(
        <div className="primary-div">
            <Container fluid>
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
            </Container>
        </div>
    );
}

export default Landing;