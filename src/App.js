import React from 'react';
import './App.css';
import { Blog, Header } from './Components/containers';
import {Navbar} from './Components';
import Posibilties from './Components/containers/possibilties/possibilties';
import Footer from './Components/containers/footer/Footer';
import Price from './Components/Pricing/price';
const App = () => {
    return (
        <div className='App'>
            <div className='gradient__bg'>
                <Navbar />
                <Header />
            </div>
            <Posibilties />          
            <Price/>
            <Blog />
            <Footer />
        </div>
    )
}

export default App