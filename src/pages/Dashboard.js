import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Container,
  Grid,
  Paper,
  Typography,
  Box,
  Button,
  LinearProgress,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Divider,
  Avatar,
  Card,
  CardContent,
} from '@mui/material';
import {
  Hiragana as HiraganaIcon,
  Katakana as KatakanaIcon,
  Translate as KanjiIcon,
  History as HistoryIcon,
  EmojiEvents as AchievementIcon,
} from '@mui/icons-material';
import { useAuth } from '../context/AuthContext';

const Dashboard = () => {
  const { currentUser, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logout();
      navigate('/login');
    } catch (error) {
      console.error('Failed to log out:', error);
    }
  };

  // Mock data for progress
  const progressData = {
    hiragana: {
      total: 46,
      learned: 32,
      percentage: Math.round((32 / 46) * 100),
      streak: 5,
      lastPracticed: '2 hours ago',
    },
    katakana: {
      total: 46,
      learned: 28,
      percentage: Math.round((28 / 46) * 100),
      streak: 3,
      lastPracticed: '1 day ago',
    },
    kanji: {
      total: 100,
      learned: 45,
      percentage: Math.round((45 / 100) * 100),
      streak: 7,
      lastPracticed: '3 hours ago',
    },
  };

  // Mock data for recent activity
  const recentActivity = [
    { type: 'hiragana', action: 'Learned あ (a)', time: '2 hours ago' },
    { type: 'katakana', action: 'Practiced カ (ka)', time: '1 day ago' },
    { type: 'kanji', action: 'Mastered 日 (day)', time: '3 hours ago' },
    { type: 'quiz', action: 'Completed Hiragana Quiz', time: '1 day ago' },
  ];

  // Mock data for achievements
  const achievements = [
    { title: 'Hiragana Master', description: 'Learned 30+ Hiragana characters', completed: true },
    { title: 'Katakana Explorer', description: 'Learned 20+ Katakana characters', completed: true },
    { title: 'Kanji Beginner', description: 'Learned 10+ Kanji characters', completed: true },
    { title: 'Consistent Learner', description: '7-day learning streak', completed: false },
  ];

  const getIcon = (type) => {
    switch (type) {
      case 'hiragana':
        return <HiraganaIcon />;
      case 'katakana':
        return <KatakanaIcon />;
      case 'kanji':
        return <KanjiIcon />;
      default:
        return <HistoryIcon />;
    }
  };

  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 4 }}>
        <Typography variant="h4" component="h1">
          Welcome, {currentUser?.email}
        </Typography>
        <Button variant="outlined" color="error" onClick={handleLogout}>
          Logout
        </Button>
      </Box>

      <Grid container spacing={3}>
        {/* Progress Cards */}
        <Grid item xs={12} md={4}>
          <Paper sx={{ p: 2, height: '100%' }}>
            <Typography variant="h6" gutterBottom>
              Hiragana Progress
            </Typography>
            <Box sx={{ mb: 2 }}>
              <Typography variant="body2" color="text.secondary">
                {progressData.hiragana.learned} / {progressData.hiragana.total} characters
              </Typography>
              <LinearProgress
                variant="determinate"
                value={progressData.hiragana.percentage}
                sx={{ height: 10, borderRadius: 5, mt: 1 }}
              />
            </Box>
            <Typography variant="body2" color="text.secondary">
              Streak: {progressData.hiragana.streak} days
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Last practiced: {progressData.hiragana.lastPracticed}
            </Typography>
            <Button
              variant="contained"
              color="primary"
              onClick={() => navigate('/hiragana')}
              sx={{ mt: 2 }}
              fullWidth
            >
              Continue Learning
            </Button>
          </Paper>
        </Grid>

        <Grid item xs={12} md={4}>
          <Paper sx={{ p: 2, height: '100%' }}>
            <Typography variant="h6" gutterBottom>
              Katakana Progress
            </Typography>
            <Box sx={{ mb: 2 }}>
              <Typography variant="body2" color="text.secondary">
                {progressData.katakana.learned} / {progressData.katakana.total} characters
              </Typography>
              <LinearProgress
                variant="determinate"
                value={progressData.katakana.percentage}
                sx={{ height: 10, borderRadius: 5, mt: 1 }}
              />
            </Box>
            <Typography variant="body2" color="text.secondary">
              Streak: {progressData.katakana.streak} days
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Last practiced: {progressData.katakana.lastPracticed}
            </Typography>
            <Button
              variant="contained"
              color="secondary"
              onClick={() => navigate('/katakana')}
              sx={{ mt: 2 }}
              fullWidth
            >
              Continue Learning
            </Button>
          </Paper>
        </Grid>

        <Grid item xs={12} md={4}>
          <Paper sx={{ p: 2, height: '100%' }}>
            <Typography variant="h6" gutterBottom>
              Kanji Progress
            </Typography>
            <Box sx={{ mb: 2 }}>
              <Typography variant="body2" color="text.secondary">
                {progressData.kanji.learned} / {progressData.kanji.total} characters
              </Typography>
              <LinearProgress
                variant="determinate"
                value={progressData.kanji.percentage}
                sx={{ height: 10, borderRadius: 5, mt: 1 }}
              />
            </Box>
            <Typography variant="body2" color="text.secondary">
              Streak: {progressData.kanji.streak} days
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Last practiced: {progressData.kanji.lastPracticed}
            </Typography>
            <Button
              variant="contained"
              color="tertiary"
              onClick={() => navigate('/kanji')}
              sx={{ mt: 2 }}
              fullWidth
            >
              Continue Learning
            </Button>
          </Paper>
        </Grid>

        {/* Recent Activity */}
        <Grid item xs={12} md={6}>
          <Paper sx={{ p: 2 }}>
            <Typography variant="h6" gutterBottom>
              Recent Activity
            </Typography>
            <List>
              {recentActivity.map((activity, index) => (
                <React.Fragment key={index}>
                  <ListItem>
                    <ListItemIcon>{getIcon(activity.type)}</ListItemIcon>
                    <ListItemText
                      primary={activity.action}
                      secondary={activity.time}
                    />
                  </ListItem>
                  {index < recentActivity.length - 1 && <Divider />}
                </React.Fragment>
              ))}
            </List>
          </Paper>
        </Grid>

        {/* Achievements */}
        <Grid item xs={12} md={6}>
          <Paper sx={{ p: 2 }}>
            <Typography variant="h6" gutterBottom>
              Achievements
            </Typography>
            <Grid container spacing={2}>
              {achievements.map((achievement, index) => (
                <Grid item xs={12} key={index}>
                  <Card
                    sx={{
                      bgcolor: achievement.completed ? 'success.light' : 'background.paper',
                    }}
                  >
                    <CardContent>
                      <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <AchievementIcon sx={{ mr: 2 }} />
                        <Box>
                          <Typography variant="subtitle1">
                            {achievement.title}
                          </Typography>
                          <Typography variant="body2" color="text.secondary">
                            {achievement.description}
                          </Typography>
                        </Box>
                      </Box>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Dashboard; 