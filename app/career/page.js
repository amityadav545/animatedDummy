import React from 'react'
import CareerSection from '../components/careerSection'
import HireSection from '../components/HireSection'

const Index = () => {
    return (
        <div className='w-full h-full'>
            <div className='careerSection'>
                <CareerSection />
            </div>
            <div className='SecondcareerSection p-3'>
                <HireSection />
            </div>
        </div>
    )
}

export default Index