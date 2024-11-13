import React, { useContext, useState } from "react";
import { EnquiryPopContext } from "../Contexts/EnquiryPopContext";

import loader from "../assetss/loader.svg";
import { message } from "antd";
import axios from "axios";

function EnquiryFormPopUp() {
  let [isFormOpen, setFormOpen] = useContext(EnquiryPopContext);

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

  // Loading Effect

  const [isLoading, setLoading] = useState(false);

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

    // Send the POST request to your API endpoint
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

      console.log(dataToSend);
      message.success("Enquiry Send !!!");  
    } catch (error) {
      setLoading(false);
      setFormData(false);
      console.error("Error submitting the form", error);

      message.error("Enquiry Not Send !!!");
    }
  };

  return (
    <div
      className={`w-full relative sm:w-11/12 lg:w-[30%] p-4`}
      onClick={(e) => e.stopPropagation()}
    >
      <div
        className={`${
          isLoading ? "flex" : "hidden"
        } right-0 top-0 bg-gray-800 bg-opacity-50 bottom-0 left-0  items-center justify-center absolute`}
      >
        <img src={loader} alt="" className="w-[7rem]" />
      </div>

      <div className="bg-white rounded-lg overflow-hidden shadow-lg ">
        <div className="bg-gray-900 text-white text-center py-3 rounded-t-lg">
          <h1 className="text-lg font-bold">ENQUIRY NOW</h1>
        </div>

        <div className="bg-white p-6">
          <form onSubmit={handleSubmit}>
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

            <div className="mb-4">
              <input
                id="origin"
                type="text"
                placeholder="Origin"
                value={formData.origin}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-gray-500"
                required
              />
            </div>

            <div className="mb-4">
              <input
                id="pax"
                type="number"
                placeholder="No. Of Passengers"
                value={formData.pax}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-gray-500"
                required
              />
            </div>

            <div className="mb-4">
              <textarea
                id="message"
                placeholder="Message"
                value={formData.message}
                onChange={handleChange}
                className="w-full px-3 py-2 resize-none border border-gray-300 rounded-md focus:outline-none focus:border-gray-500"
                rows="1"
                required
              ></textarea>
            </div>

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

export default EnquiryFormPopUp;

{
  /* <div className={`w-full sm:w-11/12 lg:w-[30%] p-4`} onClick={(e) => e.stopPropagation()} >
            <div className="bg-white rounded-lg overflow-hidden shadow-lg ">
                <div className="bg-gray-900 text-white text-center py-3 rounded-t-lg">
                    <h1 className="text-lg font-bold">ENQUIRY NOW</h1>
                </div>

                <div className="bg-white p-6">
                    <form onSubmit={handleSubmit}>
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

                        <div className="mb-4">
                            <textarea
                                id="message"
                                placeholder="Message"
                                value={formData.message}
                                onChange={handleChange}
                                className="w-full px-3 py-2 resize-none border border-gray-300 rounded-md focus:outline-none focus:border-gray-500"
                                rows="1"
                                required
                            ></textarea>
                        </div>

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
        </div> */
}
