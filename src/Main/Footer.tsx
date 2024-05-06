import {Container, Nav, Navbar, NavDropdown} from "react-bootstrap";
import "./Footer.css"

function Footer() {
    return (
        <footer className="mt-3 text-center text-black fixed-bottom bg-body-tertiary col-md-8 w-100">
            {/*<div className="container p-4"></div>*/}
            <div className="text-center p-3">
                © 2023 Copyright:
                <a className="text-black" href="src/Main/Footer">ITeam.com</a>
            </div>
        </footer>
    );
}

export default Footer;