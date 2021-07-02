import React from 'react';
import { Col, Image, Row } from 'react-bootstrap';

function FormTitle(props){
    const {title, img} = props;
    const titleWords = title.split(" ");
    return(
        <Row  className="v-center-content m-v-space">
            <Col md={1}>
                <Image 
                    alt="Number"
                    className="m-img"
                    src={img}    
                />
            </Col>
            <Col md={8}><h1 className="inline white">{(titleWords.slice(0,2)).join(" ")+" "}</h1> <h1 className="inline orange"> {titleWords[2]}</h1></Col>
        </Row>
    );
}

export default FormTitle;