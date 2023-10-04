import React, { useEffect, useState } from 'react'
import Title from './components/Title'
import { QuizData, Content } from '../interfaces.ts'
import QuestionsBlock from './components/QuestionsBlock.tsx'

const App = () => {
    const [quiz, setQuiz] = useState<QuizData | null>()
    const [chosenAnswerItems, setChosenAnswerItems] = useState<string[]>([])
    const [unansweredQuestionIds, setUnansweredQuestionIds] = useState<
        number[] | undefined
    >([])
    console.log(chosenAnswerItems)
    const fetchData = async () => {
        try {
            const response = await fetch('http://localhost:8000/quiz-item')
            console.log(response)
            const json = await response.json()
            setQuiz(json)
        } catch (err) {
            console.error(err)
        }
    }

    useEffect(() => {
        fetchData()
    }, [])

    useEffect(() => {
        const unansweredIds = quiz?.content?.map(({ id }: Content) => id)
        setUnansweredQuestionIds(unansweredIds)
    }, [quiz])
    console.log(quiz)

    return (
        <>
            <div className="app">
                <Title title={quiz?.title} subtitle={quiz?.subtitle} />
                {quiz?.content.map((content: Content, id: Content['id']) => (
                    <QuestionsBlock
                        key={id}
                        quizItem={content}
                        setChosenAnswerItems={setChosenAnswerItems}
                        setUnansweredQuestionIds={setUnansweredQuestionIds}
                    />
                ))}
            </div>
        </>
    )
}

export default App
