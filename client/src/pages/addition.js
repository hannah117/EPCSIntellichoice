import React from 'react'
import Banner from '../components/Banner';
import Question from '../components/Question';

const Addition = () => {
    return (
        <>
            <Banner text="Addition" color='#C83131'></Banner>
            <Question symbol = '+' max = '100'></Question>
            <Question symbol = '-' max = '100'></Question>
            <Question symbol = '*' max = '100'></Question>
            <Question symbol = '/' max = '100'></Question>
            <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '90vh'}}>
                <h1>Addition</h1>
            </div>
        </>
    )
}

export default Addition