import React from 'react'
import Banner from '../components/Banner';
import Question from '../components/Question';

const Subtraction = () => {
    return (
        <>
            <Banner text="Subtraction" color='#EABC00'></Banner>
            <Question symbol = "-" max1 = '100' max2 = '100'></Question>
            <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '90vh'}}>
                <h1>Subtraction</h1>
            </div>
        </>
    )
}

export default Subtraction