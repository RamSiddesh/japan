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
  Chip,
} from '@mui/material';
import { motion } from 'framer-motion';

// Kanji character data
const kanjiData = {
  n5: [
    {
      char: '日',
      meaning: 'day, sun',
      onyomi: 'ニチ, ジツ',
      kunyomi: 'ひ, か',
      examples: ['日本 (nihon) - Japan', '日曜日 (nichiyoubi) - Sunday'],
      strokeCount: 4,
    },
    {
      char: '月',
      meaning: 'month, moon',
      onyomi: 'ゲツ, ガツ',
      kunyomi: 'つき',
      examples: ['月曜日 (getsuyoubi) - Monday', '一月 (ichigatsu) - January'],
      strokeCount: 4,
    },
    {
      char: '火',
      meaning: 'fire',
      onyomi: 'カ',
      kunyomi: 'ひ',
      examples: ['火曜日 (kayoubi) - Tuesday', '火事 (kaji) - fire'],
      strokeCount: 4,
    },
  ],
  n4: [
    {
      char: '電',
      meaning: 'electricity',
      onyomi: 'デン',
      kunyomi: '',
      examples: ['電気 (denki) - electricity', '電車 (densha) - train'],
      strokeCount: 13,
    },
    {
      char: '話',
      meaning: 'talk, story',
      onyomi: 'ワ',
      kunyomi: 'はな.す, はなし',
      examples: ['会話 (kaiwa) - conversation', '電話 (denwa) - telephone'],
      strokeCount: 13,
    },
  ],
};

const Kanji = () => {
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
        return kanjiData.n5;
      case 1:
        return kanjiData.n4;
      default:
        return kanjiData.n5;
    }
  };

  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      <Typography variant="h4" component="h1" gutterBottom>
        Kanji Learning
      </Typography>
      <Button variant="contained" color="tertiary" href="/kanji-quiz" sx={{ mb: 2 }}>
        Take Kanji Quiz
      </Button>

      <Paper sx={{ width: '100%', mb: 4 }}>
        <Tabs
          value={selectedTab}
          onChange={handleTabChange}
          indicatorColor="tertiary"
          textColor="tertiary"
          variant="scrollable"
          scrollButtons="auto"
        >
          <Tab label="JLPT N5" />
          <Tab label="JLPT N4" />
        </Tabs>
      </Paper>

      <Grid container spacing={3}>
        <Grid item xs={12} md={8}>
          <Grid container spacing={2}>
            {getCurrentGroup().map((char, index) => (
              <Grid item xs={6} sm={4} md={3} key={char.char}>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Card
                    sx={{
                      cursor: 'pointer',
                      bgcolor: selectedChar?.char === char.char ? 'tertiary.light' : 'background.paper',
                    }}
                    onClick={() => handleCharClick(char)}
                  >
                    <CardContent sx={{ textAlign: 'center', p: 2 }}>
                      <Typography
                        variant="h3"
                        component="div"
                        sx={{ fontFamily: 'Noto Sans JP, sans-serif' }}
                      >
                        {char.char}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {char.meaning}
                      </Typography>
                      <Chip
                        label={`${char.strokeCount} strokes`}
                        size="small"
                        sx={{ mt: 1 }}
                      />
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
                Meaning: {selectedChar.meaning}
              </Typography>
              <Typography variant="body1" paragraph>
                Onyomi (Chinese reading): {selectedChar.onyomi}
              </Typography>
              <Typography variant="body1" paragraph>
                Kunyomi (Japanese reading): {selectedChar.kunyomi}
              </Typography>
              <Typography variant="h6" gutterBottom>
                Examples:
              </Typography>
              {selectedChar.examples.map((example, index) => (
                <Typography key={index} variant="body1" paragraph>
                  {example}
                </Typography>
              ))}
              <Box sx={{ mt: 2 }}>
                <Button variant="contained" color="tertiary">
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

export default Kanji; 