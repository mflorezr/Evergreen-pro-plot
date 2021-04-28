import logo from './logo.svg';
import './App.css';
import PlotForm from "./Components/PlotForm";
import {BrowserRouter, HashRouter, Link, Route} from 'react-router-dom'
import PlotList from "./Components/PlotList";
import {Nav, Navbar} from "react-bootstrap";

function App() {
  return (
      <BrowserRouter>
          <Navbar bg="primary" variant="dark">
              <Navbar.Brand href="#home">Evergreen Production</Navbar.Brand>
              <Nav className="mr-auto">
                  <Nav.Link as={Link} to="/createPlot">Create Plot
                  </Nav.Link>
                  <Nav.Link as={Link} to="/plotList">Plot List</Nav.Link>
              </Nav>
          </Navbar>
          <Route path='/createPlot' component = {PlotForm}/>
          <Route path='/plotList' component = {PlotList}/>
      </BrowserRouter>

  );
}

export default App;
