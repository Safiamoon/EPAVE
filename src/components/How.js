import React from 'react';
import appointment from '../images/phone.jpg'
import retrait from '../images/5.jpg'
import greenRecycle from '../images/green.jpg'



function How () {

    return (
        <>
        <section id="how" className="pt-5 pb-5" style={{backgroundColor: "#228B22", width:"100%"}}> 
            <div className="card-deck" style={{marginLeft:"-2px", marginRight:"-2px"}}>
                <div className="card">
                    <img src={appointment} className="card-img-top" alt="..." />
                    <div className="card-body">
                    <h5 className="card-title font-weight-bold">Etape 1 : Prendre RDV</h5>
                    <p className="card-text">Sur le site, vous pouvez prendre rendez-vous avec un épaviste agréé. Une prise de rendez-vous simple et rapide. Votre demande de prise en charge en quelques clics via notre formulaire en ligne, ou en quelques secondes via un appel téléphonique.</p>
                    </div>
                </div>
                <div className="card">
                    <img src={retrait} className="card-img-top" alt="..." />
                    <div className="card-body">
                    <h5 className="card-title font-weight-bold">Etape 2: Retrait</h5>
                    <p className="card-text">Le retrait se fait à l’adresse indiquée lors de la demande de prise en charge (dans un délai de 48h ou sur date à votre convenance). Le jour de l’enlèvement, notre professionnel agréé vérifiera avec vous les papiers de cession (carte grise, certificat de non gage, certificat de destruction…). Nous vous débarrassons de votre véhicule épave et la déposons dans un centre agréé VHU en vu de sa destruction.</p>
                    </div>
                </div>
                <div className="card">
                    <img src={greenRecycle} className="card-img-top" alt="..." />
                    <div className="card-body">
                    <h5 className="card-title font-weight-bold">Etape 3: Recyclage</h5>
                    <p className="card-text">Votre voiture épave ou véhicule hors d’usage est confié à l’une de nos casses agréés VHU ou il sera détruit et recyclé. Les centres VHU agréés ont l’obligation d’effectuer la dépollution du véhicule (retrait des huiles usagées, liquide de refroidissement, carburant, pneus, filtres, batteries, notamment.) et le démontage de certaines pièces encore en état en vue de leur réutilisation.</p>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}

export default How;