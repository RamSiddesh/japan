import React, { useState } from 'react';
import {
  Container,
  Grid,
  Paper,
  Typography,
  Box,
  Button,
  Tabs,
  Tab,
  Card,
  CardContent,
  CardMedia,
} from '@mui/material';
import { motion } from 'framer-motion';

// Hiragana character data
const hiraganaData = {
  basic: [
    { char: 'あ', romaji: 'a', example: 'あめ (ame) - rain' },
    { char: 'い', romaji: 'i', example: 'いぬ (inu) - dog' },
    { char: 'う', romaji: 'u', example: 'うみ (umi) - sea' },
    { char: 'え', romaji: 'e', example: 'えき (eki) - station' },
    { char: 'お', romaji: 'o', example: 'おかね (okane) - money' },
  ],
  k: [
    { char: 'か', romaji: 'ka', example: 'かばん (kaban) - bag' },
    { char: 'き', romaji: 'ki', example: 'きのう (kinou) - yesterday' },
    { char: 'く', romaji: 'ku', example: 'くつ (kutsu) - shoes' },
    { char: 'け', romaji: 'ke', example: 'けしゴム (keshigomu) - eraser' },
    { char: 'こ', romaji: 'ko', example: 'こども (kodomo) - child' },
  ],
  s: [
    { char: 'さ', romaji: 'sa', example: 'さかな (sakana) - fish' },
    { char: 'し', romaji: 'shi', example: 'しんぶん (shinbun) - newspaper' },
    { char: 'す', romaji: 'su', example: 'すし (sushi) - sushi' },
    { char: 'せ', romaji: 'se', example: 'せんせい (sensei) - teacher' },
    { char: 'そ', romaji: 'so', example: 'そば (soba) - buckwheat noodles' },
  ],
};

const Hiragana = () => {
  const [selectedTab, setSelectedTab] = useState(0);
  const [selectedChar, setSelectedChar] = useState(null);

  const handleTabChange = (event, newValue) => {
    setSelectedTab(newValue);
    setSelectedChar(null);
  };

  const handleCharClick = (char) => {
    setSelectedChar(char);
  };

  const getCurrentGroup = () => {
    switch (selectedTab) {
      case 0:
        return hiraganaData.basic;
      case 1:
        return hiraganaData.k;
      case 2:
        return hiraganaData.s;
      default:
        return hiraganaData.basic;
    }
  };

  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      <Typography variant="h4" component="h1" gutterBottom>
        Hiragana Learning
      </Typography>
      <Button variant="contained" color="primary" href="/hiragana-quiz" sx={{ mb: 2 }}>
        Take Hiragana Quiz
      </Button>

      <Paper sx={{ width: '100%', mb: 4 }}>
        <Tabs
          value={selectedTab}
          onChange={handleTabChange}
          indicatorColor="primary"
          textColor="primary"
          variant="scrollable"
          scrollButtons="auto"
        >
          <Tab label="Basic" />
          <Tab label="K-Series" />
          <Tab label="S-Series" />
        </Tabs>
      </Paper>

      <Grid container spacing={3}>
        <Grid item xs={12} md={8}>
          <Grid container spacing={2}>
            {getCurrentGroup().map((char, index) => (
              <Grid item xs={4} sm={3} md={2} key={char.char}>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Card
                    sx={{
                      cursor: 'pointer',
                      bgcolor: selectedChar?.char === char.char ? 'primary.light' : 'background.paper',
                    }}
                    onClick={() => handleCharClick(char)}
                  >
                    <CardContent sx={{ textAlign: 'center', p: 2 }}>
                      <Typography
                        variant="h4"
                        component="div"
                        sx={{ fontFamily: 'Noto Sans JP, sans-serif' }}
                      >
                        {char.char}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {char.romaji}
                      </Typography>
                    </CardContent>
                  </Card>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </Grid>

        <Grid item xs={12} md={4}>
          {selectedChar ? (
            <Paper sx={{ p: 3 }}>
              <Typography variant="h5" gutterBottom>
                Character Details
              </Typography>
              <Typography
                variant="h2"
                sx={{ fontFamily: 'Noto Sans JP, sans-serif', mb: 2 }}
              >
                {selectedChar.char}
              </Typography>
              <Typography variant="h6" gutterBottom>
                Pronunciation: {selectedChar.romaji}
              </Typography>
              <Typography variant="body1" paragraph>
                Example: {selectedChar.example}
              </Typography>
              <Box sx={{ mt: 2 }}>
                <Button variant="contained" color="primary">
                  Practice Writing
                </Button>
              </Box>
            </Paper>
          ) : (
            <Paper sx={{ p: 3, textAlign: 'center' }}>
              <Typography variant="body1" color="text.secondary">
                Select a character to see details and practice writing
              </Typography>
            </Paper>
          )}
        </Grid>
      </Grid>
    </Container>
  );
};

export default Hiragana; 