import {Accordion, Card, Col, Container, Row} from "react-bootstrap";
import ListGroup from 'react-bootstrap/ListGroup';
import "./Stats.css"

function Stats() {
    return (
        <div>
            <Container className={"bg-white p-5 rounded-2"}>
                <Row>
                    <Col >
                        <div className={"circle"}>100+ часов обучения учеников</div>
                    </Col>
                    <Col >
                        <div className={"circle"}>50+ консультаций дано</div>
                    </Col>
                    <Col >
                        <div className={"circle"}>Более 5 систем разработано</div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Stats;