import React from 'react';
import { Image, Row, Col } from 'react-bootstrap';

function AtomicCard(props){
    const {top, cardIndex, left, right} = props;
    const imgNumber = 4035 + cardIndex;
    const imgUrl = "../../assets/PaqueteAtomic/Group "+imgNumber+".png";
    const color = top ? "white" : "orange";
    const bgColor = top ? "orange" : "white";
    const listColor = top ? "white" : "dark-blue";
    const topCard = top && "top-card";
    const bulletSize = top ? "b-text" : "m-text";
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
            <div className={"left-text "+listColor}>
                <ul>
                {lists[cardIndex].map(elementList => {
                    return (<Row>
                        <Col>
                            <li className={bulletSize}><div className="leight-weight m-text">{elementList}</div></li>
                        </Col>
                    </Row>);
                })}
                </ul>
            </div>
                
        </Col>
    );
}//AtomicCard

export default AtomicCard;