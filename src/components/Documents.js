import React from 'react';
import appointment from '../images/phone.jpg'
import retrait from '../images/5.jpg'
import greenRecycle from '../images/green.jpg'
import Zoom from 'react-reveal/Zoom';


function Documents () {

    return (
        <section id="documents" className="pt-5 pb-5" style={{width:"100%"}}> 
            <h1 className="display-4 font-weight-bold text-center pb-5" style={{color: "#228B22"}}>DOCUMENTS À FOURNIR</h1>
            <div class="row" style={{marginLeft:"-2px", marginRight:"-2px"}}>
            <div class="col-sm-4">
                <div class="card">
                    <div class="card-body">
                        <h3 class="card-title text-center font-weight-bold pt-2" style={{color: "#808080"}}>La carte grise du véhicule</h3>
                        <p class="card-text pt-3">La carte grise du véhicule signée par le propriétaire le jour de l’enlèvement du véhicule hors d’usage.<br/>
                         La carte grise devra également être rayée en indiquant la date et l'heure de l’enlèvement.</p>
                    </div>
                </div>
            </div>
            <div class="col-sm-4">
                <div class="card">
                    <div class="card-body">
                        <h3 class="card-title text-center font-weight-bold pt-2" style={{color: "#808080"}}>Un certificat de non gage</h3>
                        <p class="card-text pt-3">Le certificat de non gage que vous pouvez demander en moins de 5 minutes sur le site du ministère de l’intérieur (lien en dessous).<br/>
                        Si vous n'avez pas possibilité d'accédez à une connexion internet ou à un poste informatique,
                        notre équipe sera ravie de vous procurer un certificat de non gage lors de la prise du rendez-vous.</p>
                        <a href="https://siv.interieur.gouv.fr/map-usg-ui/do/accueil_certificat" className="btn btn-success">Visiter le lien</a>
                    </div>
                </div>
            </div>
            <div class="col-sm-4">
                <div class="card">
                    <div class="card-body">
                        <h3 class="card-title text-center font-weight-bold pt-2" style={{color: "#808080"}}>Une pièce d’identité valide</h3>
                        <p class="card-text pt-3">
                        - Permis de conduire<br/>
                        - Carte d’identité <br/>
                        - Passeport</p><br/>
                    </div>
                </div>
            </div>
            </div>
        </section>
    )
}

export default Documents;