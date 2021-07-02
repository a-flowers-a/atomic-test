import React, { useState } from 'react';
import { Row, Col, Image } from 'react-bootstrap';
import ActionBtn from '../ActionBtn';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useDispatch, useSelector } from 'react-redux';
import {increment} from '../../Actions';

function TermsForm(){
    const [checked, setChecked] = useState(false);
    const step = useSelector(state => state.stepCounter);
    const dispatch = useDispatch();
    const checkbox = "../../assets/PaqueteAtomic/Group 4028.png";
    
    const onSubmit = () => {
        if(checked)
        {
            if(step < 3)
                dispatch(increment());
        }
    }//onSubmit

    function toggleCheck() {
        console.log("toggling check TermsForm");
        setChecked(lastValue => !lastValue);
    }

    return(
        <Row>
            <Col sm={12}>
                <Row><Col className="left-text light-text m-text white">Por favor revisa nuestros términos y condiciones para este servicio:</Col></Row>
                <Row className="s-v-space"><Col className="left-text normal-weight pointer s-text underline white">Consulta términos y condiciones</Col></Row>
                <Row className="terms-v-space">
                    <Col sm={6} className="left-text light-text s-text white v-center-content">
                        {checked ? 
                            <Image 
                                alt="checkbox" 
                                className="tiny-img pointer"
                                src={checkbox}
                                onClick={toggleCheck}
                            /> : 
                            <div onClick={toggleCheck} className="empty-checkbox pointer inline"></div>
                        }
                        <div className="inline m-10-left">Acepto los Términos y Condiciones</div>
                    </Col>
                    <Col sm={12}>
                        {!checked && <Row className="s-text normal-weight red p-15-left">Es necesario aceptar los términos y condiciones</Row>}
                    </Col>
                </Row>
                <Row className="justify-content-end m-v-space"> 
                    <Col sm={3}>
                        <ActionBtn 
                            text={"Enviar"} 
                            clickFunc={onSubmit}
                            color="white"
                            extraClases="orange-bg m-text"
                            weight="light-weight"
                        />
                    </Col>
                </Row>
            </Col>
        </Row>
    );
}//TermsForm

export default TermsForm;