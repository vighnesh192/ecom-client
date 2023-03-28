import React from 'react'
import { useNavigate } from 'react-router-dom'
import Card from '../components/Card/Card'

function SellerProfile() {
    const navigate = useNavigate();

    return (
        <div className='flex justify-center mt-20'>
            <div>
                <h1 className='font-semibold text-2xl mb-6'>Your Account</h1>
                <section className='grid grid-cols-3 gap-32'>
                    <Card linkTo='/profile' flow='vertical' title='Profile' body='Edit all your account details'/>
                    <Card linkTo='/sellerProducts' flow='vertical' title='Products' body='Add/Remove/Update Products'/>
                </section>
            </div>
        </div>
    )
}

export default SellerProfile