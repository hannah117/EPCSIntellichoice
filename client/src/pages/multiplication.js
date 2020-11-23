import React from 'react'
import Banner from '../components/Banner';
import Question from '../components/Question';

const Multiplication = () => {
    return (
        <>
            <Banner text="Multiplication" color='#F39317'></Banner>
            <Question symbol = "*" max1 = '100' max2 = '10'></Question>
            <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '90vh'}}>
                <h1>Multiplication</h1>
            </div>
        </>
    )
}

export default Multiplication