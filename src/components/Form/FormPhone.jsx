import React from 'react';
import { Row, Col, Form } from 'react-bootstrap';
import ActionBtn from '../ActionBtn';
import { useForm, Controller } from "react-hook-form";
import { useDispatch, useSelector } from 'react-redux';
import {increment, setPhone} from '../../Actions';

function FormPhone(){
    const { handleSubmit, control, formState: { errors } } = useForm();
    const step = useSelector(state => state.stepCounter);
    const dispatch = useDispatch();

    const onSubmit = data => {
        console.log(data);
        dispatch(setPhone(data.phone));
        if(step < 3)
            dispatch(increment());
    }//onSubmit

    return(
        <Row>
            <Col sm={12}>
                <Row><Col className="left-text light-text m-text white">Necesitamos validar tu número para continuar</Col></Row>
                <Row><Col className="left-text light-text s-text-form white">Ingresa tu número a 10 dígitos y te enviaremos un código SMS.</Col></Row>
                <Row className="s-v-space">
                    <Col sm={6} className="left-text light-text m-text white">
                    <Form>
                        <Form.Group controlId="PhoneForm">
                            <Form.Label>Número de celular</Form.Label>
                            <Controller
                                control={control}
                                defaultValue=""
                                name="phone"
                                render={({ field }) => <Form.Control type="text" {...field}/>}
                                rules={{ required: true, pattern: /^[0-9]{10}$/ }}
                            />
                            {errors.phone?.type === 'required' && <Row className="s-text normal-weight red p-15-left">Número necesario</Row>}
                            {errors.phone?.type === 'pattern' && <Row className="s-text normal-weight red p-15-left">El número deberá tener diez dígitos</Row>}
                        </Form.Group>
                    </Form>
                    </Col>
                </Row>
                <Row className="justify-content-end"> 
                    <Col sm={3}>
                        <ActionBtn 
                            text={"Continuar"} 
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
}//FormPhone

export default FormPhone;