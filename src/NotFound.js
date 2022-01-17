import React from 'react';
import { Link } from 'react-router-dom';
import "./NotFound.scss";

function NotFound() {
    return (
        <div className="notfound">
            <h1>Oh no! 404 Page Not Found!</h1>
            <div className='notfound-text'>
                Sorry! Looks like you reached a nonexistent page. Nothing to see here. 
                However, there is lots to see on the other pages. Check out our menu 
                <Link to="/">here</Link>.
            </div>
        </div>
    );
}

export default NotFound;