import React, { useState, useEffect } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Row,
  Col,
  InputGroup,
  Input,
  InputGroupAddon,
  Button,
  Alert,
} from "reactstrap";
const QRCode = require("qrcode.react");

const App = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const [input, setInput] = useState("");
  const [qrQuery, setQrQuery] = useState("https://instagram.com/unknowndev_");
  const [error, setError] = useState(false);

  const getQr = () => {
    return <QRCode value={qrQuery} renderAs="svg" />;
  };

  useEffect(() => {
    getQr();
  }, [qrQuery]);

  const handleClick = () => {
    setError(false);
    const myInput = input.trim();
    if (myInput === "") {
      setError(true);
    } else {
      setQrQuery(input);
      setInput("");
    }
  };

  return (
    <div>
      <div>
        <Navbar light expand="md" className="nav-bar">
          <NavbarBrand href="/" style={{ color: "#007bff", fontSize: "25px" }}>
            Express with QR
          </NavbarBrand>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="/components/" style={{ color: "#007bff" }}>
                  Components
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  href="https://github.com/reactstrap/reactstrap"
                  style={{ color: "#007bff" }}
                >
                  GitHub
                </NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
      <Row>
        <Col md="6" xs="12" sm="12">
          <img
            src={require("./assets/images.svg")}
            alt=""
            height="100%"
            width="100%"
          />
        </Col>
        <Col md="6" xs="12" className="text-center">
          <div
            style={{ marginTop: "8em", padding: "30px", textAlign: "center" }}
          >
            <h3 style={{ color: "#007bff" }}>
              Enter Your Message And Get QR Code
            </h3>
            {error && <Alert color="danger">Please Enter Something</Alert>}
            <div className="qr-title">
              Qr Code for <p>" {qrQuery} "</p> is
            </div>
            {getQr()}
          </div>
          <div className="input">
            <InputGroup style={{ width: "80%" }}>
              <Input
                onChange={(e) => setInput(e.target.value)}
                placeholder="Enter your message here"
                value={input}
              />
              <InputGroupAddon addonType="append">
                <Button color="primary" onClick={handleClick}>
                  Get QR Code
                </Button>
              </InputGroupAddon>
            </InputGroup>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default App;

// <input type="text" onChange={(e) => setInput(e.target.value)} />
// <button onClick={handleClick}>Get qr </button>
// {getQr()}
