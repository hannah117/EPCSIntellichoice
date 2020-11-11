import React from 'react'
import Banner from '../components/Banner'
import '../components/Banner/style.css'
import Subject from '../components/Subjects'

const Practice = () => {
    return (
        <>
            <Banner text="Practice" color='#4CAF50'></Banner>
            <Subject text="Addition" color='#C83131'></Subject>
            <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '90vh'}}>
                <h1>Practice</h1>
            </div>
        </>
    )
}

export default Practice