import React from "react";
import { CardTitle, CardText, Row, Col, Button, Card,Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink,} from "reactstrap";
import "../App.css";
import { useNavigate } from "react-router-dom";

function Main() {
  const navigate = useNavigate();

  const nextPage = (page) => {
    navigate("/"+page);
  }

  return (
    <div>
      <Navbar color="faded" light>
        <NavbarBrand href="/" className="mr-auto">reactstrap</NavbarBrand>
          <Nav navbar>
            <NavItem>
              <NavLink href="https://wichit2s.gitlab.io/commath/01-Basic-Computing/index.html">Components</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="https://github.com/reactstrap/reactstrap">GitHub</NavLink>
            </NavItem>
          </Nav>
          
      </Navbar>
      <h1 className="text-center" style={{ marginTop: "5%" }}>
        คณิตศาสตร์เชิงการคำนวณ
      </h1>

      <Row style={{ marginTop: "5%" }}>
        <Col sm="3"></Col>
        <Col sm="6">
          <div className="text-center">
            <Row>
              <Col sm="6">
                <Card>
                  <CardTitle>
                  </CardTitle>
                  <CardText>
                    <h5>Basic Computing คอมพิวเตอร์เบื้องต้น</h5>
                  </CardText>
                 
                    <Button onClick={()=>{nextPage("b2s")}} color="success">
                      <h3 style={{ marginTop: "10px" }}>Basic Computing</h3>
                    </Button>
                  
                </Card>
              </Col>

              <Col sm="6">
                <Card>
                  <CardTitle>
                  </CardTitle>
                  <CardText>
                    <h5>Linear Equations สมการเชิงเส้น</h5>
                  </CardText>
                  <Button onClick={()=>{nextPage("linear")}} color="success">
                    <h3 style={{ marginTop: "10px" }}>Linear Equations</h3>
                  </Button>
                </Card>
              </Col>

            </Row>

            <Row className="text-center" style={{ marginTop: "20px" }}>
              <Col sm="6">
                <Card>
                  <CardTitle>
                  </CardTitle>
                  <CardText>
                    <h5>Interpolation การประมาณค่าในช่วง</h5>
                  </CardText>
                  <Button onClick={()=>{nextPage("interpolation")}} color="success">
                    <h3 style={{ marginTop: "10px" }}>Interpolation</h3>
                  </Button>
                </Card>
              </Col>

              <Col sm="6">
                <Card>
                  <CardTitle>
                  </CardTitle>
                  <CardText>
                    <h5>Differentiation อนุพันธ์</h5>
                  </CardText>
                  <Button onClick={()=>{nextPage("differentiation")}} color="success">
                    <h3 style={{ marginTop: "10px" }}>Differentiation</h3>
                  </Button>
                </Card>
              </Col>
            </Row>


            <Row className="text-center" style={{ marginTop: "20px" }}>
              <Col sm="6">
                <Card>
                  <CardTitle>
                  </CardTitle>
                  <CardText>
                    <h5>Integration ปริพันธ์</h5>
                  </CardText>
                  <Button onClick={()=>{nextPage("integration")}} color="success">
                    <h3 style={{ marginTop: "10px" }}>Integration</h3>
                  </Button>
                </Card>
              </Col>

              <Col sm="6">
                <Card>
                  <CardTitle>
                  </CardTitle>
                  <CardText>
                    <h5>Root-finding การหารากของสมการ</h5>
                  </CardText>
                  <Button onClick={()=>{nextPage("root-finding")}} color="success">
                    <h3 style={{ marginTop: "10px" }}>Root-finding</h3>
                  </Button>
                </Card>
              </Col>
            </Row>
          </div>
        </Col>
        <Col sm="3"></Col>
      </Row>
    </div>
  );
}

export default Main;
