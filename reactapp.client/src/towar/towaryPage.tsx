import Container from 'react-bootstrap/Container';
import Table from 'react-bootstrap/Table';
import Accordion from 'react-bootstrap/Accordion';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Towar } from './towarPage';
import { useEffect, useState } from 'react';

export const Towary = () => {

    //hook useState zwraca 2 elementy: po pierwsze dane, ktore przechowuje, oraz funckje do aktualizacji tych danych
    //dane nazwalismy listaTowarow i funkcje nazwalismy setListTowarow

    const [listaTowarow, setListaTowarow] = useState<Towar[]>([
        //useState to hook, ktory przetrzymuje dane destrykturyzujac go zwracamy dane i funkcje do ustawiania tych danych

        {
            kod: "1",
            nazwa: "NazwaTowaru1",
            kategoria: "Kategoria1",
            pkwiu: "1",
            cena: 1,
            iloscSztuk: 1
        },
        {
            kod: "2",
            nazwa: "NazwaTowaru2",
            kategoria: "Kategoria2",
            pkwiu: "2",
            cena: 2,
            iloscSztuk: 2
        },
        {
            kod: "3",
            nazwa: "NazwaTowaru3",
            kategoria: "Kategoria3",
            pkwiu: "3",
            cena: 3,
            iloscSztuk: 3
        },
        {
            kod: "4",
            nazwa: "NazwaTowaru4",
            kategoria: "Kategoria4",
            pkwiu: "4",
            cena: 4,
            iloscSztuk: 4
        },
    ]);

    useEffect(() => {//useEffect to hook, ktory wywoluje sie w momencie zmiany wartosci wprowadzonej do tablicy. gdy tablica jest pusta wywoluje sie w momencie ladowania komponentow
        const listaTowarowPobranaZAPI: Towar[] = [
            {
                kod: "1API",
                nazwa: "NazwaTowaru1API",
                kategoria: "Kategoria1API",
                pkwiu: "1API",
                cena: 1,
                iloscSztuk: 1
            },
            {
                kod: "2API",
                nazwa: "NazwaTowaru2API",
                kategoria: "Kategoria2API",
                pkwiu: "2API",
                cena: 2,
                iloscSztuk: 2
            }];

        setListaTowarow(listaTowarowPobranaZAPI);
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
                                        <Form.Label>Wyszukaj po nazwie</Form.Label>
                                        <Form.Control type="text" />
                                    </Form.Group>
                                </Col>
                                <Col>
                                    <Form.Group className="mb-3">
                                        <Form.Label>Cena od</Form.Label>
                                        <Form.Control type="text" />
                                    </Form.Group>
                                </Col>
                                <Col>
                                    <Form.Group className="mb-3">
                                        <Form.Label>Cena do</Form.Label>
                                        <Form.Control type="text" />
                                    </Form.Group>
                                </Col>
                                <Col sm={4}>
                                    <Form.Group className="mb-3">
                                        <Form.Label>Szukaj kat.</Form.Label>
                                        <Form.Select aria-label="Default select example">
                                            <option>Wybierz</option>
                                            <option value="1">Cegly</option>
                                            <option value="2">Wylewki</option>
                                            <option value="3">Farby</option>
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
                        <th>Kod</th>
                        <th>Nazwa</th>
                        <th>Kategoria</th>
                        <th>PKWiU</th>
                        <th>Cena</th>
                        <th>Ilosc sztuk</th>
                    </tr>
                </thead>
                <tbody>
                    {listaTowarow.map((item, index) =>
                        <tr key={index}>
                            <td>{item.kod}</td>
                            <td>{item.nazwa}</td>
                            <td>{item.kategoria}</td>
                            <td>{item.pkwiu}</td>
                            <td>{item.cena}</td>
                            <td>{item.iloscSztuk}</td>
                        </tr>
                    )}
                </tbody>
            </Table>
        </Container>
    )
}