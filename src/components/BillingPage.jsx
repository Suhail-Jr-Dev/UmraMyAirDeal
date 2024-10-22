import React, { useState } from 'react'
import VisaCard from './VisaCard'
import EnquiryForm from './EnquiryForm'
import UmrahFeatures from './UmrahFeatures'

function BillingPage() {


    return (
        <div className="p-4">
            <div className="text-center mb-6">
                <h1 className="text-2xl font-bold">Apply Umrah (Saudi Arabia) Visa Online</h1>
                <h1 className="text-lg text-gray-600">تقديم طلب تأشيرة العمرة (المملكة العربية السعودية) عبر الإنترنت</h1>
            </div>

            <div className='flex flex-wrap items-center justify-evenly py-10'>
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
