import React, { Component } from 'react';
import { Container, Col, Row, Image } from "react-bootstrap";
import Fade from 'react-reveal/Fade';


class About extends Component{
    render = ()=> {
        return(
                <div style={{backgroundColor:"white"}}>
                    <section id="about" style={{backgroundColor:"white"}}>
                    <Fade left big>
                        <Container className="pt-5 pb-5">
                            <Row>
                                <Col className="col-6 col-md-4 align-self-center mx-auto">
                                    <Image  src={dev1} alt="pic" width="100%" />
                                </Col>
                                <Col className="col-12 col-md-8 align-self-center">
                                    <h1 className="display-5 font-weight-bold" style={{color:`#d83a3a`}}>QUI SOMMES-NOUS ?</h1>
                                    <br />
                                    <p className="text-justify" style={{color:`#0C2340`}}>
                                        Je m'appelle Safia et je suis développeuse web front-end. Je me suis reconverti 
                                        dans le métier de développeur après l'obtention de mon DUT en finance comptabilité et fiscalité.
                                        <br />Mon frère, ma soeur et mon mari sont développeurs et j'ai pu découvrir ce métier grâce à eux.
                                        J'ai pu voir qu'ils étaient passionnés par leur métier, donc je me suis lancé dans ce domaine comme je cherchais
                                        un métier permettant d'avoir une vie personnelle plus aboutie.
                                        Sans avoir de bases en programmation, j'ai démarré une formation House Of Code du Cnam.
                                        <br />Actuellement, titulaire d'un titre RNCP niveau bac+2 développeur web et 
                                        je ne cesse de me former en autodidacte afin d’être en constante évolution.
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