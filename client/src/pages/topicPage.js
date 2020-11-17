import React from 'react'
import Banner from '../components/Banner'
import '../components/Banner/style.css'
import Subject from '../components/Subjects'

const topicPage = () => {
    let grade = 5;
    return (
        <>
            <Banner text="Practice" color='#4CAF50'></Banner>


            <div style={{margin:'0 20%'}}>
                <a href='./addition'><Subject text="Addition" symbol="+" color='#C83131'></Subject></a>
                <Subject text="Subtraction" symbol="—" color='#EABC00'></Subject>
             
            </div>
            <div style={{clear: 'both', display: 'flex', justifyContent: 'center', alignItems: 'center', height: '90vh'}}>
                <h1>Practice</h1>
            </div>
        </>
    )
}

export default topicPage