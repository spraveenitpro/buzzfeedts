import React from 'react'
import { QuizData } from '../../interfaces.ts'

const Title = ({
    title,
    subtitle,
}: {
    title: QuizData['title'] | undefined
    subtitle: QuizData['subtitle'] | undefined
}) => {
    return (
        <>
            <h1>{title}</h1>
            <p>{subtitle}</p>
        </>
    )
}

export default Title
