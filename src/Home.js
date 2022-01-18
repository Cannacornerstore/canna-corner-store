import React from 'react';
import ExternalLink from './common/ExternalLink';
import Menu from "./Menu";
import delivery_map from "./imgs/delivery-map.png";
import "./Home.scss";

function Home() {
    return (
        <div className="home">
            <div className="home-note">
                Like what you see? Check out our <ExternalLink src="https://www.cannacornerstore.com/" text="official site" />
            </div>

            <div className="home-note">
                Delivery info below
            </div>

            <Menu />

            <div className="home-delivery">
                <h3>Delivery Prices</h3>
                <img src={delivery_map} alt="delivery map outline" />
            </div>
        </div>
    );
}

export default Home;