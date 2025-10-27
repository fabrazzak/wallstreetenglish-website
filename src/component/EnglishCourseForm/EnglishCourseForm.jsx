"use client";
import { useState } from "react";

export default function EnglishCoursePriceForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    country: "",
    city: "",
    contactMethod: "",
    interest: "",
    studyMode: "",
    consent: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form submitted!");
  };

  return (
    <section className="bg-[#003366] py-24 px-4 md:px-8" id="form">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
      <div className="max-w-2xl">
          <h2 className="text-white text-4xl md:text-[56px] font-bold mb-4">
         Get your personalized English course price
        </h2>

        {/* Subtext */}
        <p className="text-[#BFD4E5] text-base md:text-lg leading-relaxed mb-10 max-w-3xl">
          Take a minute to answer some quick questions to get your course price
          from one of our team. English courses to suit your goals and schedule.
          Learn online, in person or both. Join students from 40 countries
          around the world. No pressure — just helpful advice from our team.
        </p>
      </div>

        {/* FORM */}
        <form onSubmit={handleSubmit} className="text-[#003366] space-y-6">
          {/* Row 1 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="text-white text-sm font-medium block mb-1">
                First Name<span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                
                required
                className="w-full bg-white rounded-sm px-3 py-2 outline-none"
              />
            </div>
            <div>
              <label className="text-white text-sm font-medium block mb-1">
                Last Name<span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                
                required
                className="w-full bg-white rounded-sm px-3 py-2 outline-none"
              />
            </div>
          </div>

          {/* Row 2 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="text-white text-sm font-medium block mb-1">
                Email<span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
               
                required
                className="w-full bg-white rounded-sm px-3 py-2 outline-none"
              />
            </div>
            <div>
              <label className="text-white text-sm font-medium block mb-1">
                Mobile Phone Number<span className="text-red-500">*</span>
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
               
                required
                className="w-full bg-white rounded-sm px-3 py-2 outline-none"
              />
            </div>
          </div>

          {/* Row 3 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="text-white text-sm font-medium block mb-1">
                Country<span className="text-red-500">*</span>
              </label>
              <select
                name="country"
                value={formData.country}
                onChange={handleChange}
                required
                className="w-full bg-white rounded-sm px-3 py-2 outline-none"
              >
                <option value="">Please Select</option>
                <option value="Afghanistan">Afghanistan</option>
                <option value="Albania">Albania</option>
                <option value="Algeria">Algeria</option>
                <option value="Angola">Angola</option>
                <option value="Australia">Australia</option>
                <option value="Austria">Austria</option>
                <option value="Azerbaijan">Azerbaijan</option>
                <option value="Bahamas">Bahamas</option>
                <option value="Bahrain">Bahrain</option>
                <option value="Bangladesh">Bangladesh</option>
                <option value="Barbados">Barbados</option>
                <option value="Belarus">Belarus</option>
                <option value="Belgium">Cananda</option>
                <option value="Chaina">Chaina</option>
                <option value="Japan">Japan</option>
                <option value="United State">United State</option>
                <option value="United Kingdom">United Kingdom</option>
                <option value="Zambia">Zambia</option>
                <option value="Zimbabwe">Zimbabwe</option>
              </select>
            </div>
            <div>
              <label className="text-white text-sm font-medium block mb-1">
                City
              </label>
              <input
                type="text"
                name="city"
                value={formData.city}
                onChange={handleChange}
                
                className="w-full bg-white rounded-sm px-3 py-2 outline-none"
              />
            </div>
          </div>

          {/* Row 4 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="text-white text-sm font-medium block mb-1">
                How do you want to be contacted?
                <span className="text-red-500">*</span>
              </label>
              <select
                name="contactMethod"
                value={formData.contactMethod}
                onChange={handleChange}
                required
                className="w-full bg-white rounded-sm px-3 py-2 outline-none"
              >
                <option value="">Please Select</option>
                <option value="Phone">Phone</option>
                <option value="Email">Email</option>
                <option value="WhatsApp">WhatsApp</option>
              </select>
            </div>

            <div>
              <label className="text-white text-sm font-medium block mb-1">
                How do you want to study?<span className="text-red-500">*</span>
              </label>
              <select
                name="studyMode"
                value={formData.studyMode}
                onChange={handleChange}
                required
                className="w-full bg-white rounded-sm px-3 py-2 outline-none"
              >
                <option value="">Please Select</option>
                <option value="Online">Online</option>
                <option value="In Person">In Person</option>
                <option value="Both">Both</option>
              </select>
            </div>
          </div>

          {/* Row 5 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="text-white text-sm font-medium block mb-1">
                Why are you interested in English?
                <span className="text-red-500">*</span>
              </label>
              <select
                name="interest"
                value={formData.interest}
                onChange={handleChange}
                required
                className="w-full bg-white rounded-sm px-3 py-2 outline-none"
              >
                <option value="">Please Select</option>
                <option value="Career">Career Growth</option>
                <option value="Study">Study Abroad</option>
                <option value="Personal">Personal Development</option>
              </select>
            </div>
          </div>

          {/* Privacy Policy */}
          <div className="pt-2">
            <label className="flex items-start gap-2 text-white text-sm leading-snug">
              <input
                type="checkbox"
                name="consent"
                checked={formData.consent}
                onChange={handleChange}
                className="mt-1 accent-[#003366]"
              />
              <span>
                I have read and accept the <span className="underline">Privacy Policy</span>. 
                I consent to my details being shared with the relevant Wall Street English local 
                partner to contact me with further information.
                <span className="text-red-500">*</span>
              </span>
            </label>
          </div>

          {/* Button */}
          <button
            type="submit"
            className="bg-[#E63946] hover:bg-[#cc2c3a] text-white font-semibold px-8 py-2 mt-4 rounded-sm"
          >
            Book a call
          </button>
        </form>
      </div>
    </section>
  );
}
