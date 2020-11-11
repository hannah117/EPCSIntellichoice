import react from 'react'
import './style.css'

const Subject = ({text, color}) => {
    return (
        <>
            <div class="SubjectBox" style={{backgroundColor: color}}>
                <h1 class="text">{text}</h1>
            </div>
        </>
    )
}

export default Subject;
