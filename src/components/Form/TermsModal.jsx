import React from 'react';
import { Container, Image, Modal, Col, Row } from 'react-bootstrap';

function TermsModal(props) {
    const {show, handleClose} = props;
    const exclamation = "../../assets/PaqueteAtomic/Group 4029@2x.png"
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        onHide={handleClose}
        show={show}
      >
        <Container>
            <Row className="justify-content-center s-v-space">
                <Col xs={4} className="text-center">
                    <Image 
                        alt="exclamation mark"
                        src={exclamation}
                        className="exclamation-img"
                    />
                </Col>
            </Row>
            <Row className="justify-content-center s-v-space">
                <Col xs={4} className="text-center normal-weight">
                    Términos y Condiciones
                </Col>
            </Row>   
            <Modal.Body>
                <Row><p>Para llevar a cabo las finalidades descritas en el presente Aviso de Privacidad, utilizaremos datos personales de identificación, contacto y laborales.</p></Row>
                <Row><p>Los datos personales que AtomicLabs recaba de usted, serán utilizados para las siguientes finalidades que son necesarias para ofrecer nuestros servicios: </p></Row>
                <Row><p>● AtomicLabs requiere utilizar sus datos personales para incluirlo en la base de datos que utilizamos para prestar los servicios de reclutamiento, selección de personal, administración de nómina y prestación de servicios. AtomicLabs utilizará sus datos personales para evaluar si es posible colocarlo en las vacantes de empleo de la compañía o de los clientes de AtomicLabs y para conocer sus aptitudes, antecedentes y referencias laborales. En este sentido, AtomicLabs utilizará sus datos personales para ponerse en contacto con usted en relación a las vacantes para las cuales podría ser candidato.</p></Row>
                <Row><p>● AtomicLabs podría utilizar sus datos con fines de sondeo de satisfacción (en caso de ser cliente), estadístico (para conocer el origen de las visitas a nuestro sitio web) o de marketing por parte de nuestra empresa (en caso de suscribirse a alguno de nuestros avisos, newsletter o blog).</p></Row>
                <Row><p>● AtomicLabs no compartirá sus datos personales con terceros sin su previa autorización.</p></Row>
                <Row><p>● AtomicLabs podrá modificar, cambiar o actualizar el presente Aviso de Privacidad derivado de nuevos requerimientos legales, de nuestras propias necesidades por los servicios que ofrecemos, de nuestras prácticas de privacidad, de cambios a nuestro modelo de negocio o por otras causas. AtomicLabs se compromete a mantenerlo informado sobre los cambios, modificaciones o actualizaciones al Aviso de Privacidad.</p></Row>
            </Modal.Body>

        </Container>
      </Modal>
    );
  }//TermsModal

  export default TermsModal;