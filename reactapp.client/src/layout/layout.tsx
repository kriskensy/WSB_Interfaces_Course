import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Outlet, Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Image from 'react-bootstrap/Image';

export function Layout() {
    return (
        <div className="app">
            <Navbar expand="lg" className="bg-body-tertiary">
                <Container fluid>
                    <Navbar.Brand>
                        <Link to="/" className="d-block">
                            <Image src="image/image1.png" className="logo" />
                        </Link>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="me-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <Nav.Link>
                                <Link to="/" className="d-block">Home</Link>
                            </Nav.Link>
                            {/*<Nav.Link href="#action2">Link</Nav.Link>*/}
                            <NavDropdown title="Magazyn" id="navbarScrollingDropdown">
                                <NavDropdown.Item>
                                    <Link to="/towar" className="d-block">Dodawanie towaru</Link>
                                </NavDropdown.Item>
                                <NavDropdown.Item>
                                    <Link to="/towary" className="d-block">Towary</Link>
                                </NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action5">
                                    Raporty
                                </NavDropdown.Item>
                            </NavDropdown>
                            <NavDropdown title="Kadry" id="navbarScrollingDropdown">
                                <NavDropdown.Item>
                                    <Link to="/pracownik" className="d-block">Dodawanie pracownika</Link>
                                </NavDropdown.Item>
                                <NavDropdown.Item>
                                    <Link to="/pracownicy" className="d-block">Pracownicy</Link>
                                </NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action5">
                                    Raporty
                                </NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                        <Form className="d-flex">
                            <Form.Control
                                type="search"
                                placeholder="Szukaj"
                                className="me-2"
                                aria-label="Szukaj"
                            />
                            <Button variant="outline-success">Szukaj</Button>
                        </Form>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

            <div className="px-3">
                <Container fluid>
                    <Outlet />
                </Container>
            </div>
        </div>
    )
}