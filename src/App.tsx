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
	console.log('chosenAnswerItems', chosenAnswerItems)
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
	console.log('unansweredQuestionIds: ', unansweredQuestionIds)

	useEffect(() => {
		if (unansweredQuestionIds) {
			const highestId = Math.min(...unansweredQuestionIds)
			const highestElement = document.getElementById(String(highestId))
			highestElement?.scrollIntoView({ behavior: 'smooth' })
		}
	}, [unansweredQuestionIds])

	return (
		<>
			<div className="app">
				<Title title={quiz?.title} subtitle={quiz?.subtitle} />
				{quiz?.content.map((content: Content, id: Content['id']) => (
					<QuestionsBlock
						key={id}
						quizItem={content}
						chosenAnswerItems={chosenAnswerItems}
						setChosenAnswerItems={setChosenAnswerItems}
						unansweredQuestionIds={unansweredQuestionIds}
						setUnansweredQuestionIds={setUnansweredQuestionIds}
					/>
				))}
			</div>
		</>
	)
}

export default App
