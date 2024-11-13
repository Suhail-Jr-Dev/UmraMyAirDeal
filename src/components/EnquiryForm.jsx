import React, { useContext, useState } from "react";
import { EnquiryPopContext } from "../Contexts/EnquiryPopContext";
import axios from "axios"; // Import axios
import loader from "../assetss/loader.svg";

import "../Styles/EnquiryForm.css";
import { message } from "antd";

function EnquiryForm() {
  let [isFormOpen, setFormOpen] = useContext(EnquiryPopContext);

  const [isLoading, setLoading] = useState(false);

  // State to hold form values
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    origin: "",
    pax: "",
    message: "",
  });

  // Handle form field changes
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);

    // Prepare the data to be sent
    const dataToSend = {
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      origin: formData.origin,
      pax: formData.pax,
      message: formData.message,
    };

    // Send the POST request to the API endpoint using axios
    try {
      const response = await axios.post(
        "https://packages-aq69.onrender.com/api/v1/packages/umrahmail",
        dataToSend,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      setLoading(false);
      setFormOpen(false);

      if (response.status === 200) {
        console.log("Form submitted successfully", response.data);
        // Optionally reset the form
        setFormData({
          name: "",
          email: "",
          phone: "",
          origin: "",
          pax: "",
          message: "",
        });
        message.success("Form submitted successfully!");
      } else {
        message.error("Failed to submit the form.");
      }
    } catch (error) {
      setLoading(false);
      setFormOpen(false);
      message.error("An error occurred. Please try again later.");
    }
  };

  return (
    <div className={`w-full sm:w-11/12 md:w-9/12 relative lg:w-[40%]  `}>
      <div
        className={`${
          isLoading ? "flex" : "hidden"
        } right-0 top-0  bottom-0 left-0 bg-gray-800 bg-opacity-50 items-center justify-center absolute`}
      >
        <img src={loader} alt="" className="w-[7rem]" />
      </div>
      <div className="bg-white rounded-lg shadow-lg">
        {/* Form Header */}
        <div className="bg-gray-900 text-white text-center py-3 lg:rounded-t-lg rounded-t-lg">
          <h1 className="text-lg font-bold">ENQUIRY NOW</h1>
        </div>

        {/* Form Body */}
        <div className=" p-6 ">
          <form onSubmit={handleSubmit}>
            {/* Name Input */}
            <div className="mb-4">
              <input
                id="name"
                type="text"
                placeholder="Name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-3 py-2 border-[2px] border-hoverColor rounded-md focus:outline-none focus:border-gray-500"
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
                className="w-full px-3 py-2 border-[2px] border-hoverColor rounded-md focus:outline-none focus:border-gray-500"
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
                className="w-full px-3 py-2 border-[2px] border-hoverColor rounded-md focus:outline-none focus:border-gray-500"
                required
              />
            </div>

            {/* origin Number Input */}
            <div className="mb-4">
              <input
                id="origin"
                type="text"
                placeholder="Origin"
                value={formData.origin}
                onChange={handleChange}
                className="w-full px-3 py-2 border-[2px] border-hoverColor rounded-md focus:outline-none focus:border-gray-500"
                required
              />
            </div>

            {/* pax Number Input */}
            <div className="mb-4">
              <input
                id="pax"
                type="number"
                placeholder="No. Of Passengers"
                value={formData.pax}
                onChange={handleChange}
                className="w-full px-3 py-2 border-[2px] border-hoverColor rounded-md focus:outline-none focus:border-gray-500"
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
                className="w-full px-3 py-2 resize-none border-[2px] border-hoverColor rounded-md focus:outline-none focus:border-gray-500"
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
