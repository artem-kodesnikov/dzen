import React from 'react';
import { Container } from 'react-bootstrap';
import './App.css';
import { Header } from './components/Header/Header';
import { NavSideBar } from './components/NavSideBar/NavSideBar';
import { MainRoutes } from './routes/routes';

function App() {
  return (
    <>
      <div className="d-flex flex-column vh-100">
        <Header />
        <div className="d-flex flex-grow-1">
          <NavSideBar />
          <div className="flex-grow-1 content">
            <Container>
              <MainRoutes />
            </Container>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
