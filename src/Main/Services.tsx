import {Accordion, Card} from "react-bootstrap";
import ListGroup from 'react-bootstrap/ListGroup';
import "./Services.css";

function Services() {
    return (
        <Accordion defaultActiveKey="0" className={"pt-3 pb-3 body-grey"}>
            <Accordion.Item eventKey="0">
                <Accordion.Header>Обучение C#</Accordion.Header>
                <Accordion.Body>
                    - Проводим курсы и индивидуальные занятия по таким направлениям:<br/>
                    - C#<br/>
                    - Front-end
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
                <Accordion.Header>Исполняем ваши проекты</Accordion.Header>
                <Accordion.Body>
                    {/*<Card>*/}
                    {/*    <ListGroup variant="flush">*/}
                    {/*        <ListGroup.Item> - Собираем ваши пожелания, требования, помогаем реализовать концепт вашей*/}
                    {/*            задумки</ListGroup.Item>*/}
                    {/*        <ListGroup.Item>Оцениваем плюсы и минусы текущих технологий на рынке для вашего решения,*/}
                    {/*            находим баланс между долговечностью решения и скоростью разработки</ListGroup.Item>*/}
                    {/*        <ListGroup.Item>Vestibulum at eros</ListGroup.Item>*/}
                    {/*    </ListGroup>*/}
                    {/*</Card>*/}
                    <p>
                        Помогаем на всех этапах исполнения ваших задумок и желаний:<br/>
                        - Собираем ваши пожелания, требования, помогаем реализовать концепт вашей задумки<br/>
                        - Оцениваем плюсы и минусы текущих технологий на рынке для вашего решения,
                        находим баланс между долговечностью решения и скоростью разработки<br/>
                        - Даём оценку нашей работы над проектом и прозрачно информируем вас о текущей стадии работы<br/>
                        - Помогаем в запуске приложения, разборе кода и деплое<br/>
                        - Бонус: Вы всегда сможете нам обратиться со скидкой если потребуются доп. изменения в будущем
                    </p>
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
                <Accordion.Header>Оказываем профессиональные консультации</Accordion.Header>
                <Accordion.Body>
                    Наши специалисты всегда готовы поделиться опытом, оказать поддержку в процессе разработки,
                    провести ревью кода, дать профессиональные предложения
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="3">
                <Accordion.Header>Выполняем учебные работы</Accordion.Header>
                <Accordion.Body>
                    Поможем выполнить вашу контрольную, курсовую, объясним ход выполнения и дадим подсказки
                    для самостоятельной работы
                </Accordion.Body>
            </Accordion.Item>
        </Accordion>
    );
}

export default Services;