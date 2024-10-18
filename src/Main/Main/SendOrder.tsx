import {Accordion, Button, Carousel, Container, Form, Image} from "react-bootstrap";
import logo from "../../legacy/logo.svg";
import consult from "../../img/consult.jpg"
import working from "./img/working.jpg"
import teaching2 from "../../img/teaching2.jpg"
import "./SendOrder.css"
import React from "react";

function SendOrder() {
    return (
        <Container className="bg-body-tertiary px-5 margin py-4 rounded-2 col-md-8">
            <h4 className={"pb-3 text-center"} >Здесь вы можете оставить заявку</h4>
            <Form>
                <Form.Group className="mb-3" controlId="formWorkType">
                    <Form.Select aria-label="Default select example" placeholder="sasd">
                        <option>Какую работу надо выполнить?</option>
                        <option value="1">Обучение</option>
                        <option value="2">Рабочая консультация</option>
                        <option value="3">Разработка</option>
                        <option value="3">Менторство</option>
                        <option value="3">Помощь в учёбе</option>
                    </Form.Select>
                </Form.Group>

                <Form.Group className={" d-flex flex-wrap"} controlId="formFeedbackType">
                    <Form.Select className={"me-3 mb-3 w-auto"} aria-label="Default select example">
                        <option>Как с вами связаться?</option>
                        <option value="1">По телефону</option>
                        <option value="2">Telegram</option>
                        <option value="3">What's Up</option>
                        <option value="4">Viber</option>
                        <option value="5">Электронная почта</option>
                    </Form.Select>
                    <Form.Control className={" mb-3 w-auto flex-auto "} type="text" placeholder="Ваши контактные данные..."/>
                </Form.Group>

                {/*<Form.Group className="mb-3" controlId="formBasicEmail">*/}
                {/*    <Form.Label>Email address</Form.Label>*/}
                {/*    <Form.Control type="email" placeholder="Enter email"/>*/}
                {/*    <Form.Text className="text-muted">*/}
                {/*        We'll never share your email with anyone else.*/}
                {/*    </Form.Text>*/}
                {/*</Form.Group>*/}

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Расскажите чем мы можем Вам помочь:</Form.Label>
                    {/*<Form.Control type="textarea" className={""} placeholder="Описание задачи, ваша потребность и т.д."/>*/}
                    <Form.Control as="textarea" rows={3} />
                </Form.Group>

                {/*<Form.Group className="mb-3" controlId="formBasicCheckbox">*/}
                {/*    <Form.Check type="checkbox" label="Check me out"/>*/}
                {/*</Form.Group>*/}
                <div className={"text-center"}>
                    <Button variant="outline-dark" type="submit">
                        Отправить!
                    </Button>
                </div>
            </Form>
        </Container>
    );
}

export default SendOrder;