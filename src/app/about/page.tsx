import Navbar from '@/components/Navbar';
import Logo from '@/components/Logo';
import Footer from '@/components/Footer';

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <Logo />
      <main className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold mb-8 text-center">About SV Marines</h1>
            
            <div className="bg-gray-100 p-8 rounded-lg mb-12">
              <h2 className="text-2xl font-semibold mb-4">Our Story</h2>
              <p className="text-gray-700 mb-4">
                SV Marines was founded in 2005 with a vision to provide exceptional marine engineering services to clients worldwide. What began as a small team of passionate engineers has grown into a leading marine services company with a global presence.
              </p>
              <p className="text-gray-700">
                Over the years, we have built a reputation for excellence, reliability, and innovation in the marine industry. Our commitment to quality and customer satisfaction has been the driving force behind our success.
              </p>
            </div>
            
            <div className="mb-12">
              <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
              <p className="text-gray-700">
                Our mission is to deliver innovative and sustainable marine engineering solutions that meet the highest standards of safety, quality, and environmental responsibility. We strive to exceed our clients' expectations while contributing positively to the marine industry and the communities we serve.
              </p>
            </div>
            
            <div className="mb-12">
              <h2 className="text-2xl font-semibold mb-4">Our Values</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold mb-2">Excellence</h3>
                  <p className="text-gray-600">
                    We are committed to delivering the highest quality in everything we do, from engineering solutions to customer service.
                  </p>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold mb-2">Innovation</h3>
                  <p className="text-gray-600">
                    We embrace new technologies and creative approaches to solve complex marine engineering challenges.
                  </p>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold mb-2">Integrity</h3>
                  <p className="text-gray-600">
                    We conduct our business with honesty, transparency, and ethical standards that earn the trust of our clients and partners.
                  </p>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold mb-2">Sustainability</h3>
                  <p className="text-gray-600">
                    We are dedicated to environmentally responsible practices and sustainable solutions for the marine industry.
                  </p>
                </div>
              </div>
            </div>
            
            <div>
              <h2 className="text-2xl font-semibold mb-6">Our Team</h2>
              <p className="text-gray-700 mb-8">
                Our team consists of experienced professionals with diverse backgrounds in marine engineering, naval architecture, and related fields. Their expertise, passion, and dedication are what make SV Marines a leader in the industry.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-32 h-32 mx-auto bg-gray-300 rounded-full mb-4"></div>
                  <h3 className="text-xl font-semibold">John Smith</h3>
                  <p className="text-gray-600">Founder & CEO</p>
                </div>
                
                <div className="text-center">
                  <div className="w-32 h-32 mx-auto bg-gray-300 rounded-full mb-4"></div>
                  <h3 className="text-xl font-semibold">Sarah Johnson</h3>
                  <p className="text-gray-600">Chief Engineer</p>
                </div>
                
                <div className="text-center">
                  <div className="w-32 h-32 mx-auto bg-gray-300 rounded-full mb-4"></div>
                  <h3 className="text-xl font-semibold">Michael Brown</h3>
                  <p className="text-gray-600">Operations Director</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
} 