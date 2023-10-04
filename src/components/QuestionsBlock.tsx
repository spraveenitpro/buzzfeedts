import React from 'react'
import { Content, Question } from '../../interfaces.ts'
import QuestionBlock from './QuestionBlock.tsx'

const QuestionsBlock = ({
    quizItem,
    chosenAnswerItems,
    setChosenAnswerItems,
    setUnansweredQuestionIds,
    unansweredQuestionIds,
}: {
    quizItem: Content
    chosenAnswerItems: string[]
    setChosenAnswerItems: Function
    setUnansweredQuestionIds: Function
    unansweredQuestionIds: number[] | undefined
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
                            quizItemId={quizItem.id}
                            question={question}
                            chosenAnswerItems={chosenAnswerItems}
                            setChosenAnswerItems={setChosenAnswerItems}
                            setUnansweredQuestionIds={setUnansweredQuestionIds}
                            unansweredQuestionIds={unansweredQuestionIds}
                        />
                    )
                )}
            </div>
        </>
    )
}

export default QuestionsBlock
