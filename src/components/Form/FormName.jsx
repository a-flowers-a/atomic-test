import React from 'react';
import { Row, Col, Form } from 'react-bootstrap';
import ActionBtn from '../ActionBtn';
import { useForm, Controller } from "react-hook-form";
import { useDispatch, useSelector } from 'react-redux';
import {increment} from '../../Actions';

function FormName(){
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
                <Row><Col className="left-text light-text m-text white">Queremos saber que eres tú, por favor ingresa los siguientes datos:</Col></Row>
                <Row className="s-v-space">
                    <Col sm={8} className="left-text light-text m-text white">
                    <Form>
                        <Form.Group controlId="NameForm">
                            <Form.Label>Nombre (s)</Form.Label>
                            <Controller
                                control={control}
                                defaultValue=""
                                name="firstName"
                                render={({ field }) => <Form.Control type="text" {...field}/>}
                                rules={{ required: true, pattern: /.{5,12}/ }}
                            />
                            {errors.firstName?.type === 'required' && <Row className="s-text normal-weight red p-15-left">Nombre requerido</Row>}
                            {errors.firstName?.type === 'pattern' && <Row className="s-text normal-weight red p-15-left">El nombre deberá tener mínimo 5 caracteres.</Row>}
                        </Form.Group>
                        <Form.Group controlId="LastnameForm">
                            <Form.Label>Apellidos</Form.Label>
                            <Controller
                                control={control}
                                defaultValue=""
                                name="lastName"
                                render={({ field }) => <Form.Control type="text" {...field}/>}
                                rules={{ required: true, pattern: /.{5,12}/ }}
                            />
                            {errors.lastName?.type === 'required' && <Row className="s-text normal-weight red p-15-left">Apellidos requeridos</Row>}
                            {errors.lastName?.type === 'pattern' && <Row className="s-text normal-weight red p-15-left">Los apellidos deberán tener mínimo 5 caracteres.</Row>}
                        </Form.Group>
                    </Form>
                    </Col>
                </Row>
                <Row className="justify-content-end"> 
                    <Col sm={3}>
                        <ActionBtn 
                            text={"Enviar"} 
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
}//FormName

export default FormName;