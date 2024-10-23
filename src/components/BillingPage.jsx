import React, { useState } from 'react'
import VisaCard from './VisaCard'
import EnquiryForm from './EnquiryForm'
import UmrahFeatures from './UmrahFeatures'

import '../Styles/BillingPage.css'

function BillingPage() {


    return (
        <div>
            <div className="text-center py-5 mb-6">
                <h1 className="text-xl px-2 lg:text-3xl font-bold">Apply Umrah (Saudi Arabia) Visa Online</h1>
                <h1 className="lg:text-2xl px-2 text-lg text-gray-600 tracking-[0.1rem] font-bold">تقديم طلب تأشيرة العمرة (المملكة العربية السعودية) عبر الإنترنت</h1>
            </div>

            <div className='flex flex-wrap items-center justify-evenly py-10 billingHero'>
                {/* Visa Card Section */}
                <VisaCard />

                {/* Enquiry Form Section */}
                <EnquiryForm />

            </div>

            {/* Umrah Features Section */}
            <div className="mt-8">
                <UmrahFeatures />
            </div>
        </div>
    )
}

export default BillingPage;
