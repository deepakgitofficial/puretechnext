'use client';

import React, { useState } from 'react';
import { useForm, ValidationError } from '@formspree/react';

const EnqueryForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  // Replace YOUR_FORM_ID with your real Formspree form ID
  const [state, handleSubmit] = useForm('mkokrnyz');

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  if (state.succeeded) {
    return (
      <div className="glass dark:glass-dark rounded-2xl p-6 sm:p-8 w-full max-w-md ml-auto text-center">
        <h3 className="text-2xl font-bold text-white mb-3">
          Thank You!
        </h3>
        <p className="text-green-400">
          Your message has been sent successfully.
        </p>
      </div>
    );
  }

  return (
    <div className="glass dark:glass-dark rounded-2xl p-6 sm:p-8 relative overflow-hidden w-full max-w-md ml-auto">
      {/* Heading */}
      <div className="mb-6 text-center">
        <h3 className="text-2xl font-bold text-white mb-2">
          Get in Touch
        </h3>
        <p className="text-sm text-gray-200">
          Start your digital journey with us.
        </p>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit} className="space-y-4 relative z-10">
        {/* Name */}
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Full Name *"
          required
          className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder:text-gray-200 focus:outline-none"
        />

        {/* Email */}
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email Address *"
          required
          className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder:text-gray-200 focus:outline-none"
        />

        <ValidationError
          prefix="Email"
          field="email"
          errors={state.errors}
          className="text-red-400 text-sm"
        />

        {/* Phone */}
        <input
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          placeholder="Phone Number"
          className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder:text-gray-200 focus:outline-none"
        />

        {/* Message */}
        <textarea
          name="message"
          rows="4"
          value={formData.message}
          onChange={handleChange}
          placeholder="Tell us about your project... *"
          required
          className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder:text-gray-200 focus:outline-none resize-none"
        />

        <ValidationError
          prefix="Message"
          field="message"
          errors={state.errors}
          className="text-red-400 text-sm"
        />

        {/* Submit Button */}
        <button
          type="submit"
          disabled={state.submitting}
          className={`w-full text-white font-bold py-4 px-6 rounded-xl transition-all ${state.submitting
            ? 'bg-gray-500 cursor-not-allowed'
            : 'bg-gradient-to-r from-primary to-accent'
            }`}
        >
          {state.submitting ? 'Sending...' : 'Send Message'}
        </button>
      </form>

      {/* Blur Effects */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-primary/30 rounded-full blur-[50px] -z-10"></div>
      <div className="absolute bottom-0 left-0 w-32 h-32 bg-accent/30 rounded-full blur-[50px] -z-10"></div>
    </div>
  );
};

export default EnqueryForm;