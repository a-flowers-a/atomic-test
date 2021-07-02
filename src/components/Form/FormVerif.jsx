import React from 'react';
import { Row, Col, Form } from 'react-bootstrap';
import ActionBtn from '../ActionBtn';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useForm, Controller } from "react-hook-form";
import { useDispatch, useSelector } from 'react-redux';
import {increment} from '../../Actions';
import { faPen } from '@fortawesome/free-solid-svg-icons';

function FormVerif(){
    const { handleSubmit, control, formState: { errors } } = useForm();
    const step = useSelector(state => state.stepCounter);
    const dispatch = useDispatch();

    const onSubmit = data => {
        console.log(data);
        if(step < 3)
            dispatch(increment());
    }//onSubmit

    return(
        <Row>
            <Col sm={12}>
                <Row><Col className="left-text light-text m-text white">Te enviamos un SMS al número:</Col></Row>
                <Row><Col className="left-text light-text white">+52 {"7221489294"}<FontAwesomeIcon className="m-25-left" icon={faPen}/> </Col></Row>
                <Row className="s-v-space"><Col className="left-text light-text white">Ingresa el código de verificación:</Col></Row>
                <Row className="s-v-space">
                    <Col sm={6} className="left-text light-text m-text white">
                    <Form>
                        <Form.Group controlId="CodeForm">
                            <Form.Label className="s-text">Código de verificación</Form.Label>
                            <Controller
                                control={control}
                                defaultValue=""
                                name="code"
                                render={({ field }) => <Form.Control type="text" {...field}/>}
                                rules={{ required: true, pattern: /^[0-9]{6}$/ }}
                            />
                            {errors.code?.type === 'required' && <Row className="s-text normal-weight red p-15-left">Código necesario</Row>}
                            {errors.code?.type === 'pattern' && <Row className="s-text normal-weight red p-15-left">El código deberá tener seis dígitos</Row>}
                        </Form.Group>
                    </Form>
                    </Col>
                </Row>

                <Row><Col className="left-text light-text s-v-space white">¿No recibiste el código? <div className="inline normal-weight pointer"> Reenviar código</div></Col></Row>
                <Row className="justify-content-end"> 
                    <Col sm={3}>
                        <ActionBtn 
                            text={"Validar código"} 
                            clickFunc={handleSubmit(onSubmit)}
                            color="white"
                            extraClases="orange-bg m-text"
                            weight="light-weight"
                        />
                    </Col>
                </Row>
            </Col>
        </Row>
    );
}//FormVerif

export default FormVerif;