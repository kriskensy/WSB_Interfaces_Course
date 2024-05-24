import Container from 'react-bootstrap/Container';
import Table from 'react-bootstrap/Table';
import Accordion from 'react-bootstrap/Accordion';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Pracownik } from './pracownikPage';
import { useEffect, useState } from 'react';
import { PracownikItem } from './pracownikItem';

export const Pracownicy = () => {

    //hook

    const [listaPracownikow, setListaPracownikow] = useState<Pracownik[]>([

    ]);

    useEffect(() => {
        const listaPracownikowPobranaZAPI: Pracownik[] = [
            {
                id: 1,
                imie: "Jan",
                nazwisko: "Kowalski",
                stanowisko: "kierownik",
                wynagrodzenie: 300
            },
            {
                id: 2,
                imie: "Stach",
                nazwisko: "Nowak",
                stanowisko: "dyrektor",
                wynagrodzenie: 999
            }];

        setListaPracownikow(listaPracownikowPobranaZAPI);
    }, [])

    return (
        <Container fluid>
            <Accordion defaultActiveKey="0">
                <Accordion.Item eventKey="0">
                    <Accordion.Header>Filtrowanie listy</Accordion.Header>
                    <Accordion.Body>
                        <Form>
                            <Row>
                                <Col sm={4}>
                                    <Form.Group className="mb-3">
                                        <Form.Label>Wyszukaj po nazwisku</Form.Label>
                                        <Form.Control type="text" />
                                    </Form.Group>
                                </Col>
                                <Col>
                                    <Form.Group className="mb-3">
                                        <Form.Label>Wynagrodzenie od</Form.Label>
                                        <Form.Control type="text" />
                                    </Form.Group>
                                </Col>
                                <Col>
                                    <Form.Group className="mb-3">
                                        <Form.Label>Wynagrodzenie do</Form.Label>
                                        <Form.Control type="text" />
                                    </Form.Group>
                                </Col>
                                <Col sm={4}>
                                    <Form.Group className="mb-3">
                                        <Form.Label>Szukaj stanowiska</Form.Label>
                                        <Form.Select aria-label="Default select example">
                                            <option>Wybierz</option>
                                            <option value="1">Kierownik</option>
                                            <option value="2">Dyrektor</option>
                                            <option value="3">Szef</option>
                                        </Form.Select>
                                    </Form.Group>
                                </Col>
                            </Row>
                        </Form>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Imie</th>
                        <th>Nazwisko</th>
                        <th>Stanowisko</th>
                        <th>Wynagrodzenie</th>
                    </tr>
                </thead>
                <tbody>
                    {listaPracownikow?.map((item, index) => <PracownikItem key={index} pracownik={item} />)}
                </tbody>
            </Table>
        </Container>
    )
}