import React, {useState} from "react";
// import "./styles.css";
import { Button, Nav, Navbar, NavDropdown } from "react-bootstrap";
import Offcanvas from 'react-bootstrap/Offcanvas';
import { List } from "react-bootstrap-icons";
import styles from './header.module.css';
// import { ReactComponent as Logo } from "./logo.svg";

// import "bootstrap/dist/css/bootstrap.min.css";

const Header = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    return (
        <>
            <div className={styles.Header} bg="dark" variant="dark">
                <div className="topRow">
                    <Button className="btn-primary btn-hamburger" onClick={handleShow} title="Menu">
                        <List size={30} />
                    </Button>
                </div>
                <div className="bottomRow">
                    <div>
                        row 2
                    </div>
                </div>
                <Offcanvas show={show} onHide={handleClose}>
                    <Offcanvas.Header closeButton>
                        <Offcanvas.Title>Heft Heeders</Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body>
                        <Nav className="mr-auto">
                            <Nav.Link href="#features">Features</Nav.Link>
                            <Nav.Link href="#pricing">Pricing</Nav.Link>

                        </Nav>
                    </Offcanvas.Body>
                </Offcanvas>
            </div>
        </>
    );
}

export default Header