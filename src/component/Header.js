import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Profile from "./Profile";
import Story from "./Story";
import Event from "./component/Event";
import Post from "./Post";
function Header() {
  return (
    <Container className="">
      <Row className="">
        <Col className="">
          <Profile />
        </Col>
        <Col xs={6}>
          <Story></Story>
          <Event></Event>
          <Post></Post>
        </Col>

        <Col>3 of 3</Col>
      </Row>
    </Container>
  );
}

export default Header;
