import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import SearchBar from "./Searchbar";
import { useNavigate } from "react-router-dom";
import "./Navbar.css";

function CustomNavbar({ isLoggedIn, onLogout }) {
  const navigate = useNavigate();

  function goToLoginPage() {
    navigate("/login");
  }
  return (
    <>
      <Navbar bg="light" data-bs-theme="light">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <SearchBar />
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
            <div>
              {isLoggedIn ? (
                <button onClick={onLogout}>Log Out</button>
              ) : (
                <button onClick={goToLoginPage}>Log In</button>
              )}
            </div>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default CustomNavbar;
