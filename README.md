# 🧠 Quizzical

A modern, interactive quiz application built with React and Vite. Test your knowledge with trivia questions from various categories!

## ✨ Features

- 🎯 **Interactive Quiz Interface** - Clean, user-friendly design
- 🌐 **Trivia API Integration** - Fetches questions from Open Trivia Database
- 🎨 **Modern UI** - Beautiful blob animations and responsive design
- 🔄 **Real-time Feedback** - Instant answer validation
- 📱 **Responsive Design** - Works seamlessly on all devices
- ⚡ **Fast Performance** - Built with Vite for lightning-fast development

## 🚀 Live Demo

[View Live Demo](https://keshf-quizzical.netlify.app/)

## ️ Built With

- **Frontend Framework:** React 19.1.0
- **Build Tool:** Vite
- **Styling:** CSS3 with Custom Properties
- **HTTP Client:** Fetch API
- **HTML Entity Decoder:** he
- **Utility Library:** clsx

## 🏁 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/tayyab-dev-official/Quizzical.git
   cd Quizzical
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start the development server**

   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:{port-number}`

### Building for Production

```bash
npm run build
npm run preview
```

## 📖 Usage

1. **Start a Quiz** - Click the "Start Quiz" button to begin
2. **Answer Questions** - Select your answers for each multiple-choice question
3. **Check Results** - Click "Check Answers" to see your score
4. **Play Again** - Start a new quiz with fresh questions

## 🎯 API Integration

This project uses the [Open Trivia Database API](https://opentdb.com/) to fetch quiz questions:

- **Base URL:** `https://opentdb.com/api.php`
- **Parameters:**
  - `amount`: Number of questions (default: 5)
  - `category`: Question category (default: 18 - Computer Science)
  - `difficulty`: Question difficulty (default: easy)
  - `type`: Question type (default: multiple choice)

## 🏗️ Project Structure

```
quizzical/
├── public/
│   └── vite.svg
├── src/
│   ├── assets/
│   │   ├── blob-bottom.png
│   │   └── blob-top.png
│   ├── components/
│   │   └── App.jsx
│   ├── index.css
│   └── main.jsx
├── .gitignore
├── eslint.config.js
├── index.html
├── package.json
├── README.md
└── vite.config.js
```

## 🎨 Styling

The application features:

- Custom CSS with modern design principles
- Responsive grid layout for quiz options
- Smooth animations and transitions
- Accessible color schemes
- Mobile-first responsive design

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [Open Trivia Database](https://opentdb.com/) for providing the quiz questions
- React and Vite teams for the amazing development tools

## 📞 Contact

- GitHub: [@tayyab-dev-official](https://github.com/tayyab-dev-official)
- LinkedIn: [Mohammad Tayyab](https://www.linkedin.com/in/mohammad-tayyab-91ba5236b/)
- Email: tayyab.professional.official@gmail.com

---

⭐ If you found this project helpful, please give it a star!
Thank You!
