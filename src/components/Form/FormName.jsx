import React, { useState } from 'react';
import { Row, Button, Col, Form, InputGroup } from 'react-bootstrap';
import ActionBtn from '../ActionBtn';

function FormName(){
    const [validated, setValidated] = useState(false);
  
    const handleSubmit = (event) => {
      const form = event.currentTarget;
      if (form.checkValidity() === false) {
        event.preventDefault();
        event.stopPropagation();
      }
  
      setValidated(true);
    };
    
    function sendTo(){

    }

    return(
        <Row>
            <Col sm={12}>
                <Row><Col className="left-text light-text m-text white">Queremos saber que eres tú, por favor ingresa los siguientes datos:</Col></Row>
                <Row className="s-v-space">
                    <Col sm={8} className="left-text light-text m-text white">


                    



                    <Form noValidate validated={validated} onSubmit={handleSubmit}>
                        <Form.Group hasValidation controlId="NameForm">
                            <Form.Label>Nombre (s)</Form.Label>
                            <Form.Control type="text" required isInvalid />
                            <Form.Control.Feedback type="invalid" className="s-text normal-weight red">
                                El nombre deberá tener mínimo 5 caracteres.
                            </Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group hasValidation controlId="NameForm">
                            <Form.Label>Apellidos</Form.Label>
                            <Form.Control type="text" required isInvalid />
                            <Form.Control.Feedback type="invalid" className="s-text normal-weight red">
                                El apellido deberá tener mínimo 5 caracteres.
                            </Form.Control.Feedback>
                        </Form.Group>
                    </Form>
                    </Col>
                </Row>
                <Row className="justify-content-end"> 
                    <Col sm={3}>
                        <ActionBtn 
                            text={"Enviar"} 
                            clickFunc={handleSubmit}
                            color="white"
                            bgColor="orange-bg"
                            weight="light-weight"
                        />
                    </Col>
                </Row>
            </Col>
        </Row>
    );
}//FormName

export default FormName;