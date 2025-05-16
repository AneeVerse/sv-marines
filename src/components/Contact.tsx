"use client";

import React, { useState, ChangeEvent, FormEvent } from 'react';
import Image from 'next/image';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');
    setPreviewUrl(null);
    
    try {
      // Create an object with the form data
      const messageData = {
        to: "mayur@aneeverse.com", // Recipient email
        subject: "New Contact Form Submission - SV Marines",
        name: formData.name,
        phone: formData.phone,
        email: formData.email,
        message: formData.message,
        date: new Date().toISOString()
      };
      
      // Send the form data to our API endpoint
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(messageData),
      });

      const data = await response.json();
      
      if (!response.ok) {
        throw new Error(data.message || 'Something went wrong!');
      }
      
      // Store preview URL for testing
      if (data.previewUrl) {
        setPreviewUrl(data.previewUrl);
      }
      
      // Reset form after successful submission
      setFormData({
        name: '',
        phone: '',
        email: '',
        message: ''
      });
      
      setSubmitStatus('success');
    } catch (error) {
      console.error("Error submitting form:", error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-12 md:py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="bg-white rounded-xl shadow-lg p-6 md:p-10 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
          <div>
            <h3 className="text-2xl md:text-3xl font-bold mb-3 md:mb-4">Contact Info!</h3>
            <p className="text-gray-700 mb-6 md:mb-8 text-sm md:text-base">
              Have questions about our marine services? Contact our expert team for personalized assistance with your project needs.
            </p>
            
            <div className="space-y-4 md:space-y-6 mb-6 md:mb-8">
              <div className="flex items-start">
                <div className="w-6 h-6 rounded-full mr-3 md:mr-4 mt-1 flex-shrink-0 flex items-center justify-center">
                  <Image 
                    src="/images/contact/Component 1.png"
                    alt="Email"
                    width={16}
                    height={16}
                  />
                </div>
                <span className="text-gray-700 text-sm md:text-base">
                  shashiraaj@svmarines.com
                </span>
              </div>
              
              <div className="flex items-start">
                <div className="w-6 h-6 rounded-full mr-3 md:mr-4 mt-1 flex-shrink-0 flex items-center justify-center">
                  <Image 
                    src="/images/contact/Component 1 (1).png"
                    alt="Location"
                    width={14}
                    height={14}
                  />
                </div>
                <span className="text-gray-700 text-sm md:text-base">
                  Office 61, Citi Tower Plot-55, Sector-15, C.B.D, Belapur, Navi Mumbai - 400 614
                </span>
              </div>
              
              <div className="flex items-start">
                <div className="w-6 h-6 rounded-full mr-3 md:mr-4 mt-1 flex-shrink-0 flex items-center justify-center">
                  <Image 
                    src="/images/contact/Vector (1).png"
                    alt="Phone"
                    width={14}
                    height={14}
                  />
                </div>
                <span className="font-semibold text-lg md:text-xl">
                  +91 9559563139
                </span>
              </div>
              
              <div className="flex items-start">
                <div className="w-6 h-6 rounded-full mr-3 md:mr-4 mt-1 flex-shrink-0 flex items-center justify-center">
                  <Image 
                    src="/images/contact/Vector (1).png"
                    alt="Phone"
                    width={14}
                    height={14}
                  />
                </div>
                <span className="font-semibold text-lg md:text-xl">
                  +91 9651633557
                </span>
              </div>
              
            </div>
          </div>
          
          <div>
            <h3 className="text-xl md:text-2xl font-semibold mb-2 md:mb-3">Send a Message</h3>
            <p className="text-gray-700 mb-4 md:mb-6 text-sm md:text-base">
              We're here to help with all your marine service needs. Fill out the form below and we'll respond promptly.
            </p>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  className="border border-gray-300 rounded-md p-3 w-full"
                  required
                  disabled={isSubmitting}
                />
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Phone number"
                  className="border border-gray-300 rounded-md p-3 w-full"
                  required
                  disabled={isSubmitting}
                />
              </div>
              
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your email"
                className="border border-gray-300 rounded-md p-3 w-full"
                required
                disabled={isSubmitting}
              />
              
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Message"
                rows={4}
                className="border border-gray-300 rounded-md p-3 w-full"
                required
                disabled={isSubmitting}
              ></textarea>
              
              {submitStatus === 'success' && (
                <div className="bg-green-50 text-green-700 p-3 rounded-md text-sm">
                  Your message has been sent successfully. We'll get back to you soon!
                  {previewUrl && (
                    <div className="mt-2">
                      <p className="text-amber-600">Note: Your message was sent to a test service instead of Gmail.</p>
                      <p>For testing: <a href={previewUrl} target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">View test email</a></p>
                      <p className="text-xs mt-1">Please ask the website administrator to set up the Gmail app password.</p>
                    </div>
                  )}
                </div>
              )}
              
              {submitStatus === 'error' && (
                <div className="bg-red-50 text-red-700 p-3 rounded-md text-sm">
                  There was a problem sending your message. Please try again.
                </div>
              )}
              
              <div className="flex justify-start">
                <button 
                  type="submit"
                  className={`relative overflow-hidden border-2 border-black rounded-full py-2 md:py-3 px-5 md:px-6 font-medium flex items-center group cursor-pointer transition-all text-sm md:text-base ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
                  disabled={isSubmitting}
                >
                  <span className="relative z-10 text-black transition-colors duration-300 group-hover:text-black">{isSubmitting ? 'Submitting...' : 'Submit Now'}</span>
                  <span className="absolute inset-0 bg-transparent transform scale-x-0 origin-left transition-transform duration-300 ease-out group-hover:scale-x-100 -z-10 group-hover:bg-[#FF5722]"></span>
                  <span className="bg-black rounded-full w-10 h-10 md:w-12 md:h-12 flex items-center justify-center ml-3 md:ml-4 relative z-10 transition-all duration-300 group-hover:bg-[#FF5722]">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 text-white transform group-hover:translate-x-1 transition-transform duration-300">
                      <path d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact; 