import React, { Component } from 'react';
import { Container, Col, Row, Image } from "react-bootstrap";
import Fade from 'react-reveal/Fade';
import location from "../../images/location.PNG"

class About extends Component{
    render = ()=> {
        return(
                <div style={{backgroundColor:"white"}}>
                    <section id="about" style={{backgroundColor:"white"}}>
                    <Fade left big>
                        <Container className="pt-5 pb-5">
                            <Row>
                                <Col className="col-6 col-md-4 align-self-center mx-auto">
                                    <Image  src={location} alt="pic" width="100%" />
                                </Col>
                                <Col className="col-12 col-md-8 align-self-center">
                                    <h1 className="display-6 font-weight-bold" style={{color: "#32CD32"}}>QUI SOMMES-NOUS ?</h1>
                                    <br />
                                    <h2>Services d’enlèvement de véhicule dans tous les départements d'Ile-de-France : 75, 77, 78, 91, 92, 93, 94, 95,100% gratuit.</h2>
                                    <p className="text-justify" style={{color:`#0C2340`}}>
                                    <br/>
                                    Vous êtes gêné par le stationnement d’une voiture et vous souhaitez vous en débarrasser ?<br/>
                                    FDCR'S RECYCLE intervient gratuitement sur votre lieu de prise en charge pour faire enlever votre véhicule hors d'usage ( VHU ).<br/>
                                    Vous habitez en région parisienne ? Vous possèdez une voiture épave stationnée dans un arrondissement de Paris,
                                    châtelet, 8ème, 10ème, 11ème, 18ème arrondissement ?<br/>
                                    Un enlèvement d'épave 75 Paris est alors nécessaire, et nous intervenons dans tous les arrondissements parisiens.<br/>
                                    Le département du 77 est le département le plus grand d'Ile-de-France, 
                                    il est pas forcement le plus peuplé, mais constitue de nombreuses voitures hors d'usage, 
                                    nous sommes alors très sollicités pour un enlèvement épave dans le 77 Seine-et-Marne, exemple :
                                    Chelles, Meaux, Melun, Pontault-Combault, et bien plus encore !<br/>
                                    Dans le 78 et ses villes, il y a de nombreuses épaves, alors que pensez-vous de faire appel à un épaviste pour un enlèvement d'épave gratuit dans le 78 Yvelines, exemple : Versailles, Saint-germain-en-laye, Marly-le-roi, etc.)
                                    Les hauts-de-seine, un petit département possèdant beaucoup de belles épaves,
                                    nous sommes ainsi attentifs à vos appel pour organiser un enlèvement épave 92, exemple :
                                    Suresnes, Boulogne-billancourt, Clichy, Colombes et bien plus encore...<br/>
                                    Nous procédons également à l'enlèvement d'epave 93, Seine-Saint-Denis. Il existe de nombreuses epaves à aubervilliers, 
                                    Saint-denis ou bien Aulnay-sous-bois, etc.<br/>
                                    Le Val-de-Marne possède aussi des epaves roulantes et non-roulantes,
                                    nous intervenons souvent pour un enlèvement d'épave 94, dans Créteil, Vitry, 
                                    Chevilly-la-rue et toutes les autres villes du Val-de-marne.<br/>
                                    Nous intervenons pour l'enlèvement d'épave dans le 95 val d'oise, à argenteuil, garges-les-gonesse ou bien Bezons par exemple.<br/>
                                    Demandez l’intervention gratuite de nos épavistes professionnels agréés, pour un retrait immédiat sous 24H. <br/>
                                    </p>
                                </Col>
                            </Row>
                        </Container>
                    </Fade>
                    </section>
                </div>
        );
    };
}

export default About;