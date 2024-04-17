import './App.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function App() {

    return (
        <Container fluid>
            <Row>
                <Col>
                    <div className="mb-3">
                        To jest tekst tekstowy a dzisiaj jest sobota.
                        To jest tekst tekstowy a dzisiaj jest sobota.
                        To jest tekst tekstowy a dzisiaj jest sobota.
                    </div>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="image/image2.png" />
                        <Card.Body>
                            <Card.Title>Aktualnosc 1</Card.Title>
                            <Card.Text>
                                Tresc aktualnosc 1
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="image/image2.png" />
                        <Card.Body>
                            <Card.Title>Aktualnosc 2</Card.Title>
                            <Card.Text>
                                Tresc aktualnosc 2
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="image/image2.png" />
                        <Card.Body>
                            <Card.Title>Aktualnosc 3</Card.Title>
                            <Card.Text>
                                Tresc aktualnosc 3
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="image/image2.png" />
                        <Card.Body>
                            <Card.Title>Aktualnosc 4</Card.Title>
                            <Card.Text>
                                Tresc aktualnosc 4
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}
export default App;