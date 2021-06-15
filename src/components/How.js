import React from 'react';
import appointment from '../images/phone.jpg'
import retrait from '../images/5.jpg'
import greenRecycle from '../images/green.jpg'
import Zoom from 'react-reveal/Zoom';


function How () {

    return (
        <section id="how" className="pt-5 pb-5" style={{backgroundColor: "grey", width:"100%"}}> 
                <h1 className="display-4 font-weight-bold text-center pb-5" style={{color: "#32CD32"}}>COMMENT ÇA MARCHE</h1>
            <div className="card-deck" style={{marginLeft:"-2px", marginRight:"-2px"}}>
                <div className="card">
                    <img src={appointment} className="card-img-top" alt="..." />
                    <div className="card-body">
                    <h3 className="card-title font-weight-bold text-center"> Etape 1 : Prendre RDV</h3>
                    <p className="card-text pt-3" style={{fontFamily:"Arial, sans-serif"}}>Vous pouvez prendre rendez-vous avec un épaviste agréé, en appelant le numéro affiché sur la page.<br/>
                    </p>
                    </div>
                </div>
                <div className="card">
                    <img src={retrait} className="card-img-top" alt="..." />
                    <div className="card-body">
                    <h3 className="card-title font-weight-bold pt-0 text-center" >Etape 2: Retrait</h3>
                    <p className="card-text pt-3" style={{fontFamily:"Arial, sans-serif"}}>Le retrait se fait à l’adresse indiquée lors de la demande de prise en charge (dans un délai de 48h ou sur date à votre convenance).<br/>
                    Le jour de l’enlèvement, notre professionnel agréé vérifiera avec vous les papiers de cession (carte grise, certificat de non gage, certificat de destruction…). <br/>
                    Nous vous débarrassons de votre véhicule épave et la déposons dans un centre agréé VHU en vu de sa destruction.</p>
                    </div>
                </div>
                <div className="card">
                    <img src={greenRecycle} className="card-img-top" alt="..." />
                    <div className="card-body">
                    <h3 className="card-title font-weight-bold text-center" >Etape 3: Recyclage</h3>
                    <p className="card-text pt-3" style={{fontFamily:"Arial, sans-serif"}}>Votre voiture épave ou véhicule hors d’usage est confié à l’une de nos casses où il sera détruit et recyclé. <br/>
                    Les centres VHU agréés ont l’obligation d’effectuer la dépollution du véhicule (retrait des huiles usagées, liquide de refroidissement, carburant, pneus, filtres, batteries, notamment.) 
                    et le démontage de certaines pièces encore en état en vue de leur réutilisation.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default How;