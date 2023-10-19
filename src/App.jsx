import React from 'react';
import Box from '@mui/material/Box';
import { Routes, Route } from 'react-router-dom';
import ResponsiveAppBar from './components/Navbar';
import Footer from './components/Footer';
import SendMessage from './pages/SendMessage';
import HomePage from './pages/HomePage';

function App() {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
            <ResponsiveAppBar />

            <Box style={{ flex: 1 }}>
                <Routes>
                    <Route path='/' element={<HomePage />} />
                    <Route path='/sendPage' element={<SendMessage />} />
                </Routes>
            </Box>

            <Footer />
        </div>
    );
}

export default App;
