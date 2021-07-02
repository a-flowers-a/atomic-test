import React from 'react';
import { Image, Row, Col } from 'react-bootstrap';

function PerksAtomic(){
    const perksAtomic = [
        ["Usamos las tecnologías más modernas.","Innovamos y creamos proyectos retadores.", "¡Trabajamos en equipo rumbo al éxito!"],
        ["No tenemos código de vestimenta.", "Realizamos actividades para tu bienestar.", "¡Tenemos un parque frente a la oficina!"]
    ];
    const checkMarck = "../../assets/PaqueteAtomic/ic_check_tiny.png";

    return (
        <Row className="justify-content-center">
            <Col sm={10}>
                {perksAtomic.map(rowPerk => {
                    return (
                        <Row className="v-center-content s-v-space">
                                {rowPerk.map(perk => {
                                    return (
                                        <>
                                            <Col xs={1} className="right-text">
                                                <Image 
                                                    alt={'Checkmark'}
                                                    className={"tiny-img"}
                                                    src={checkMarck}
                                                />
                                            </Col>
                                            <Col xs={11} sm={5} md={3} className="white normal-weight m-text left-text">
                                                {perk}
                                            </Col>
                                        </>
                                    );//return
                                })}
                        </Row>
                    );//return
                })}
            </Col>
        </Row>
    );
}//PerksAtomic

export default PerksAtomic;