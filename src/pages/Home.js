import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Grid, Typography, Box, Paper } from '@mui/material';
import './Home.css';

const Home = () => {
  return (
    <Container maxWidth="lg">
      <Box sx={{ my: 4, textAlign: 'center' }}>
        <Typography variant="h2" component="h1" gutterBottom className="doraemon-title">
          Welcome to Doraemon's Japanese Learning!
        </Typography>
        
        <Grid container spacing={4} sx={{ mt: 4 }}>
          {/* Doraemon Section */}
          <Grid item xs={12} md={4}>
            <Paper className="doraemon-card character-card">
              <img 
                src="https://i.ibb.co/84rhzjTt/Screenshot-2025-04-26-225124.png" 
                alt="Doraemon" 
                className="character-image"
              />
              <Typography variant="h5" gutterBottom>
                Doraemon
              </Typography>
              <Typography variant="body1">
                Your friendly robot cat guide to learning Japanese!
              </Typography>
            </Paper>
          </Grid>

          {/* Nobita Section */}
          <Grid item xs={12} md={4}>
            <Paper className="doraemon-card character-card">
              <img 
                src="https://i.ibb.co/JWfgjXXX/Screenshot-2025-04-26-225056.png" 
                alt="Nobita" 
                className="character-image"
              />
              <Typography variant="h5" gutterBottom>
                Nobita
              </Typography>
              <Typography variant="body1">
                Learning Japanese together with you!
              </Typography>
            </Paper>
          </Grid>

          {/* Shizuka Section */}
          <Grid item xs={12} md={4}>
            <Paper className="doraemon-card character-card">
              <img 
                src="https://i.ibb.co/TDgXFQ2d/Screenshot-2025-04-26-225220.png" 
                alt="Shizuka" 
                className="character-image"
              />
              <Typography variant="h5" gutterBottom>
                Shizuka
              </Typography>
              <Typography variant="body1">
                Helping you practice your Japanese!
              </Typography>
            </Paper>
          </Grid>
        </Grid>

        <Grid container spacing={4} sx={{ mt: 4 }}>
          {/* Learning Options */}
          <Grid item xs={12} md={4}>
            <Link to="/hiragana" style={{ textDecoration: 'none' }}>
              <Paper className="doraemon-card learning-card">
                <Typography variant="h4" gutterBottom>
                  あ
                </Typography>
                <Typography variant="h5">
                  Hiragana
                </Typography>
                <Typography variant="body1">
                  Learn the basic Japanese alphabet
                </Typography>
              </Paper>
            </Link>
          </Grid>

          <Grid item xs={12} md={4}>
            <Link to="/katakana" style={{ textDecoration: 'none' }}>
              <Paper className="doraemon-card learning-card">
                <Typography variant="h4" gutterBottom>
                  ア
                </Typography>
                <Typography variant="h5">
                  Katakana
                </Typography>
                <Typography variant="body1">
                  Master the script for foreign words
                </Typography>
              </Paper>
            </Link>
          </Grid>

          <Grid item xs={12} md={4}>
            <Link to="/kanji" style={{ textDecoration: 'none' }}>
              <Paper className="doraemon-card learning-card">
                <Typography variant="h4" gutterBottom>
                  漢
                </Typography>
                <Typography variant="h5">
                  Kanji
                </Typography>
                <Typography variant="body1">
                  Explore Chinese characters in Japanese
                </Typography>
              </Paper>
            </Link>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default Home; 