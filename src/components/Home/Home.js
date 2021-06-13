import React from "react";
import './Home.css';
import Zoom from 'react-reveal/Zoom';
import landingImage from '../../images/5.jpg'

function Home() {
    
    return (
        <>
            <div className="row p-0 pt-3" style={{backgroundImage:`linear-gradient(rgba(0, 0, 0, 0.80), rgba(0, 0, 0, 0.80)),url('${landingImage}')`, backgroundRepeat:"no-repeat", minHeight:"92vh", width:"100%"}}>
                <div className="col-md-12 d-flex flex-column justify-content-center align-items-center text-white font-weight-bold" style={{width:"100%"}}>
                    <Zoom>
                    <h1 className="justify-content-center align-items-center font-weight-bold" style={{color: "#32CD32"}}>ÉPAVISTE CENTRE VHU AGRÉÉ 100% GRATUIT</h1>
                        <h3 className="btn-group d-inline mt-5 font-weight-bold text-white">
                        Du lundi au samedi de 10h a 18h
                        </h3>
                        <h3 className="btn-group d-inline mt-2" style={{color: "#32CD32"}}>
                        📞 +33 69 58 32 98 7 
                        </h3>
                        <h3 className="btn-group d-inline mt-2">
                        📍 Île-de-France
                        </h3>
                    </Zoom>
                </div>
            </div>
        </>
    );
}

export default Home;
