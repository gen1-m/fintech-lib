import React from 'react';
import './Footer.css';

function Footer() {
    return (
        <footer>
            <div className = 'content'>
                {/* <div className = 'mails'> */}
                    <ul style={{ listStyleType: 'none', textAlign: 'center', padding: 0 }}>
                        <li><a href="https://www.ibcms.de/contact">Contact us</a><a> </a>
                            ©-All rights are reserved
                        </li>
                    </ul>
                {/* </div> */}
            </div>
        </footer>
    );
}

export default Footer;