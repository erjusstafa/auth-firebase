import React, { ReactElement, useState } from "react";
import "./style.scss";

interface IQuiz {
  questionText: string;
  answerOptions: IAnswer[];
}

interface IAnswer {
  answerText: string;
  isCorrect: boolean;
}

function Quiz(): ReactElement {
  const questions = [
    {
      questionText: "What is the capital of Albania?",
      answerOptions: [
        { answerText: "Durres", isCorrect: false },
        { answerText: "Pristina", isCorrect: false },
        { answerText: "Tirana", isCorrect: true },
        { answerText: "Dublin", isCorrect: false },
      ],
    },
    {
      questionText: "Who is CEO of Tesla?",
      answerOptions: [
        { answerText: "Jeff Bezos", isCorrect: false },
        { answerText: "Elon Musk", isCorrect: true },
        { answerText: "Bill Gates", isCorrect: false },
        { answerText: "Tony Stark", isCorrect: false },
      ],
    },
    {
      questionText: "The iPhone was created by which company?",
      answerOptions: [
        { answerText: "Apple", isCorrect: true },
        { answerText: "Intel", isCorrect: false },
        { answerText: "Amazon", isCorrect: false },
        { answerText: "Microsoft", isCorrect: false },
      ],
    },
    {
      questionText: "How many Harry Potter books are there?",
      answerOptions: [
        { answerText: "1", isCorrect: false },
        { answerText: "4", isCorrect: false },
        { answerText: "6", isCorrect: false },
        { answerText: "7", isCorrect: true },
      ],
    },
  ];

  const [currentQuestion, setCurrentQuestion] = useState<number>(0);
  const [showScore, setShowScore] = useState<boolean>(false);
  const [score, setScore] = useState<number>(0);

  const handleAnswerOptionClick = (isCorrect: boolean) => {
    if (isCorrect) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };
  return (
    <div className="app">
      <div className="wrapp-quiz">
        {showScore ? (
          <div className="score-section">
            You scored {score} out of {questions.length}

            {
              score === 4 && 
              
              <img src="https://media0.giphy.com/media/5hgYDDh5oqbmE4OKJ3/giphy.gif?cid=ecf05e47cksy6c1xqaycd9vyrltgl20ca2ea14euewu1gm3g&amp;rid=giphy.gif&amp;ct=g" alt="Good Job GIF by MOODMAN" className="gif"  style={{width: "100%", height: "100%", position: "absolute", opacity: 0.5}} />
            }
          </div>
        ) : (
          <>
            <div className="question-section">
              <div className="question-count">
                <span>Question {currentQuestion + 1}</span>/{questions.length}
              </div>
              <div className="question-text">
                {questions[currentQuestion].questionText}
              </div>
            </div>
            <div className="answer-section">
              {questions[currentQuestion].answerOptions.map((answerOption:any , index : number) => (
               <div key={index}>
                  <button
                  className="score-section"
                  onClick={() =>
                    handleAnswerOptionClick(answerOption.isCorrect)
                  }
                >
                  {answerOption.answerText}
                </button>
               </div>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default Quiz;
