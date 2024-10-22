import React, { useContext, useState } from 'react';
import { EnquiryPopContext } from '../Contexts/EnquiryPopContext';

function EnquiryForm() {

    let [isFormOpen, setFormOpen] = useContext(EnquiryPopContext);


    // State to hold form values
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: ''
    });

    // Handle form field changes
    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.id]: e.target.value
        });
    };

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();

        // Prepare the data to be sent
        const dataToSend = {
            name: formData.name,
            email: formData.email,
            phone: formData.phone,
            message: formData.message
        };

       

        // Send the POST request to your API endpoint
        try {
            // const response = await fetch('https://your-api-endpoint.com/enquiry', {
            //     method: 'POST',
            //     headers: {
            //         'Content-Type': 'application/json',
            //     },
            //     body: JSON.stringify(dataToSend)
            // });

            // if (response.ok) {
            //     const jsonResponse = await response.json();
            //     console.log('Form submitted successfully', jsonResponse);
            //     // Optionally reset the form
            //     setFormData({ name: '', email: '', phone: '', message: '' });
            //     alert('Form submitted successfully!');
            // } else {
            //     console.error('Failed to submit the form', response);
            //     alert('Failed to submit the form.');
            // }

            console.log(dataToSend)
        } catch (error) {
            console.error('Error submitting the form', error);
            alert('An error occurred. Please try again later.');
        }
    };

    return (
        <div className={`w-full sm:w-11/12 md:w-9/12 lg:w-[40%] p-4`}>
            <div className="bg-white rounded-lg shadow-lg ">
                {/* Form Header */}
                <div className="bg-gray-900 text-white text-center py-3 rounded-t-lg">
                    <h1 className="text-lg font-bold">ENQUIRY NOW</h1>
                </div>

                {/* Form Body */}
                <div className="bg-white p-6">
                    <form onSubmit={handleSubmit}>
                        {/* Name Input */}
                        <div className="mb-4">
                            <input
                                id="name"
                                type="text"
                                placeholder="Name"
                                value={formData.name}
                                onChange={handleChange}
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-gray-500"
                                required
                            />
                        </div>

                        {/* Email Input */}
                        <div className="mb-4">
                            <input
                                id="email"
                                type="email"
                                placeholder="Email"
                                value={formData.email}
                                onChange={handleChange}
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-gray-500"
                                required
                            />
                        </div>

                        {/* Phone Number Input */}
                        <div className="mb-4">
                            <input
                                id="phone"
                                type="tel"
                                placeholder="Phone Number"
                                value={formData.phone}
                                onChange={handleChange}
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-gray-500"
                                required
                            />
                        </div>

                        {/* Message Input */}
                        <div className="mb-4">
                            <textarea
                                id="message"
                                placeholder="Message"
                                value={formData.message}
                                onChange={handleChange}
                                className="w-full px-3 py-2 resize-none border border-gray-300 rounded-md focus:outline-none focus:border-gray-500"
                                rows="4"
                                required
                            ></textarea>
                        </div>

                        {/* Submit Button */}
                        <div className="flex justify-center">
                            <button
                                type="submit"
                                className="bg-yellow-600 text-white font-bold py-2 px-4 rounded-md hover:bg-yellow-700 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-opacity-50 w-full"
                            >
                                SUBMIT
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default EnquiryForm;
