import React from 'react'
import Banner from '../components/Banner';
import Question from '../components/Question';

const Addition = () => {
    const generateNumber = (max) => {
        const num = Math.floor(Math.random() * Math.floor(max));
        return num;
    }

    return (
        <>
            <Banner text="Addition" color='#C83131'></Banner>
            <Question symbol = '+' max = '100' numTest = {generateNumber(100)} numTest2 = {generateNumber(100)}></Question>
            
        </>
    )
}

export default Addition