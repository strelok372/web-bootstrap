import {Container, Nav, Navbar, NavDropdown} from "react-bootstrap";
import "./Navigation.css"

function Navigation() {
    return (
        <Navbar expand="lg" className="bg-body-tertiary ">
            <Container>
                <Navbar>
                    <Container>
                        <Navbar.Brand href="#home">iTeam</Navbar.Brand>
                    </Container>
                </Navbar>
                <Navbar.Toggle aria-controls="basic-navbar-nav" className={"justify-content-end"}/>
                <Navbar.Collapse id="basic-navbar-nav" className={""}>
                    {/*<Nav className="me-auto">*/}
                    <Nav className="links justify-content-center">
                        <Nav.Link href="#home">Главная</Nav.Link>
                        <Nav.Link href="#teaching">Обучение</Nav.Link>
                        <Nav.Link href="#consult">Консультации</Nav.Link>
                        <Nav.Link href="#develop">Разработка</Nav.Link>
                        <Nav.Link href="#mentoring">Менторство</Nav.Link>
                        <Nav.Link href="#">Помощь в учёбе</Nav.Link>
                    </Nav>
                    <Navbar.Text className={""}>
                        <Container className={"info"}>
                            +7(904)042-05-15<br/>tg:@vdozorov
                        </Container>
                    </Navbar.Text>
                </Navbar.Collapse>

            </Container>
        </Navbar>
    );
}

export default Navigation;