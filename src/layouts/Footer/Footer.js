import React, { Component } from 'react';


class Footer extends Component{
    render = ()=> {
        return(
            <div style={{backgroundColor:"#191919"}}>
                <div className="row condition pb-2 pt-3 pb-3 px-0" style={{width:"100%"}}>
                    <div className="col-md-12 text-center px-0">
                        <div>
                            <div className="twelve columns">
                                <ul className="copyright">
                                    <h2 style={{color:`#32CD32`}}>FDCR'S RECYCLAGE</h2>   
                                </ul>
                                <ul className="copyright">
                                    <p style={{color:`#32CD32`}}>📞 +33 69 58 32 98 7</p>   
                                </ul>
                                <ul className="copyright">
                                    <p style={{"color" : "white"}}>11 Rue du Dr Fourniols, 95420 Magny-en-Vexin</p>   
                                </ul>
                                <ul className="copyright">
                                    <p style={{"color" : "white"}}>Tout droit réservé © 2021</p>   
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    };
}

export default Footer;