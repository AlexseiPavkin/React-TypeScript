import React from 'react'
import { useHistory } from 'react-router-dom'

const AboutPage: React.FC = () => {

    const history = useHistory()

    return (
        <>
            <h1>Страница информации</h1>
            <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid incidunt dignissimos at laboriosam nulla alias asperiores doloribus veritatis ipsum illo! Quidem harum illo impedit quaerat.
            </p>
            <button className="btn" onClick={() => history.push('/')}>Обратно к списку дел</button>
        </>
    )
}

export default AboutPage
