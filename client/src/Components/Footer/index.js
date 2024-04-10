import React from 'react';
import { Link } from 'react-router-dom'
import '../index.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                    
                <div className="footer-section-links">
                    <h2 className="footer-heading">Quick Links</h2>
                    <ul className='links'>
                        <Link className='link' to="/">Home</Link>
                        <Link className='link' to="/top-rated">Top Rated</Link>
                        <Link className='link' to="/Upcoming">Upcoming</Link>
                    </ul>
                </div>
                <div className="footer-section-links">
                    <h2 className="footer-heading">Social Links</h2>
                    <div className="social-icons">
                        <a className='link' href="https://github.com/Bharath136" target="_blank" rel="noopener noreferrer"><i className="fab fa-github"></i></a>
                        <a className='link' href="https://www.linkedin.com/in/bharath-kumar-kurva/" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin"></i></a>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; {new Date().getFullYear()} MovieDB. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
