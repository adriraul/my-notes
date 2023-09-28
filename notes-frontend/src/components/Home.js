import React from 'react';
import { Link } from 'react-router-dom';
import './global.css';
import logo from '../assets/logo.jpg';
import leftImage from '../assets/logo1.png'

const Home = () => {
    return (
        <div className="home-container">
            <header>
                <Link to="/">
                    <img src={leftImage} alt="Logo" className="left-image" />
                </Link>

                <div className="header-title">
                    <h1>Gestión de Notas</h1>
                </div>
                <Link to="/">
                    <img src={logo} alt="Logo" className="logo" />
                </Link>
            </header>

            <main>
                <div className="button-container">
                    <Link to="/note-list">
                        <button>Ver Notas</button>
                    </Link>
                    <Link to="/create-note">
                        <button>Crear Nota</button>
                    </Link>
                </div>
            </main>

            <footer>
                <div className="footer-left">Adrián Bravo</div>
                <div className="footer-center"> </div>
                <div className="footer-right">Versión 1.0</div>
            </footer>
        </div>
    );
};

export default Home;