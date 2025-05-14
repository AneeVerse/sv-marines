export default function Hero() {
  return (
    <section className="relative bg-gray-900 text-white py-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Marine Engineering Excellence
            </h1>
            <p className="text-xl mb-8 text-gray-300">
              Providing top-quality marine services with a commitment to safety,
              reliability, and innovation.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="/services"
                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition duration-300"
              >
                Our Services
              </a>
              <a
                href="/contact"
                className="bg-transparent hover:bg-white hover:text-gray-900 text-white font-semibold py-3 px-6 border border-white rounded-lg transition duration-300"
              >
                Contact Us
              </a>
            </div>
          </div>
          <div className="md:w-1/2">
            <div className="relative bg-gray-800 rounded-lg p-4">
              <div className="aspect-w-16 aspect-h-9 bg-gray-700 rounded overflow-hidden">
                {/* Placeholder for image - in production, use next/image */}
                <div className="w-full h-full flex items-center justify-center text-gray-400">
                  Marine Engineering Image
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white dark:from-gray-900 to-transparent"></div>
    </section>
  );
} 