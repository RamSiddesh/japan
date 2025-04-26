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
} from '@mui/material';
import { motion } from 'framer-motion';

// Katakana character data
const katakanaData = {
  basic: [
    { char: 'ア', romaji: 'a', example: 'アメリカ (amerika) - America' },
    { char: 'イ', romaji: 'i', example: 'イギリス (igirisu) - England' },
    { char: 'ウ', romaji: 'u', example: 'ウイスキー (uisukii) - whiskey' },
    { char: 'エ', romaji: 'e', example: 'エレベーター (erebeetaa) - elevator' },
    { char: 'オ', romaji: 'o', example: 'オレンジ (orenji) - orange' },
  ],
  k: [
    { char: 'カ', romaji: 'ka', example: 'カメラ (kamera) - camera' },
    { char: 'キ', romaji: 'ki', example: 'キーボード (kiiboodo) - keyboard' },
    { char: 'ク', romaji: 'ku', example: 'クレジット (kurejitto) - credit' },
    { char: 'ケ', romaji: 'ke', example: 'ケーキ (keeki) - cake' },
    { char: 'コ', romaji: 'ko', example: 'コーヒー (koohii) - coffee' },
  ],
  s: [
    { char: 'サ', romaji: 'sa', example: 'サンドイッチ (sandoicchi) - sandwich' },
    { char: 'シ', romaji: 'shi', example: 'シェーク (sheeku) - shake' },
    { char: 'ス', romaji: 'su', example: 'スーパー (suupaa) - supermarket' },
    { char: 'セ', romaji: 'se', example: 'セーター (seetaa) - sweater' },
    { char: 'ソ', romaji: 'so', example: 'ソフト (sofuto) - software' },
  ],
};

const Katakana = () => {
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
        return katakanaData.basic;
      case 1:
        return katakanaData.k;
      case 2:
        return katakanaData.s;
      default:
        return katakanaData.basic;
    }
  };

  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      <Typography variant="h4" component="h1" gutterBottom>
        Katakana Learning
      </Typography>
      <Button variant="contained" color="secondary" href="/katakana-quiz" sx={{ mb: 2 }}>
        Take Katakana Quiz
      </Button>

      <Paper sx={{ width: '100%', mb: 4 }}>
        <Tabs
          value={selectedTab}
          onChange={handleTabChange}
          indicatorColor="secondary"
          textColor="secondary"
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
                      bgcolor: selectedChar?.char === char.char ? 'secondary.light' : 'background.paper',
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
                <Button variant="contained" color="secondary">
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

export default Katakana; 