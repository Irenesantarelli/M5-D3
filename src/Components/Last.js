import { Container, Row, Col, Card, ListGroup } from "react-bootstrap";
import scifi from '../data/Databooks/scifi.json'

const Last = () => {
  return (
    <Container className="w-100">
    <Row xs={1} sm={2} md={3} lg={1} className="w-100">
      <Col className="d-flex flex-wrap justify-content-between g-4">
        {
          scifi.map((book) => {
            return (
              <Card style={{ width: '20rem' }} key={book.asin} className="m-5">
                <Card.Img variant="top" src={book.img} style={{ height: '26rem'}}/>
                <Card.Body>
                  <Card.Title className="text-truncate">{book.title}</Card.Title>
                </Card.Body>
                <ListGroup className="list-group-flush">
                  <ListGroup.Item>{book.category}</ListGroup.Item>
                  <ListGroup.Item>{book.price}</ListGroup.Item>
                </ListGroup>
              </Card>)
          })
        }
      </Col>
    </Row>
    </Container>
  );
}

export default Last