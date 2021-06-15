import React from "react";
import './Home.css';
import Zoom from 'react-reveal/Zoom';
import landingImage from '../../images/carRecycle2.jpg'

function Home() {
    
    return (
        <>
        <section id="home"> 
            <div className="row p-0 m-0" style={{backgroundImage:`linear-gradient(rgba(0, 0, 0, 0.40), rgba(0, 0, 0, 0.40)),url('${landingImage}')`, backgroundRepeat:"no-repeat", minHeight:"95vh", width:"100%"}}>
                <div className="col-md-12 d-flex flex-column justify-content-center align-items-center text-white font-weight-bold" style={{width:"100%"}}>
                    <Zoom>
                        <h1 className="display-3 pt-4 text-center justify-content-center align-items-center font-weight-bold" style={{color: "#32CD32"}}>ENLÈVEMENT ÉPAVE 100% GRATUIT</h1>
                        <h1 className="display-4 text-center justify-content-center align-items-center font-weight-bold text-white" >ÉPAVISTE AGRÉÉ CENTRE VHU</h1>
                        <h3 className="btn-group d-inline mt-5 font-weight-bold text-white">
                        Du lundi au samedi de 10h a 18h
                        </h3>
                        <h3 className="btn-group d-inline mt-2 font-weight-bold" style={{color: "#32CD32"}}>
                        📞 +33 69 58 32 98 7 
                        </h3>
                        <h3 className="btn-group d-inline mt-2 font-weight-bold">
                        📍 Île-de-France
                        </h3>
                    </Zoom>
                </div>
            </div>
        </section>
        </>
    );
}

export default Home;
