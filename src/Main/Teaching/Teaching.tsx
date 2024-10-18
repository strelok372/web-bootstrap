import { Col, Row, Image, Card, Button, Form, Accordion, ListGroup, Container, Table } from "react-bootstrap";

function CourseProgram() {
    return (<Row className="mb-4">
        <Col>
            <Card className="shadow-sm">
                <Card.Body>
                    <Card.Title className="text-primary">Программа обучения</Card.Title>
                    <Accordion>
                        <Accordion.Item eventKey="0">
                            <Accordion.Header>Тема 1: Основы программирования</Accordion.Header>
                            <Accordion.Body>
                                <ListGroup variant="flush">
                                    <ListGroup.Item>Введение в программирование</ListGroup.Item>
                                    <ListGroup.Item>Основные конструкции</ListGroup.Item>
                                </ListGroup>
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="1">
                            <Accordion.Header>Тема 2: Веб-разработка</Accordion.Header>
                            <Accordion.Body>
                                <ListGroup variant="flush">
                                    <ListGroup.Item>HTML и CSS</ListGroup.Item>
                                    <ListGroup.Item>Основы JavaScript</ListGroup.Item>
                                </ListGroup>
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                </Card.Body>
            </Card>
        </Col>
    </Row>);
}

function Header() {
    return (<p>Несколько пиксельных человечков с подписью 1 lvl стоят и смотрят на пиксельного рыцаря в крутых доспехах
        доспехах с подписью 80 lvl, который вытянул руки и над ними парит здоровая книжка внутри пузыря а на
        книге C# написано</p>);
}

function AboutTeacher() {
    return (// <div style={{minHeight:300}}>
        <Row className="mb-4">
            <Col>
                <Card className="shadow-sm">
                    <Card.Body>
                        <Card.Title className="text-primary">Обо мне</Card.Title>
                        <Row>
                            <Col md={4} className="text-center">
                                <Image src="/static/media/img.png" roundedCircle className="mb-3"/>
                            </Col>
                            <Col md={8}>
                                <Card.Text>
                                    Я стал программистом с нуля сам. Начал с изучения онлайн-курсов и самостоятельно
                                    практиковался, решая различные задачи и создавая небольшие проекты. Постепенно,
                                    углубляя свои знания, я начал работать над более сложными проектами и в итоге стал
                                    профессиональным программистом.
                                </Card.Text>
                            </Col>
                        </Row>
                    </Card.Body>
                </Card>
            </Col>
            {/*<Row style={{ maxHeight: 400 }}>*/}
            {/*    <Col className="black-white text-center align-content-center">О преподавателе</Col>*/}
            {/*    <Col>*/}
            {/*        <Image className="" src="http://via.placeholder.com/640x360"></Image>*/}
            {/*    </Col>*/}
            {/*</Row>*/}
        </Row>
        // </div>
    );
}

function Price() {
    return (<Row className="mb-4">
        <Col>
            <Card className="shadow-sm">
                <Card.Body>
                    <Card.Title className="text-primary">Цена обучения</Card.Title>
                    <Card.Text className="h5">
                        Я беру за час обучения <strong>1500 рублей</strong>.
                    </Card.Text>
                    <Card.Text className="h6">
                        За первое занятие <span className="text-success">скидка 300 рублей</span>.
                    </Card.Text>
                </Card.Body>
            </Card>
        </Col>
    </Row>);
}

function Price2() {
    return (<div>
        <Row className="row-cols-1 row-cols-md-3 mb-3 text-center">
            <Col>
                <Card className="mb-4 rounded-3 shadow-sm">
                    <Card.Header className="py-3">
                        <h4 className="my-0 fw-normal">Free</h4>
                    </Card.Header>
                    <Card.Body>
                        <h1 className="card-title pricing-card-title">1200<small
                            className="text-body-secondary fw-light">/час</small></h1>
                        <ul className="list-unstyled mt-3 mb-4">
                            <li>10 users included</li>
                            <li>2 GB of storage</li>
                            <li>Email support</li>
                            <li>Help center access</li>
                        </ul>
                        <Button variant="outline-primary" size="lg" className="w-100">Sign up for free</Button>
                    </Card.Body>
                </Card>
            </Col>
            <Col>
                <Card className="mb-4 rounded-3 shadow-sm">
                    <Card.Header className="py-3">
                        <h4 className="my-0 fw-normal">Pro</h4>
                    </Card.Header>
                    <Card.Body>
                        <h1 className="card-title pricing-card-title">1500<small
                            className="text-body-secondary fw-light">/час</small></h1>
                        <ul className="list-unstyled mt-3 mb-4">
                            <li>20 users included</li>
                            <li>10 GB of storage</li>
                            <li>Priority email support</li>
                            <li>Help center access</li>
                        </ul>
                        <Button variant="primary" size="lg" className="w-100">Get started</Button>
                    </Card.Body>
                </Card>
            </Col>
            <Col>
                <Card className="mb-4 rounded-3 shadow-sm border-primary">
                    <Card.Header className="py-3 text-bg-primary border-primary">
                        <h4 className="my-0 fw-normal">Enterprise</h4>
                    </Card.Header>
                    <Card.Body>
                        <h1 className="card-title pricing-card-title">2500<small
                            className="text-body-secondary fw-light">/час</small></h1>
                        <ul className="list-unstyled mt-3 mb-4">
                            <li>30 users included</li>
                            <li>15 GB of storage</li>
                            <li>Phone and email support</li>
                            <li>Help center access</li>
                        </ul>
                        <Button variant="primary" size="lg" className="w-100">Contact us</Button>
                    </Card.Body>
                </Card>
            </Col>
        </Row>

        <h2 className="display-6 text-center mb-4">Сравните планы обучения</h2>

        <div className="bg-white p-4 mb-3 rounded-2">
            <div className="table-responsive">
                <Table className="text-center">
                    <thead>
                    <tr>
                        <th style={{ width: '34%' }}></th>
                        <th style={{ width: '22%' }}>Базовый</th>
                        <th style={{ width: '22%' }}>Комплексный</th>
                        <th style={{ width: '22%' }}>Менторство</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <th scope="row" className="text-start">Public</th>
                        <td><CheckIcon width={24} height={24}/></td>
                        <td><CheckIcon width={24} height={24}/></td>
                        <td><CheckIcon width={24} height={24}/></td>
                    </tr>
                    <tr>
                        <th scope="row" className="text-start">Private</th>
                        <td></td>
                        <td><CheckIcon width={24} height={24}/></td>
                        <td><CheckIcon width={24} height={24}/></td>
                    </tr>
                    </tbody>
                    <tbody>
                    <tr>
                        <th scope="row" className="text-start">Permissions</th>
                        <td><CheckIcon width={24} height={24}/></td>
                        <td><CheckIcon width={24} height={24}/></td>
                        <td><CheckIcon width={24} height={24}/></td>
                    </tr>
                    <tr>
                        <th scope="row" className="text-start">Sharing</th>
                        <td></td>
                        <td><CheckIcon width={24} height={24}/></td>
                        <td><CheckIcon width={24} height={24}/></td>
                    </tr>
                    <tr>
                        <th scope="row" className="text-start">Unlimited members</th>
                        <td></td>
                        <td><CheckIcon width={24} height={24}/></td>
                        <td><CheckIcon width={24} height={24}/></td>
                    </tr>
                    <tr>
                        <th scope="row" className="text-start">Extra security</th>
                        <td></td>
                        <td></td>
                        <td><CheckIcon width={24} height={24}/></td>
                    </tr>
                    </tbody>
                </Table>
            </div>
        </div>
    </div>);
}

function ContactUs() {
    return null;
}

function Vote() {
    return (<Row className="mb-4">
        <Col>
            <Card className="shadow-sm">
                <Card.Body>
                    <Card.Title className="text-primary">Голосование</Card.Title>
                    <Form>
                        <Form.Group controlId="question1" className="mb-3">
                            <Form.Label>Вопрос 1: Какой ваш уровень программирования?</Form.Label>
                            <Form.Select>
                                <option>Начинающий</option>
                                <option>Средний</option>
                                <option>Продвинутый</option>
                            </Form.Select>
                        </Form.Group>
                        <Form.Group controlId="question2" className="mb-3">
                            <Form.Label>Вопрос 2: Какие технологии вам интересны?</Form.Label>
                            <Form.Control type="text" placeholder="Введите технологии"/>
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Отправить и получить скидку 500 рублей
                        </Button>
                    </Form>
                </Card.Body>
            </Card>
        </Col>
    </Row>)
}

function Diploma() {
    return (<Row className="mb-4">
        <Col>
            <Card className="shadow-sm">
                <Card.Body>
                    <Card.Title className="text-primary">Диплом об окончании обучения</Card.Title>
                    <Card.Text>
                        По окончании курса вы получите диплом, подтверждающий ваше обучение.
                    </Card.Text>
                    <Image src="https://via.placeholder.com/300x200" rounded className="d-block mx-auto"/>
                </Card.Body>
            </Card>
        </Col>
    </Row>);
}

function CheckIcon(props: { width: number, height: number }) {
    return (<td style={{
        alignContent: "center",
        display: "flex",
        placeContent: "center"
    }}>
        <i className="bi-check">
            {/*<use xlink:href="#check"></use>*/}
        </i>
    </td>);
}

export default function Teaching() {
    return (<Container>
        <Header></Header>
        <CourseProgram></CourseProgram>
        <AboutTeacher></AboutTeacher>
        {/*<Price></Price>*/}
        <Price2></Price2>
        <Vote></Vote>
        <ContactUs></ContactUs>
        <Diploma></Diploma>


    </Container>)
}