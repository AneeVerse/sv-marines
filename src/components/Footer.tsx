export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">SV Marines</h3>
            <p className="text-gray-400">
              Your trusted partner for marine services and solutions.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="/" className="text-gray-400 hover:text-white">Home</a></li>
              <li><a href="/about" className="text-gray-400 hover:text-white">About</a></li>
              <li><a href="/services" className="text-gray-400 hover:text-white">Services</a></li>
              <li><a href="/projects" className="text-gray-400 hover:text-white">Projects</a></li>
              <li><a href="/contact" className="text-gray-400 hover:text-white">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li><a href="/services" className="text-gray-400 hover:text-white">Marine Engineering</a></li>
              <li><a href="/services" className="text-gray-400 hover:text-white">Ship Repair</a></li>
              <li><a href="/services" className="text-gray-400 hover:text-white">Naval Architecture</a></li>
              <li><a href="/services" className="text-gray-400 hover:text-white">Consulting</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <address className="not-italic text-gray-400">
              <p>123 Marine Avenue</p>
              <p>Seattle, WA 98101</p>
              <p className="mt-3">Email: info@svmarines.com</p>
              <p>Phone: (123) 456-7890</p>
            </address>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} SV Marines. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
} 