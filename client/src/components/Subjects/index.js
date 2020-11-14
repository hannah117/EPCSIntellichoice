import react from 'react'
import './style.css'
import AddRoundedIcon from '@material-ui/icons/AddRounded';

const Subject = ({text, symbol, color}) => {
    return (
        <>
            <div class="SubjectBox" style={{backgroundColor: color}}>
                <h1 class="symbol">{symbol}</h1>
                <h1 class="text">{text}</h1>
            </div>
        </>
    )
}

export default Subject;
