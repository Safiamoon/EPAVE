import React from 'react';
import emailjs from 'emailjs-com';
import { Container, Col, Row, Image } from "react-bootstrap";

export default function ContactUs () {
    return(
        <section id="contact" style={{backgroundColor: "#228B22"}} >
        <Container className="pt-5 pb-5">
            <Row>
            {/* <Col className="col-6 col-md-4 align-self-center mx-auto">
                <Image  src="" alt="pic" width="100%" />
            </Col> */}
            <Col className="align-self-center">
            <h1 className="display-5 font-weight-bold pb-4" style={{color: "white"}}>Contactez-nous</h1>
                <form>
                    <div className="form-group">
                        <label for="name" className="text-white">Nom</label>
                        <input type="text" className="form-control" id="name" placeholder="Nom..." name="name" />
                    </div>
                    <div className="form-group">
                        <label for="surname" className="text-white">Prénom</label>
                        <input type="text" className="form-control" id="surname" placeholder="Prénom..." name="surname" />
                    </div>
                    <div className="form-group">
                        <label for="email" className="text-white">Email</label>
                        <input type="email" className="form-control" id="email" placeholder="nom@example.com" name="email" />
                    </div>
                    <div className="form-group">
                        <label for="message" className="text-white">Message</label>
                        <textarea className="form-control" id="message" placeholder="Message..." name="message"></textarea>
                    </div>
                     <button type="button" class="btn btn-success">Envoyer</button>
                </form>
            </Col>
            </Row>
        </Container>
        </section>
    )
} 