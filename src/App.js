import "./App.css";
import { Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { Task26 } from "./task26";
import { Home } from "./Home";
import { Task27 } from "./task27";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";
import { Container, Navbar, Nav } from "react-bootstrap";

function App() {
  const navigate = useNavigate();

  return (
    <div className="App">
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Button variant="dark" onClick={() => navigate("/task26")}>
                Task26 Price cart
              </Button>
              <Button variant="dark" onClick={() => navigate("/task27")}>
                Task27 ToDo List
              </Button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/task26" element={<Task26 />} />
        <Route path="/task27" element={<Task27 />} />
      </Routes>
    </div>
  );
}

export default App;
