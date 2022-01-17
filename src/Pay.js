import React from 'react';
import ExternalLink from './common/ExternalLink';
import cashapp from "./imgs/cashapp-logo.png";
import venmo from "./imgs/venmo-logo.png";
import zelle from "./imgs/zelle-logo.png";
import "./Pay.scss";

function Pay() {
    return (
        <div className="pay">
            <h3>Payment Methods</h3>

            <div className="pay-methods">
                <div className='pay-methods-item button'>
                    <img src={cashapp} alt=""/>
                    <ExternalLink src="https://cash.app/$shQwtim3?qr=1" text="$shQwtim3" />
                </div>

                <div className='pay-methods-item button'>
                    <img src={venmo} alt=""/>
                    <ExternalLink src="https://venmo.com/u/Cannacornerstore" text="@Cannacornerstore" />
                </div>

                <div className='pay-methods-item'>
                    <img src={zelle} alt=""/>
                    <p>347-971-1216</p>
                </div>    
            </div>        
        </div>
    );
}

export default Pay;