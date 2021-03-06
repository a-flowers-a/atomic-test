import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { Image, Row, ProgressBar, Col } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import Footer from '../components/Footer';
import FormName from '../components/Form/FormName';
import FormPhone from '../components/Form/FormPhone';
import FormTitle from '../components/Form/FormTitle';
import {decrement} from '../Actions';
import FormVerif from '../components/Form/FormVerif';
import TermsForm from '../components/Form/TermsForm';
import AtomicHeader from '../components/AtomicHeader';

function ContactForm(){
    const spaceMen = [
        "../../assets/PaqueteAtomic/Group 4033.png",
        "../../assets/PaqueteAtomic/Group 4034.png",
        "../../assets/PaqueteAtomic/Group 4038.png",
    ];
    const checkmark = "../../assets/PaqueteAtomic/checkmark.png"
    const activeSteps = [
        "../../assets/PaqueteAtomic/Group 4015.png",
        "../../assets/PaqueteAtomic/Group 4020.png",
        "../../assets/PaqueteAtomic/Group 4021.png",
        "../../assets/PaqueteAtomic/Group 4022.png"
    ];
    const bigActiveSteps = [
        "../../assets/PaqueteAtomic/Group 4014@2x.png",
        "../../assets/PaqueteAtomic/Group 4023@2x.png",
        "../../assets/PaqueteAtomic/Group 4024@2x.png",
        "../../assets/PaqueteAtomic/Group 4025@2x.png"
    ];
    const inactiveSteps = [
        "../../assets/PaqueteAtomic/Group 4019.png",
        "../../assets/PaqueteAtomic/Group 4017.png",
        "../../assets/PaqueteAtomic/Group 4018.png"
    ];
    const titles = ["TE QUEREMOS CONOCER", "VALIDA TU CELULAR", "CÓDIGO DE VERIFICACIÓN", "TÉRMINOS Y CONDICIONES"];
    const forms = [<FormName />, <FormPhone />, <FormVerif />, <TermsForm />];
    const [progress] = useState(20);
    const step = useSelector(state => state.stepCounter);
    const dispatch = useDispatch();

    return(
        <div className="primary-div">
            <AtomicHeader />
            <Row className="justify-content-center s-margin-bottom ">
                <Col sm={7}>
                    <Row className="justify-content-center s-v-space">
                        <Col xs={2}>
                            <Image 
                                alt="Number"
                                className="tiny-img"
                                src={step === 0 ? activeSteps[0] : checkmark}
                            />
                        </Col>
                        <Col xs={2}>
                            <Image 
                                alt="Number"
                                className="tiny-img"
                                src={step===1 ? activeSteps[1] : (step < 1 ? inactiveSteps[0] : checkmark)}
                            />
                        </Col>
                        <Col xs={2}>
                            <Image 
                                alt="Number"
                                className="tiny-img"
                                src={step===2 ? activeSteps[2] : (step < 2 ? inactiveSteps[1] : checkmark)}
                            />
                        </Col>
                        <Col xs={2}>
                            <Image 
                                alt="Number"
                                className="tiny-img"
                                src={step===3? activeSteps[3] : (step < 3 ? inactiveSteps[2] : checkmark)}
                            />
                        </Col>
                    </Row>
                    <Row className="justify-content-center">
                        <Col xs={10}><ProgressBar variant="orange" now={progress * (step + 1)}/></Col>
                    </Row>
                    {step>0 && <Row className="s-v-space">
                        <Col sm={2}
                            className="s-text left-text white pointer"
                            onClick={()=>{
                                if(step > 0)
                                    dispatch(decrement());
                            }}
                        >
                            <FontAwesomeIcon className="chevron-icon" icon={faChevronLeft}/> Regresar
                        </Col>
                    </Row>}
                    <FormTitle 
                        title={titles[step]}
                        img={bigActiveSteps[step]}
                    />
                    {forms[step]}
                </Col>
                <Col sm={3}>
                    <Image 
                        alt="Atomic Spaceman"
                        className="full-img"
                        src={step>1 ? spaceMen[step-1] : spaceMen[step]}
                    />
                </Col>
            </Row>
            <Footer />
        </div>
    );
}//ContactForm

export default ContactForm;