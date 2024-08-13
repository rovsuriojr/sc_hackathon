import './App.css';
import ChatBot from 'react-simple-chatbot';
import { Container, Row, Col, Table, Navbar, Nav, Button, Collapse, ListGroup, Form, InputGroup, NavDropdown } from 'react-bootstrap';
import { useState } from 'react';

function App() {
  const [open, setOpen] = useState(true);  // State to control the sidebar visibility

  return (
    <div className="App">
      <Navbar variant="dark" className="navbar-custom mb-4">
        <Container fluid>
          <Navbar.Brand href="#home">ServiceNow Mockup</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#all">All</Nav.Link>
            <NavDropdown title="Favorites" id="navbar-options-dropdown" className="options-dropdown">
              <NavDropdown.Item href="#Home"> = Home</NavDropdown.Item>
              <NavDropdown.Item href="#IM_Create_New"> + Incident - Create New</NavDropdown.Item>
              <NavDropdown.Item href="#PRB_Create_New"> + Problem - Create New</NavDropdown.Item>
              <NavDropdown.Item href="#CHG_Create_New"> + Change - Create New</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#history">History</Nav.Link>
            <Nav.Link href="#workspace">Workspace</Nav.Link>
            {/* Add the new Dropdown here */}

          </Nav>
          <div className="dashboard-heading">
            <h2>Incidents</h2>
          </div>
          <Form className="d-flex">
            <InputGroup>
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <InputGroup.Text id="search-icon">
                <i className="bi bi-search"></i>
              </InputGroup.Text>
            </InputGroup>
          </Form>
        </Container>
      </Navbar>

      <Container fluid>
        <Row>

          <Col md={12}>
            <Table striped bordered hover className="table-custom">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Incident Number</th>
                  <th>Description</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>INC0012345</td>
                  <td>Unable to access email</td>
                  <td>Open</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>INC0012346</td>
                  <td>System outage</td>
                  <td>In Progress</td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>INC0012347</td>
                  <td>Password reset</td>
                  <td>Resolved</td>
                </tr>
              </tbody>
            </Table>
          </Col>

          <Col md={2}>
            <ChatBot
              steps={[
                {
                  id: '1',
                  message: 'What is your name?',
                  trigger: '2',
                },
                {
                  id: '2',
                  user: true,
                  trigger: '3',
                },
                {
                  id: '3',
                  message: 'Hi {previousValue}, nice to meet you!',
                  trigger: '4',
                },
                {
                  id: '4',
                  message: 'What number I am thinking?',
                  trigger: '5',
                },
                {
                  id: '5',
                  options: [
                    { value: 1, label: 'Number 1', trigger: '7' },
                    { value: 2, label: 'Number 2', trigger: '6' },
                    { value: 3, label: 'Number 3', trigger: '6' },
                  ],
                },
                {
                  id: '6',
                  message: 'Wrong answer, try again.',
                  trigger: '5',
                },
                {
                  id: '7',
                  message: 'Awesome! You are a telepath!',
                  end: true,
                },
              ]}
              floating={true}
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
