import { useState } from "react";

const Quiz = ({questions}) => {

    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [answerIdx, setAnswerIdx] = useState(null);
    const [answer, setAnswer] = useState(null);
    const { question, choices, correctAnswer } = questions[currentQuestion];
    const onAnswerClick = (answer, index) => {
        setAnswerIdx(index);
        if (answer === correctAnswer) {
            setAnswer(true);
        } else {
            setAnswer(false);
        }
    }

    return(
        <div className="quiz-container">
            <>
            
            <h2>{question}</h2>
            <table>
                <tr>
                    {/* <td> */}
                        {
                    choices.map((answer, index) => (
                        <td 
                        onClick={() => onAnswerClick(answer, index)}
                        key = {answer}
                        className={answerIdx === index ? 'selected-answer' : null}
                        >
                            {answer}

                        </td>
                    ))
                }
                {/* </td> */}
                </tr>
            </table>
            <footer>
            <span className="active-question-no">{currentQuestion+1}</span>
            <span className="total-question">/{questions.length}</span>
            </footer>
            {/* <ul>
                {
                    choices.map((answer, index) => (
                        <li 
                        onClick={() => onAnswerClick(answer, index)}
                        key = {answer}
                        className={answerIdx === index ? 'selected-answer' : null}
                        >
                            {answer}

                        </li>
                    ))
                }
            </ul> */}
            </>
        </div>
    );
}

export default Quiz;