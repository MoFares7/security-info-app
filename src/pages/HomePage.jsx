import React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import global from '../assets/global.webp';
import send from '../assets/send.webp';
import recive from '../assets/recive.webp';
import Footer from '../components/Footer';
import FullWidthTextField from '../components/TextField';
import ContainedButtons from '../components/Button';
import { Link } from 'react-router-dom';

const HomePage = () => {
        return (
                <Box
                        sx={{
                                display: 'flex',
                                padding: '100px',
                                flexDirection: 'column', // Stack items vertically
                                alignItems: 'center', // Center horizontally
                        }}
                >
                        <Card sx={{ display: 'flex', width: 1000, height: 250, backgroundColor: '#FFC107' }}>
                                <CardMedia
                                        component="img"
                                        height="250"
                                        image={global}
                                        alt="green iguana"
                                />
                                <CardContent sx={{
                                        alignSelf: 'center'
                                }}>
                                        <Typography
                                                color='#fff'
                                                gutterBottom
                                                variant="h5"
                                                component="div"
                                                sx={{ textAlign: 'center' }} // Center the text horizontally
                                        >
                                                Global Info
                                        </Typography>
                                        <Typography variant="body2" color='#fff' sx={{ textAlign: 'center' }}>
                                                Welcome to our application for sending messages, where your messages will be secure and enjoy the advantage of encrypted storage in databases.
                                        </Typography>
                                </CardContent>
                        </Card>

                        <Box
                                sx={{
                                        display: 'flex',
                                        padding: '20px',
                                        order: 2, // Display below the first card
                                }}
                        >
                                <Box sx={{ padding: '10px' }}>
                                        <Link to="/sendPage">
                                                <Card sx={{ width: 350, height: 280, backgroundColor: '#0097A7', order: 1 }}>
                                                        <CardActionArea sx={{ textAlign: 'center' }}>
                                                                <img src={send} width='200px' alt="Send Message" />
                                                                <CardContent>
                                                                        <Typography
                                                                                gutterBottom
                                                                                variant="h5"
                                                                                component="div"
                                                                                color='#fff'
                                                                                sx={{ textAlign: 'center' }} // Center the text horizontally
                                                                        >
                                                                                Send Message
                                                                        </Typography>
                                                                </CardContent>
                                                        </CardActionArea>
                                                </Card>
                                        </Link>
                                </Box>
                                <Box
                                        sx={{
                                                padding: '10px',
                                        }}
                                >
                                        <Card sx={{ width: 350, height: 280, backgroundColor: '#FF4081', order: 1 }}>
                                                <CardActionArea sx={{ textAlign: 'center' }} >
                                                        <img src={recive} width='200px' />

                                                        <CardContent>
                                                                <Typography
                                                                        gutterBottom
                                                                        variant="h5"
                                                                        component="div"
                                                                        color='#fff'
                                                                        sx={{ textAlign: 'center' }} // Center the text horizontally
                                                                >
                                                                        Receive Message
                                                                </Typography>
                                                        </CardContent>
                                                </CardActionArea>
                                        </Card>
                                </Box>

                        </Box>

                </Box>
        );
};

export default HomePage;
