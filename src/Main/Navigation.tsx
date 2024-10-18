import { Button, Container, Modal, Nav, Navbar, NavDropdown, Form } from "react-bootstrap";
import "./Navigation.css"
import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css'
import { useState } from "react";

function Navigation() {
    const [signed, setSigned] = useState(false)
    const [show, setShow] = useState(false);

    const login = () => {
        setShow(true);
    };

    const logout = () => {
        setSigned(false);
    }

    function handleClose() {
        setShow(false);
        setSigned(true);
    }

    function handleHide() {

    }

    function handleLogin() {
        setShow(false);
        setSigned(true);
    }

    return (<Navbar expand="lg" className="bg-body-tertiary ">
        <Container>
            <Navbar>
                <Container>
                    <Navbar.Brand href="#home">
                        <div style={{
                            borderStyle: "dotted",
                            padding: "5px",
                            borderRadius: "5px"
                        }}>
                            iTeam
                        </div>
                    </Navbar.Brand>
                </Container>
            </Navbar>
            <Navbar.Toggle aria-controls="basic-navbar-nav" className={"justify-content-end"}/>
            <Navbar.Collapse id="basic-navbar-nav" className={""}>
                <Nav className="links justify-content-center" //defaultActiveKey={"home"}
                >
                    <Nav.Link href="home" defaultValue={'true'}>Главная</Nav.Link>
                    <Nav.Link href="teaching">Обучение</Nav.Link>
                    <Nav.Link href="consult">Консультации</Nav.Link>
                    <Nav.Link href="develop">Разработка</Nav.Link>
                    <Nav.Link href="mentoring">Менторство</Nav.Link>
                    <Nav.Link href="students">Помощь в учёбе</Nav.Link>
                </Nav>
                <NavDropdown title={<i className={signed ? 'bi-person-fill' : 'bi-person'}></i>}>
                    {signed ? <div>
                        <NavDropdown.Item href="#profile">Мой профиль</NavDropdown.Item>
                        <NavDropdown.Item href="#profile" onClick={logout}>Выйти</NavDropdown.Item>
                    </div> : <NavDropdown.Item href="#profile" onClick={login}>Войти</NavDropdown.Item>

                    }
                </NavDropdown>
                <Navbar.Text className={"text-center"}>
                    <Container className="fa-solid">
                        +7(904)042-05-15<br/>tg:@vdozorov
                    </Container>
                </Navbar.Text>
            </Navbar.Collapse>

        </Container>
        <Modal show={show} onHide={handleHide}>
            <Modal.Header closeButton>
                <Modal.Title>Modal heading</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Электронная почта</Form.Label>
                        <Form.Control type="email" placeholder="" />
                        {/*<Form.Text className="text-muted">*/}
                        {/*    We'll never share your email with anyone else.*/}
                        {/*</Form.Text>*/}
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Пароль</Form.Label>
                        <Form.Control type="password" placeholder="" />
                    </Form.Group>
                    {/*<Form.Group className="mb-3" controlId="formBasicCheckbox">*/}
                    {/*    <Form.Check type="checkbox" label="Check me out" />*/}
                    {/*</Form.Group>*/}
                    <Button variant="primary" type="submit" onClick={handleLogin}>
                        Войти
                    </Button>
                    <Button variant="secondary" onClick={handleClose} className={"mx-2"}>
                        Close
                    </Button>
                </Form>
            </Modal.Body>
            {/*<Modal.Footer>*/}
            {/*    <Button variant="secondary" onClick={handleClose}>*/}
            {/*        Close*/}
            {/*    </Button>*/}
            {/*    <Button variant="primary" className={"button"} onClick={handleClose}>*/}
            {/*        Войти*/}
            {/*    </Button>*/}
            {/*</Modal.Footer>*/}
        </Modal>
    </Navbar>);
}

export default Navigation;