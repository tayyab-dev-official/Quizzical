import { useState } from "react";
import { decode } from "he";
import clsx from 'clsx'
import {questions} from '../../questions'
console.log(questions)

export default function App() {
  const [questions, setQuestions] = useState([])
  const [answers, setAnswers] = useState([])
  const [attemptedQuestions, setAttemptedQuestions] = useState([])
  const [quizStage, setQuizStage] = useState(0)

  const correctAnswers = attemptedQuestions.filter(question => answers.includes(question.correct_answer))

  function fetchQuestions() {
    console.log("fetching questions...");
    fetch("https://opentdb.com/api.php?amount=20&category=18&difficulty=medium&type=multiple")
      .then((response) => response.json())
      .then((data) => {
        let questions = Object.entries(data)[1][1];
        const questionBank = questions.map(question => {
          const options = question.incorrect_answers.map((option) =>
            decode(option)
          );
          const randomIndex = Math.floor(Math.random() * options.length);
          options.splice(randomIndex, 0, decode(question.correct_answer));

          return {
            ...question,
            question: decode(question.question),
            incorrect_answers: options,
            correct_answer: decode(question.correct_answer),
          };
        })
        setQuestions(questionBank);
      });
  }

  function startQuiz(){
    fetchQuestions()
    setQuizStage((pre) => {
      const newStage = pre + 1;
      console.log("quiz-stage: ", newStage);
      return newStage;
    });
  }

  function addQuestionAndAnswers(question, option){
    setAttemptedQuestions(pre => [...pre, question])  
    setAnswers(pre => [...pre, option])
  }

  function checkAnswers () {
    console.log(`checking answers...`)
    setQuizStage((pre) => {
      const newStage = pre + 1
      console.log('quiz-stage: ', newStage)
      return newStage
    });
  }

  function playAgain () {
    console.log(`starting again...`)
    setAnswers([])
    setAttemptedQuestions([])
    setQuestions([])
    setQuizStage(() => {
      const newStage = 0
      console.log('quiz-stage: ', newStage)
      return newStage
    })
  }

  const renderQuestions = () => {
    return questions.map((question, index) => {  
      
      return (
        <section key={index} className="question">
          <h2>{`Q-${index + 1}: ` + question.question}</h2>
          <div className="options">
            {question.incorrect_answers.map((option, index) => {   
              
              const isGuessed = attemptedQuestions.includes(question);
              const isCorrect =
                quizStage === 2 &&
                answers.includes(question.correct_answer) &&
                option === question.correct_answer;
              const isWrong =
                quizStage === 2 &&
                !answers.includes(question.correct_answer) &&
                option === question.correct_answer;
              
              const className = clsx({
                blue: isGuessed && answers.includes(option),
                green: isCorrect,
                pink: isWrong,
              });

              return <button
                key={index}
                className={className}
                disabled={isGuessed || isCorrect || isWrong ? true : false}
                style={{cursor: isGuessed ? "not-allowed" : "pointer"}}
                onClick={() => addQuestionAndAnswers(question, option)}
              >
                {option}
              </button>
            })}
          </div>
        </section>
      );
    });
  };

  return (
    <main>
      <section className="blob-top"></section>

      {quizStage === 0 && (
        <section className="main-content">
          <h1>Quizzical</h1>
          <p>Some description if needed</p>
          <button onClick={() => startQuiz()} className="cta">
            Start quiz
          </button>
        </section>
      )}

      {quizStage === 1 && 
        <article className="questions">
          {renderQuestions()}
          <button className="cta" onClick={checkAnswers}>
            Check answers
          </button>
        </article>
      }

      {quizStage === 2 && 
        <article className="questions">
          {renderQuestions()}
          <div className="result-message">
            <p>You scored {correctAnswers.length}/{questions.length} correct answers</p>
            <button className="cta-play" onClick={playAgain}>
              Play again
            </button>
          </div>
        </article>
      }

      <section className="blob-bottom"></section>
    </main>
  );
}
