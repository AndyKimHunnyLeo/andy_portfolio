import React from 'react'
import './Footer.css'
import 'font-awesome/css/font-awesome.min.css';

function Footer() {
    return (
        <div className="footer_content">
            <div className="footer_contacts">
                {/* <button className="footer_git">git</button> */}
                <a href="https://github.com/PolarMushroom" className="footer_contact" target="_blank" rel="noopener noreferrer " >
                    <i className="fa fa-github fa-4x icons"></i>
                </a>
                <a href="https://www.linkedin.com/in/andy-kim-3595b618a/" className="footer_contact" target="_blank" rel="noopener noreferrer" >
                    <i className="fa fa-linkedin fa-4x icons"></i>
                </a>
                <a className="footer_contact" target="_blank" href="mailto:hyungseok.kim@outlook.com" rel="noopener noreferrer">
                    <i className="fa fa-envelope fa-4x"></i>
                </a>

                {/* <button className="footer_contact">
                   
                </button>
                <button className="footer_contact">
                    
                </button>
                <button className="footer_contact">
                   
                </button> */}


                {/* <div><i className="fa fa-github"></i></div> */}

            </div>

            <p className="footer_cpr">&copy; 2020 Andy Kim</p>
        </div>
    );

}

export default Footer;