import { Container, Row, Col, Button } from "react-bootstrap";
import { useRouteError, useNavigate } from "react-router-dom";

const Error = () => {
  const error = useRouteError();
  const navigate = useNavigate();
  return (
    <Container>
      <Row>
        <Col xs={{ span: 8, offset: 2 }}>
          <div className="mt-5 text-center error">
            <h1>Ooops!</h1>
            <p>Sorry, an unexpected error has occurred.</p>
            <p>
              <i>{error.statusText || error.message}</i>
            </p>
            <Button
              className="rounded-0"
              varient="link"
              onClick={() => navigate("/", { replace: true })}
            >
              Home
            </Button>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Error;
