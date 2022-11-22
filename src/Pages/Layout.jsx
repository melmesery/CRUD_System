import { Col, Container, Row } from "react-bootstrap";
import { Outlet } from "react-router-dom";
import Header from "../Components/Header";

const Layout = () => {
  return (
    <section className="py-2 crud">
      <Container fluid>
        <Row>
          <Col xs={{ span: 12 }} md={{ span: 3 }}>
            <Header />
          </Col>
          <Col xs={{ span: 12 }} md={{ span: 7, offset: 1 }}>
            <Outlet />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Layout;
