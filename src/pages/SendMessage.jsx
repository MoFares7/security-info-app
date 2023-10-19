import React from 'react'
import Footer from '../components/Footer';
import FullWidthTextField from '../components/TextField'
import ContainedButtons from './../components/Button';
import Box from '@mui/material/Box';

const SendMessage = () => {
        return (
                <Box
                        sx={{
                                display: 'flex',
                                padding: '50px',
                                flexDirection: 'column', // Stack items vertically
                                alignItems: 'center', // Center horizontally
                                alignSelf: 'center',
                                justifyItems: 'center'
                        }}
                >
                        <FullWidthTextField />
                        <ContainedButtons />
                </Box>
        )
}

export default SendMessage
