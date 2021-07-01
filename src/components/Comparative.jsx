import React from 'react';
import { Image, Col, Row } from 'react-bootstrap';

function Comparative(){
    const checkMarck = "../../assets/PaqueteAtomic/ic_check_tiny.png";
    return(
        <Row className="justify-content-center m-v-space">
            <Col sm={10} className="table-container">
                <table>
                    <thead>
                        <tr>
                        <th className="left-text">CARACTERÍSTICAS</th>
                        <th>OTROS</th>
                        <th className="b-text">ATOMIC</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <td className="left-text">Equipo inclusivo, honesto y auténtico</td>
                        <td ><Image alt={'Checkmark'} className={"tiny-img"} src={checkMarck}/></td>
                        <td><Image alt={'Checkmark'} className={"tiny-img"} src={checkMarck}/></td>
                        </tr>
                        <tr>
                        <td className="left-text">Puntualidad es nuestro segundo nombre</td>
                        <td><Image alt={'Checkmark'} className={"tiny-img"} src={checkMarck}/></td>
                        <td><Image alt={'Checkmark'} className={"tiny-img"} src={checkMarck}/></td>
                        </tr>
                        <tr>
                        <td className="left-text">Siempre innovamos en nuestros productos</td>
                        <td><Image alt={'Checkmark'} className={"tiny-img"} src={checkMarck}/></td>
                        <td><Image alt={'Checkmark'} className={"tiny-img"} src={checkMarck}/></td>
                        </tr>
                        <tr>
                        <td className="left-text">Te ayudamos a crecer e implementar nuevos conocimientos</td>
                        <td></td>
                        <td><Image alt={'Checkmark'} className={"tiny-img"} src={checkMarck}/></td>
                        </tr>
                        <tr>
                        <td className="left-text">Nos preocupamos por tu bienestar</td>
                        <td></td>
                        <td><Image alt={'Checkmark'} className={"tiny-img"} src={checkMarck}/></td>
                        </tr>
                        <tr>
                        <td className="left-text">El respeto es una parte fundamental</td>
                        <td></td>
                        <td><Image alt={'Checkmark'} className={"tiny-img"} src={checkMarck}/></td>
                        </tr>
                    </tbody>
                </table>
            </Col>
        </Row>
    );
}//Comparative

export default Comparative;