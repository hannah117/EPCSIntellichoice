import React from 'react'
import Banner from '../components/Banner';
import Question from '../components/Question';

const Division = () => {
    return (
        <>
            <Banner text="Division" color='#00B971'></Banner>
            <Question symbol = "÷" max1 = '100' max2 = '10'></Question>
            <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '90vh'}}>
                <h1>Division</h1>
            </div>
        </>
    )
}

export default Division