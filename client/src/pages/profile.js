import React from 'react'
import Banner from '../components/Banner';

const Profile = () => {
    return (
        <>
            <Banner text="Profile" color='#00A1DE'></Banner>
            <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '90vh'}}>
                <h1>Profile</h1>
            </div>
        </>
    )
}

export default Profile