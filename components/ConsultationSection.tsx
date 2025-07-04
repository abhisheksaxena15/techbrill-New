import React from "react";

export default function ConsultationSection() {
  return (
    <section className="flex flex-col md:flex-row min-h-[70vh] w-full md:py-16 bg-gradient-to-r from-[#4c1d95] via-[#120624] to-[#0891b2] dark:from-[#4c1d95] dark:via-[#120624] dark:to-[#0891b2] bg-[#f1f5f9]">
      {/* Left Side: Text */}
      <div className="flex-1 flex flex-col justify-center items-center px-8 py-12 text-white dark:text-white text-gray-900">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Our Experts Are Here to<br />Ignite Your Digital Journey
        </h2>
        <p className="text-lg md:text-xl text-center">
          Book A Free Consultation Call With Our Experts Today
        </p>
      </div>
      
      {/* Right Side: Form */}
      <div className="flex-1 flex items-center justify-center px-4 py-12">
        <form className="bg-white dark:bg-[#181828] rounded-xl shadow-lg p-8 w-full max-w-md space-y-5">
          {/* Name and Email in same row */}
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex-1">
              <label className="block text-gray-900 dark:text-white mb-1">Full Name</label>
              <input
                type="text"
                className="w-full rounded bg-gray-100 dark:bg-[#23233a] text-gray-900 dark:text-white px-3 py-2 outline-none"
                placeholder="Enter your name"
              />
            </div>
            <div className="flex-1">
              <label className="block text-gray-900 dark:text-white mb-1">Email ID*</label>
              <input
                type="email"
                className="w-full rounded bg-gray-100 dark:bg-[#23233a] text-gray-900 dark:text-white px-3 py-2 outline-none"
                placeholder="Enter your email"
                required
              />
            </div>
          </div>
          
          {/* Contact and Service in same row */}
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex-1">
              <label className="block text-gray-900 dark:text-white mb-1">Contact Number*</label>
              <input
                type="tel"
                className="w-full rounded bg-gray-100 dark:bg-[#23233a] text-gray-900 dark:text-white px-3 py-2 outline-none"
                placeholder="Enter your contact"
                required
              />
            </div>
            <div className="flex-1">
              <label className="block text-gray-900 dark:text-white mb-1">Select Service</label>
              <select className="w-full rounded bg-gray-100 dark:bg-[#23233a] text-gray-900 dark:text-white px-3 py-2 outline-none">
                <option value="">Select</option>
                <option value="web">Web Development</option>
                <option value="mobile">Mobile Development</option>
                <option value="ai">AI & ML Solutions</option>
                <option value="digital">Digital Marketing</option>
                <option value="consulting">IT Consultancy</option>
              </select>
            </div>
          </div>
          
          {/* Project description */}
          <div>
            <label className="block text-gray-900 dark:text-white mb-1">
              Describe Your Project/Idea In Brief*
            </label>
            <textarea
              className="w-full rounded bg-gray-100 dark:bg-[#23233a] text-gray-900 dark:text-white px-3 py-2 outline-none"
              rows={3}
              placeholder="This helps us come back better prepared"
              required
            />
          </div>
          
          {/* CAPTCHA verification */}
          <div className="flex items-center space-x-2">
            <span className="text-gray-900 dark:text-white">5 + 7 =</span>
            <input
              type="text"
              className="w-16 rounded bg-gray-100 dark:bg-[#23233a] text-gray-900 dark:text-white px-2 py-1 outline-none"
              placeholder="?"
              required
            />
          </div>
          
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded transition"
          >
            Request Consultation
          </button>
        </form>
      </div>
    </section>
  );
}