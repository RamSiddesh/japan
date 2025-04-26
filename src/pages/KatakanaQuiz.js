import React, { useState } from 'react';
import { Button, Card, CardContent, Typography, Box } from '@mui/material';

const questions = [
  { char: 'ア', answer: 'a' },
  { char: 'イ', answer: 'i' },
  { char: 'ウ', answer: 'u' },
  { char: 'エ', answer: 'e' },
  { char: 'オ', answer: 'o' },
];

function shuffle(array) {
  return array.sort(() => Math.random() - 0.5);
}

const KatakanaQuiz = () => {
  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);
  const [done, setDone] = useState(false);
  const [shuffled, setShuffled] = useState(shuffle([...questions]));

  const handleAnswer = (ans) => {
    if (ans === shuffled[current].answer) setScore(score + 1);
    if (current + 1 < shuffled.length) {
      setCurrent(current + 1);
    } else {
      setDone(true);
    }
  };

  if (done) {
    return (
      <Box textAlign="center" mt={4}>
        <Typography variant="h4">Quiz Complete!</Typography>
        <Typography variant="h6">Your score: {score} / {shuffled.length}</Typography>
        <Button variant="contained" onClick={() => { setCurrent(0); setScore(0); setDone(false); setShuffled(shuffle([...questions])); }}>Retry</Button>
      </Box>
    );
  }

  return (
    <Box display="flex" justifyContent="center" alignItems="center" minHeight="60vh">
      <Card>
        <CardContent>
          <Typography variant="h5">What is the romaji for:</Typography>
          <Typography variant="h2" sx={{ fontFamily: 'Noto Sans JP, sans-serif', my: 2 }}>{shuffled[current].char}</Typography>
          <Box display="flex" gap={2} justifyContent="center">
            {["a","i","u","e","o"].map((opt) => (
              <Button key={opt} variant="outlined" onClick={() => handleAnswer(opt)}>{opt}</Button>
            ))}
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
};

export default KatakanaQuiz; 