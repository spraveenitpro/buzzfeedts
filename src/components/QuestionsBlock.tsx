import React from 'react'
import { Content, Question } from '../../interfaces.ts'
import QuestionBlock from './QuestionBlock.tsx'


const QuestionsBlock = ({ quizItem }: { quizItem: Content }) => {
    return (
        <>
            <h2 id={String(quizItem.id)}>{quizItem.text}</h2>
            <div className="questions-container">
                {quizItem?.questions.map(
                    (question: Question, _index: number) => (
                        <QuestionBlock key={_index} question={question} />
                    )
                )}
            </div>
        </>
    )
}

export default QuestionsBlock
