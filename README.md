# Japanese Alphabets Learning Website

A comprehensive educational platform for learning Japanese writing systems (Hiragana, Katakana, and Kanji).

## Features

- Interactive alphabet charts for Hiragana and Katakana
- Basic Kanji dictionary with common characters
- Pronunciation guides with audio examples
- Practice exercises and quizzes
- Progress tracking for registered users
- Mobile-responsive design
- Dark mode support
- Stroke order animations
- Spaced repetition system

## Tech Stack

- React.js
- Material-UI
- Firebase (Authentication & Database)
- Framer Motion (Animations)
- React Router

## Getting Started

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file in the root directory and add your Firebase configuration:
   ```
   REACT_APP_FIREBASE_API_KEY=your_api_key
   REACT_APP_FIREBASE_AUTH_DOMAIN=your_auth_domain
   REACT_APP_FIREBASE_PROJECT_ID=your_project_id
   REACT_APP_FIREBASE_STORAGE_BUCKET=your_storage_bucket
   REACT_APP_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
   REACT_APP_FIREBASE_APP_ID=your_app_id
   ```
4. Start the development server:
   ```bash
   npm start
   ```

## Project Structure

```
src/
├── components/         # Reusable UI components
├── pages/             # Page components
├── assets/            # Images, audio files, etc.
├── services/          # API and Firebase services
├── utils/             # Helper functions
├── context/           # React context providers
└── styles/            # Global styles and themes
```

## Contributing

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Create a new Pull Request

## License

This project is licensed under the MIT License. 