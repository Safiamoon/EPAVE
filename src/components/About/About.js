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
                                    <h1 className="display-5 font-weight-bold" style={{color:`#800000`}}>QUI SOMMES-NOUS ?</h1>
                                    <br />
                                    <p className="text-justify" style={{color:`#0C2340`}}>
                                    Nous sommes une société de destruction et recyclage de votre véhicule (camion, voiture, moto, scooter, autocar...),
                                    situé à l'Île-de-France.<br />
                                    On intervient gratuitement pour venir chercher vos véhivules non roulants <br/>
                                    ou accidentés grâce à notre dépanneuse.<br/>
                                    Besoin d'un epaviste ? Appelez nous au +33 69 58 32 98 7 et serons à votre <br/>
                                    service du lundi au samedi, de 10h à 18h.
                                    Pourquoi nous ? <br/>
                                    Le but de notre société est de traiter et recycler 
                                    les véhicules arrivant à fin de vie, afin de  de réintroduire leurs matériaux dans
                                    la production de nouveaux produits. Et par conséquence, nous protégeons notre planète 
                                    grâce à un écosystème 🌿.
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