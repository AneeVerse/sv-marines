import Navbar from '@/components/Navbar';
import Logo from '@/components/Logo';
import Footer from '@/components/Footer';

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <Logo />
      <main className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold mb-8 text-center">Contact Us</h1>
            
            <div className="bg-white shadow-lg rounded-lg overflow-hidden">
              <div className="p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h2 className="text-2xl font-semibold mb-6">Get In Touch</h2>
                    <p className="text-gray-600 mb-6">
                      Have a question or need more information about our services? Fill out the form and our team will get back to you as soon as possible.
                    </p>
                    
                    <div className="space-y-4 mb-8">
                      <div className="flex items-start">
                        <div className="bg-blue-100 rounded-full p-2 mr-4">
                          <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                          </svg>
                        </div>
                        <div>
                          <h3 className="text-lg font-medium mb-1">Address</h3>
                          <p className="text-gray-600">123 Marine Avenue, Seattle, WA 98101</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start">
                        <div className="bg-blue-100 rounded-full p-2 mr-4">
                          <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                          </svg>
                        </div>
                        <div>
                          <h3 className="text-lg font-medium mb-1">Email</h3>
                          <p className="text-gray-600">info@svmarines.com</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start">
                        <div className="bg-blue-100 rounded-full p-2 mr-4">
                          <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                          </svg>
                        </div>
                        <div>
                          <h3 className="text-lg font-medium mb-1">Phone</h3>
                          <p className="text-gray-600">(123) 456-7890</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <form className="space-y-6">
                      <div>
                        <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Name</label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                          placeholder="Your name"
                          required
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email</label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                          placeholder="Your email"
                          required
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="subject" className="block text-gray-700 font-medium mb-2">Subject</label>
                        <input
                          type="text"
                          id="subject"
                          name="subject"
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                          placeholder="Subject"
                          required
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="message" className="block text-gray-700 font-medium mb-2">Message</label>
                        <textarea
                          id="message"
                          name="message"
                          rows={4}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                          placeholder="Your message"
                          required
                        ></textarea>
                      </div>
                      
                      <button
                        type="submit"
                        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-4 rounded-lg transition duration-300"
                      >
                        Send Message
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-16">
              <h2 className="text-2xl font-semibold mb-6 text-center">Our Location</h2>
              <div className="w-full h-96 bg-gray-300 rounded-lg flex items-center justify-center">
                <p className="text-gray-600">Google Map will be embedded here</p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
} 