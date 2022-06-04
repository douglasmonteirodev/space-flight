import React from "react";
import "./Footer.css";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const Footer = () => {
    return (
        <footer>
            <div className='footer--socials'>
                <a
                    href='https://www.facebook.com/douglas.monteiro.5220/'
                    rel='noreferrer'
                    target='_blank'
                >
                    <FacebookIcon id='facebook--icon' />
                </a>
                <a
                    href='https://www.instagram.com/douglasm.js/'
                    rel='noreferrer'
                    target='_blank'
                >
                    <InstagramIcon id='instagram--icon' />
                </a>
                <a
                    href='https://www.linkedin.com/in/douglasmonteiro1/'
                    rel='noreferrer'
                    target='_blank'
                >
                    <LinkedInIcon id='linkedin--icon' />
                </a>
            </div>
            <h3> &copy; Douglas Monteiro</h3>
        </footer>
    );
};

export default Footer;
