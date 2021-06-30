import React from 'react';
import { Image, Row, Col } from 'react-bootstrap';

function AtomicCard(props){
    const {top, cardIndex, left, right} = props;
    const imgNumber = 4035 + cardIndex;
    const imgUrl = "../../assets/PaqueteAtomic/Group "+imgNumber+".png";
    const color = top ? "white" : "orange";
    const bgColor = top ? "orange" : "white";
    const topCard = top && "top-card";
    const leftCard = left && "left-card";
    const rightCard = right && "right-card";
    const gridCol = top ? 4 : 3;
    const titles = [
        "EXPLORA",
        "IMAGINA",
        "Conquista"
    ];
    const lists = [
        ["Innovación y creación tecnológica", "UI/UX", "Innovación"],
        ["Estrategia Digital", "Big Data & Analysis", "Consultoría Tecnológica", "Reducción de costos TI"],
        ["Desarrollo tecnológico a la medida", "Ciberseguridad", "Servicios de la Nube"]
    ];
    return(
        <Col sm={gridCol} className={"atomic-card "+bgColor+"-bg "+leftCard+" "+topCard+" "+rightCard}>
            <Row className="justify-content-center s-v-space">
                <Col xs={6}>
                    <Image
                        alt={'Atomic Image'}
                        className={"full-img"}
                        src={imgUrl}
                    />
                </Col>
            </Row>
            <Row className="justify-content-center s-v-space">
                <Col xs={2}>
                    <div className={color}><hr /></div>
                </Col>
                <Col xs={1}>
                    <div className={color}><hr /></div>
                </Col>
                <Col xs={2}>
                    <div className={color}><hr /></div>
                </Col>
            </Row>
            <Row className="justify-content-center s-v-space">
                <Col>
                    <div className={"subtitle "+ color}>{titles[cardIndex]}</div>
                </Col>
            </Row>
            <div className="left-text">
                {lists[cardIndex].map(elementList => {
                    return (<Row>
                        <Col>
                            <div className={"normal-weight "+ color}>{elementList}</div>
                        </Col>
                    </Row>);
                })}
            </div>
                
        </Col>
    );
}//AtomicCard

export default AtomicCard;