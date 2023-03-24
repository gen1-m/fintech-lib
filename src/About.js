import "./About.css";
import { ibcmLogoWhite } from ".";
import Footer from './Footer.js'

function About() {
    return (
        /*------------------------ Navigation Bar ------------------------*/
        <div className="div">
            <ul class="navbar_cv-list">
                <li class="navbar_cv-item">
                    <a href="/home"><img src = {ibcmLogoWhite} alt = "IBCM"/>
                    </a>
                </li>
                <li class="navbar_cv-item" id="current_tab">
                    <a href="/dashboard">
                        User
                    </a>
                </li>
                <li class="navbar_cv-item">
                    <a href="/about">
                        About
                    </a>
                </li>
                <li class="navbar_cv-item">
                    <a href="/home">
                        Home
                    </a>
                </li>
            </ul>

            {/* ---------------------- Body Text ---------------------- */}
            <div>
                <h1 className="header">
                    What is IBCM?
                </h1>
                <p className="aboutText">
                The world of investment banking and capital markets is multi-faceted in nature 
                and requires meticulous preparation to break into. That's why the IB&CM was created. 
                As the only financial society on the campus of Jacobs University Bremen, 
                we try to promote the highest standards of ethics, education, and professional 
                excellence to students and professionals.We offer our members insights into the 
                recruitment process in the financial sector, access to a broad network of students, 
                recruiters, and employees, and access to our events and activities. With our events, 
                we provide preparation for future career choices, behavior, and soft skills in the 
                financial sector. In one of our 3 projects, our members can gain a deeper understanding 
                of a more specific topic of their interest. Currently, our members can choose between 
                the student managed investment fund, the pro-bono consulting, and the wealth-management project.
                Our vision is to create a platform where students can connect, develop, and create valuable 
                contacts between themselves and with firms for their coming careers. We aim to allow our members 
                to visit some of the most prominent financial institutions in the world within Europe. 
                Also, we have a solid foundation with the Alumni Association.
                </p>
            </div>

            <br/><br/><br/>
            
            {/* ----------------- Footer ------------------ */}
            <Footer/>
        </div>
    )
}

export default About;