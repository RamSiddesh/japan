import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Hiragana from './pages/Hiragana';
import Katakana from './pages/Katakana';
import Kanji from './pages/Kanji';
import HiraganaQuiz from './pages/HiraganaQuiz';
import KatakanaQuiz from './pages/KatakanaQuiz';
import KanjiQuiz from './pages/KanjiQuiz';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#1E90FF', // Doraemon's blue
      light: '#4DA6FF',
      dark: '#0066CC',
    },
    secondary: {
      main: '#FF6B6B', // Nobita's red
      light: '#FF8E8E',
      dark: '#CC5555',
    },
    background: {
      default: '#F0F8FF', // Light blue background
      paper: '#FFFFFF',
    },
  },
  typography: {
    fontFamily: '"Comic Sans MS", "Comic Sans", cursive',
    h1: {
      color: '#1E90FF',
    },
    h2: {
      color: '#1E90FF',
    },
    h3: {
      color: '#1E90FF',
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 20,
          textTransform: 'none',
          fontWeight: 'bold',
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: 15,
        },
      },
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className="doraemon-background">
        <Router>
          <div className="App">
            <Navbar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/hiragana" element={<Hiragana />} />
              <Route path="/katakana" element={<Katakana />} />
              <Route path="/kanji" element={<Kanji />} />
              <Route path="/hiragana-quiz" element={<HiraganaQuiz />} />
              <Route path="/katakana-quiz" element={<KatakanaQuiz />} />
              <Route path="/kanji-quiz" element={<KanjiQuiz />} />
            </Routes>
          </div>
        </Router>
      </div>
    </ThemeProvider>
  );
}

export default App; 