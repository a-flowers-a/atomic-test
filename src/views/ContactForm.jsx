import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { Container, Image, Row, ProgressBar, Col } from 'react-bootstrap';
import Footer from '../components/Footer';
import FormName from '../components/Form/FormName';
import FormTitle from '../components/Form/FormTitle';

function ContactForm(){
    const spaceRamen = "../../assets/PaqueteAtomic/Group 4033.png";
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
    const titles = ["TE QUEREMOS CONOCER", "VALIDA TU CELULAR", "CÓDIGO DE VERIFICACIÓN"];
    const [progress, setProgress] = useState(20);
    const [step, setStep] = useState(0);

    function handleStep(minus){
        if(minus)
            step > 0 ? setStep(step-1) : setStep(0);
        else
            step < 3 ? setStep(step+1) : setStep(3);
    }//handleStep
    console.log("step contactForm ", step);

    return(
        <div className="primary-div">
            <Row className="justify-content-center m-v-space">
                <Col sm={7}>
                    <Row className="s-v-space">
                        <Col>
                            <Image 
                                alt="Number"
                                className="tiny-img"
                                src={step === 0 ? activeSteps[0] : checkmark}
                            />
                        </Col>
                        <Col>
                            <Image 
                                alt="Number"
                                className="tiny-img"
                                src={step===1 ? activeSteps[1] : (step < 1 ? inactiveSteps[0] : checkmark)}
                            />
                        </Col>
                        <Col>
                            <Image 
                                alt="Number"
                                className="tiny-img"
                                src={step===2 ? activeSteps[2] : (step < 1 ? inactiveSteps[1] : checkmark)}
                            />
                        </Col>
                        <Col>
                            <Image 
                                alt="Number"
                                className="tiny-img"
                                src={step===3? activeSteps[3] : (step < 1 ? inactiveSteps[2] : checkmark)}
                            />
                        </Col>
                    </Row>
                    <Row>
                        <Col><ProgressBar now={progress}/></Col>
                    </Row>
                    {step>0 && <Row className="s-v-space">
                        <Col sm={2}
                            className="s-text left-text white pointer"
                            onClick={()=>{handleStep(true);}}
                        >
                            <FontAwesomeIcon className="chevron-icon" icon={faChevronLeft}/> Regresar
                        </Col>
                    </Row>}
                    <FormTitle 
                        title={titles[step]}
                        img={bigActiveSteps[step]}
                    />
                    <FormName />
                </Col>
                <Col sm={3}>
                    <Image 
                        alt="Space Ramen"
                        className="full-img"
                        src={spaceRamen}
                    />
                </Col>
            </Row>
            <Footer />
        </div>
    );
}//ContactForm

export default ContactForm;