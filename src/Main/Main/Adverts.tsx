import {Accordion, Carousel, Image} from "react-bootstrap";
import logo from "../../legacy/logo.svg";
import consult from "../../img/consult.jpg"
import working from "./img/working.jpg"
import teaching2 from "../../img/teaching2.jpg"
import "./Adverts.css"
import React from "react";

function Adverts() {
    return (
        <Carousel>
            <Carousel.Item className="crop-block">
                <Image src="consult.jpg"/>
                <Carousel.Caption className="caption">
                    <h3>Консультируем </h3>
                    <p>Делимся экспертизой по ежедневным, рабочим вопросам.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item className="crop-block">
                <Image src="teaching2.jpg" />
                <Carousel.Caption className="caption">
                    <h3>Обучаем </h3>
                    <p>С нуля и на любом уровне.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item className="crop-block">
                <Image src="working.jpeg" />
                <Carousel.Caption className="caption">
                    <h3>Исполняем</h3>
                    <p>
                        Выполняем ваши заказы, проекты под ключ.
                    </p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
}

export default Adverts;