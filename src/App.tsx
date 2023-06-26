import React from 'react';
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
          <div className="flex-grow-1">
            <MainRoutes />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
