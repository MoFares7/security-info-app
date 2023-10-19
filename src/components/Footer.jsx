import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const Footer = () => {
        const companyName = "Your Company Name";
        const companyEmail = "contact@yourcompany.com";

        return (
                <Box
                        sx={{
                                backgroundColor: '#FFC107',
                                color: 'white',
                                textAlign: 'start',
                                padding: '20px',
                                width: '100%',
                                marginTop: 'auto',
                                bottom: 0,
                        }}
                >
                        <Typography variant="body2">
                                &copy; {new Date().getFullYear()}
                        </Typography>
                        <Typography variant="body2">
                                Damascus Univarsity
                        </Typography>
                        <Typography variant="body2">
                                Fifth Yare
                        </Typography>

                        <Typography variant="body2">
                                Information Security
                        </Typography>
                </Box>
        );
};

export default Footer;
