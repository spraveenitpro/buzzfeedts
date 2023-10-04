import React from 'react'
import { Content, Question } from '../../interfaces.ts'
import QuestionBlock from './QuestionBlock.tsx'

const QuestionsBlock = ({
    quizItem,
    setChosenAnswerItems,
    setUnansweredQuestionIds,
}: {
    quizItem: Content
    setChosenAnswerItems: Function
    setUnansweredQuestionIds: Function
}) => {
    return (
        <>
            <h2 className="title-block" id={String(quizItem.id)}>
                {quizItem.text}
            </h2>
            <div className="questions-container	">
                {quizItem?.questions.map(
                    (question: Question, _index: number) => (
                        <QuestionBlock
                            key={_index}
                            question={question}
                            setChosenAnswerItems={setChosenAnswerItems}
                            setUnansweredQuestionIds={setUnansweredQuestionIds}
                        />
                    )
                )}
            </div>
        </>
    )
}

export default QuestionsBlock
