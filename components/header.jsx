import React, {useCallback, useEffect, useState} from "react";
// import "./styles.css";
import { Button, Nav, Navbar, NavDropdown } from "react-bootstrap";
import Offcanvas from 'react-bootstrap/Offcanvas';
import { List } from "react-bootstrap-icons";
import styles from './header.module.css';
// import { ReactComponent as Logo } from "./logo.svg";

// import "bootstrap/dist/css/bootstrap.min.css";

const Header = ({searchTerm, setSearchTerm = null}) => {
    const [show, setShow] = useState(false);
    const [searchVal, setSearchVal] = useState('');

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    useEffect(() => {
        if (!searchTerm) {
            setSearchVal('');
        }
    }, [searchTerm]);

    const handleSearchType = useCallback((e) => {
        const txt = e.target.value;
        setSearchVal(txt);
    });

    const handleSearchClick = useCallback(() => {
        if (setSearchTerm) {
            setSearchTerm(searchVal);
        }
    });


    return (
        <>
            <div className={styles.Header} bg="dark" variant="dark">
                <div className="topRow">
                    <Button className="btn-primary btn-hamburger" onClick={handleShow} title="Menu">
                        <List size={30} />
                    </Button>
                </div>
                <div className="bottomRow">
                        <div class="input-group mb-1">
                            <input
                                type="text"
                                class="form-control"
                                placeholder="Search..."
                                aria-label="search text"
                                aria-describedby="searchText"
                                value={searchVal}
                                onChange={handleSearchType}
                            />
                                <div className="input-group-append">
                                    <button className="btn btn-outline-secondary" type="button" onClick={handleSearchClick}>&#x1F50D;</button>
                                </div>
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